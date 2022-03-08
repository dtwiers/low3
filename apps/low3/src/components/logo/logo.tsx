/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { LogoType } from '../../models/api-state';
import styles from './logo.module.css';

export type LogoProps = {
  logoType: LogoType;
};

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <img src={`/${props.logoType}.jpeg`} className={styles.logo} alt="logo" />
  );
};

export default Logo;
