//Soal 1
console.log("Soal 1\n");

const phi = 3.14;
let radius = 7
luasLingkaran = (r) => {
    return phi * r * r;
}

kelilingLingkaran = (r) => {
    return 2 * phi * r;
}


console.log("Luas lingkaran = " + luasLingkaran(radius));
console.log("Keliling lingkaran = " + kelilingLingkaran(radius));



//Soal 2

console.log("\n\n\nSoal 2\n");


let kalimat = ""
var tambahKata = (kata1, kata2, kata3, kata4, kata5) => {

    return kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;
}

tambahKata("saya", "adalah", "seorang", "frontend", "developer");

console.log(kalimat);


//Soal 3

console.log("\n\n\nSoal 3\n");

const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(firstName + " " + lastName)
            return
        }
    }
}

//Driver Code 

newFunction("William", "Imoh").fullName();



//Soal 4


console.log("\n\n\nSoal 4\n");

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation } = newObject;
console.log(firstName, lastName, destination, occupation);




//Soal 5

console.log("\n\n\nSoal 5\n");

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
    //Driver Code
console.log(combined)