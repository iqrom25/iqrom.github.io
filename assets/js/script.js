const loadAnime = async () => {
  const data = await fetch('assets/data/anime.json');

  const dataAnime = await data.json();

  const container = document.getElementById('data-anime');

  for (let i = 0; i < dataAnime.anime.length; i++) {
    container.innerHTML += `
        
          <div class="card">
          <div class="card-img">
            <img src="${dataAnime.anime[i].img}"
              alt="loid forger">
              </div>
            <div class="card-body">
              <h4>${dataAnime.anime[i].name}</h4>
              <p>${dataAnime.anime[i].quirk}</p>
            </div>
          </div>
        `
  }

}

window.onscroll = () => {

  const navbar = document.getElementById("navbar");

  if (window.pageYOffset >= 520) {

    navbar.classList.add("change-navbar")
  } else {
    navbar.classList.remove("change-navbar");
  }
}