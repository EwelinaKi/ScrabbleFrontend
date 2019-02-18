export function isStringArray(letters) {
  return Array.isArray(letters) && letters.every(it => typeof it === 'string');
}
