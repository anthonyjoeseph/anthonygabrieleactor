const screenSizes = {
  BIG_SCREEN: 0,
  LITTLE_SCREEN: 1,
  MOBILE: 2,
};
export default screenSizes;
export const screenSizeToText = {
  [screenSizes.BIG_SCREEN]: 'big',
  [screenSizes.LITTLE_SCREEN]: 'little',
  [screenSizes.MOBILE]: 'mobile',
};
