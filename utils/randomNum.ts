export const randomNum = (
  min: number,
  max: number,
  exclude: number,
): number => {
  if (min === max) {
    return min;
  }
  const rand = Math.floor(Math.random() * (max - min)) + min;
  if (rand === exclude) {
    return randomNum(min, max, exclude);
  }
  return rand;
};
