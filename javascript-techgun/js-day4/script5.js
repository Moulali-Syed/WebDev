let x = new Date();
console.log(x); //2022-10-03T01:52:11.446Z

let date1 = new Date(2020, 11, 1, 10, 33, 56, 7); //we can pass 7 parameters
//year month date hour minutes seconds milliseconds
//month - 0 to 11
console.log(date1);

//atleast we must give year and month , else we will get some wrong date of 1970

let date2 = new Date('October 13, 2020 11:12:33');

let curDate = new Date(); //at the time of writing code date is 3 October 2022
console.log(curDate.getTime()); //gets time in milliseconds example:1664762339573

console.log(curDate.getFullYear()); //2022
console.log(curDate.getMonth()); //9 means October
console.log(curDate.getDate()); //3

console.log(curDate.getHours());
console.log(curDate.getMinutes());
console.log(curDate.getMilliseconds());
console.log(curDate.getDay()); // 0- sunday , 6- saturday

curDate.setFullYear(2023);
console.log(curDate);

curDate.setMonth(0);
console.log(curDate);

curDate.setDate(2);
console.log(curDate);
curDate.setHours(2);
curDate.setMinutes(12);
curDate.setSeconds(32);
curDate.setMilliseconds(12);
console.log(curDate);

//add 50 days to current date
curDate.setDate(curDate.getDate() + 50);
console.log(curDate);

//compare 2 dates
let d1 = new Date('October 13, 2018 11:12:33');
let d2 = new Date();
if (d1 > d2) {
  console.log('future date');
} else if (d2 > d1) {
  console.log('past date');
} else {
  console.log('same dates');
}
