//The conditional (ternary) operator is the only JavaScript operator 
//that takes three operands. This operator is frequently used as a 
//shortcut for the if statement.

//Parameters

//condition (or conditions)
//An expression that evaluates to true or false.

//expr1, expr2
//Expressions with values of any type.


condition ? expr1 : expr2 





//You can also use multiple conditions like in a multiple-conditions IF statement

var condition1 = true,
    condition2 = false,
    access = condition1 ? condition2 ? "Full pie": "Half pie": condition2 ? "Half pie" : "No pie, don't cry" ;

console.log(access); // logs "Half pie"




// You can also do more than one operation during the assignation of a value. 
// In this case, the last comma-separated value of the parenthesis will be 
// the value to be assigned.

var age = 16;

var url = age > 18 ? (
    alert('OK, you can go.'), 
    // alert returns "undefined", but it will be ignored because
    // isn't the last comma-separated value of the parenthesis
    'continue.html' // the value to be assigned if age > 18
) : (
    alert('You are much too young!'),
    alert('Sorry :-('),
    // etc. etc.
    'stop.html' // the value to be assigned if !(age > 18)
);

location.assign(url); // "stop.html"