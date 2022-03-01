import React from 'react';
import { LogoProps } from '../logo';
import Logo from '../logo/logo';
import styles from './third2.module.css';

export type ThirdProps = {
  header?: string;
  subtitle?: string;
  title?: string;
  footer?: string;
  asset?: LogoProps['logoType'];
};
const Third: React.FC<ThirdProps> = (props) => {
  return (
    <div className={`${styles.container} ${styles.animate}`}>
      <div
        className={`${styles.header} ${styles.animate} ${
          props.header ? styles.headerWithText : styles.headerNoText
        }`}
      >
        {props.header}
      </div>
      <div className={styles.main}>
        {props.asset && (
          <div className={styles.logoContainer}>
            <Logo logoType={props.asset} />
          </div>
        )}
        <div className={styles.mainText}>
          {props.title && <div className={styles.title}>{props.title}</div>}
          {props.subtitle && (
            <div className={styles.subtitle}>{props.subtitle}</div>
          )}
        </div>
      </div>
      <div className={styles.footer}>{props.footer}</div>
      <div className={styles.rightBorder}></div>
    </div>
  );
};
export default Third;
