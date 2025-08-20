//deklarasi atribut
interface Book{
    id: number
    judul: string
    kategori: string
    harga: number
    stok: number
}

//deklarasi array books
const books: Book[] = [
    {id: 1, judul: 'TS Dasar', kategori: 'Pemrograman', harga:150_000, stok:10},
    {id: 2, judul: 'NestJS Lanjuran', kategori: 'Web', harga:200_000, stok:5},
    {id: 3, judul: 'Data Structures', kategori: 'Ilmu Komputer', harga:180_000, stok:8}
]

//untuk menampilkan daftar buku berdasarkan kategori
let daftar = books.filter((book)=>book.kategori==="Web")
console.log(daftar);

console.log("");

//untuk menghitung total nilai gudang
let totalNilaiGudang = books.map((book)=>book.harga*book.stok)
console.log(`Total Nilai Gudang Tiap Buku: ${totalNilaiGudang.join(", ")}`);

console.log("");

//untuk mengsortir stok dari terbanyak lalu menambahkan 10 stok di buku dengan stok terbanyak
let urutanTerbesar = books
urutanTerbesar.sort((a, b)=>b.stok-a.stok)
urutanTerbesar[0]!.stok+=10
console.log(urutanTerbesar[0]);

console.log("");

//untuk mengubah format array menjadi "judul-harga(stok:)"
let formatRingkas = books.map(book => `${book.judul} - Rp${book.harga} (Stok: ${book.stok})`)
console.log(formatRingkas);

console.log("");

//untuk menampilkan daftar judul buku
console.log('Daftar Judul Buku:');
books.forEach((book)=>console.log(`- ${book.judul}`))