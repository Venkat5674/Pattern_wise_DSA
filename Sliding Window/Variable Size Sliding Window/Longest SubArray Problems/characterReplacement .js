/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxlen = 0;
    let maxfreq = 0;
    const freq = new Array(26).fill(0);

    for(let right = 0; right < s.length; right++){
        let index = s.charCodeAt(right) - 65;
        freq[index]++;

        maxfreq = Math.max(maxfreq, freq[index]);

        while((right-left+1) - maxfreq > k){
            let leftindex = s.charCodeAt(left) - 65;
            freq[leftindex]--;
            left++;
        }
        maxlen = Math.max(maxlen, right-left+1);
    }
    return maxlen;
};
