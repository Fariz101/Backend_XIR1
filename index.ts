//deklarasi atribut
interface Order {
  id: number;
  customer: string;
  menu: string;
  qty: number;
  price: number;
}

interface New {
  customer: string;
  total: number;
}

//pembuatan daftar pesanan menggunakan objek in array
const orders: Order[] = [
  { id: 1, customer: "Andi", menu: "Nasi Goreng", qty: 2, price: 20000 },
  { id: 2, customer: "Budi", menu: "Mie Ayam", qty: 1, price: 15000 },
  { id: 3, customer: "Citra", menu: "Es Teh", qty: 3, price: 5000 },
  { id: 4, customer: "Andi", menu: "Es Jeruk", qty: 1, price: 8000 },
];

//deklarasi variabel total yang berisi perkalian atribut qty dan price
let total = orders.map((x) => x.qty * x.price);
console.log(`Total harga untuk setiap pesanan adalah ${total.join(", ")}`);

console.log("");

//pembuatan array kosong baru
let newArray: New[] = [];
//untuk mengisi nilai di array baru dengan menggunakan nilai di atribut lama
orders.forEach((x) =>
  newArray.push({ customer: x.customer, total: x.qty * x.price })
);
//untuk output
newArray.forEach((x) =>
  console.log(x)
);

console.log("");

//untuk memfilter qty yang lebih dari satu
let daftar = orders.filter((x) => x.qty > 1);
console.log("Daftar pesanan yang memiliki qty lebih dari 1");
//untuk output
daftar.forEach((x) =>console.log(x));
