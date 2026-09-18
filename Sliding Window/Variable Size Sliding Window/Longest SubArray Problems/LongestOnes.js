/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let left = 0;
  let zero_count = 0;
  let maxLength = 0;

  for(let right = 0; right < nums.length; right++){
    if(nums[right] === 0){
        zero_count++;
    }
    while(zero_count > k){
        if(nums[left] === 0){
            zero_count--;
        }
        left++;
    }
    maxLength = Math.max(maxLength, right-left+1);
  } 
  return maxLength; 
};
