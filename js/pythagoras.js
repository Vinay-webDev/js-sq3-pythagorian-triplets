// check for pythagorian triplets
/*
let a = document.getElementById("a").value;
let b = document.getElementById("b").value;
let c = document.getElementById("c").value;
let result = document.getElementById("result");

let hyp = a * a;
let opp = b * b;
let adj = c * c;

function checkForTriplets () {
    if (hyp === opp + adj) {
        result.innerHTML = "<P id='result'> yes! </p>";
        result.style.color = "green";
    }
    else {
        result.innerHTML = "<p id='result'> no! </p>";
        result.style.color = "red";
    }
}
*/
/* from here I used console to check what actually happening under the hood 
and I found out the values are actually need to be entered after the click on 
check so that we need to have those a, b, c values enetered in the web app */
function checkForTriplets() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    
    const result = document.getElementById("result");

    let hyp = a * a;
    let opp = b * b;
    let adj = c * c;
    
    console.log(hyp);
    console.log(opp);
    console.log(adj);
    if (hyp = opp + adj) {
        result.textContent = "yes!";
        result.style.color = "green";
        console.log("true");
    }
    else {
        result.textContent = "no!";
        result.style.color = "red";
        console.log("flase");
    }
}











