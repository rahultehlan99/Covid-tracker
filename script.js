const countryE = document.querySelector('.country');
const totalcasesE = document.querySelector('.totCases');
const recoverE = document.querySelector('.recover');
const totaldeathsE = document.querySelector('.totDeath');
const activecasesE = document.querySelector('.active');
const lastupdateE = document.querySelector('.lastUpd');

function getCountry()
{
    return countryE.value;
}

async function getdata(){

    let cntry = getCountry();

    
    const response  = await fetch(`https://covid-19-data.p.rapidapi.com/country?name=${cntry}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "88ff51c814msh4bb63e08d84f9c9p19beb2jsn5781ffebd94e",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	        }
    });

    const data = await response.json();

    return data;
}


countryE.addEventListener("keypress",function(e){
    if(e.key === 'Enter')
    {
        getdata().then(data=>{
        
        const {country,confirmed,recovered,deaths,lastUpdate} = data[0];
    
    
        countryE.innerHTML = country;
        totalcasesE.innerHTML = confirmed;
        recoverE.innerHTML = recovered;
        totaldeathsE.innerHTML = deaths;
        activecasesE.innerHTML = (confirmed-deaths);
        lastupdateE.innerHTML = lastUpdate;
        
        })
        .catch(error=>{
            alert("No country with this name exists in our database!!!");
            console.error(error);
        });
    }
});







