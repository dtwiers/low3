import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import BarEditor from '../src/components/bar-editor/bar-editor';
import { PresetManager } from '../src/components/preset-manager';
import { initialLow3State, Low3Bar, Low3State } from '../src/models/api-state';
import styles from './controller.module.css';

const usePushState = (initialState: Low3State) => {
  const [serverState, setServerState] = useState(initialState);
  useEffect(() => {
    axios
      .get('/api/blob')
      .then((result) => result.data)
      .then((result) => {
        setServerState(result ?? initialState);
      });
  }, []);
  const pushState = (data: Low3State) => {
    setServerState(data);
    axios.post('/api/blob', data);
  };
  return [pushState, serverState] as const;
};

const pushActive$ = new Subject<Partial<Low3Bar>>();

const Controller: React.FC = () => {
  const [pushState, state] = usePushState(initialLow3State);
  const [searchTerm, setSearchTerm] = useState('');
  const setActive = (active: Low3Bar) => {
    pushState({
      ...state,
      active,
    });
  };

  const updateEditor = (inEditor: Low3Bar) => {
    console.log(inEditor);
    pushState({
      ...state,
      inEditor: inEditor,
    });
  };

  const toggleVisible = () => {
    pushState({ ...state, visible: !state.visible });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lower 3rd Controller</title>
      </Head>
      <BarEditor
        initialValue={state.inEditor}
        onSubmit={setActive}
        onChange={updateEditor}
        pushActive$={pushActive$}
      />
      <div className={styles.rightHalf}>
        <button
          className={`${styles.toggleButton} ${
            state.visible ? styles.hideButton : styles.showButton
          }`}
          type="button"
          onClick={toggleVisible}
        >
          {state.visible ? 'hide' : 'show'}
        </button>
        <input
          type="text"
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
          className={styles.searchBar}
        />
        <PresetManager
          state={state}
          activate={setActive}
          setState={pushState}
          load={pushActive$}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default Controller;
