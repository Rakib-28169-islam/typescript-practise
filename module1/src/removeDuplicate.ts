const removeDuplicate = <T>(arr:T[]):T[] =>{
    return Array.from(new Set(arr)) as T[];
}
let arr = removeDuplicate([1,2,3,4,5,1,2,3,4,5]);
console.log(arr); // [1,2,3,4,5]
let arr2 = removeDuplicate(["John", "Doe", "Smith", "John", "Doe", "Smith"]);
console.log(arr2); // ["John", "Doe", "Smith"]
let arr3 = removeDuplicate([true, false, true, false]);
console.log(arr3); // [true, false]


const getData  = <T,U extends keyof T>(data:T, key:U):T[U] =>{
    return data[key];
}
type Person = {
    name:string;
    age:number;
    email:string;
}
const person:Person = {
    name:"John",
    age:30,
    email:"a@b.com"
}
console.log(getData(person,"name"));