var makeHumans = document.getElementById("humanity")
var makeGods = document.getElementById("godProfile")

//I would move this onto your humans object. It is a property that belongs to them and would provide just a little more organization.
var totalMod = 1

function ItemBuilder (name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

// The descriptions on these items are great, you should find a way to display them on the page!
var items = {
    armour:new ItemBuilder("Iron Armour", 0.5, "As they move into the Iron Age, the humans become harder to kill!(Halves damage)"),
    gunpowder:new ItemBuilder("Gunpowder", 2.0, "Why expend your energy smiting when the humans do it well enough themselves?(Doubles damage)"),
    faith:new ItemBuilder("Faith", 1, "Does nothing, but leaves the humans feeling much better about your decision to end their existance.(Removes modifier)"),
    nuke:new ItemBuilder("Nuclear Weapons", 10 ,"From the brilliant minds behind gunpowder, if you liked that, you will love this!(10x damage)"),


}

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
    health: 100,
    items: []

}
var zeus = {
    name: "Zeus, King of Mt. Olympus",
    img: "/assets/pics/zeusImg.jpg",
    attackNames: ["Lightning Bolt"," StormFall"," Pantheon's Fury"],
    health: 100,
    items: []
}
var horus = {
    name: "Horus, God-King of the Sun",
    img: "/assets/pics/HorusImg.jpg",
    attackNames: ["Solar Blast"," Burning Skies"," God King's Rage"],
    health: 100,
    items: []
}



var gods = []
gods.push(odin, zeus, horus)


// I would use this function as the kick off point(how you have it setup) 
// then take the templates and move them into drawGod() and drawHumans() respectively. 
// This is optional, but would separate concerns a little more.
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
              <button type="button" class="btn" onclick="useItem('armour')">Iron Armour</button>
              <button type="button" class="btn" onclick="useItem('gunpowder')">Gunpowder</button>
              <button type="button" class="btn" onclick="useItem('faith')">Faith!</button>
              <button type="button" class="btn" onclick="useItem('nuke')">Nuclear Winter</button>
            </div>
        </div>
  `;
  makeHumans.innerHTML = humanTemplate

  godTemplate = `
    <div class="row d-flex align-items-center flex-column">
      <h1>${god.name}</h1>
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


// Well done combining the attacks into one function
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


// This is nice because it only allows one "item" to be equipped essentially
function useItem(itemName){
    var item = items[itemName]
    totalMod = item.modifier
}


