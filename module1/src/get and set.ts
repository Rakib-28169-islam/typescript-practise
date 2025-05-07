{
    class Bio{
        //get and set methods
        private _name: string;
        private _age: number;
        private _email: string;
        constructor(name: string, age: number, email: string) {
            this._name = name;
            this._age = age;
            this._email = email;
        }
        set name(name: string) {
            this._name = name;
        }
        get name() {
            return this._name;
        }
        set age(age: number) {
            this._age = age;
        }
        get age() {
            return this._age;
        }
        set email(email: string) {
            this._email = email;
        }
        get email() {
            return this._email;
        }
        toString()
        {
            return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
        }

    }
    const bio = new Bio("John", 30, "a@b.com");
    bio.name = "Doe";
    bio.age = 31;
    bio.email = "c@d.com";
    console.log(bio.toString());
}