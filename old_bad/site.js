
function myFunction() {
    console.log("CLICKED");
    if (document.getElementById("table1").style.color == "white"){
        document.getElementById("table1").style.color = "blue"
    } else {
        document.getElementById("table1").style.color = "white"
    }
    return;
}