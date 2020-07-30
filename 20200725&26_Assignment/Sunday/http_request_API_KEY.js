// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
//request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=fc8eba353bfbbd5554726f9aea50a10e', true)
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=fc8eba353bfbbd5554726f9aea50a10e', true)

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data)
}

// Send request
request.send()




