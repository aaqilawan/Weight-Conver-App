let input = document.getElementById("input-pounds");
input.addEventListener("input" , abc);
document.getElementById("output").style.visibility = "hidden";

function abc(e){
    document.getElementById("output").style.visibility = "visible";
    //show target who's input 
    let pound = e.target.value;
    //Pound convert to Grams
    document.getElementById("gramOutput").innerHTML = pound/0.0022046;
    //Pound convert to Kilograms
    document.getElementById("kgOutput").innerHTML = pound/2.2046;
    //Pound convert to Ounces
    document.getElementById("ouncesOutput").innerHTML = pound*16;
}