let sentences = ["i am a good","No am not good","you are good from me"];
var mostWordFound = function (sentences){
    let count = 0;
    for(let i = 0;i<=sentences.length-1;i++){
        newString = sentences[i].split(" ").length
        if(count < newString){
            count = newString;
        }   
    }
    return count;
}
console.log(mostWordFound(sentences));