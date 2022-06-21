const caesar = (str, num)=> {
    result = ''
    for (let i = 0; i < str.length; i++){
        charcode = (str[i].charCodeAt()) + num % 26
        result += String.fromCharCode(charcode)
    } return result
}


module.exports = caesar