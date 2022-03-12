import { FC } from 'react';
import { Low3Bar } from '../../models/api-state';
import './preset.module.css';

/* eslint-disable-next-line */
export interface PresetProps {
  bar: Low3Bar;
}

export const Preset: FC<PresetProps> = (props) => {
  return (
    <div>
      <h1>Welcome to Preset!</h1>
    </div>
  );
};

export default Preset;
