/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let left = 0;
    let whites = 0;
    let recolor = Infinity;

    for(let right = 0; right < blocks.length; right++){
        if(blocks[right] === "W"){
            whites++;
        }
        if(right-left+1 > k){
            if(blocks[left] === "W"){
                whites--;
            }
            left++;
        }
        if(right - left + 1 === k){
            recolor = Math.min(recolor, whites);
        }
    }
    return recolor;
};
