const movies = [
  { 
    title: "Kuasa Gelap (2024)", 
    description: "Film horor yang mengangkat tema pengusiran setan, terinspirasi dari kisah nyata seorang pastor di Jawa Tengah.", 
    image: "assets/kuasa-gelap.jpg", 
    rating: "★★★★☆" 
  },
  { 
    title: "Kutukan Calon Arang (2024)", 
    description: "Film horor tentang lima sahabat yang terjebak dalam kutukan mistis saat mencoba memulai hidup baru.", 
    image: "assets/kutukan-calon-arang.jpg", 
    rating: "★★★★☆" 
  },
  { 
    title: "Laut Tengah (2024)", 
    description: "Film adaptasi novel tentang Haia yang harus memilih antara kuliah S2 di Korea Selatan atau menjadi istri kedua.", 
    image: "assets/laut-tengah.jpg", 
    rating: "★★★☆☆" 
  },
  { 
    title: "Kemah Terlarang (2024)", 
    description: "Film horor berdasarkan kejadian nyata, bercerita tentang peristiwa mistis yang menimpa siswa dalam perkemahan.", 
    image: "assets/kemah-terlarang.jpg", 
    rating: "★★★★☆" 
  },
  { 
    title: "Tebusan Dosa (2024)", 
    description: "Drama misteri tentang seorang ibu yang berjuang mengungkap kebenaran di balik kecelakaan yang merenggut nyawa putrinya.", 
    image: "assets/tebusan-dosa.jpg", 
    rating: "★★★★☆" 
  },
  { 
    title: "Bolehkah Sekali Saja Kumenangis (2024)", 
    description: "Drama tentang perjuangan seorang wanita menghadapi trauma masa kecil dan keluarganya yang bermasalah.", 
    image: "assets/bolehkah-sekali-saja-kumenangis.jpg", 
    rating: "★★★☆☆" 
  }
];


const movieList = document.getElementById('isi-film');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.className = 'col-12 col-sm-6 col-md-4 mb-4';
  card.innerHTML = `
      <div class="card h-100">
          <img src="${movie.image}" class="card-img-top img-fluid" alt="${movie.title}">
          <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="rating">${movie.rating}</p>
              <p class="card-text">${movie.description}</p>
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="openBookingModal('${movie.title}')">Book Ticket</button>
          </div>
      </div>
  `;
  movieList.appendChild(card);
});

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

