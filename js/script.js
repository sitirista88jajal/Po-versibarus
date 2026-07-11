function kirimWA(){

let nama = document.getElementById("nama").value;
let wa = document.getElementById("wa").value;
let ukuran = document.getElementById("ukuran").value;
let warna = document.getElementById("warna").value;
let jumlah = document.getElementById("jumlah").value;

// GANTI DENGAN NOMOR ADMIN
let admin = "6287736330469";

let pesan =
`Assalamu'alaikum Admin PO Kaos.

Saya ingin memesan kaos.

Nama : ${nama}
No. WA : ${wa}
Ukuran : ${ukuran}
Warna : ${warna}
Jumlah : ${jumlah}

Mohon diproses. Terima kasih.`;

let url = "https://wa.me/" + admin + "?text=" + encodeURIComponent(pesan);

window.open(url,"_blank");

}
