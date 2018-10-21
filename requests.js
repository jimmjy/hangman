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
            throw new Error('Something went wrong');
        }
    }).then((data) => data);
};

getLocation().then((data) => console.log(`You are from ${data.city} ${data.region} ${data.country}`)).catch((err) => console.log(err));

getLocation().then((data) => {
    return getAnotherCountry(data.country);
}).then((data) => console.log(`the chained country: ${data.name}`)).catch((err) => console.log(err));
