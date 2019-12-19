


function searchPoke(searchTerm) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`).then(result => {
        return result.json();
    }).then(result => {
        // console.log(result)
        init(result);
    })
}

function init(resultFromServer) {
    let species = resultFromServer['species']['name'];

    document.getElementById('poke-species').innerHTML = species;

    document.body.style.backgroundImage = resultFromServer['sprites']['front_default'];
};





document.getElementById('search-btn').addEventListener('click', () => {
    let searchTerm = document.getElementById('search-input').value;
    console.log('btn clicked');
    if (searchTerm) {
        searchPoke(searchTerm);
        console.log(searchTerm);
    }
})