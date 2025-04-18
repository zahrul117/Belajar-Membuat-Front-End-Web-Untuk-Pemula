const judul = document.getElementById("judul");
console.log(judul.textContent);

// by Name
const tombol = document.getElementsByName("btn");
console.log(tombol.length);

// by class
const kotak = document.getElementsByClassName("kotak");
console.log(kotak[0].textContent);

// by Tag
const semuaDiv = document.getElementsByTagName("div");
console.log(semuaDiv.length);

// querySelector (ambil pertama){
const kotakPertama = document.querySelector(".kotak");
console.log(kotakPertama.textContent);

// querySelectorAll(ambil semua)
const semuaKotak = document.querySelectorAll(".kotak");
semuaKotak.forEach((item) => console.log(item.textContent));
