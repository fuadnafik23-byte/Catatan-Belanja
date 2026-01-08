function tambahBarang() {
const input = document.getElementById("inputBarang");
const daftar = document.getElementById("daftarBelanja");


if (input.value === "") {
alert("Nama barang tidak boleh kosong");
return;
}


const li = document.createElement("li");
li.textContent = input.value;


daftar.appendChild(li);
input.value = "";
}