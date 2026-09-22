/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let satisfied = 0;
    let window = 0;
    let maxWindow = 0;

    for(let i = 0; i< customers.length; i++){
        if(grumpy[i] === 0){
            satisfied += customers[i];
        }

        if(grumpy[i] === 1){
            window += customers[i];
        }

        if(i >= minutes){
            if(grumpy[i - minutes] === 1){
                window -= customers[i - minutes];
            }
        }

        maxWindow = Math.max(maxWindow, window);
    }
    return satisfied + maxWindow;
};
