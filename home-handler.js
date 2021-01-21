const friendsSlider = document.getElementById("Friends");
const familySlider = document.getElementById("Family");
const fieldSlider = document.getElementById("Field");
const fun = document.getElementById("Fun");
const fitness = document.getElementById("Fitness");
const faith = document.getElementById("Faith");
const financeSlider = document.getElementById("Finance");
const submit = document.getElementById("Submit");


const friendsOutput = document.getElementById("demo1");
const familyOutput = document.getElementById("demo2");
const fieldOutput = document.getElementById("demo3");
const funOutput = document.getElementById("demo4");
const fitnessOutput = document.getElementById("demo5");
const faithOutput = document.getElementById("demo6");
const financeOutput = document.getElementById("demo7");

friendsOutput.innerHTML = friendsSlider.value;
familyOutput.innerHTML = familySlider.value;
fieldOutput.innerHTML = fieldSlider.value;
funOutput.innerHTML = fun.value;
fitnessOutput.innerHTML = fitness.value;
faithOutput.innerHTML = faith.value;
financeOutput.innerHTML = financeSlider.value;

const STHObject = {
    friends: "5",
    family: "5",
    field: "5",
    fun: "5",
    fitness: "5",
    faith: "5",
    finance: "5"
};

friendsSlider.oninput = function() {
    friendsOutput.innerHTML = this.value;
    STHObject.friends = this.value;
}

familySlider.oninput = function() {
    familyOutput.innerHTML = this.value;
    STHObject.family = this.value;
}

fieldSlider.oninput = function() {
    fieldOutput.innerHTML = this.value;
    STHObject.field = this.value;
}

fun.oninput = function() {
    funOutput.innerHTML = this.value;
    STHObject.fun = this.value;
}

fitness.oninput = function() {
    fitnessOutput.innerHTML = this.value;
    STHObject.fitness = this.value;
}

faith.oninput = function() {
    faithOutput.innerHTML = this.value;
    STHObject.faith = this.value;
}

financeSlider.oninput = function() {
    financeOutput.innerHTML = this.value;
    STHObject.finance = this.value;
}


submit.onclick = function() {
    fetch("http://localhost:5050/create", {

        // Adding method type 
        method: "POST",

        // Adding body or contents to send 
        body: JSON.stringify(STHObject),

        // Adding headers to the request 
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => alert("Data recorded"));

    /*   // Converting to JSON 
      .then(response => response.json()) 
        
      // Displaying results to console 
      .then(json => console.log(json));  */
}