function concat(accumulatedString, item) {
    return accumulatedString + item;
}

function letterArray() {
    this.letters = [];
    this.add = add;
    this.makeWord = makeWord;
}

function add(letter) {
    this.letters.push(letter);
}

function makeWord() {
    return this.letters.reduce(concat);
}

var myLetterArray = new letterArray();
myLetterArray.add('s');
myLetterArray.add('c');
myLetterArray.add('r');
myLetterArray.add('a');
myLetterArray.add('b');
myLetterArray.add('b');
myLetterArray.add('l');
myLetterArray.add('e');
print(myLetterArray.makeWord());