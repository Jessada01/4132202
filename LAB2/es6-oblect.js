/*อะไรสักอย่าง ที่เป็นหัวข้อ*/
let cars = {
    brand: "Toyota",
    color:"red" , 
    year: 2010 ,
    fullName: function() {
        return `${this.brand} : ${this.year}` ;
    },
    fullNameA: () => {
        return  `${cars.brand} : ${cars.year}` ;
    },
};

cars.color = "blue" ;
console.log(cars.color) ;

const x = cars ;
x.year = 2020 ;
console.log(cars.year);
console.log(cars.fullNameA());

//
const number = [10,20,30];
const [a,b] = number;
console.log(b);

const {brand ,color , year,fullNameA} = cars ;
console.log(year);
console.log(fullNameA());