/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import equals from 'fast-deep-equal';
import React, { useEffect, useState } from 'react';
import Third from '../src/components/third';
import { initialLow3State, Low3Bar } from '../src/models/api-state';
import styles from './index.module.css';

const defaultBar: Low3Bar = {
  header: '',
  title: '',
  subtitle: '',
  footer: '',
};

export const Index: React.FC = () => {
  const [state, setState] = useState(initialLow3State);
  // const [localState, setLocalState] = useState(initialLow3State);
  const [stateA, setStateA] = useState(initialLow3State);
  const [stateB, setStateB] = useState(initialLow3State);
  const [selector, setSelector] = useState<'A' | 'B'>('A');
  useEffect(() => {
    const interval = setInterval(
      () =>
        axios
          .get('/api/blob')
          .then((result) => result.data)
          .then((x) => {
            if (!equals(JSON.stringify(x), JSON.stringify(state))) {
              setState(x);
            }
            if (
              !equals(JSON.stringify(x.active), JSON.stringify(state.active))
            ) {
              selector === 'A' ? setStateB(x) : setStateA(x);
              setSelector(selector === 'A' ? 'B' : 'A');
              console.log('fubarsnafu');
            }
          })
          .catch(),
      1000
    );
    return () => clearInterval(interval);
  }, [selector, state]);
  useEffect(() => {
    console.log({ state });
  }, [state]);
  useEffect(() => {
    console.log({ selector });
  }, [selector]);
  return (
    <div className={styles.page}>
      <div
        className={`${styles.lowerThirdArea} ${styles.animated} ${
          state.active && state.visible ? styles.visible : styles.invisible
        }`}
      >
        <Third
          bar={stateA.active ?? defaultBar}
          style={{
            opacity: selector === 'A' ? '100%' : '0%',
            transition: `opacity 0.3s ease-in-out ${
              selector === 'B' ? '0.3s' : '0s'
            }`,
            position: 'absolute',
          }}
        />
        <Third
          bar={stateB.active ?? defaultBar}
          style={{
            opacity: selector === 'B' ? '100%' : '0%',
            transition: `opacity 0.3s ease-in-out ${
              selector === 'A' ? '0.3s' : '0s'
            }`,
            position: 'absolute',
          }}
        />
      </div>
    </div>
  );
};

export default Index;
