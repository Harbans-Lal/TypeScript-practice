//datatype>>>>>>>>>>>>>
//stering, number, boolean>>>>>>>>>>>>>>


let str = "this is string";
let num = 55;
let bool = true;
console.log(str, num, bool);

//Object>>>>>>>>>>>>>

function myObj(obj:{x:number; y:number}){
    console.log(`the cordinate of x is: ${obj.x} and the cordinate of the y is:${obj.y}`)
}

myObj({x:50, y:80})



function firstObj(obj:{firtName:string; secondName:string}){
    console.log(`welcome the ${obj.firtName} ${obj.secondName}`)
}

firstObj({firtName:"John", secondName:"Doe"})


//union type>>>>>>>>>>>>>

function showId(id:string | number){
    if(typeof id === 'string'){
        console.log(id.toUpperCase())
    }else{
        console.log(id);
        
    }
}

showId("can't access the credential")


//tyep alias>>>>>>>>>>>>>>

type Cordinate = {
    x:number,
    y:number
}

function checkCordinate(cord:Cordinate){
    console.log(`the cordinate of x is : ${cord.x} and the cordinate of y is: ${cord.y}`);
    
}

checkCordinate({x:25.9 , y:80})


type showid =  number | string

function showtheId(id : showid){
    console.log(id);
    
}

showtheId('hello044')

//Interface >>>>>>>>>>>>>>>>>>>>

interface  nmae {
    first:string,
    last:string
}

interface nmae{
    age:number
}

function printPersonName(name:nmae){
    console.log(`the person first name is ${name.first} and the last name is: ${name.last} and the age is : ${name.age}`);
    
}

printPersonName({first:"JOhn", last:"Doe", age:55})

//There is slightly diff b/w type and interface we can add new filed inside the interface  


//type assertion >>>>>>>>>>>>>>>>

let theString : any =  "this is the string ";

let theStringLeng  :number = (<string>theString).length;
console.log("this is the string length>>>>>>>>>>>>>", theStringLeng);


//literal type >>>>>>>>>>>>>>>

let color : 'red' | 'yello' | 'green'
color = "red"
console.log(color)

//compare the two string value >>>>>>>>>>>>>>>

function compareTwoStirng(s1:string, s2:string) : -1 | 0 | 1 {
    return s1 === s2?0 :s1>s2 ?1 :-1
}
 console.log( compareTwoStirng("hello", "world"));
 
//enum >>>>>>>>>>>>

const enum direction {
    up, // default value is 0
    down,
    left,
    right
}

console.log(direction.left);

//bigint >>>>>>>>>>>

// Creating a bigint via the BigInt function
// const oneHundred: bigint = BigInt(100);
// console.log(oneHundred)

//keyof >>>>>>>>>>>>>>

interface person {
    name:string,
    age:number
}

function personDetail(person:person, age:keyof person){
    console.log(`the name and age is :${person.name}  ${person.age} and thea age is : ${person[age]}`);
    
}

let person = {
    name:"someong",
    age:50
}

personDetail(person, "age")