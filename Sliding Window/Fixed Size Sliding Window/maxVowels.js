/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let left = 0;
    let count = 0;
    let max_count = 0;
    for(let right = 0; right < s.length; right++){
        if(s.charAt(right) === 'a' || 
           s.charAt(right) === 'e' || 
           s.charAt(right) === 'i' ||
           s.charAt(right) === 'o' ||
           s.charAt(right) === 'u' ){
            count++;
           }

           if(right-left+1 === k){
             max_count = Math.max(max_count, count);

             if(s.charAt(left) === 'a'||
                s.charAt(left) === 'e'||
                s.charAt(left) === 'i'||
                s.charAt(left) === 'o'||
                s.charAt(left) === 'u'){
                    count--;
                }
                left++;
           }
    }
    return max_count;
};
