import axios from 'axios';
import { useEffect, useState } from 'react';
import BarEditor from '../src/components/bar-editor/bar-editor';
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
    setState(data);
    axios.post('/api/blob', data).then(result => result.data).then(setServerState);
  };
  return [state, setState, pushState, serverState] as const;
};

const Controller: React.FC = () => {
  const [state, setState, pushState, serverState] = usePushState(initialLow3State);
  const setActive = (active: Low3Bar) => {
    pushState({
      ...state,
      active,
    });
  };
  return (
    <div className={styles.container}>
      <BarEditor initialValue={defaultBar} onSubmit={setActive} />
      <input
        type="checkbox"
        checked={state.visible}
        onChange={({ target }) =>
          setState({ ...state, visible: target.checked })
        }
      />
    </div>
  );
};

export default Controller;
