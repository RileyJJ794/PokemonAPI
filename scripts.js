


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
    let type = resultFromServer['types']['0']['type']['name'];
    let moves = '';

    for (i=0; i < resultFromServer['moves'].length; i++) {
        moves += resultFromServer['moves'][i]['move']['name'];
        moves += '<br/>'
    }

    document.getElementById('poke-moves').innerHTML = moves;
    document.getElementById('poke-species').innerHTML = species;
    document.getElementById('poke-type').innerHTML = type;

    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = 'rgb(200,0,0)';
    document.getElementById('pokedex').style.visibility = 'visible';
};





document.getElementById('search-btn').addEventListener('click', () => {
    let searchTerm = document.getElementById('search-input').value;
    console.log('btn clicked');
    if (searchTerm) {
        searchPoke(searchTerm);
        console.log(searchTerm);
    }
})