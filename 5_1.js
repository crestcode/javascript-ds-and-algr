function Deque() {
    this.dataStore = [];
    this.enqueueFront = enqueueFront;
    this.enqueueBack = enqueueBack
    this.dequeueFront = dequeueFront;
    this.dequeueBack = dequeueBack;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function enqueueBack(element) {
    this.dataStore.push(element);
}

function enqueueFront(element) {
    for(var i = this.dataStore.length-1; i >= 0; --i) {
         this.dataStore[i+1] = this.dataStore[i];
    }
    this.dataStore[0] = element;
}

function dequeueFront() {
    return this.dataStore.shift();
}

function dequeueBack() {
    return this.dataStore.pop();
}

function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function count() {
    return this.dataStore.length;
}



// test program
var q = new Deque();
q.enqueueFront("Meredith");
q.enqueueFront("Cynthia");
q.enqueueFront("Jennifer");

print(q.toString());

q.enqueueBack("JACK");

print(q.toString());

q.dequeueBack();
q.dequeueFront();

print("Front of queue: " + q.front());
print("Back of queue: " + q.back());