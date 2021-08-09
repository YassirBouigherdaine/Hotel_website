function validateForm() {
    let e = document.forms["myForm"]["Email"].value;
    if (e == "") {
        alert("Email must be filled out");
        return false;
    }
    else {
        alert("You have been successfully subscribed to our newsletter");
        return true;
    }
}

function mOver(obj) {
    obj.style.width = "300px"
}
function mOut(obj) {
    obj.style.width = "200px"
}