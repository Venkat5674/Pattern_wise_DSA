/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let left = 0;
    let sum = 0;
    let count = 0;
    for(let right = 0; right < arr.length; right++){
        sum += arr[right];
        if(right-left+1 === k){
            let avg = sum / k;
            if(avg >= threshold){
                count++;
            }
            sum -= arr[left];
            left++;
        }
    }
    return count;
};
