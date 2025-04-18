// Part 1
// Dom Selection
// document.getElementById
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "grey";

// document.getElementByTagName()
const p = document.getElementsByTagName("p");
for (let paragraf of p) {
  paragraf.style.backgroundColor = "lightblue";
}
const h1 = document.getElementsByTagName("h1");
h1[0].style.color = "yellow";

// document.getElementByClassName()
// HTML collection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari javascript";

// document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2");
li2.style.color = "blue";

// document.querySelectorAll()
const pbanyak = document.querySelectorAll("p");
p[2].style.backgroundColor = "lightblue";
