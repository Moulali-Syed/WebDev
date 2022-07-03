//value,start,end

const myArr = new Array(10).fill(-1);
console.log(myArr);
//output - (10) [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
const myArr1 = new Array(10).fill(0);
console.log(myArr1);
//(10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const myArr3 = [1, 2, 3, 4, 5, 6, 7, 8];
myArr3.fill(0, 2, 5);

//fill changes original array
console.log(myArr3);
