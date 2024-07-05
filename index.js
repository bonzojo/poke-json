var input = document.getElementById('pokemonName');
input.addEventListener('keypress', function(event){
   if(event.key === 'Enter') {
      pokeMon();
   }
})

async function pokeMon(){
     try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok) {
         alert('Please enter a valid pokemon');
            throw new Error("Could not fetch resource")
            
        }
        const pokemon = await response.json();
        console.log(pokemon);

        //Image
        const pokemonSprite = pokemon.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        //Name
        var pokeName = pokemon.name;
        document.getElementById('pokeName').innerHTML = `${pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}`;
        
        //Health
        document.getElementById('pokeHP').innerHTML = `Base HP: ${pokemon.stats[0].base_stat}`;

        //Type
        var pokeType = pokemon.types[0].type.name;
        document.getElementById('pokeType').innerHTML = `Type: ${pokeType.charAt(0).toUpperCase() + pokeType.slice(1)}`;

        //Height
        var pokeHeight = pokemon.height / 10;
        document.getElementById('pokeHeight').innerHTML = `Height: ${pokeHeight} metres`;

        //Weight
        var pokeWeight = pokemon.weight / 10;
        document.getElementById('pokeWeight').innerHTML = `Weight: ${pokeWeight} kg`;

        //Abilities
        var abilityOne = pokemon.abilities[0].ability.name;
        var abilityTwo = pokemon.abilities[1].ability.name;
        document.getElementById('pokeAbility').innerHTML = `Abilities: ${abilityOne.charAt(0).toUpperCase() + abilityOne.slice(1)}, ${abilityTwo.charAt(0).toUpperCase() + abilityTwo.slice(1)}`;

     }
     catch(error){
        console.log(error);
     }
}
