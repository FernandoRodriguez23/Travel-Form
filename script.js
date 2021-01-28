
class User{
    constructor(fullname, birth, Dcity, Acity, Dleave, Dreturn, bags, meal, extras, id,){
        this.fullname = fullname;
        this.birth = birth;
        this.Dcity = Dcity;
        this.Acity = Acity;
        this.Dleave = Dleave;
        this.Dreturn = Dreturn;
        this.bags = bags;
        this.meal = meal;
        this.extras = extras;
        this.id = id;
        this.extrasCost = extrasCostT;
    }
}

let userlist = [];
let userId = 1001;
let extraCostB = 0;
let extrasCostT = 0;

function addToList() {
    let fullname = document.getElementById("name").value;
    let birth = document.getElementById("birth").value;
    let Dcity = document.getElementById("dcity").value;
    let Acity = document.getElementById("acity").value;
    let Dleave = document.getElementById("dleave").value;
    let Dreturn = document.getElementById("dreturn").value;
    let bags = document.getElementById("bags").value;
    let meal = checkMeal();
    let extras = document.getElementById("extras").value;

    if(fullname != "" &&  birth != "" && Dcity != "" && Acity != "" && Dleave != "" && Dreturn != "" && bags != ""){
        let user = new User(fullname, birth, Dcity, Acity, Dleave, Dreturn, bags, meal, extras, userId, extrasCostT);
        userId++;
        userlist.push(user);
        document.getElementById("birth").value = "";
        document.getElementById("name").value = "";
        document.getElementById("dcity").value = "";
        document.getElementById("acity").value = "";
        document.getElementById("dleave").value = "";
        document.getElementById("dreturn").value = "";
        document.getElementById("bags").value = "";
        document.getElementById("meal").value = "";
        document.getElementById("extras").value = "";
    }if(bags > 0){
        extraCostB + 20;
    }

    checkExtras();
    extrasCostT = extraCostB + extraCostE;
}   

function checkMeal() {
    let meal = document.getElementsByName("Meal");

    for(let i = 0; i < meal.length; i++){
        if(meal = document.getElementById("steak").checked){
            meal = document.getElementById("steak").value;
        }if(meal = document.getElementById("fish").checked){
            meal = document.getElementById("fish").value;
        }if(meal = document.getElementById("chicken").checked){
            meal = document.getElementById("chicken").value;
        }if(meal = document.getElementById("plant").checked){
            meal = document.getElementById("plant").value;
        }else{
            meal = `No Meal Selected`;
        }
    }
}

let extrasC = document.forms[0];
let extraCostE = 0;
function checkExtras() {
    for(let i  = 0; i < extrasC.length; i++){
        if(extrasC[i].checked){
            extraCostE + 10;
        }
    }
}

function print() {
    listArea = document.getElementById("printhere");
    console.log(userlist);

    listArea.innerHTML = "";
    for(let i = 0; i < userlist.length; i++){
        listArea.innerHTML += `<div><p>|${userlist[i].id}| Name: ${userlist[i].fullname} DoB: ${userlist[i].birth}</p> <p>${userlist[i].Dcity} to
        ${userlist[i].Acity}</p> <p>${userlist[i].Dleave} until ${userlist[i].Dreturn}</p> <p>${userlist[i].bags} bags  Meals: ${userlist[i].meal}</p>  
        <p>${userlist[i].extras} $${userlist.extrasCostT}</p></div>`
    }
}
