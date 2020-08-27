// Soal 1
console.log("Soal 1\n");

console.log("LOOPING PERTAMA");
var flag1 = 2;
while (flag1 <= 20) {
    console.log(flag1 + " - I love coding");
    flag1 += 2;
}


console.log("LOOPING KEDUA");
var flag2 = 20;
while (flag2 >= 2) {
    console.log(flag2 + " - I will become a frontend developer");
    flag2 -= 2;
}



// Soal 2
console.log("\n\nSoal 2\n");

for (var i = 1; i <= 20; i++) {
    if (i % 2 !== 0 && i % 3 === 0) {
        console.log(i + " - I Love Coding");
    } else if (i % 2 !== 0) {
        console.log(i + " - Santai");
    } else {
        console.log(i + " - Berkualitas");
    }

}



// Soal 3
console.log("\n\nSoal 3\n");

for (var i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}



// Soal 4

console.log("\n\nSoal 4\n");

var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(" "));



// Soal 5

console.log("\n\nSoal 5\n");

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sortDaftarBuah = daftarBuah.sort()
for (var i = 0; i < sortDaftarBuah.length; i++) {
    console.log(sortDaftarBuah[i]);
}