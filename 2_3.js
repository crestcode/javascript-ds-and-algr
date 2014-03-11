Array.matrix = function (numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

function monthTemps(weeks, days_in_a_week) {
    this.weeks = weeks
    this.days_in_a_week = days_in_a_week
    this.month = Array.matrix(weeks, days_in_a_week, 0);
    this.add = add;
    this.weekAverage = weekAverage;
    this.monthAverage = monthAverage;
    this.allTheWeeksAverage = allTheWeeksAverage;
}
function add(temp, week, day) {
    this.month[week][day] = temp;
}
function weekAverage(week) {
    var total = 0;
    for (var i = 0; i < this.days_in_a_week; ++i) {
        total += this.month[week][i];
    }
    return total / this.days_in_a_week;
}

function monthAverage() {
    var total = 0;
    for (var i = 0; i < this.weeks; ++i) {
        for (var j = 0; j < this.days_in_a_week; ++j) {
            total += this.month[i][j];
        }
    }
    return total / (this.weeks * this.days_in_a_week);
}

function allTheWeeksAverage() {
    var total = 0;
    for (var i = 0; i < this.weeks; ++i) {
        total += this.weekAverage(i);
    }
    return total / this.weeks;
}
var thisMonth = new monthTemps(4, 7);
thisMonth.add(52, 0, 0);
thisMonth.add(55, 0, 1);
thisMonth.add(61, 0, 2);
thisMonth.add(65, 0, 3);
thisMonth.add(55, 0, 4);
thisMonth.add(50, 0, 5);
thisMonth.add(52, 0, 6);

thisMonth.add(30, 1, 0);
thisMonth.add(21, 1, 1);
thisMonth.add(33, 1, 2);
thisMonth.add(36, 1, 3);
thisMonth.add(33, 1, 4);
thisMonth.add(30, 1, 5);
thisMonth.add(20, 1, 6);

thisMonth.add(60, 2, 0);
thisMonth.add(61, 2, 1);
thisMonth.add(55, 2, 2);
thisMonth.add(54, 2, 3);
thisMonth.add(66, 2, 4);
thisMonth.add(69, 2, 5);
thisMonth.add(55, 2, 6);

thisMonth.add(30, 3, 0);
thisMonth.add(21, 3, 1);
thisMonth.add(33, 3, 2);
thisMonth.add(36, 3, 3);
thisMonth.add(33, 3, 4);
thisMonth.add(30, 3, 5);
thisMonth.add(130, 3, 6);
print(thisMonth.weekAverage(0));
print(thisMonth.weekAverage(1));
print(thisMonth.weekAverage(2));
print(thisMonth.weekAverage(3));
print(thisMonth.monthAverage());
print(thisMonth.allTheWeeksAverage());