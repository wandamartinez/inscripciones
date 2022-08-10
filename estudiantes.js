class Student {
    constructor(id = null, name = null, surname = null, DNI = null, curse = null, age = null){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.DNI = DNI;
        this.curse = curse;
        this.age = age;
    }
    setId(id){
        this.id = id; 
    }
    setName(name){
        this.name = name;
    }
    setSurname(surname){
        this.surname = surname;
    }
    setDNI(DNI){
        this.DNI = DNI;
    }
    setCurse(curse){
        this.curse = curse;
    }
    setAge(age){
        this.age = age;
    }
    
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getSurname(){
        return this.surname;
    }
    getDNI(){
        return this.DNI;
    }
    getCurse(){
        return this.curse;
    }
    getAge(){
        return this.age;
    }

}