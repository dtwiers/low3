import React from 'react';
import { useForm } from 'react-hook-form';
import { logos, Low3Bar } from '../../models/api-state';
import styles from './bar-editor.module.css';

export type BarEditorProps = {
  initialValue: Low3Bar;
  onSubmit: (value: Low3Bar) => void;
};

const BarEditor: React.FC<BarEditorProps> = (props) => {
  const { register, handleSubmit } = useForm<Low3Bar>({
    defaultValues: props.initialValue,
  });
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(props.onSubmit)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="header" className={styles.textLabel}>
            Header
          </label>
          <input
            type="text"
            id="header"
            {...register('header')}
            className={styles.textInput}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="title" className={styles.textLabel}>
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title')}
            className={styles.textInput}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="subtitle" className={styles.textLabel}>
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            {...register('subtitle')}
            className={styles.textInput}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="footer" className={styles.textLabel}>
            Footer
          </label>
          <input
            type="text"
            id="footer"
            {...register('footer')}
            className={styles.textInput}
          />
        </div>

        <div className={styles.assetContainer}>
          <label htmlFor="asset">Select Image</label>
          <div>
            <input
              id="undefined-radio"
              type="radio"
              {...register('asset')}
              value={undefined}
            />
            <label htmlFor="undefined-radio">No Image</label>
          </div>
          {logos.map((logo) => (
            <div key={logo}>
              <input
                type="radio"
                id={`${logo}-radio`}
                {...register('asset')}
                value={logo}
              />
              <label htmlFor={`${logo}-radio`}>{logo}</label>
            </div>
          ))}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BarEditor;
