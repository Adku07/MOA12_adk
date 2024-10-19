const movies = [
  { 
    title: "Kuasa Gelap (2024)", 
    description: "Film horor yang mengangkat tema pengusiran setan, terinspirasi dari kisah nyata seorang pastor di Jawa Tengah.", 
    image: "assets/kuasa-gelap.jpg", 
    rating: "★★★★☆",
    category: "Horor"
  },
  { 
    title: "Kutukan Calon Arang (2024)", 
    description: "Film horor tentang lima sahabat yang terjebak dalam kutukan mistis saat mencoba memulai hidup baru.", 
    image: "assets/kutukan-calon-arang.jpg", 
    rating: "★★★★☆",
    category: "Horor"
  },
  { 
    title: "Laut Tengah (2024)", 
    description: "Film adaptasi novel tentang Haia yang harus memilih antara kuliah S2 di Korea Selatan atau menjadi istri kedua.", 
    image: "assets/laut-tengah.jpg", 
    rating: "★★★☆☆",
    category: "Romantic"
  },
  { 
    title: "Kemah Terlarang (2024)", 
    description: "Film horor berdasarkan kejadian nyata, bercerita tentang peristiwa mistis yang menimpa siswa dalam perkemahan.", 
    image: "assets/kemah-terlarang.jpg", 
    rating: "★★★★☆",
    category: "Horor"
  },
  { 
    title: "Tebusan Dosa (2024)", 
    description: "Drama misteri tentang seorang ibu yang berjuang mengungkap kebenaran di balik kecelakaan yang merenggut nyawa putrinya.", 
    image: "assets/tebusan-dosa.jpg", 
    rating: "★★★★☆",
    category: "Horor"
  },
  { 
    title: "Bolehkah Sekali Saja Kumenangis (2024)", 
    description: "Drama tentang perjuangan seorang wanita menghadapi trauma masa kecil dan keluarganya yang bermasalah.", 
    image: "assets/bolehkah-sekali-saja-kumenangis.jpg", 
    rating: "★★★☆☆",
    category: "Drama"
  }
];

const movieList = document.getElementById('isi-film');

// Fungsi untuk menampilkan film
function displayFilms(moviesToDisplay) {
  movieList.innerHTML = ''; // Bersihkan daftar film sebelumnya
  moviesToDisplay.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100">
          <img src="${movie.image}" class="card-img-top img-fluid" alt="${movie.title}">
          <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="rating">${movie.rating}</p>
              <p class="category"><b>${movie.category}</b></p>
              <p class="card-text">${movie.description}</p>
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="openBookingModal('${movie.title}')">Book Ticket</button>
          </div>
      </div>
    `;
    movieList.appendChild(card);
  });
}

// Tampilkan semua film pada awal
displayFilms(movies);

function openBookingModal(movieTitle) {
  document.getElementById('movieTitle').value = movieTitle;
}

function bookTicket() {
  const movieName = document.getElementById('movieTitle').value;
  const name = document.getElementById('name').value;
  const seatsValue = document.getElementById('seats').value;

  const message = `Booking ${movieName} for ${seatsValue} seats by ${name}`;
  
  const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
  modal.hide();

  alert(message);

  document.getElementById('name').value = '';
  document.getElementById('seats').value = '';
}

// Smooth scroll untuk kembali ke atas
document.querySelector(".href-cpy").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// Event listener untuk tombol filter
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    const filteredMovies = category === 'All' ? movies : movies.filter(movie => movie.category === category);
    displayFilms(filteredMovies); 
  });
});
