// function greet(person: string, date: Date): void {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }

// greet("Brendan", new Date());

// let isDone: boolean = false;
// let decimal: number = 6;
// let color: string = "blue";
// let greeting: string = `Hello, my favorite number is ${decimal}`;

// let age: number = 30;
// age = "thirty"; // Error: Type 'string' is not assignable to type 'number'.

// let list1: number[] = [1, 2, 3];
// let list2: Array<string> = ["a", "b", "c"];

// let user: [string, number] = ["Alice", 25];

// Parameters are typed, and the return value is typed as 'number'
// function add(x: number, y: number): number {
//   return x + y;
// }

// A function that doesn't return anything has a 'void' return type
// function logMessage(message: string): void {
//   console.log(message);
// }

// interface User {
//   name: string;
//   id: number;
//   isActive?: boolean; // The '?' makes this property optional
// }

// const user1: User = { name: "John", id: 1 };
// const user2: User = { name: "Jane", id: 2, isActive: true };

// type Point = {
//   x: number;
//   y: number;
// };

// const myPoint: Point = { x: 10, y: 20 };

// function printId(id: number | string) {
//   console.log("Your ID is: " + id);
// }

// printId(101); // OK
// printId("202"); // OK

// Without generics, you might use 'any', which loses type information
// function getFirstElement_any(arr: any[]) {
//   return arr[0];
// }

// With generics, the function knows the return type based on the input
// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// const numbers = [1, 2, 3];
// const firstNum = getFirstElement(numbers); // 'firstNum' is inferred as type 'number'

// const strings = ["a", "b", "c"];
// const firstStr = getFirstElement(strings); // 'firstStr' is inferred as type 'str

// String & Boolean Data Types
// var str1: string = "hello ";
// var str2: string = "hello";
// var str3: string = `hello`;
// var age: number = 29;
// var userName: string = " pushkar ";
// console.log(`${str1} ${userName} my age is ${age}`);

//  Null & Undefined Data Types
// var data: null = null;
// var userName: null | string = null;
// console.log(typeof data);
// var item: undefined = undefined;
// console.log(typeof item);

// BigInt for Large Numbers
// var maxSafeNumber: number = 9007199254740991;
// console.log("Max Safe Integer:", maxSafeNumber);
// var x = 1;
// var y = 2;
// console.log("BigInt Sum:", maxSafeNumber + x);
// console.log("BigInt Sum:", maxSafeNumber + y);`
var maxSafeNumber1: bigint = 9007199254740991n;
console.log("Max Safe Integer:", maxSafeNumber1);
var x2 = 1n;
var y2 = 2n;
console.log("BigInt Sum:", maxSafeNumber1 + x2);
console.log("BigInt Sum:", maxSafeNumber1 + y2);
