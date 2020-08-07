import Cookies from 'js-cookie'
import i18n from '@/lang';

const TOKEN = Symbol('token');
const LANGUAGE = Symbol('language');
const USER = Symbol('user');
const SYSTEM_CONFIG = Symbol('system_config');
const SIDEBAR_STATUS = Symbol('sidebar_status')

export const token = {
  set: (token: string) => {
    Cookies.set(TOKEN.toString(), token);
  },
  get: () => {
    return Cookies.get(TOKEN.toString());
  }
};

export const language = {
  set: (language: string) => {
    Cookies.set(LANGUAGE.toString(), language);
  },
  get: () => {
    return Cookies.get(LANGUAGE.toString());
  }
};

export const user = {
  set: (user: any) => {
    Cookies.set(USER.toString(), user);
  },
  get: () => {
    return Cookies.getJSON(USER.toString());
  }
}

export const systemConfig = {
  set: (systemConfig: any) => {
    Cookies.set(SYSTEM_CONFIG.toString(), systemConfig);
  },
  get: () => {
    return Cookies.getJSON(SYSTEM_CONFIG.toString());
  }
}

export const sidebarStatus = {
  set: (sidebarStatus: any) => {
    Cookies.set(SIDEBAR_STATUS.toString(), sidebarStatus);
  },
  get: () => {
    return Cookies.get(SIDEBAR_STATUS.toString());
  }
}