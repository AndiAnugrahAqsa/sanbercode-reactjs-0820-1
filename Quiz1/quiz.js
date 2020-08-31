function luasLingkaran(radius) {
    return 3.14 * radius * radius;
}

function luasSegitiga(alas, tinggi) {
    return 1 / 2 * alas * tinggi;
}

function luasPersegi(sisi) {
    return sisi * sisi;
}

var hasilLuasLingkaran = luasLingkaran(40);
console.log("Luas Lingkaran = " + hasilLuasLingkaran);
var hasilLuasSegitiga = luasSegitiga(4, 5);
console.log("Luas Segitiga = " + hasilLuasSegitiga);
var hasilLuasPersegi = luasPersegi(5);
console.log("Luas Persegi = " + hasilLuasPersegi);


console.log("\n\nNomor 13\n");


var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];

daftarAlatTulis.sort();
var i = 0;
while (i < daftarAlatTulis.length) {
    console.log(daftarAlatTulis[i]);
    i++
}



console.log("\n\nNomor 14\n");

var pesertaLomba = [{
        nama: "Budi",
        jenisKelamin: "Pria",
        tinggi: "172cm"
    },
    {
        nama: "Susi",
        jenisKelamin: "Wanita",
        tinggi: "162cm"
    },
    {
        nama: "Lala",
        jenisKelamin: "Wanita",
        tinggi: "155cm"
    },
    {
        nama: "Agung",
        jenisKelamin: "Pria",
        tinggi: "175cm"
    }
];

console.log(pesertaLomba);


console.log("\n\nNomor 15\n");


var daftarNama = [];

function tambahNama(nama, jenisKelamin) {
    var panggilan;
    if (jenisKelamin == "laki-laki") {
        panggilan = "Bapak";
    } else {
        panggilan = "Ibu";
    }


    daftarNama.push({
        nama: nama,
        jenisKelamin: jenisKelamin,
        panggilan: panggilan
    })
}

tambahNama("Asep", "laki-laki");
tambahNama("Siti", "perempuan");
tambahNama("Yeni", "perempuan");
tambahNama("Rudi", "laki-laki");
tambahNama("Adit", "laki-laki");

for (var i = 0; i < daftarNama.length; i++) {
    console.log(i + 1 + ". " + daftarNama[i].panggilan + " " + daftarNama[i].nama);
}