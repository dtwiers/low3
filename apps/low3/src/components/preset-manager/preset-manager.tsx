import React from 'react';
import { Subject } from 'rxjs';
import { Low3Bar, Low3State, presetAdaptor } from '../../models/api-state';
import Preset from '../preset/preset';
import styles from './preset-manager.module.css';

export type PresetManagerProps = {
  state: Low3State;
  // presets: EntityState<Low3BarWithName>;
  setState: (state: Low3State) => void;
  // setPresets: (presets: EntityState<Low3BarWithName>) => void;
  activate: (preset: Low3Bar) => void;
  load: Subject<Partial<Low3Bar>>;
  searchTerm: string;
};

export const PresetManager: React.FC<PresetManagerProps> = (props) => {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.addButton}
        onClick={() =>
          props.setState(
            presetAdaptor.lensedReducers.addOne({
              name: '',
              ...props.state.inEditor,
            })(props.state)
          )
        }
      >
        +
      </button>
      {presetAdaptor.selectors
        .selectAll(props.state)
        .filter(
          (preset) =>
            !props.searchTerm ||
            preset.name.toLowerCase().includes(props.searchTerm.toLowerCase())
        )
        .map((preset) => (
          <Preset
            bar={preset}
            currentActive={props.state.inEditor}
            key={preset.name}
            onDelete={() =>
              props.setState(
                presetAdaptor.lensedReducers.removeOne(preset.name)(props.state)
              )
            }
            onGoLive={() => props.activate(preset)}
            onLoad={() => props.load.next(preset)}
            onSaveFromEditor={() => {
              // console.log('save', );
              props.setState(
                presetAdaptor.lensedReducers.setOne({
                  ...props.state.inEditor,
                  name: preset.name,
                })(props.state)
              );
            }}
            onChangeName={(newName) => {
              if (newName !== preset.name) {
                props.setState(
                  presetAdaptor.lensedReducers.removeOne(preset.name)(
                    presetAdaptor.lensedReducers.setOne({
                      ...preset,
                      name: newName,
                    })(props.state)
                  )
                );
              }
            }}
          />
        ))}
    </div>
  );
};

export default PresetManager;
