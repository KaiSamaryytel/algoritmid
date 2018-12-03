// Leia article.txt failist pikim sõna, milles ükski täht ei kordu

var fs = require('fs');
var str = fs.readFile('article.txt', 'utf8', function(err, contents) {
    var words = contents
        .toLowerCase()
        .replace(/\W/g, ' ')
        .split(' ');
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    console.log('Pikimas sõnas on tähti kokku: ', maxLength);
    // regex filter
    var unique = /^.*(.).*\1.*$/;
    var longest_word = '';
    for (let i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length <= longest_word.length) {
            continue;
        }
        if (word.match(unique)) {
            continue;
        }
        longest_word = word;
    }
    console.log('Pikim sõna, kus üski täht ei kordu: ', longest_word);
});