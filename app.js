

var inputValue = document.getElementById("inputCalculate")
function keyPressed(val) {
    console.log(11 + 3)
    if (!(val == "+" || val == "-" || val == "/" || val == "*" || val == "DEL" || val == "CE" || val == "=" || val == "%" || val == ".")) {
        inputValue.value += +val
    }
    else {
        inputValue.value += val

    }

}
function calculateVal() {
    inputValue.value = eval(inputValue.value)
}
function delKeyHandler() {
    inputValue.value= inputValue.value.slice(0,inputValue.value.length -1 )
    
}
function allDelete(){
   inputValue.value = ""

}