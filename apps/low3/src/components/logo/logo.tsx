/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './logo.module.css';

export type LogoType =
  | 'conover'
  | 'dcm'
  | 'engelking'
  | 'fivestar'
  | 'fourt'
  | 'kaufman'
  | 'kourke'
  | 'nfg'
  | 'platner'
  | 'rar'
  | 'sieren'
  | 'stensland'
  | 'stewarts'
  | 'toenjes';

export type LogoProps = {
  logoType: LogoType;
};

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <img src={`/${props.logoType}.jpeg`} className={styles.logo} alt="logo" />
  );
};

export default Logo;