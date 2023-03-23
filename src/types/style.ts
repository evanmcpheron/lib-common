export interface Current {
  customScrollbars: boolean;
  direction: string;
  theme: Theme;
  layout: Layout;
  mode: Mode;
  defaultAuth: null;
  loginRedirectUrl: string;
}

export interface Layout {
  style: string;
  config: Config;
}

export interface Config {
  mode: string;
  containerWidth: number;
  navbar: ConfigNavbar;
  toolbar: ConfigFooter;
  footer: ConfigFooter;
  leftSidePanel: TSidePanel;
  rightSidePanel: TSidePanel;
}

export interface ConfigFooter {
  display: boolean;
  style: string;
}

export interface TSidePanel {
  display: boolean;
}

export interface ConfigNavbar {
  display: boolean;
  style: string;
  folded: boolean;
  position: string;
}

// eslint-disable-next-line no-shadow
export enum Mode {
  Light = "light",
}

export interface Theme {
  main: MainClass;
  navbar: MainClass;
  toolbar: MainClass;
  footer: MainClass;
}

export interface MainClass {
  palette: Palette;
  status: Status;
}

export interface Palette {
  mode: Mode;
  text: Text;
  common: Common;
  primary: Ary;
  secondary: Ary;
  background: Background;
  error: Error;
  divider: Divider;
}

export interface Background {
  paper: Paper;
  default: Default;
  red: Red;
}

// eslint-disable-next-line no-shadow
export enum Default {
  F0F7F7 = "#F0F7F7",
}

// eslint-disable-next-line no-shadow
export enum Paper {
  Fafafa = "#FAFAFA",
}

// eslint-disable-next-line no-shadow
export enum Red {
  Ff0000 = "#FF0000",
}

export interface Common {
  black: Black;
  white: White;
}

// eslint-disable-next-line no-shadow
export enum Black {
  RGB172439 = "rgb(17, 24, 39)",
  RGB255255255 = "rgb(255,255,255)",
}

// eslint-disable-next-line no-shadow
export enum White {
  RGB255255255 = "rgb(255, 255, 255)",
}

// eslint-disable-next-line no-shadow
export enum Divider {
  E2E8F0 = "#e2e8f0",
}

export interface Error {
  light: Light;
  main: Main;
  dark: Dark;
}

// eslint-disable-next-line no-shadow
export enum Dark {
  B71C1C = "#b71c1c",
  Ff9910 = "#ff9910",
  The003737 = "#003737",
}

// eslint-disable-next-line no-shadow
export enum Light {
  B3D1D1 = "#b3d1d1",
  Ffcdd2 = "#ffcdd2",
  Ffecc0 = "#ffecc0",
}

// eslint-disable-next-line no-shadow
export enum Main {
  F44336 = "#f44336",
  Ffbe2C = "#FFBE2C",
  The006565 = "#006565",
}

export interface Ary {
  light: Light;
  main: Main;
  dark: Dark;
  contrastDefaultColor?: Mode;
  contrastText?: Black;
}

export interface Text {
  primary: Black;
  secondary: Secondary;
  disabled: Disabled;
}

// eslint-disable-next-line no-shadow
export enum Disabled {
  RGB149156169 = "rgb(149, 156, 169)",
}

// eslint-disable-next-line no-shadow
export enum Secondary {
  RGB107114128 = "rgb(107, 114, 128)",
}

export interface Status {
  danger: Danger;
}

// eslint-disable-next-line no-shadow
export enum Danger {
  Orange = "orange",
}
