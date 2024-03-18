//3.Write a "person" class to hold all the details

class person{
    constructor(name,dob,gender,city,country){
        this.name= name;
        this.dob=dob;
        this.gender=gender;
        this.city=city;
        this.country=country;
    }
}

var p1 = new person("Abhijith Shreyas.S","10/05/1999","Male","Chennai","India")
console.log(p1.name);
console.log(p1.dob);
console.log(p1.gender);
console.log(p1.city);
console.log(p1.country);