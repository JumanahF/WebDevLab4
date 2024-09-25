
function changeText(newText) {
    const p = document.getElementById("test");
    p.textContent = newText;
    p.style.fontSize = "30px";
    p.style.backgroundColor = "#ff5500";
    p.style.border = "solid blue 6px";
}


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    return true;
}
