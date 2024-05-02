const apiKey="e82107fe485ba389ed7d1ec70435b994";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")


async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    // const response=await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    const data=await response.json();

    console.log(data);

    document.querySelector(".city").innerText=data.name;
    document.querySelector(".temp").innerText=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerText=data.main.humidity+"%";
    document.querySelector(".wind").innerText=data.wind.speed+"km/h";
    


}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

});
