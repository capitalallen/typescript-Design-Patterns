// number 
let a: number = 1;
// string 
let b: string = 'a';
// boolean
let c: boolean = true;
// multiple types - string or number 
let d: number | string;
d = b;
// checking types 
let str: string = 'Hello World!'
if(typeof str === d){
 console.log('Str is a number')
} else {
 console.log('Str is not a number')
}

class Human{
    name: string;
    constructor(data: string) {
     this.name = data;
    }
   }
   let human = new Human('Gabriel')
   if(human instanceof Human){
    console.log(`${human.name} is a human`)
}
// cast variable
let s: any = 'aefwfwefwef';
let strLength1 = (s as string).length;
let strLength2 = (<string>str).length
// array 
// Using []
let arr: string[] = ['1','2'];
// Using the generic array
let numbers: Array<number> = [1, 2, 3, 4, 5]
// Multitype Arrays
let stringsAndNumbers: (string | number)[] = ['Age', 20]