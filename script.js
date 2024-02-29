const inputSlider = document.querySelector("[data-lengthSlider]");
const passwordDisplay = document.querySelector("#passwordDisplay");
const lengthDisplay = document.getElementById("lengthNumber");
const lengthSlider = document.getElementById("lengthSlider");
const lengthBox = document.getElementById("lengthContainer");
const copyBtn = document.querySelector("#copy");
const copyMsg = document.querySelector("#copyMsg");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("#indicator");
const strengthLevel = document.querySelector("#textStrength");
const allCheckboxes = document.getElementsByClassName("checkbox")
const generateBtn = document.querySelector("#generate-password");
const checkBox = document.querySelectorAll('input[type="checkBox"]');
const resetBtn = document.querySelector("#reset");
resetBtn.classList.add("hidden");

// slider value
lengthDisplay.innerText = lengthSlider.value ;
lengthSlider.addEventListener('input' , function (){
    lengthDisplay.innerText = this.value ;
})
lengthBox.addEventListener('dblclick' , function (){
    lengthSlider.value = 10;
    lengthDisplay.innerText = lengthSlider.value ;
})

// checkboxes
let onlyNumber;
let onlyNumPass = "";
const onlyNumberPassword = (count) =>{
    while(count != 0){
        onlyNumber = Math.floor(Math.random() * (10));
        onlyNumber.toString();
        onlyNumPass += onlyNumber;
        count--;
    }
      
}

let onlyUpperCase;
let onlyUpperCasePass = "";
const onlyUpperCasePassword = (count) => {
    while(count != 0){
        let randomNumber = (Math.floor(Math.random() * (90 - 65 + 1)) + 65);
        onlyUpperCase =  String.fromCharCode(randomNumber);
        onlyUpperCasePass += onlyUpperCase;
        count--;
    }
   
}

let onlyLowerCase;
let onlyLowerCasePass = "";
const onlyLowerCasePassword = (count) => {
    while(count != 0){
        let randomNumber = (Math.floor(Math.random() * (122 - 97 + 1)) + 97);
        onlyLowerCase =  String.fromCharCode(randomNumber);
        onlyLowerCasePass += onlyLowerCase;
        count--;
    }

}

let symbolList = ['!' , '@' , '#' , '$' , '&' , '*' ];
let onlySymbol;
let onlySymbolPass = "";
const onlySymbolPassword = (count) => {
    while(count != 0){
        let randomNumber = Math.floor(Math.random() * (6));
        onlySymbol =  symbolList[randomNumber];
        onlySymbolPass += onlySymbol;
        count--;
    }
   
}

let totalMarkedBoxes = 0;
function totalChecked() {
    let total = 0;
    checkBox.forEach(function(checkbox) {
        if(checkbox.checked){
            total++;
        }
    });
    totalMarkedBoxes = total;   
}

let classOfIndicator;
let classOfIndicator2;
let strengthText;
function strength(){
    totalChecked();
    let markedBoxes = totalMarkedBoxes ;
    let count = lengthDisplay.innerText;
    if(count >= 8 && symbolsCheck.checked){
        classOfIndicator2 = "red-shadow";
        classOfIndicator = "bg-red-500";
        strengthText = "Strength : Hard";
        indicator.classList.remove("bg-violet-500");
        indicator.classList.add(classOfIndicator);
        indicator.classList.add(classOfIndicator2);
        strengthLevel.innerText = strengthText;
    }
    else if(count <= 6 && markedBoxes === 1 ){
        classOfIndicator2 = "green-shadow";
        classOfIndicator = "bg-green-500";
        strengthText = "Strength : Easy";
        indicator.classList.remove("bg-violet-500");
        indicator.classList.add(classOfIndicator);
        indicator.classList.add(classOfIndicator2);
        strengthLevel.innerText = strengthText;
    }
    else if(count <= 8 && markedBoxes === 3){
        classOfIndicator2 = "yellow-shadow";
        classOfIndicator = "bg-yellow-500";
        strengthText = "Strength : Medium";
        indicator.classList.remove("bg-violet-500");
        indicator.classList.add(classOfIndicator);
        indicator.classList.add(classOfIndicator2);
        strengthLevel.innerText = strengthText;
    }
    else if(count <= 8 && markedBoxes === 4){
        classOfIndicator2 = "red-shadow";
        classOfIndicator = "bg-red-500";
        strengthText = "Strength : Hard";
        indicator.classList.remove("bg-violet-500");
        indicator.classList.add(classOfIndicator);
        indicator.classList.add(classOfIndicator2);
        strengthLevel.innerText = strengthText;
    }
    else if(count > 8 && count <= 15 && markedBoxes === 2){
        classOfIndicator2 = "yellow-shadow";
        classOfIndicator = "bg-yellow-500";
        strengthText = "Strength : Medium";
        indicator.classList.remove("bg-violet-500");
        indicator.classList.add(classOfIndicator);
        indicator.classList.add(classOfIndicator2);
        strengthLevel.innerText = strengthText;
    }
    else if(count > 8 && count <= 15 && markedBoxes === 1){
        classOfIndicator2 = "green-shadow";
        classOfIndicator = "bg-green-500";
        strengthText = "Strength : Easy";
        indicator.classList.remove("bg-violet-500");
        indicator.classList.add(classOfIndicator);
        indicator.classList.add(classOfIndicator2);
        strengthLevel.innerText = strengthText;
    }
    else if(count > 8 && count <= 15 && markedBoxes === 3){
        classOfIndicator2 = "red-shadow";
        classOfIndicator = "bg-red-500";
        strengthText = "Strength : Hard";
        indicator.classList.remove("bg-violet-500");
        indicator.classList.add(classOfIndicator);
        indicator.classList.add(classOfIndicator2);
        strengthLevel.innerText = strengthText;
    }
    else if(count > 15 && count <= 20 && markedBoxes >= 1){
        classOfIndicator2 = "red-shadow";
        classOfIndicator = "bg-red-500";
        strengthText = "Strength : Hard";
        indicator.classList.remove("bg-violet-500");
        indicator.classList.add(classOfIndicator);
        indicator.classList.add(classOfIndicator2);
        strengthLevel.innerText = strengthText;
    }
    
}


