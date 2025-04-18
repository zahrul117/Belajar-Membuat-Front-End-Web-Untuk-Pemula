// 1. Buat elemen <p> dan isi dengan teks "Halo DOM!" lalu tambahkan ke dalam elemen #output
const paragraf = document.createElement("p");
paragraf.innerText = "Halo DOM!";
document.getElementById("output").appendChild(paragraf);

// 2. Buat elemen <p> lainnya dan gunakan innerHTML dengan teks "<b>Teks Tebal</b> dari JavaScript"
const paragrafLagi = document.createElement("p");
paragrafLagi.innerHTML = "<b>Teks Tebal</b> dari JavaScript";
document.body.appendChild(paragrafLagi);
// 3. Buat elemen gambar <img>, atur src-nya ke https://picsum.photos/150 dan tambahkan ke #output
const gambar = document.createElement("img");
gambar.setAttribute("src", "https://picsum.photos/150");
document.getElementById("output").appendChild(gambar);
// 4. Buat elemen <p> dan ubah warnanya menjadi merah menggunakan style.color
const paragrafMerah = document.createElement("p");
paragrafMerah.innerText = "Teks ini bewarna merah";
paragrafMerah.style.color = "red";
document.body.appendChild(paragrafMerah);
// 5. Buat elemen <a> (link), beri href ke https://example.com dan tulis "Kunjungi Website", lalu tambahkan ke halaman
const link = document.createElement("a");
link.setAttribute("href", "https://example.com");
link.innerText = "Kunjungi Website";
document.body.appendChild(link);
