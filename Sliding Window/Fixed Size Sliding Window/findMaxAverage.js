/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0;
    let sum =0;
    let max_avg = 0;
    for(let right = 0; right < nums.length; right++){
        sum += nums[right];
        if(right-left+1 === k){
            avg = sum / k;
            max_avg = Math.max(max_avg, avg);
            sum -= nums[left];
            left++;
        }
    }
    return max_avg;
};
