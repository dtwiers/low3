export type Content = {
  headerText: string;
  mainText: string;
  footerText: string;
  asset: string;
};

export type AdvanceCommand = {
  command: 'advance';
};

export type HideCommand = {
  command: 'hide';
};

export type ShowCommand = {
  command: 'show';
};

export type SetContentCommand = {
  content: Content;
  command: 'advance' | 'hide' | 'show';
};
