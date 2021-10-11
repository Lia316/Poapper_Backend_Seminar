let fs = require('fs');

let url = 'textbook.json';
let textbook = {
    title: 'Computer Systems A Programmer\'s Perspective',
    author: 'Bryant O`Hallaron',
    edition: '3rd',
    publisher: 'Pearson'
}
let textbookJSON = JSON.stringify(textbook);

fs.writeFileSync(url, textbookJSON);
