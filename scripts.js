


function searchMarvel(searchTerm) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`).then(result => {
        return result.json();
    }).then(result => {
        // displayResults(result);
        console.log(result)
    })
}

document.getElementById('search-btn').addEventListener('click', () => {
    let searchTerm = document.getElementById('search-input').value;
    console.log('btn clicked');
    if (searchTerm) {
        searchMarvel(searchTerm);
        console.log(searchTerm);
    }
})