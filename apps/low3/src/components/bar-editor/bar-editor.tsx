import { useSubscription } from 'observable-hooks';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Observable } from 'rxjs';
import { logos, Low3Bar } from '../../models/api-state';
import styles from './bar-editor.module.css';

export type BarEditorProps = {
  initialValue: Low3Bar;
  onSubmit: (value: Low3Bar) => void;
  onChange: (value: Low3Bar) => void;
  pushActive$: Observable<Partial<Low3Bar>>;
};

const BarEditor: React.FC<BarEditorProps> = (props) => {
  const { register, handleSubmit, watch, setValue } = useForm<Low3Bar>({
    defaultValues: props.initialValue,
  });
  useSubscription(props.pushActive$, (active) => {
    if (active.asset !== undefined) {
      setValue('asset', active.asset);
    }
    if (active.footer !== undefined) {
      setValue('footer', active.footer);
    }
    if (active.header !== undefined) {
      setValue('header', active.header);
    }
    if (active.subtitle !== undefined) {
      setValue('subtitle', active.subtitle);
    }
    if (active.title !== undefined) {
      setValue('title', active.title);
    }
  });
  useEffect(() => {
    const subscription = watch(props.onChange);
    return subscription.unsubscribe;
  }, [watch, props.onChange]);
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
