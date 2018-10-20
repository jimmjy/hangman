const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    
    // http request
    const request = new XMLHttpRequest();

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
        } else if (e.target.readyState === 4) {
            reject('Unable to find words for puzzle');
        }
    });
});

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    //setup http request
    const request = new XMLHttpRequest();

    request.open('GET', 'https://restcountries.eu/rest/v2/all');
    request.send();

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const jsonData = JSON.parse(e.target.responseText);
            const country = jsonData.find((country) => country.alpha2Code === countryCode.toUpperCase());
            resolve(country.name);
        } else if (e.target.readyState === 4) {
            reject('this did not work');
        }
    });
});

getCountry('cm').then((country) => {
    console.log(country);
}, (err) => {
    console.log(`Error: ${err}`);
}) ;