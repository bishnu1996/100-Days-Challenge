var arrayStringsAreEqual = function(word1, word2) {
    let sum = ""; 
    for(let i = 0;i<word1.length;i++){
        sum = sum + word1[i]
        //console.log(sum)
    }
    let newSum = ""; 
    for(let j = 0;j<word2.length;j++){
        newSum = newSum + word2[j]
        //console.log(newSum);
    }
    if(sum === newSum){
        return true
    }else{
        return false
    }
};

console.log(arrayStringsAreEqual(["a","bc"],["ab","c"]));
