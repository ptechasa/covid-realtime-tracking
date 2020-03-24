var total_cases = document.getElementById('total_cases');
var total_deaths = document.getElementById('total_deaths');
var total_recovered = document.getElementById('total_recovered');
var new_cases = document.getElementById('new_cases');
var new_deaths = document.getElementById('new_deaths');
var active_cases = document.getElementById('active_cases')
var table = document.getElementById('countries');

var apihost = config.HOST;
var mykey = config.MY_KEY;

//Fetching all data around the world
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
        active_cases.innerHTML = data.active_cases;
    }))
    .catch(err => {
        console.log(err);
    });

//Fetching data by country
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": apihost,
        "x-rapidapi-key": mykey
    }
})
    .then(response => response.json().then(data => {
        console.log(data);
        let countries = data.countries_stat;
        console.log(countries);
        for (let i = 0; i < countries.length; i++) {
            console.log(countries[i]);

            let row = table.insertRow(i + 1);
            let country_name = row.insertCell(0);
            let cases = row.insertCell(1);
            let deaths = row.insertCell(2);
            let serious_critical = row.insertCell(3);
            let active_cases = row.insertCell(4);
            let recovered = row.insertCell(5);

            country_name.innerHTML = countries[i].country_name;
            cases.innerHTML = countries[i].cases;
            deaths.innerHTML = countries[i].deaths;
            serious_critical.innerHTML = countries[i].serious_critical;
            active_cases.innerHTML = countries[i].active_cases;
            recovered.innerHTML = countries[i].total_recovered;
        }
    }))
    .catch(err => {
        console.log(err);
    });

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}