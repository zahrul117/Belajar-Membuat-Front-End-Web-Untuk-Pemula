// 1. Buat elemen <h2> dengan teks "Ini Judul dari JavaScript" dan tambahkan ke dalam elemen #output
const judul = document.createElement("h2");
judul.innerText = "Ini judul dari Javascript";
document.getElementById("output").appendChild(judul);
// 2. Buat elemen <ul> dan tambahkan 3 elemen <li> di dalamnya dengan isi bebas (misalnya: "Item 1", dst), lalu tambahkan ke dalam body
const list = document.createElement("ul");
for (i = 1; i <= 3; i++) {
  const item = document.createElement("li");
  item.innerText = "Item " + i;
  list.appendChild(item);
}
document.body.appendChild(list);
// 3. Buat elemen <img> dan atur:
//    - src = "https://placekitten.com/200/200"
//    - alt = "Gambar Kucing Lucu"
//    Tambahkan ke dalam elemen #output
const gambar = document.createElement("img");
gambar.setAttribute("src", "https://placekitten.com/200/200");
gambar.setAttribute("alt", "Gambar Kucing Lucu");
document.getElementById("output").appendChild(gambar);
// 4. Buat tombol <button> dengan teks "Klik Aku!" dan tambahkan ke dalam body
//    Lalu tambahkan event: ketika tombol diklik, tampilkan alert("Tombol diklik!")
const tombol = document.createElement("button");
tombol.innerText = "Klik aku";
tombol.addEventListener("click", function () {
  alert("Tombol diklik!");
});
document.body.appendChild(tombol);
// 5. Buat elemen <div> dan berikan teks "Box ini punya border dan padding", lalu atur style-nya:
//    - border: 2px solid black
//    - padding: 10px
//    Tambahkan ke body
const kotak = document.createElement("div");
kotak.innerText = "box ini punya border dan padding";
kotak.style.border = "2px solid black";
kotak.style.padding = "10px";
document.body.appendChild(kotak);
