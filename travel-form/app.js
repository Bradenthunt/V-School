const form = document.getElementById("travel-form");
const submit = document.getElementById("submit");

function formAlert(e) {
    e.preventDefault();

    let firstName = form.elements["first-name"].value;
    let lastName = form.elements["last-name"].value;
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;
    let diet = [];

    let checkedDiet = document.getElementsByClassName('diet')
    for (let i = 0; i < checkedDiet.length; i++) {
        if (checkedDiet[i].checked) {
            if (checkedDiet[i].value === 'other') {
                diet.push(document.getElementById('other-explain').value)
            } else {
                diet.push(checkedDiet[i].value)
            }
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nFantastic! We can't wait to have you aboard Hunt Airways!");
}

submit.addEventListener("click", formAlert);