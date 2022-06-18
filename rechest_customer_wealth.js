var maximumWealth = function(accounts) {
    let count = 0;
    for(let i = 0;i<=accounts.length-1;i++){
        console.log(accounts[i]);
        let sum = 0
        for(let j = 0;j<=accounts[i].length-1;j++){
            console.log(accounts[i][j])
            sum = sum + accounts[i][j];
            console.log(sum)
            if(count < sum){
                count = sum;
            }
          
        }
    }
    return count;
};
console.log(maximumWealth([[1,2,3],[1,2,3]]));
