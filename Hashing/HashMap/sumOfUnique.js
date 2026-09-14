/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    const map = new Map();
    let result = 0;
    for(let num of nums){
        map.set(num, (map.get(num)|| 0) + 1)
    }

    for(let [key, values] of map){
        if(values <= 1){
            result += key;
        }
    }
    return result;
};
