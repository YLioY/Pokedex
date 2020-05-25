appendPokemonDeteilTableRows(mapOfPokemonDatails);


// append tabel rows depend on map need  
function appendPokemonDeteilTableRows(mapOfPokemonDatails) {

    if (mapOfPokemonDatails.size == 0) {
        setTimeout(appendPokemonDeteilTableRows, 200, mapOfPokemonDatails);
        return
    }

    // I certain that in API every pokemon has the same quantity of stats
    // only first iteration
    for (let entriesDeteils of mapOfPokemonDatails) {

        let detailInformationTable = document.getElementById("detailInformationTable");
        for (let currentStat of entriesDeteils[1].mapOfStats ) {

            let tableRow = document.createElement("tr");
            let tdStatName = document.createElement("td");
            let tdStatValue = document.createElement("td");
            tdStatValue.id = 'stat' + currentStat[0];

            tdStatName.innerHTML = currentStat[0];
            tdStatValue.innerHTML = currentStat[1];

            tableRow.append(tdStatName);
            tableRow.append(tdStatValue);
            detailInformationTable.append(tableRow);
        }

        break;
    }
}


// change stats of detail table
function fillPokemonDeteilTableRows() {    
    
    let pokemonName = event.currentTarget.id.slice(4);

    imgElement = document.getElementById('img' + pokemonName);
    detailObjcet = mapOfPokemonDatails.get(pokemonName);

    //
    let detailImg = document.getElementById('detailImg');
    detailImg.src = imgElement.src;

    // show hiden detail element
    detailImg.parentElement.hidden = false;

    //
    let detailName = document.getElementById('detailName');
    detailName.innerHTML = ucFirst(pokemonName) + ' #' + detailObjcet.id.toString().padStart(3,"0")

    let typeOfPokemon = document.getElementById('typeOfPokemon'); 
    typeOfPokemon.innerHTML = detailObjcet.arrayOfTypes.join(" ");

    for (let currentStat of detailObjcet.mapOfStats) {
        document.getElementById('stat' + currentStat[0]).innerHTML = currentStat[1];
    }
}


function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  