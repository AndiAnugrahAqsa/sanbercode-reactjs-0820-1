// Soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var setKataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);

var upperCaseKataKeempat = kataKeempat.toUpperCase();

console.log(kataPertama + " " + setKataKedua + " " + kataKetiga + " " + upperCaseKataKeempat);



// Soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var firstNumber = Number(kataPertama);
var secondNumber = Number(kataKedua);
var thirdNumber = Number(kataKetiga);
var fourthNumber = Number(kataKeempat);

console.log(firstNumber + secondNumber + thirdNumber + fourthNumber);



// Soal 3

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 25); // do your own! 
var kataKelima = kalimat.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);



// Soal 4

var nilai = 56;

if (nilai >= 80) {
    console.log("A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("C");
} else if (nilai >= 50 && nilai < 60) {
    console.log("D");
} else {
    console.log("E");
}



// Soal 5

var tanggal = 3;
var bulan = 11;
var tahun = 1999;

switch (bulan) {
    case 1:
        {
            bulan = "Januari";
        }
    case 2:
        {
            bulan = "Februari";
            break;
        }
    case 3:
        {
            bulan = "Maret";
            break;
        }
    case 4:
        {
            bulan = "April";
            break;
        }
    case 5:
        {
            bulan = "Mei";
            break;
        }
    case 6:
        {
            bulan = "Juni";
            break;
        }
    case 7:
        {
            bulan = "Juli";
            break;
        }
    case 8:
        {
            bulan = "Agustus";
            break;
        }
    case 9:
        {
            bulan = "September";
            break;
        }
    case 10:
        {
            bulan = "Oktober";
            break;
        }
    case 11:
        {
            bulan = "November";
            break;
        }
    case 12:
        {
            bulan = "Desember";
            break;
        }
    default:
        {
            console.log("Bulan tidak terdeteksi");
        }
}

console.log(tanggal + " " + bulan + " " + tahun);