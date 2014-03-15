function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

mulBase(24, 9);

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
        return false;
    }
}

isPalindrome("honey");
isPalindrome("racecar");

function missingParen(expression) {
    var s = new Stack();
    for (var i = 0; i < expression.length; ++i) {
        if (expression[i] == '(')
            s.push(expression[i]);
        else if (expression[i] == ')')
            s.pop();
    }
    if (s.length() == 0)
        return false;
    else
        return true;
}

missingParen("2*(3+4");
missingParen("2*(2+4)");