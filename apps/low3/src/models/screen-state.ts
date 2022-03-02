
export type LogoType =
  | 'conover'
  | 'dcm'
  | 'engelking'
  | 'fivestar'
  | 'fourt'
  | 'kaufman'
  | 'kourke'
  | 'nfg'
  | 'platner'
  | 'rar'
  | 'sieren'
  | 'stensland'
  | 'stewarts'
  | 'toenjes';

export type BarInfo = {
  header?: string;
  subtitle?: string;
  title?: string;
  footer?: string;
  asset?: LogoType;
};

export type ScreenState = {
  visible: boolean;
  primaryBar: BarInfo;
  transitionalBar?: BarInfo;
}