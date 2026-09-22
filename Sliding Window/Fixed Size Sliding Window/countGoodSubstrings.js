/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let left = 0;
    let count = 0;
    let k = 3; 
    for(let right = 0; right < s.length; right++){
        if(right -left + 1 === k){
            if(s[left] !== s[left+1] && s[left+1] !== s[right] && s[left] !== s[right]){
                count++;
            }
          left++;  
        }
        
    }
    return count;
};
