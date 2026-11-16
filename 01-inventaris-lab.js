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