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