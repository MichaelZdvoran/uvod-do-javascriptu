
function Add(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    //console.log(input);
    //document.getElementById("output").innerHTML = input;

    output.innerHTML = input.value;

    console.log("Hodnota v inputu je: ", input)

    console.log("Hodnota v inputu je: ", output)

    output.innerHTML += input.value + "<br>";


}   