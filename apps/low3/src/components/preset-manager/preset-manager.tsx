import React from 'react';
import { Low3Bar } from '../../models/api-state';
import Preset from '../preset/preset';
import './preset-manager.module.css';

export type PresetManagerProps = {
  presets: Low3Bar[];
  setPresets: (presets: Low3Bar[]) => void;
  activate: (preset: Low3Bar) => void;
  load: (preset: Low3Bar) => void;
};

export const PresetManager: React.FC<PresetManagerProps> = (props) => {
  return (
    <div>
      {props.presets.map((preset, index) => (
        <Preset bar={preset} key={index} />
      ))}
      <button onClick={() => props.setPresets([...props.presets, {}])}>+</button>
    </div>
  );
};

export default PresetManager;
