let pokemonList = [];

pokemonList = [
    { name: "Bulbasaur", 
    height: 0.7, 
    types: ['grass', 'poison'] 
},
{   name: "Squirtle", 
    height: 1,  
    types: ['water']    
},
{   name: "Charizard",    
    height: 15, 
    types: ['fire', 'flying'] 
}
];
document.write('<ul>')
for (let i = 0; i < pokemonList.length; i++) {
    document.write('<li>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')')
    if (pokemonList[i].height > 5) {
        document.write(' - wow this pokemon is big!' + '</li>' + '<br>')
    } else { document.write('</li>' + '<br>') }
}
document.write('</ul>')
