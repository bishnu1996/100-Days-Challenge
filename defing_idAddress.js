const address = "1.1.1.1";
var defangIPaddr = function(address) {
    let newAddress = "";
    for(let i = 0;i<=address.length-1;i++){
        let res = address[i];
        if(res === "."){
            newAddress = newAddress + "[.]"
        }else{
            newAddress = newAddress + res; 
        }
    }
    return newAddress
};

console.log(defangIPaddr(address));