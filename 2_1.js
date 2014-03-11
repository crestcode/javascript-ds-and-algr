function grades() {
    this.grades = [];
    this.add = add;
    this.average = average;
}

function add(grade) {
    this.grades.push(grade);
}

function average() {
    var total = 0;
    for (var i = 0; i < this.grades.length; ++i) {
        total += this.grades[i];
    }
    return total / this.grades.length;
}

var studentGrades = new grades();
studentGrades.add(52);
studentGrades.add(55);
studentGrades.add(61);
studentGrades.add(65);
studentGrades.add(55);
studentGrades.add(50);
studentGrades.add(52);
studentGrades.add(49);
print(studentGrades.average()); // displays 54.875

