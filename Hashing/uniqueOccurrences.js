/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = new Map();

  for(let num of arr){
    map.set(num, (map.get(num) || 0) + 1);
  }

  const values = [...map.values()];

  const set = new Set(values);

  return values.length === set.size;
};
