async function getdata(){
    const locate=userInput.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locate}&appid=76dec9d42f8d1deeff17d3a25f524bc9`
    let response = await fetch(url)
    let convertedResponse = await response.json()
    var sys=convertedResponse.sys
    var main = convertedResponse.main
    var weather = convertedResponse.weather[0]
    temp.innerHTML ="Temperature: " + main.temp+"K"
    area.innerHTML = "Location: " + convertedResponse.name
    description.innerHTML = "Weather Type: " + weather.description
    country.innerHTML = "Country: " + sys.country
    // let convertedResponse = await response.json()
    // alert(convertedResponse.name)
    console.log(convertedResponse)
    for (let i = 0; i < weather.length; i++) {
        
        // disp.innerHTML += `<div>${convertedResponse[index].} </div>`
        
    }
}