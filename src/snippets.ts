export const all = (arr, fn = Boolean) => arr.every(fn);

export const average = (...nums: Number) => nums.reduce((acc, val) => acc + val, 0) / nums.length;