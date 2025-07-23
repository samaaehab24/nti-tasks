
    let form = document.getElementById("myForm");
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let outputDiv = document.getElementById("output");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let nameValue = nameInput.value;
        let emailValue = emailInput.value;

        let userData = document.createElement("div");
        userData.classList.add ("p-2", "border", "mb-2");
        userData.innerHTML = `<strong>Name:</strong> ${nameValue} <br> <strong>Email:</strong> ${emailValue}`;

        outputDiv.appendChild(userData);

        form.reset();
    });






