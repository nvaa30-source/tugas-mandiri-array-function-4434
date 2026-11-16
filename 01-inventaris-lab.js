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

function hapusBarang(daftarBarang, namaBarang) {
    if (daftarBarang.indexOf(namaBarang) === -1) {
        console.log("Penghapusan gagal tanpa mengubah data");
        return false;
    }
    daftarBarang.splice(daftarBarang.indexOf(namaBarang), 1);
    console.log(namaBarang + " berhasil dihapus.");
    return true;
}

console.log("=== INVENTARIS LABORATORIUM ===");
console.log("\ndaftar Barang Awal:");
tampilkanBarang(barangLab);
console.log("\n[tambah Barang]");
tambahBarang(barangLab, "Webcam");
console.log("\n[cari Barang]");
console.log("monitor ditemukan pada indeks " + cariBarang(barangLab, "Monitor") + ".");
console.log("\n[apus Barang]");
hapusBarang(barangLab, "Mouse");
console.log("\ndaftar barang terbaru:");
tampilkanBarang(barangLab);