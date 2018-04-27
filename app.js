var makeHumans = document.getElementById("humanity")
var makeGods = document.getElementById("godProfile")

var totalMod = 1

var humans = {
    name: "Puny Humans",
    img: "/assets/pics/SDR_SGL_Peasants.png",
    health: 100,
    hits: 0,
}

var odin = {
    name: "Odin, Eternal AllFather",
    img: "/assets/pics/odinImg.jpg",
    attackNames: ["Call Ravens"," Gungnir"," OdinForce"],
    items: []

}
var zeus = {
    name: "Zeus, King of Mt. Olympus",
    img: "/assets/pics/zeusImg.jpg",
    attackNames: ["Lightning Bolt"," StormFall"," Pantheon's Fury"],
    items: []
}
var horus = {
    name: "Horus, God-King of the Sun",
    img: "/assets/pics/HorusImg.jpg",
    attackNames: ["Solar Blast"," Burning Skies"," God King's Rage"],
    items: []
}



var gods = []
gods.push(odin, zeus, horus)


function chooseGod (playerChoice){
  var god = gods[playerChoice];
  
  var godTemplate = "";
  var humanTemplate = "";

  humanTemplate = `
    <div class="row d-flex align-items-center flex-column">
      <h1>${humans.name}</h1>
      <p id="health">Health: ${humans.health}</p>
      <p id="hits">Wrath Endured: ${humans.hits}</p>
    </div>
    <div class="row d-flex justify-content-center">
        <img src="${humans.img}" alt="">
    </div>
        <div class="row d-flex justify-content-center">
            <div class="button-group d-flex justify-around" role="group" aria-label="Button Group">    
              <button type="button" class="btn">Iron Armour</button>
              <button type="button" class="btn">Gunpowder</button>
              <button type="button" class="btn">Faith!</button>
            </div>
        </div>
  `;
  makeHumans.innerHTML = humanTemplate

  godTemplate = `
    <div class="row d-flex align-items-center flex-column">
      <h1>${god.name}</h1>
      <p>Attacks: ${god.attackNames}</p>
    </div>
    <div class="row d-flex justify-content-center">
        <img src="${god.img}" alt="" height=400px width=270px>
    </div>
        <div class="row d-flex justify-content-center">
            <div class="button-group d-flex justify-around" role="group" aria-label="Button Group">    
              <button type="button" onclick="attack(1)" class="btn">${god.attackNames[0]}</button>
              <button type="button" onclick="attack(5)" class="btn">${god.attackNames[1]}</button>
              <button type="button" onclick="attack(10)" class="btn">${god.attackNames[2]}</button>
            </div>
        </div>
  `;
  makeGods.innerHTML = godTemplate
}

function attack(damage){
    var humanHealth = document.getElementById("health")
    var humanHits = document.getElementById("hits")
    humans.hits ++
    humans.health -= damage * totalMod
    if (humans.health < 0){
        humans.health = 0
    }
    humanHealth.innerHTML = "Health: " + humans.health
    humanHits.innerHTML = "Wrath Endured: " + humans.hits
}

function useItem()