/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const result = [...arr].sort(new Intl.Collator(["ru-RU", "en-EN"], { caseFirst: 'upper'}).compare);
  return (param === 'asc') ? result : result.reverse();
}
