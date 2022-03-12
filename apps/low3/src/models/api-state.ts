import {
  createEntityAdaptor,
  EMPTY_ENTITY_STATE,
  EntityState,
} from '@brandingbrand/cargo-hold';
import { createLens } from '@brandingbrand/standard-lens';

export type LogoType = typeof logos[number];

export const logos = [
  'conover',
  'dcm',
  'engelking',
  'fivestar',
  'fourt',
  'he-man',
  'jordan-show-stock',
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
export type Low3BarWithName = {
  name: string;
} & Low3Bar;

export type Low3State = {
  presets: EntityState<Low3BarWithName>;
  active: Low3Bar;
  inEditor: Low3Bar;
  visible: boolean;
};

export const initialLow3State: Low3State = {
  presets: EMPTY_ENTITY_STATE,
  active: defaultLow3Bar,
  inEditor: defaultLow3Bar,
  visible: false,
};

export const presetAdaptor = createEntityAdaptor({
  idSelector: (preset) => preset.name,
  lens: createLens<Low3State>().fromPath('presets'),
  // comparer: (a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1),
});
