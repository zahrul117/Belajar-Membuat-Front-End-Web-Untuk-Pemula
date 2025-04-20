const form = document.getElementById("formKursus");

form.addEventListener("submit", function () {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const kursus = document.getElementById("kursus").value;

  const pesan = `Terima kasih, ${nama}, anda telah mendaftar pada kursus ${kursus}`;
  document.getElementById("outputPendaftaran").innerText = pesan;
});
