/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Third from '../src/components/third';
import styles from './index.module.css';

export const Index: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.lowerThirdArea}>
        <Third
          footer="To bid, call (888) 555-1431, or (877) 555-9999, or (777) 777-7777"
          header="Lot #45"
          title="RAR Genetics"
          subtitle="Lot #45534 | 10-9 Duroc Barrow"
          asset="rar"
        />
      </div>
    </div>
  );
};

export default Index;
