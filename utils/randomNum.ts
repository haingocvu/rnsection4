export const randomNum = (
  min: number,
  max: number,
  exclude: number,
): number => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  if (rand === exclude) {
    return randomNum(min, max, exclude);
  }
  return rand;
};
