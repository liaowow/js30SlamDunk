export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log(`used that one (${item}) already, run again!`);
    return randomItemFromArray(arr, not);
  }
  return item;
}
