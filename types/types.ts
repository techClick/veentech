import { ReactElement } from 'react';

export type IResponse = {
  status: 'error' | 'success',
  data: string,
};

export type CallArgs = {
  prefix?: 0 | 1,
  api: string,
  method?: 'GET' | 'POST',
  body?: any,
  type?: 'json' | 'blob',
};

export type ThunkArgs = { callEndpoint: Function };

type ShowPopupKeys = {
  component?: ReactElement | false,
  exitOnBgClick?: boolean,
  action?: Function,
}
export type ShowPopup = {
  [key in keyof ShowPopupKeys]: ShowPopupKeys[key]
};

type MessageKeys = {
  company: string,
  email: string,
  subject: string,
  text: string,
}
export type Message = {
  [key in keyof MessageKeys]: MessageKeys[key]
};

type StartKeys = {
  name: string,
  email: string,
  phone: string,
  type: string,
  country: string,
}
export type Start = {
  [key in keyof StartKeys]: StartKeys[key]
};
