let nums = 34;
var numberOfSteps = function(num) {
    let i = 0;
    while(num > 0){
        if(num === 0){
            return 0;
        }else if(num % 2 === 0){
            num = Math.floor(num / 2);
            i = i + 1;
        }else{
            num = num - 1;
            i = i +1;  
        }
    }
    return i
};
console.log(numberOfSteps(nums));