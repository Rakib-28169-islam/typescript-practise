const throughError = (mesg:string):never=>{
    throw new Error(mesg);
}
const infiniteLoop = ():never=>{
    while(true){
        console.log("Infinite Loop")
    }
}
const error = throughError("This is an error message");