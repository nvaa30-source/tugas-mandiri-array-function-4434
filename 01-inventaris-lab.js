const barangLab = [
    "keyboard",
    "mouse",
    "monitor",
    "kabel HDMI"
];

function tampilkanBarang(daftarBarang) {
    if (daftarBarang.length === 0) {
    console.log("daftar barang kosong");
    return;
    }
        for (i = 0; i < daftarBarang.length; i++) {
            console.log((i + 1) + ". " + daftarBarang[i]);
        }
        console.log("jumlah barang: " + daftarBarang.length);
    }

    function tambahBarang(daftarBarang, namaBarangBaru) {
    if (namaBarangBaru === "") {
        console.log("penambahan ditolak");
        return false;
    }
    if (daftarBarang.includes(namaBarangBaru)) {
        console.log("penambahan ditolak");
        return false;
    }
    daftarBarang.push(namaBarangBaru);
    console.log(namaBarangBaru + " berhasil ditambahkan.");
    return true;
}

function cariBarang(daftarBarang, namaBarang) {
    let indeks = daftarBarang.indexOf(namaBarang);
    return indeks;
}