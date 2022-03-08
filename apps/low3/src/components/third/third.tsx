import React from 'react';
import { Low3Bar } from '../../models/api-state';
import Logo from '../logo/logo';
import styles from './third.module.css';

export type ThirdProps = {
  bar: Low3Bar;
  isTransitioning?: boolean;
  style?: React.CSSProperties;
};
const Third: React.FC<ThirdProps> = ({ bar, isTransitioning, style }) => {
  return (
    <div
      style={style}
      className={`${styles.container} ${
        isTransitioning
          ? `${styles.animate} ${styles.opacity0}`
          : styles.opacity100
      }`}
    >
      <div
        className={`${styles.header} ${styles.animate} ${
          bar.header ? styles.headerWithText : styles.headerNoText
        }`}
      >
        {bar.header}
      </div>
      <div className={styles.main}>
        {bar.asset && (
          <div className={styles.logoContainer}>
            <Logo logoType={bar.asset} />
          </div>
        )}
        <div className={styles.mainText}>
          {bar.title && <div className={styles.title}>{bar.title}</div>}
          {bar.subtitle && (
            <div className={styles.subtitle}>{bar.subtitle}</div>
          )}
        </div>
      </div>
      <div className={styles.footer}>{bar.footer}</div>
      <div className={styles.rightBorder} />
    </div>
  );
};
export default Third;
