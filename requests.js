const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Words were not found');
        };
    }).then((word) => {
        return word.puzzle;
    });
};

//get country with fetch

const getAnotherCountry = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Country not found');
        }
    }).then((data) => country = data.find((data) => data.alpha2Code === countryCode));
};

getAnotherCountry('CA').then((data) => {
    console.log(data.name);
}).catch((err) => {
    console.log(err);
});

const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=ee2efac384b0c6').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Data not found');
        };
    }).then((data) => {
        return data;
    });
};

getLocation().then((data) => {
    return data;
}).then((country) => country.country).then((country) => {
    getAnotherCountry(country).then((data) => console.log(data.name));
}).catch((err) => console.log(err));
