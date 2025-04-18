// latihan-cari-dom.js

// Tugas: Ambil elemen sesuai soal di bawah ini dan tampilkan di console

// 1. Ambil elemen dengan id "judul"
const judul = document.getElementById("judul");
console.log(judul.textContent);
// 2. Ambil semua tombol dengan class "tombol"
const tombol = document.getElementsByClassName("tombol");
console.log(tombol);
for (let btn of tombol) {
  console.log(btn);
}
// 3. Ambil semua input radio dengan name "gender"
const radio = document.getElementsByName("gender");
console.log(radio);
for (let ambil of radio) {
  console.log(ambil);
}
// 4. Ambil semua div dengan class "kotak"
const kotak = document.querySelectorAll(".kotak");
console.log(kotak);
for (let ktk of kotak) {
  console.log(ktk);
}
// 5. Ambil semua paragraf dengan class "paragraf"
const paragraf = document.querySelectorAll(".paragraf");
console.log(paragraf);
// 6. Ambil semua <li> di dalam <ul>
const list = document.querySelectorAll("ul li");
console.log(list);
// Silakan isi dan console.log hasilnya, good luck 😎
