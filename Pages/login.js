// Mengambil semua elemen input pada halaman
const inputs = document.querySelectorAll(".input");

// Fungsi untuk menambahkan kelas focus ketika input dalam fokus
function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

// Fungsi untuk menghapus kelas focus ketika input kehilangan fokus
function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value === ""){
        parent.classList.remove("focus");
    }
}

// Menambahkan event listener untuk setiap input
inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});
