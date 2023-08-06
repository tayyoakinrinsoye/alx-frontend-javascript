export default function cleanSet(set, startString) {
  const pts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const valSubStr = val.substring(startString.length);

      if (valSubStr && valSubStr !== val) {
        pts.push(valSubStr);
      }
    }
  }
  return pts.join('-');
}
