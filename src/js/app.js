export default function arraySort(arr) {
  return arr.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    return 1;
  });
}