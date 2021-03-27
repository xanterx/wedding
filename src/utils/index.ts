export const vibrate = (time: number) => {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(time);
  }
};
