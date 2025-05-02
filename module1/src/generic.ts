//basic
{
type Person ={
    name: string;
    age: number;
    isActive: boolean;
    email: string;
    phone: string;
}

// basic generic     
type Generic<T> = T
let id:Generic<number> =1;
let name:Generic<string> = "John Doe";
let isActive:Generic<boolean> = true;
let data:Generic<number[]> = [1, 2, 3, 4, 5];
let data2:Generic<string[]> = ["John", "Doe", "Smith"];
//generic array
type arr<T> = Array<T>;
let arr1:arr<number> = [1, 2, 3, 4, 5];
let arr2:arr<string> = ["John", "Doe", "Smith"];
let arr3:arr<boolean> = [true, false, true, false];
let arr4:arr<Person> = [
    {name: "John Doe", age: 30, isActive: true, email: "a@b.com", phone: "123-456-7890"},
    {name: "John Doe", age: 30, isActive: true, email: "a@b.com", phone: "123-456-7890"},
    {name: "John Doe", age: 30, isActive: true, email: "a@b.com", phone: "123-456-7890"},
];

//generic tuple
type tuple<T, U> = [T, U]
let tuple1:tuple<number, string> = [1, "John Doe"];
let tuple2:tuple<string, boolean> = ["John Doe", true];
let tuple3:tuple<number, boolean> = [1, true];
let tuple4:tuple<string, boolean> = ["John Doe", true];
let tuple5:tuple<number, string[]> = [1, ["John", "Doe", "Smith"]];
let tuple6:tuple<string, number[]> = ["John Doe", [1, 2, 3, 4, 5]];
let tuple7:tuple<number[], string[]> = [[1, 2, 3, 4, 5], ["John", "Doe", "Smith"]];
let tuple8:tuple<string, {name: string, age: number}> = ["John", {name: "Doe", age: 30}];
let tuple9:tuple<number,Person> = [1, {name: "John Doe", age: 30, isActive: true, email: "a@b.com", phone: "123-456-7890"}];


//generic function
type func<T, U> = (arg1: T, arg2: U) => T | U;
let func1:func<number, string> = (arg1, arg2) => {
    return arg1 + arg2.length;
};
let func2:func<string, boolean> = (arg1, arg2) => {
    return arg1 + arg2;
};
let func3:func<number, string[]> = (arg1, arg2) => {
    return arg1 + arg2.length;
};
let func4:func<string, number[]> = (arg1, arg2) => {
    return arg1 + arg2.length;
};
let func5:func<number[], string[]> = (arg1, arg2) => {
    return [...arg1, ...arg2.map(str => str.length)];
};
let func6:func<string, {name: string, age: number}> = (arg1, arg2) => {
    return arg1 + arg2.name;
};
let func7:func<number,Person> = (arg1, arg2) => {
    return arg1 + arg2.age;
};


}
