// complete the given function

function palindrome(str){
    console.log(str)

    const len = str.length;
    for(var i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i])
            return false
    }
    return true
}
module.exports = palindrome
