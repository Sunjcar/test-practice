const capitalize = function(letter) {
    return letter.toLowerCase().split(' ').map((x) => 
            x.charAt(0).toUpperCase() + x.substring(1)).join('')
};

module.exports = capitalize