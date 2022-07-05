// how javascript works
/*


*/
console.log(this);
console.log(window);
console.log(firstName);
var firstName = 'apple';

//step1 - compile
//compiler - checks our code before executing
//compilation phase ----> tokenizing/lexing [divides our code into small parts , these small chunks of code is called
//tokens ]----> then Parsing [understands the small chunks of code and create Abstract syntax tree(AST)]  ---> this AST will generate
//a executable code , which can be executed

// Why to compile?
//for early error checking, scope of variables we must know before code is getting executed-- - to acheive these 2 we must parse our code

//firstName variable - is having global scope , this info is present at javascript before executing

//step2 - execute
//in js code executes inside execution content - called Global Execution context
