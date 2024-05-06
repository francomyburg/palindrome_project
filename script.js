const textBox = document.getElementById("text-input");
const result = document.getElementById("result")
const bottonCheck = document.getElementById("check-btn");



bottonCheck.addEventListener("click",checkPalindrome)

function checkPalindrome(){
    const text = textBox.value;
    console.log(text)
    if (text===""){
        result.textContent="Please input a value";
    }
}

