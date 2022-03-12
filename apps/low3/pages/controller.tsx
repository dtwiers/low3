import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import BarEditor from '../src/components/bar-editor/bar-editor';
import { PresetManager } from '../src/components/preset-manager';
import { initialLow3State, Low3Bar, Low3State } from '../src/models/api-state';
import styles from './controller.module.css';

const defaultBar: Low3Bar = {
  header: '',
  footer: '',
  title: '',
  subtitle: '',
};

const usePushState = (initialState: Low3State) => {
  const [serverState, setServerState] = useState(initialState);
  useEffect(() => {
    axios
      .get('/api/blob')
      .then((result) => result.data)
      .then(setServerState);
  }, []);
  const [state, setState] = useState(initialState);
  const pushState = (data: Low3State) => {
    // setState(data);
    setServerState(data);
    axios.post('/api/blob', data);
  };
  return [state, setState, pushState, serverState] as const;
};

const pushActive$ = new Subject<Partial<Low3Bar>>();

const Controller: React.FC = () => {
  const [state, setState, pushState, serverState] =
    usePushState(initialLow3State);
  const setActive = (active: Low3Bar) => {
    pushState({
      ...serverState,
      active,
    });
  };

  const setActiveLocal = (active: Low3Bar) => {
    console.log(active);
    setState({
      ...state,
      active,
    });
  };

  const toggleVisible = () => {
    pushState({ ...serverState, visible: !serverState.visible });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lower 3rd Controller</title>
      </Head>
      <BarEditor
        initialValue={defaultBar}
        onSubmit={setActive}
        onChange={setActiveLocal}
        pushActive$={pushActive$}
      />
      <div className={styles.rightHalf}>
        <button
          className={`${styles.toggleButton} ${
            serverState.visible ? styles.hideButton : styles.showButton
          }`}
          type="button"
          onClick={toggleVisible}
        >
          {serverState.visible ? 'hide' : 'show'}
        </button>
        <PresetManager
          presets={serverState.presets}
          activate={setActive}
          setPresets={(presets) => pushState({ ...serverState, presets })}
          load={pushActive$.next}
        />
      </div>
    </div>
  );
};

export default Controller;
