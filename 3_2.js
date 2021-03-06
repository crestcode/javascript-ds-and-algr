function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    this.appendLargest = appendLargest;
    this.appendSmallest = appendSmallest;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function appendLargest(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if ((typeof(this.dataStore[i]) == "string" && typeof(element) == "string" && this.dataStore[i].length > element.length) ||
            (typeof(this.dataStore[i]) == "number" && typeof(element) == "number" && this.dataStore[i] > element))
        {
            return false;
        }
    }
    this.dataStore[this.listSize++] = element;
    return true;
}

function appendSmallest(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if ((typeof(this.dataStore[i]) == "string" && typeof(element) == "string" && this.dataStore[i].length < element.length) ||
            (typeof(this.dataStore[i]) == "number" && typeof(element) == "number" && this.dataStore[i] < element))
        {
            return false;
        }
    }
    this.dataStore[this.listSize++] = element;
    return true;
}

var names = new List();
names.appendSmallest("Clayton");
names.appendSmallest("Christopher"); // returns false
names.appendSmallest("Joe");
names.end();
print(names.getElement()); // displays Joe
names.prev();
print(names.getElement()); // displays Clayton

var numbers = new List();
numbers.appendSmallest(14.5); // works with floats too
numbers.appendSmallest(20.2); // returns false
numbers.appendSmallest(9);
numbers.end();
print(numbers.getElement()); // displays 9
numbers.prev();
print(numbers.getElement()); // displays 14.5
