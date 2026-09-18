let s = "ccaabbb"
let k = 2;
let left = 0;

let maxlen = 0;

const map = new Map();

for(let right = 0; right < s.length; right++){
    map.set(s[right], (map.get(s[right])|| 0 ) + 1);

    while(map.size > k){
      map.set(s[left], map.get(s[left]) - 1);
      if(map.get(s[left]) === 0){
        map.delete(s[left]);
      }
      left++;
    }
  maxlen = Math.max(maxlen, right-left+1);
  }
console.log(map)
console.log(maxlen);
