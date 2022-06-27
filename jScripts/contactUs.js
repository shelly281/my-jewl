function openPopUP() {
    var lname = document.getElementById('lname').value;
    var fname = document.getElementById('fname').value;
    var alertd = document.getElementsByClassName('alert');


    if (lname != "" && fname != "") {
        alert("ההודעה נשלחה בהצלחה");
    }
}