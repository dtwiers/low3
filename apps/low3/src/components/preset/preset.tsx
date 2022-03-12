import classNames from 'classnames';
import { FC, useState } from 'react';
import { Low3BarWithName } from '../../models/api-state';
import styles from './preset.module.css';

/* eslint-disable-next-line */
export interface PresetProps {
  bar: Low3BarWithName;
  onLoad: () => void;
  onDelete: () => void;
  onGoLive: () => void;
  onSaveFromEditor: () => void;
  onChangeName: (newName: string) => void;
}

export const Preset: FC<PresetProps> = (props) => {
  const [isEditing, setIsEditing] = useState(props.bar.name === '');
  const [barName, setBarName] = useState(props.bar.name);
  return (
    <div className={styles.wrapper}>
      <div className={styles.nameRow}>
        <span className={styles.label}>Name: </span>
        {isEditing ? (
          <div>
            <form
              onSubmit={() => {
                props.onChangeName(barName);
                setIsEditing(false);
              }}
            >
              <input
                type="text"
                value={barName}
                onChange={(ev) => setBarName(ev.target.value)}
              />
              <button type="submit">save</button>
            </form>
          </div>
        ) : (
          <>
            <span className={styles.name}>{props.bar.name}</span>
            <button
              type="button"
              className={styles.editNameButton}
              onClick={() => {
                setBarName(props.bar.name);
                setIsEditing(true);
              }}
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      <div className={styles.actionContainer}>
        <button
          type="button"
          className={classNames(styles.actionButton, styles.loadButton)}
          onClick={props.onLoad}
        >
          Load to Editor
        </button>
        <button
          type="button"
          className={classNames(styles.actionButton, styles.saveButton)}
          onDoubleClick={() => {
            console.log(props.bar)
            props.onSaveFromEditor()
          }}
        >
          Save from Editor (dbl)
        </button>
        <button
          type="button"
          className={classNames(styles.actionButton, styles.goLiveButton)}
          onClick={props.onGoLive}
        >
          Go Live
        </button>
        <button
          type="button"
          className={classNames(styles.actionButton, styles.deleteButton)}
          onDoubleClick={props.onDelete}
        >
          Delete (dbl click)
        </button>
      </div>
    </div>
  );
};

export default Preset;
