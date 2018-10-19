const getPuzzle = (passedFunction) => {
    
    // http request
    const request = new XMLHttpRequest();

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
    request.send();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            passedFunction(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            passedFunction('Error loading data', undefined)
        }
    });
    // callback('Some fake puzzle');
}

const getCountry = (code, callback) => {

    //http request
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.response);
            const country = data.find((country) => country.alpha2Code === code);
            callback(country.name);
            
        } else if (e.target.readyState === 4) {
            callback('Country not found');
        };
    });

    request.open('GET', 'https://restcountries.eu/rest/v2/all');
    request.send();
};