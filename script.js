
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
let userId = 1;
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
    let meal = document.getElementById("meal").value;
    let extras = document.getElementById("extras").value;

    if(fullname != "" &&  birth != "" && Dcity != "" && Acity != "" && Dleave != "" && Dreturn != "" && bags != "" && meal != ""){
        let user = new User(fullname, birth, Dcity, Acity, Dleave, Dreturn, bags, meal, extras, id);
        userId++;
        userlist.push(user);
        document.getElementById("name").value = "";
        document.getElementById("birth").value = "";
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

    listArea.innerHTML = "";
    for(let i = 0; i < userlist.length; i++){
        listArea.innerHTML += `<div>${userlist[i].id} ${userlist[i].fullname} ${userlist[i].birth} ${userlist[i].Dcity} 
        ${userlist[i].Acity} ${userlist[i].DLeave} ${userlist[i].Dreturn} ${userlist[i].bags} ${userlist[i].meal}  $${userlist[i].extras} ${userlist.extrasCostT}</div>`
    }
}