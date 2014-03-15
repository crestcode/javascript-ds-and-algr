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

function convertInfixToPostfix(infix) {
    var s = new Stack();
    var postfix = "";
    if (missingParen(infix)) {
        return "Invalid expression: Check parens"
    } else {
        for (var i = 0; i < infix.length; ++i) {
            if (isNaN(infix[i])) {
                if (infix[i] == ")")
                    postfix += s.pop();
                else if (infix[i] == "+" || infix[i] == "-") {
                    if (s.length() != 0 && s.peek() == "(") {
                        s.pop();
                        s.push(infix[i]);
                    } else if (s.length() != 0 && (s.peek() == "*" || s.peek() == "/")) {
                        while (s.length() > 0)
                            postfix += s.pop();
                        s.push(infix[i]);
                    } else {
                        s.push(infix[i]);
                    }
                } else if (infix[i] == "(" || infix[i] == "*" || infix[i] == "/")
                    s.push(infix[i]);
            } else {
                postfix += infix[i];
            }
        }
        while (s.length() > 0) {
            if (s.peek() == "(")
                s.pop();
            else
                postfix += s.pop();
        }
        return postfix;
    }
}


function evaluatePostfix(postfixExpression) {
    var s = new Stack();
    for (var i = 0; i < postfixExpression.length; ++i) {
        if (isNaN(postfixExpression[i])) {
            var temp = s.pop();
            switch (postfixExpression[i]) {
                case '+':
                    s.push(s.pop() + temp);
                    break;
                case '-':
                    s.push(s.pop() - temp);
                    break;
                case '*':
                    s.push(s.pop() * temp);
                    break;
                case '/':
                    s.push(s.pop() / temp);
                    break;
            }

        } else {
            s.push(postfixExpression[i]);
        }
    }
    return s.pop();
}

var postfixExpression = convertInfixToPostfix("((4-1)/(2+12))+1*(4/3)");
print(postfixExpression);
evaluatePostfix(postfixExpression);
