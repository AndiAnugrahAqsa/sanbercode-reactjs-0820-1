// Soal 1

console.log("Soal 1\n");

function halo() {
    return "Halo Sanbers!";
}
console.log(halo());



// Soal 2

console.log("\n\n\nSoal 2\n");

function kalikan() {
    return (num1 * num2);
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);

console.log(hasilKali);




// Soal 3

console.log("\n\n\nSoal 3\n");

function introduce(name, age, address, hobby) {
    return ("Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby)

}

var name = "John"
var age = 30
var address = "jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)




// Soal 4

console.log("\n\n\nSoal 4\n");
var objDaftarPeserta = {
    nama: "Asep",
    jenisKelamin: "laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992
}

console.log(objDaftarPeserta);


// Soal 5

console.log("\n\n\nSoal 5\n");

var daftarBuah = [{
        nama: "strawberry",
        warna: "merah",
        adaBijinya: "tidak",
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        adaBijinya: "ada",
        harga: 8000
    },
    {
        nama: "Samangka",
        warna: "Hijau & merah",
        adaBijinya: "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: "tidak",
        harga: 5000
    }
];

console.log(daftarBuah[0]);




// Soal 6

console.log("\n\n\nSoal 6\n");

var dataFilm = [];

function inputDataFilm(nama, durasi, genre, tahun) {
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    });
};

inputDataFilm("Infinity War", "149 menit", "Action", 2018);

console.log(dataFilm);