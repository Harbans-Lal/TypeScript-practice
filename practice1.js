//datatype>>>>>>>>>>>>>
//stering, number, boolean>>>>>>>>>>>>>>
var str = "this is string";
var num = 55;
var bool = true;
console.log(str, num, bool);
//Object>>>>>>>>>>>>>
function myObj(obj) {
    console.log("the cordinate of x is: ".concat(obj.x, " and the cordinate of the y is:").concat(obj.y));
}
myObj({ x: 50, y: 80 });
function firstObj(obj) {
    console.log("welcome the ".concat(obj.firtName, " ").concat(obj.secondName));
}
firstObj({ firtName: "John", secondName: "Doe" });
//union type>>>>>>>>>>>>>
function showId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
showId("can't access the credential");
function checkCordinate(cord) {
    console.log("the cordinate of x is : ".concat(cord.x, " and the cordinate of y is: ").concat(cord.y));
}
checkCordinate({ x: 25.9, y: 80 });
function showtheId(id) {
    console.log(id);
}
showtheId('hello044');
function printPersonName(name) {
    console.log("the person first name is ".concat(name.first, " and the last name is: ").concat(name.last, " and the age is : ").concat(name.age));
}
printPersonName({ first: "JOhn", last: "Doe", age: 55 });
//There is slightly diff b/w type and interface we can add new filed inside the interface  
//type assertion >>>>>>>>>>>>>>>>
var theString = "this is the string ";
var theStringLeng = theString.length;
console.log("this is the string length>>>>>>>>>>>>>", theStringLeng);
//literal type >>>>>>>>>>>>>>>
var color;
color = "red";
console.log(color);
//compare the two string value >>>>>>>>>>>>>>>
function compareTwoStirng(s1, s2) {
    return s1 === s2 ? 0 : s1 > s2 ? 1 : -1;
}
console.log(compareTwoStirng("hello", "world"));
console.log(2 /* direction.left */);
function personDetail(person, age) {
    console.log("the name and age is :".concat(person.name, "  ").concat(person.age, " and thea age is : ").concat(person[age]));
}
var person = {
    name: "someong",
    age: 50
};
personDetail(person, "age");
