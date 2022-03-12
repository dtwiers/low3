import { EMPTY_ENTITY_STATE, EntityState } from '@brandingbrand/cargo-hold'
export type LogoType = typeof logos[number];

export const logos = [
  'conover',
  'dcm',
  'engelking',
  'fivestar',
  'fourt',
  'kaufman',
  'lynch',
  'nfg',
  'platner',
  'rar',
  'rourke',
  'sieren',
  'stensland',
  'stewarts',
  'toenjes',
] as const;

export const defaultLow3Bar: Low3Bar = {
  header: '',
  footer: '',
  title: '',
  subtitle: '',
};
export type Low3Bar = {
  header?: string;
  footer?: string;
  title?: string;
  subtitle?: string;
  asset?: LogoType;
};
export type Low3State = {
  presets: EntityState<never>;
  active: Low3Bar | null;
  visible: boolean;
};

export const initialLow3State: Low3State = {
  presets: EMPTY_ENTITY_STATE,
  active: null,
  visible: false,
};
