let arr = [];
let sub = document.getElementById("btn");
sub.addEventListener("click", () => {
    let elements = [];
    elements[0] = document.getElementById("name");
    elements[1] = document.getElementById("num");
    elements[2] = document.getElementById("options")
    elements[3] = document.getElementById("img");
    elements[4] = document.getElementById("tbody");

    if (elements[0].value == "" || elements[0].value == null) {
        elements[0].style.borderColor = 'red';
        alert("please enter the name");
    }
    if (elements[1].value == "" || elements[1].value == null) {
        elements[1].style.borderColor = 'red';
        alert("please enter the price");
    }
    else if (isNaN(elements[1].value) || elements[1].value == null) {
        elements[1].style.borderColor = 'red'
        alert("it has to be a number");
    }
     if (elements[3].value == "" || elements[3].value == null) {
        elements[3].style.borderColor = 'red';
        alert("you have to add a picture");
    }

    else {
        let el1 = document.createElement("label");
        let el2 = document.createElement("label");
        let el4 = document.createElement("img")
        el4.className = "str";
        let el5 = document.createElement("td");
        let el6 = document.createElement("td");
        let el8 = document.createElement("td");
        let el9 = document.createElement("tr")

        el1.textContent = elements[0].value;
        el2.textContent = elements[1].value;
        el4.src = elements[3].value;


        el5.appendChild(el1);
        el6.appendChild(el2);
        el8.appendChild(el4);
        el9.appendChild(el5);
        el9.appendChild(el6);
        el9.appendChild(el8);

        elements[4].appendChild(el9);

        elements[4].getElementsByTagName("tr");
        let x = {
            thename: elements[0].value,
            theprice: elements[1].value,
            option: elements[2].value
        };
        arr.push(x);
        elements[0].value = "";
        elements[1].value = "";
        elements[3].value = "";



        localStorage.setItem("data", JSON.stringify(arr));

        



    }




});


