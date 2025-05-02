let data: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;
for (let i = 0; i < data.length; i++) {
  sum += data[i];
}
// console.log(`The sum is: ${sum}`);
// let average:number = sum / data.length;
// console.log(`The average is: ${average}`);

const printMessage = (
  message: string | number | boolean
): string | number | undefined => {
  if (typeof message === "string") {
    return `Message: ${message}`;
  } else if (typeof message === "number") return message * 2;
  else return undefined;
};
type data = {
  name: string;
  age: number;
};
type dataP = data & { email: string };

let user: dataP = {
  name: "John Doe",
  age: 30,
    email: "a@b.com"
};
console.log(typeof user); // John Doe
console.log(printMessage("Hello World!"));
console.log(typeof (printMessage(5) as string));
console.log(printMessage(true)); // undefined