let newStr = "";
// not workable in case of single selected input
function jumbleString(str) {
    
    let newJ = [];
    for (let i = 0 ; i < str.length -1 ; i++) {
        let j = Math.floor(Math.random() * ((str.length)));
        newJ.push(j);
    }
    
    for(let i = 0 ; i < newJ.length -1; i++){
        if(str[i] !== undefined){
            newStr += str[newJ[i]];
        }
    }
}

let fullString = "";
function fullStr() {
    if(uppercaseCheck.checked){
        onlyUpperCasePassword(lengthDisplay.innerText);
        fullString += onlyUpperCasePass;
    }
    if(lowercaseCheck.checked){
        onlyLowerCasePassword(lengthDisplay.innerText);
        fullString += onlyLowerCasePass;
    }
    if(numbersCheck.checked){
        onlyNumberPassword(lengthDisplay.innerText);
        fullString += onlyNumPass;
    }
    if(symbolsCheck.checked){
        onlySymbolPassword(lengthDisplay.innerText);
        fullString += onlySymbolPass;
    } 
}

let passwordOfLimitedLength = "";
function finalPlaceholderVlaue(){
    if(totalMarkedBoxes === 0){
        passwordDisplay.placeholder = "select at least one input";
    }
    else if(totalMarkedBoxes === 1 && uppercaseCheck.checked){
            onlyUpperCasePassword(lengthDisplay.innerText);
            passwordDisplay.placeholder = onlyUpperCasePass;
    }
    else if(totalMarkedBoxes === 1 && lowercaseCheck.checked){
            onlyLowerCasePassword(lengthDisplay.innerText);
            passwordDisplay.placeholder = onlyLowerCasePass;
    }
    else if(totalMarkedBoxes === 1 && numbersCheck.checked){
            onlyNumberPassword(lengthDisplay.innerText);
            passwordDisplay.placeholder = onlyNumPass;
    }
    else if(totalMarkedBoxes === 1 && symbolsCheck.checked){
            onlySymbolPassword(lengthDisplay.innerText);
            passwordDisplay.placeholder = onlySymbolPass;
    }
    else{
        fullStr();
        jumbleString(fullString);
        for(let i = 0 ; i < lengthSlider.value ; i++){
            if(newStr[i] !== undefined){
                passwordOfLimitedLength += newStr[i];
            }
        }
        passwordDisplay.placeholder = passwordOfLimitedLength;
    }
}

generateBtn.addEventListener(('click') , () =>{
    strength();
    finalPlaceholderVlaue();
    resetBtn.classList.remove("hidden");
    generateBtn.classList.add("hidden");
})

resetBtn.addEventListener(('click') , () => {
    passwordDisplay.placeholder = "Generate your password";
    passwordOfLimitedLength = "";
    newStr = ""
    onlyUpperCasePass = "";
    onlyLowerCasePass = "";
    onlyNumPass = "";
    onlySymbolPass = "";
    fullString = "";
    passwordOfLimitedLength = ""
    lengthSlider.value = 10;
    totalMarkedBoxes = 0;
    lengthDisplay.innerText = lengthSlider.value ;
    copyMsg.innerText = '';
    copyMsg.classList.add("hidden");
    
    checkBox.forEach(function(checkbox) {
        if(checkbox.checked){
           checkbox.checked = false;
        }
    });

    resetBtn.classList.add("hidden");
    generateBtn.classList.remove("hidden");
    indicator.classList.remove(classOfIndicator);
    indicator.classList.remove(classOfIndicator2);
    indicator.classList.add("bg-violet-500");
    strengthLevel.innerText = `Strength`;
})

copyBtn.addEventListener(('click') , () =>{
    const valueToCopy = passwordDisplay.placeholder;
    navigator.clipboard.writeText(valueToCopy)
        .then(() => {
            copyMsg.classList.remove("hidden");
            copyMsg.innerText = 'copied';
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
})

