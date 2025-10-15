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
// var maxSafeNumber1: bigint = 9007199254740991n;
// console.log("Max Safe Integer:", maxSafeNumber1);
// var x2 = 1n;
// var y2 = 2n;
// console.log("BigInt Sum:", maxSafeNumber1 + x2);
// console.log("BigInt Sum:", maxSafeNumber1 + y2);
// Symbol Data Type
// var sym1 = Symbol();
// var sym2 = Symbol();
// console.log(sym1 == sym2); //false
// console.log(typeof sym1); // symbol
// var sym3 = Symbol("key1");
// var sym4 = Symbol("key1");
// console.log(sym3 == sym4); //false
// var sysm5 = Symbol("DynamicId");
// var obj = {
//   [sysm5]: 1,
//   name: "pushkar",
//   age: 29,
// };
// console.log(obj);
// console.log(obj.id); // error TS2339: Property 'id' does not exist on type '{ [x: symbol]: number; name: string; age: number; }'.
// console.log(obj[sysm5]);
// let array: number[] = [];
// array.push("hi")
// console.log(array);
// Type Annotations and Inference
// Explicit Type Annotations
// let greeting: string = "Hello, TypeScript!";
// let userCount: number = 42;
// let isLoading: boolean = true;
// let scores: number[] = [100, 95, 98];
// Basic Type Inference
// let username = "pushkar";
// let score = 100;
// let flags = [true, false, true];
// function add(a: number, b: number) {
//   return a + b;
// }
// const user = {
//   name: "Alice",
//   age: 30,
//   isAdmin: true,
// };
//  TypeScript knows these properties exist
// console.log(user.name);  // OK
// console.log(user.email); // Error: Property 'email' does not exist
// Explicit Type Mismatch
// let username: string = "alice";
// username = 42; // Error: Type 'number' is not assignable to type 'string'
//  let score = 100;  // TypeScript infers 'number'
// score = "high";  // Error: Type 'string' is not assignable to type 'number'
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(4, 3)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// 1. JSON.parse returns 'any' because the structure isn't known at compile time
// const data = JSON.parse('{ "name": "Alice", "age": 30 }');
// let something;  // Type is 'any'
// something = 'hello';
// something = 42;  // No error
// TypeScript Special Types
// Type: any
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// let v: any = true;
// v = "string"; // no error as it can be "any" type
// Math.round(v); // no error as it can be "any" type
// Type: unknown
// let w: unknown = 1;
// w = "string"; // no error
// w = {
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   },
// } as { runANonExistentMethod: () => void };
// // How can we avoid the error for the code commented out below when we don't know the type?
// // w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
// if (typeof w === "object" && w !== null) {
//   (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }
// function processValue(value: unknown) {
//   if (typeof value === "string") {
//     // value is now treated as string
//     console.log(value.toUpperCase());
//   } else if (Array.isArray(value)) {
//     // value is now treated as any[]
//     console.log(value.length);
//   }
// }
// processValue("hello");
// Type: never
// 1. Function that never returns
// function throwError(message: string): never {
//   throw new Error(message);
// }
// Type: undefined & null
// let y: undefined = undefined;
// let z: null = null;
// Optional Parameters and Properties
// Optional parameter (implicitly `string | undefined`)
// function greet(name?: string) {
//   return `Hello, ${name || "stranger"}`;
// }
// Optional property in an interface
// interface User {
//   name: string;
//   age?: number; // Same as `number | undefined` }
// }
// Nullish Coalescing and Optional Chaining
// Nullish coalescing (??) - only uses default if value is null or undefined
// const value = input ?? 'default';
// Optional chaining (?.) - safely access nested properties
// const street = user?.address?.street;
// const names: string[] = [];
// names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// const names: readonly string[] = ["Dylan"];
// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4); // no error
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error
// TypeScript Tuples-Typed Arrays
// let ourTuple: [number, boolean, string] = [1,true,"piushkar"];
// ourTuple.push('Something new and wrong');
// console.log(ourTuple);
// define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;
// console.log(x, y);
// TypeScript Object Types
// const car: { type: string; model: string; year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009,
// };
// Type Inference
// const car = {
//   type: "Toyota",
// };
// car.type = "Ford"; // no error
// car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
// const car: { type: string; mileage: number } = { // Error: Property 'mileage' is missing in type
//   type: "Toyota",
// };
// car.mileage = 2000;
// const car: { type: string; mileage?: number } = {
//   type: "Toyota",
// };
// console.log(car.mileage);//undefined
// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// console.log(CardinalDirections.East);//1
// enum CardinalDirections {
//   North = 1,
//   East,
//   South,
//   West,
// }
// console.log(CardinalDirections.East);//2
// Type Aliases
// type CarYear = number;
// type CarType = string;
// type CarModel = string;
// type Car = {
//   year: CarYear;
//   type: CarType;
//   model: CarModel;
// };
// const carYear: CarYear = 2001;
// const carType: CarType = "Toyota";
// const carModel: CarModel = "Corolla";
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel,
// };
// Interfaces - Interfaces are similar to type aliases, except they only apply to object types.
// interface Rectangle {
//   height: number;
//   width: number;
//   printdetails(): void;
// }
// const rectangle: Rectangle = {
//   height: 20,
//   width: 10,
//   printdetails() {
//     console.log("height : ", this.height, "width = ", this.width);
//   },
// };
// interface Rectangle {
//   height: number;
//   width: number;
// }
// interface ColoredRectangle extends Rectangle {
//   color: string;
// }
// const coloredRectangle: ColoredRectangle = {
//   height: 20,
//   width: 10,
//   color: "red",
// };
// TypeScript Union Types -Union types are used when a value can be more than a single type.
// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code}.`);
// }
// printStatusCode(404);
// printStatusCode("404");
// Return Type
// function getTime(): number {
//   return new Date().getTime();
// }
// function printHello(): void {
//   console.log("Hello!");
// }
// function add(a: number, b: number, c?: number) {
//   return a + b + (c || 0);
// }
// function pow(value: number, exponent: number = 10) {
//   return value ** exponent;
// }
// function add(a: number, b: number, ...rest: number[]) {
//   return a + b + rest.reduce((p, c) => p + c, 0);
// }
// TypeScript Casting
// Casting with as
// let x: unknown = "hello";
// console.log((x as string).length);
// TypeScript Classes
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
// class Person {
//   private name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
//   public getName(): string {
//     return this.name;
//   }
// }
// const person = new Person("Jane");
// console.log(person.getName());
// person.name; //'name' is private and only accessible within class 'Person'
// class Person {
//   private readonly name: string;
//   public constructor(name: string) {
//     // name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
//     this.name = name;
//   }
//   public getName(): string {
//     return this.name;
//   }
// }
// const person = new Person("Jane");
// console.log(person.getName());
// interface shape {
//   getArea: () => number;
// }
// class Rectangle implements shape {
//   public constructor(
//     protected readonly width: number,
//     protected readonly height: number
//   ) {}
//   public getArea(): number {
//     return this.width * this.height;
//   }
// }
// interface Shape {
//   getArea: () => number;
// }
// class Rectangle implements Shape {
//   public constructor(
//     protected readonly width: number,
//     protected readonly height: number
//   ) {}
//   public getArea(): number {
//     return this.width * this.height;
//   }
// }
// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }
//   public getArea(): number {
//     return this.width * this.width;
//   }
// }
// Override
// interface Shape {
//   getArea: () => number;
// }
// class Rectangle implements Shape {
//   // using protected for these members allows access from classes that extend from this class, such as Square
//   public constructor(
//     protected readonly width: number,
//     protected readonly height: number
//   ) {}
//   public getArea(): number {
//     return this.width * this.height;
//   }
//   public toString(): string {
//     return `Rectangle[width=${this.width}, height=${this.height}]`;
//   }
// }
// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }
//   // this toString replaces the toString from Rectangle
//   public override toString(): string {
//     return `Square[width=${this.width}]`;
//   }
// }
// let r = new Rectangle(10, 14);
// console.log(r.getArea());
// console.log(r.toString());
// let s = new Square(15);
// console.log(s.getArea());
// console.log(s.toString());
// abstract class Polygon {
//   public abstract getArea(): number;
//   public toString(): string {
//     return `Polygon[area=${this.getArea()}]`;
//   }
// }
// class Rectangle extends Polygon {
//   public constructor(
//     protected readonly width: number,
//     protected readonly height: number
//   ) {
//     super();
//   }
//   public getArea(): number {
//     return this.width * this.height;
//   }
// }
// Generics can be used to create generalized classes, like Map.
// class NamedValue<T> {
//   private _value: T | undefined;
//   constructor(private name: string) {}
//   public setValue(value: T) {
//     this._value = value;
//   }
//   public getValue(): T | undefined {
//     return this._value;
//   }
//   public toString(): string {
//     return `${this.name}: ${this._value}`;
//   }
// }
// let value = new NamedValue<number>("myNumber");
// value.setValue(10);
// console.log(value.toString()); // myNumber: 10
// keyof with explicit keys keyof is a keyword in TypeScript which is used to extract the key type from an object type.
// interface Person {
//   name: string;
//   age: number;
// }
// function printPersonProperty(person: Person, property: keyof Person) {
//   console.log(`Printing person property ${property}: "${person[property]}"`);
// }
// let person = {
//   name: "Max",
//   age: 27,
// };
// printPersonProperty(person, "name"); // Printing person property name: "Max"
// TypeScript Null & Undefined- TypeScript has a powerful system to deal with null or undefined values.
// let value: string | undefined | null = null;
// value = "hello";
// value = undefined;
// function printMileage(mileage: number | null | undefined) {
//   console.log(`Mileage: ${mileage ?? "Not Available"}`);
// }
// printMileage(null); // Prints 'Mileage: Not Available'
// printMileage(0); // Prints 'Mileage: 0'
// function getValue(): string | undefined {
//   return "hello";
// }
// let value = getValue();
// // console.log("value length: " + value?.length); //value length: 5
// let array: number[] = [1, 2, 3, 5];
// let value = array[3];
// console.log(`value = ${value}`); //value = 5
