var input = document.getElementById('pokemonName');
input.addEventListener('keypress', function(event){
   if(event.key === 'Enter') {
      pokeMon();
   }
});

async function pokeMon(){
     try {
        const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();
        if (!pokemonName) {
            alert('Please enter a Pokemon name');
            return;
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            alert('Please enter a existing Pokemon');
            throw new Error("Could not fetch resource");
        }
        
        const pokemon = await response.json();
        console.log(pokemon);

        // Image
        const pokemonSprite = pokemon.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite || '';
        imgElement.style.display = pokemonSprite ? "block" : "none";

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
        //Toggle Display Data
        document.getElementById('pokeDataDiv').style.display = "block";

>>>>>>> 9373f6c511655ea8a53e6b59a9a576c670653eb9
        //Name
        var pokeName = pokemon.name;
        document.getElementById('pokeName').style.display = "block";
        document.getElementById('pokeName').innerHTML = `${pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}`;
=======
        // Toggle Display Data
        document.getElementById('pokeDataDiv').style.display = "block";

        // Name
        var pokeName = pokemon.name || 'N/A';
        document.getElementById('pokeName').style.display = "block";
        document.getElementById('pokeName').innerHTML = sanitizeHTML(pokeName.charAt(0).toUpperCase() + pokeName.slice(1));
>>>>>>> Stashed changes
        
        // Health
        document.getElementById('pokeHP').innerHTML = `Base HP: ${pokemon.stats[0]?.base_stat || 'N/A'}`;

        // Type
        var pokeType = pokemon.types[0]?.type?.name || 'N/A';
        document.getElementById('pokeType').innerHTML = `Type: ${pokeType.charAt(0).toUpperCase() + pokeType.slice(1)}`;

        // Height
        var pokeHeight = pokemon.height ? pokemon.height / 10 : 'N/A';
        document.getElementById('pokeHeight').innerHTML = `Height: ${pokeHeight} metres`;

        // Weight
        var pokeWeight = pokemon.weight ? pokemon.weight / 10 : 'N/A';
        document.getElementById('pokeWeight').innerHTML = `Weight: ${pokeWeight} kg`;

        // Abilities
        var abilityOne = pokemon.abilities[0]?.ability?.name || 'N/A';
        var abilityTwo = pokemon.abilities[1]?.ability?.name || 'N/A';
        document.getElementById('pokeAbility').innerHTML = `Abilities: ${sanitizeHTML(abilityOne.charAt(0).toUpperCase() + abilityOne.slice(1))}, ${sanitizeHTML(abilityTwo.charAt(0).toUpperCase() + abilityTwo.slice(1))}`;

     } catch(error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the Pokemon data. Please enter a correctly named Pokemon.');
     }
}

// Function to sanitize HTML to prevent XSS
function sanitizeHTML(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}
