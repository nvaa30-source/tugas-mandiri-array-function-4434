const nilaiPraktik = [80, 70, 90, 65, 75, 85];
const batasTuntas = 75;

function tampilkanNilai(nilaiPraktik) {
    for (i = 0; i < nilaiPraktik.length; i++) {
        console.log("siswa " + (i + 1) + ": " + nilaiPraktik[i]);
    }
}