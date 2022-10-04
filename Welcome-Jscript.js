//alert('Click to go');

// MARKING ANIMATION OF CHOOSING GENDER PROFILE.
const genderChoose = function genderFunc(event, str) {
    const maleElem = document.getElementById("male-label");
    const femaleElem = document.getElementById("female-label");

    if (str === 'male') {
        maleElem.style.boxShadow = "0 0 10px 7px lightgreen";
        femaleElem.style.boxShadow = "0 0 0 0 white"; 
    }
    if (str === 'female') {
        femaleElem.style.boxShadow = "0 0 10px 7px lightgreen";
        maleElem.style.boxShadow = "0 0 0 0 white";
    }
}

const selectOrder = function order(event) {
    let selectedItem = document.getElementById("submit");
    selectedItem.style.boxShadow = "0 0 10px 7px lightgreen";
}

