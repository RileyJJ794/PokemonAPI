


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
    let type = resultFromServer['types']['0']['type']['name']

    document.getElementById('poke-species').innerHTML = species;
    document.getElementById('poke-type').innerHTML = type;

    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = 'rgb(200,0,0)';
};





document.getElementById('search-btn').addEventListener('click', () => {
    let searchTerm = document.getElementById('search-input').value;
    console.log('btn clicked');
    if (searchTerm) {
        searchPoke(searchTerm);
        console.log(searchTerm);
    }
})