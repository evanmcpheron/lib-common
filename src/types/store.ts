import { ReactElement, ReactPortal } from "react";
import { Current } from "./style";
import {User} from "./user";

export interface Store {
  mickey: Mickey;
  i18n: I18N;
  user: User;
  helpCenterApp: HelpCenterApp;
}

export interface Mickey {
  navigation: Navigation;
  settings: Settings;
  navbar: MickeyNavbar;
  message: Message;
  dialog: Dialog;
}

export interface Dialog {
  state: boolean;
  options: DialogOptions;
}

export interface DialogOptions {
  children: string;
}

export interface Message {
  state: boolean | null;
  options: MessageOptions;
}

export interface MessageOptions {
  anchorOrigin: AnchorOrigin;
  autoHideDuration: number;
  message: string;
  variant: null;
}

export interface AnchorOrigin {
  vertical: string;
  horizontal: string;
}

export interface MickeyNavbar {
  open: boolean;
  mobileOpen: boolean;
}

export interface Navigation {
  ids: string[];
  entities: NavigationEntities;
}

export interface NavigationEntities {
  "home-component": Component;
  "coaches-component": Component;
  "profile-component": Component;
  "file-manager-component": Component;
  "settings-component": Component;
  "help-center-component": Component;
  "sign-out-component": Component;
  "signIn-component": Component;
  "signUp-component": Component;
}

export interface Component {
  id: string;
  title: string;
  type: string;
  icon: IconClass;
  url: string;
  auth?: Auth[];
}

// eslint-disable-next-line no-shadow
export enum Auth {
  Admin = "admin",
  Staff = "staff",
  User = "user",
}

export interface IconClass {
  prefix: string;
  iconName: string;
  icon: Array<Array<number | string> | number | string>;
}

export interface Settings {
  initial: Current;
  defaults: Current;
  current: Current;
}

export interface HelpCenterApp {
  guide: null;
  guides: FAQCategories;
  guideCategories: FAQCategories;
  faqs: FAQCategories;
  faqCategories: FAQCategories;
  faqsMost: FAQCategories;
}

export interface FAQCategories {
  ids: any[];
  entities: FAQCategoriesEntities;
}

export interface FAQCategoriesEntities {}

export interface I18N {
  language: string;
  languages: Language[];
}

export interface Language {
  id: string;
  title: string;
  flag: string;
}



