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

function removeYellowPez(pezStack) {
    var newStack = new Stack();
    var pezString = "";
    while(pezStack.length()>0) {
        if (pezStack.peek() != "yellow") {
            newStack.push(pezStack.pop());
        } else {
            pezStack.pop();
        }
    }
    while(newStack.length()>0) {
        pezString += newStack.pop() + " ";
    }
    return pezString;
}

var pezStack = new Stack();
pezStack.push("yellow");
pezStack.push("red");
pezStack.push("white");
pezStack.push("white");
pezStack.push("yellow");
pezStack.push("red");
pezStack.push("yellow");
pezStack.push("yellow");

print(removeYellowPez(pezStack));
