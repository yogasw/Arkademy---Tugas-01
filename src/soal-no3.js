/**
 *
 *
 *
 Kategori: Intermediate

 Pohon Imajinatif
 Diketahui sebuah pohon imajinatif yang tumbuh di sebuah taman.
 Pohon tersebut hanya tumbuh sepanjang 1 m saat musim gugur
 dan 2 kali lipat tinggi pohon tersebut saat musim semi.
 Buatlah program yang menentukan tinggi pohon tersebut
 setelah Y tahun dengan tinggi awal X m.

 REQUIREMENT:
 Input user berupa nilai X dan Y dengan ketentuan :
 X > 0
 Y > 0
 Output berupa tinggi akhir pohon tersebut dengan ketentuan:
 Pada 1 tahun, musim semi datang terlebih dahulu dibandingkan musim gugur.
 **/

let x = 2;
let y = 1;

const tinggi_pohon = (yy) => {
    let pohon = 0;
    for (let i = 1; i <= yy; i++) {
        pohon = pohon + 1 + 2 + 1 + 1;
    }
    return pohon;
};

console.log(`Awal tinggi pohon ${x} setelah ${y} Tahun pohon tumuh menjadi ${tinggi_pohon(y) + x} M`);

