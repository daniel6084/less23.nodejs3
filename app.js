















const emptyDiv = document.getElementById("country-list")
const input = document.getElementById("input")
const btn = document.getElementById("btn")

btn.onclick = () => {
    if (input.value.trim()) {
        fetch("https://restcountries.com/v3.1/name/" + input.value)
        .then((res) => res.json())
        .then((country) => {
            renderCard(country)
        })
    }
}

function renderCard(array = []) {
    emptyDiv.innerHTML = ""
    if (array.length === 0) {
        emptyDiv.innerHTML =`
        <div class="spinner-border" role="status">
        <span id="spinner" class="visually-hidden">Loading...</span>
      </div>
      `
    }
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    emptyDiv.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img height="150px" src="${array[i]?.flags?.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${array[i]?.name?.common}</h5>
    <p> Population: <strong> ${array[i]?.population}</p>
    <p class="card-text">Continent: ${array[i]?.continents[0]} /p>
    <a href="${array[i]?.maps?.openStreetMaps}" target="_blank" class="btn btn-primary">Показать на карте</a>
  </div>
</div>
        `  
    }
}

renderCard();

function getCountries() {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json() )
    .then((countryData) => {
        console.log(countryData);
        renderCard(countryData);
    })
}
getCountries();

