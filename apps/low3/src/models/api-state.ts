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

export type Low3Bar = {
  header?: string;
  footer?: string;
  title?: string;
  subtitle?: string;
  asset?: LogoType;
};
export type Low3State = {
  presets: Low3Bar[];
  active: Low3Bar | null;
  visible: boolean;
};

export const initialLow3State: Low3State = {
  presets: [],
  active: null,
  visible: false,
};
