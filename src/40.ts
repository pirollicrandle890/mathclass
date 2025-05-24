import { isEqual } from 'lodash';

export const isObjectEqual = <T>(obj1: T, obj2: T): boolean => {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    for (let i = 0; i < obj1.length; i++) {
      if (!isEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  } else if (obj1 === obj2) return true;

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return isEqual(obj1, obj2);
  const keys1 = Object.keys(obj1).map(k => k as keyof T);
  const keys2 = Object.keys(obj2).map(k => k as keyof T);

  for (let key of keys1) {
    if (!keys2.includes(key)) continue;
    if (!isEqual(obj1[key], obj2[key])) return false;
  }
  return true;
};
