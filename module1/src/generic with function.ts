{
    // This is a generic function that takes a type parameter T and returns a value of type T.
    // It can be used to create a function that can work with any type.
    // For example, you can create a function that takes a number and returns a string, or a function that takes a string and returns a number.
    // The function can be used to create a function that takes a number and returns a string, or a function that takes a string and returns a number.
 
    
    const addNumbers = <T extends number | string | number[] | string[]>(a: T, b: T): T => {
        if (Array.isArray(a) && Array.isArray(b)) {
            return [...a, ...b] as T;
        }
        return (a as any) + (b as any);
        
    }
    const res = addNumbers<number>(1,2);
    console.log(res); // 3
    const res2 = addNumbers<string>("Hello ","World");
    console.log(res2); // Hello World
   
    const res4 = addNumbers<number[]>([1,2,3],[4,5,6]);
    console.log(res4); // [1,2,3,4,5,6]
}