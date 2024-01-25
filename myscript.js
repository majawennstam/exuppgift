const planetInfo = document.getElementsByClassName("planetInfo");
const planetName = document.getElementById("planetName");
const info = document.getElementById("info");
const circumference = document.getElementById("circumference");
const distance = document.getElementById("distance");
const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");
const moons = document.getElementById("moons");
const latinName = document.getElementById("latinName");
const sol = document.getElementById("sol");
const planets = document.getElementById("planets");
const infoPage = document.getElementById("infoPage");
const mainPage = document.getElementById("mainPage");
const apiUrl = "https://majazocom.github.io/Data/solaris.json";

function apiResponse(choosenPlanet) {
    const apiResponse = fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => fillPlanetInfo(data[choosenPlanet]));

}


function fillPlanetInfo(planet) {
    if (document.body.className = "firstPage") {
        infoPage.classList.add("active");
        infoPage.classList.remove("hidden");
        mainPage.classList.add("hidden");
        mainPage.classList.remove("active");
        document.body.className = "secondPage";

    } else {
        document.body.className = "firstPage";
        infoPage.style.display = "block";
        mainPage.style.display = "none";
    }


    planetName.innerHTML = planet.name;
    latinName.innerHTML = planet.latinName;
    info.innerHTML = planet.desc;
    circumference.innerHTML = planet.circumference + "km";
    distance.innerHTML = planet.distance + "km";
    maxTemp.innerHTML = planet.temp.day + "°C";
    minTemp.innerHTML = planet.temp.night + "°C";
    moons.innerHTML = planet.moons.length;

}

planets.addEventListener('click', function (getClick) {
    const planetId = { 'sol': 0, 'merkurius': 1, 'venus': 2, 'jorden': 3, 'mars': 4, 'jupiter': 5, 'saturnus': 6, 'uranus': 7, 'neptunus': 8 };
    const WhichPlanets = getClick.target;
    const choosenPlanet = planetId[WhichPlanets.id];
    if (choosenPlanet != undefined) {
        apiResponse(choosenPlanet);
    } else {
        window.alert("oopsy inget att se här. Prova att klicka på en planet!")
    }

})


function goBack() {
    infoPage.classList.add("hidden");
    infoPage.classList.remove("active");
    mainPage.classList.add("active");
    mainPage.classList.remove("hidden");
    document.body.className = "firstPage";
}

