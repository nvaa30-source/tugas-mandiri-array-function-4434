const nilaiPraktik = [80, 70, 90, 65, 75, 85];
const batasTuntas = 75;

function tampilkanNilai(nilaiPraktik) {
    for (i = 0; i < nilaiPraktik.length; i++) {
        console.log("siswa " + (i + 1) + ": " + nilaiPraktik[i]);
    }
}

function hitungRatarata(nilaiPraktik) {
    if (nilaiPraktik.length === 0) {
        return 0;
    }
    totalNilai = 0;
    for (i = 0; i < nilaiPraktik.length; i++) {
        totalNilai += nilaiPraktik[i];
    }
    return totalNilai / nilaiPraktik.length;
}

function hitungJumlahTuntas(nilaiPraktik, batasTuntas) {
    jumlahTuntas = 0;
    for (i = 0; i < nilaiPraktik.length; i++) {
        if (nilaiPraktik[i] >= batasTuntas) {
            jumlahTuntas++;
        }
    }
    return jumlahTuntas;
}

function hitungJumlahBelumTuntas(nilaiPraktik, batasTuntas) {
    jumlahBelumTuntas = 0;
    for (i = 0; i < nilaiPraktik.length; i++) {
        if (nilaiPraktik[i] < batasTuntas) {
            jumlahBelumTuntas++;
        }
    }
    return jumlahBelumTuntas;
}

console.log("=== NILAI PRAKTIK SISWA ===");
tampilkanNilai(nilaiPraktik);
console.log("");

console.log("=== REKAPITULASI ===");
console.log("jumlah siswa:" + nilaiPraktik.length);
console.log("nilai rata-rata:" + hitungRatarata(nilaiPraktik));
console.log("jumlah tuntas:" + hitungJumlahTuntas(nilaiPraktik, batasTuntas));
console.log("jumlah belum tuntas:" + hitungJumlahBelumTuntas(nilaiPraktik, batasTuntas));