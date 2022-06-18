var runningSum = function(nums) {
    let arr = [];
    let sum = 0; 
    for(let i = 0;i<=nums.length-1;i++){
        sum = sum + nums[i];
        arr.push(sum);
        console.log(arr);
    }
    return arr;
};

console.log(runningSum([1,2,3,4]))