const API_KEY = "6b076f3a79cef0971cd1cd12025fba75"
const city = document.querySelector("#city")
const search = document.querySelector("#search")

search.addEventListener("click", async (e) => {
  e.preventDefault()
  const data = city.value
  if (data) {
      try{
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}`,)
          const weatherData = await response.json()
          console.log(weatherData)
          if (weatherData.cod === 200){
               container.innerhtml = `<p>City: ${weatherData.name}</p>
               <p>Temp: ${(weatherData.main.temp - 273).toFixed(1)}C</p>
               <p>Weather: ${weatherData.weather[0].main}</p>
               <p>Humidity: ${weatherData.main.humidity}</p>
               <p>Wind: ${weatherData.wind.speed} miles/hr</p>`

               visitedCities.push(data)
               localStorage.setItem("visitedCities",JSON.stringify(visitedCities))
            } else {
                  container.innerhtml = `<h3>Weather Information</h3>
                  <p> ${weatherData.message}</p>`
            }
        }catch(e){
           console.log(e)
        }
    }
})
