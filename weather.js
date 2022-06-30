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
async function getlocation() {
    navigator.geolocation.
    getCurrentPosition((position)=>{
        localStorage.latitude=position.coords.latitude
        localStorage.longitude=position.coords.longitude
        work()
    })
}
async function work(){
    const longitude=localStorage.longitude
    const latitude=localStorage.latitude
    const url2=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=76dec9d42f8d1deeff17d3a25f524bc9`
    let response2 = await fetch(url2)
    let convertedResponse2 = await response2.json()
    console.log(convertedResponse2)
    temp.innerHTML ="Temperature: " + convertedResponse2.main.temp+"K"
    area.innerHTML = "Location: " + convertedResponse2.name
    description.innerHTML = "Weather Type: " + convertedResponse2.weather[0].description
    country.innerHTML = "Country: " + convertedResponse2.sys.country
}