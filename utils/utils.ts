export const isValidEmail = (val: string) => {
  const isSamsungBrowser = navigator.userAgent.match(/SAMSUNG|Samsung|samsung|SGH-[I|N|T]|GT-[I|N]|SM-[A|N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i);
  if (!isSamsungBrowser) {
    // eslint-disable-next-line no-useless-escape
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(val);
  }
  const split = val.split('@');
  if (split.length !== 2) return false;
  if (split[1].indexOf('.') < 2) return false;
  return true;
};
