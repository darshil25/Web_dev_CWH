var slugify = require('slugify') //slugify basically remove special characters from string and replace space with hyphen
console.log(slugify('some string')) // some-string
console.log(slugify('some string', '_')) // some_string

console.log(slugify('some ^ @ # & $ % string', '_'))
