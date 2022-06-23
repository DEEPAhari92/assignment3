var request = new XMLHttpRequest();
request.open('Get','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload = function(){
    var countryData = JSON.parse(this.responseText);
    console.log(countryData);
    for(let country of countryData){
        console.log(country.name);
        console.log(country.region);
        console.log(country.subregion);
        console.log(country.population);
        
    }
}
