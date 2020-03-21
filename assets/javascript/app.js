var total_cases = document.getElementById('total_cases'); 
var total_deaths = document.getElementById('total_deaths');
var total_recovered = document.getElementById('total_recovered');
var new_cases = document.getElementById('new_cases');
var new_deaths = document.getElementById('new_deaths');
var table = document.getElementById('countries');

var apihost = config.HOST;
var mykey = config.MY_KEY;


//Fetching Data Total cases
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": apihost,
		"x-rapidapi-key": mykey
	}
})
.then(response => response.json().then(data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    total_deaths.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;
    new_cases.innerHTML = data.new_cases;
    new_deaths.innerHTML = data.new_deaths;
}))
.catch(err => {
	console.log(err);
});

