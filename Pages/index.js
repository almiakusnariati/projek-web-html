const kota = [
    "Cirebon", "Bandung", "Pangandaran", "Sibolga", "Sipirok",
    "Cirebon", "Banjar", "Jakarta", "Sibolga", "Sipirok",
    "Pangandaran", "Bandung", "Cirebon", "Sibolga", "Banjar",
    "Pangandaran", "Bandung", "Jakarta", "Sibolga", "Sipirok"
];

// Mendapatkan kontainer produk dari DOM
const productsContainer = document.querySelector(".product-container");

// Mengambil data produk dari API
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        for (var i = 0; i < 8; i++) {
            const product = products[i];

            // Membuat elemen kotak untuk produk
            const box = document.createElement("div");
            box.classList.add("box");

            // Membuat elemen gambar untuk produk
            const gambar = document.createElement("img");
            gambar.classList.add("gambar");
            gambar.src = product.image;

            // Membuat elemen judul untuk produk
            const title = document.createElement("h4");
            title.textContent = product.title;
            title.classList.add("title");

            // Membuat elemen harga dan stok untuk produk
            const hargaStock = document.createElement("div");
            hargaStock.classList.add("harga-stock");

            // Membuat elemen harga untuk produk
            const price = document.createElement("p");
            price.textContent = "Harga: $" + product.price.toFixed(2);
            price.classList.add("price");

            // Membuat elemen stok untuk produk
            const stock = document.createElement("p");
            stock.textContent = "Stok : " + product.rating.count + " pcs";
            stock.classList.add("stok");

            // Menambahkan harga dan stok ke dalam elemen hargaStock
            hargaStock.appendChild(price);
            hargaStock.appendChild(stock);

            // Membuat elemen rating dan asal kota untuk produk
            const ratingAsalKota = document.createElement("div");
            ratingAsalKota.classList.add("rating-asal-kota");

            // Membuat elemen rating untuk produk
            const rating = document.createElement("p");
            rating.textContent = "Rating : " + product.rating.rate.toFixed(1);
            rating.classList.add("rating");

            // Membuat elemen asal kota untuk produk
            const asalKota = document.createElement("p");
            asalKota.textContent = "Asal Kota : " + kota[i];
            asalKota.classList.add("asal-kota");

            // Menambahkan rating dan asal kota ke dalam elemen ratingAsalKota
            ratingAsalKota.appendChild(rating);
            ratingAsalKota.appendChild(asalKota);

            // Menambahkan elemen gambar, judul, harga dan stok, serta rating dan asal kota ke dalam kotak produk
            box.appendChild(gambar);
            box.appendChild(title);
            box.appendChild(hargaStock);
            box.appendChild(ratingAsalKota);

            // Menambahkan kotak produk ke dalam kontainer produk
            productsContainer.appendChild(box);

            // Menambahkan event listener untuk menampilkan informasi produk saat kotak produk di-klik
            box.addEventListener('click', () => {
                alert("Nama Produk : " + product.title +
                    "\nHarga Produk : $" + product.price.toFixed(2) +
                    "\nDeskripsi Produk : " + product.description +
                    "\nKategori Produk : " + product.category +
                    "\nStok Produk : " + product.rating.count + " pcs" +
                    "\nRating Produk : " + product.rating.rate.toFixed(1));
            });
        }
    });



