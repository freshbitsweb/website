var date = new Date();
var currentDate = date.getDate();
var staticDate;
var validDate;
var invalidDate;

if (currentDate <= 12) {
    staticDate = 15;

    validDate = staticDate + 1;
    invalidDate = staticDate - 1;

} else if (currentDate >= 13 || currentDate <= 31) {
    staticDate = currentDate;

    validDate = currentDate + 1;
    invalidDate = currentDate - 1;
}