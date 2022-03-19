const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://thumbs.gfycat.com/ColdMeaslyKoala-size_restricted.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeName = data.name;
            pokemonName(pokeName.toUpperCase());
            console.log(pokeName);

            let pokeT = "";
            data.types.forEach(element => {
                pokeT = pokeT + element.type.name + " ";
            });

            pokeType(pokeT.toUpperCase());
            console.log(pokeT);

            let pokeHealth = data.stats[0].base_stat;
            pokeHP(pokeHealth);
            console.log(pokeHealth);

            let pokeAtt = data.stats[1].base_stat;
            pokeAttack(pokeAtt);
            console.log(pokeAtt);

            let pokeDef = data.stats[2].base_stat;
            pokeDefense(pokeDef);
            console.log(pokeDef);

            let pokeSAtt = data.stats[3].base_stat;
            pokeSAttack(pokeSAtt);
            console.log(pokeSAtt);

            let pokeSDef = data.stats[4].base_stat;
            pokeSDefense(pokeSDef);
            console.log(pokeSDef);

            let pokeSp = data.stats[5].base_stat;
            pokeSpeed(pokeSp);
            console.log(pokeSp);

            let pokeH = data.height;
            pokeHeight(pokeH + " M");
            console.log(pokeH);

            let pokeW = data.weight;
            pokeWeight(pokeW + " KG");
            console.log(pokeW);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokemonName = (text) => {
    const pokeName = document.getElementById("pokemonName");
    pokeName.value = text;
}

const pokeType = (text) => {
    const pokeT = document.getElementById("pokeType");
    pokeT.value = text;
}

const pokeHP = (text) => {
    const pokeHealth = document.getElementById("pokeHP");
    pokeHealth.value = text;
}

const pokeAttack = (text) => {
    const pokeAtt = document.getElementById("pokeAttack");
    pokeAtt.value = text;
}

const pokeDefense = (text) => {
    const pokeDef = document.getElementById("pokeDefense");
    pokeDef.value = text;
}

const pokeSAttack = (text) => {
    const pokeSAtt = document.getElementById("pokeSAttack");
    pokeSAtt.value = text;
}

const pokeSDefense = (text) => {
    const pokeSDef = document.getElementById("pokeSDefense");
    pokeSDef.value = text;
}

const pokeSpeed = (text) => {
    const pokeSp = document.getElementById("pokeSpeed");
    pokeSp.value = text;
}

const pokeHeight = (text) => {
    const pokeH = document.getElementById("pokeHeight");
    pokeH.value = text;
}

const pokeWeight = (text) => {
    const pokeW = document.getElementById("pokeWeight");
    pokeW.value = text;
}

