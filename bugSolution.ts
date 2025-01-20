function isNumberArray(arr: any[]): arr is number[] {
  return arr.every(element => typeof element === 'number');
}

function combine(arr1: number[], arr2: number[]): number[] {
  if (!isNumberArray(arr1) || !isNumberArray(arr2)) {
    throw new Error('Arrays must contain only numbers');
  }
  return arr1.concat(arr2);
}
