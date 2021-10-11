/*select documents elements*/
const myText=document.getElementById("text_value");
const myButton=document.getElementById("check_button")
const myError=document.getElementById("error")

const myMessage=document.getElementById("message")
myButton.addEventListener("click",()=>{

 if(myText.value==""){
     myError.textContent=`please enter a word or phrase`
 } 
 else{
     myError.textContent="";
     isPalindrome(myText.value);
 }



})








function isPalindrome(Str){
const myName=Str.toLowerCase();
// console.log(myName);
const splitMyWord=Str.split("");
// console.log(splitMyWord);

const reverseStr=splitMyWord.reverse();
// console.log(reverseString);

const joinArrays=reverseStr.join("");
// console.log(joinArrays);

const toLowerCase=joinArrays.toLowerCase();
console.log(toLowerCase);

if(myName==toLowerCase){
    message.textContent=`${myName},is palindrome`

    myMessage.classList.add("success")
    myMessage.classList.remove("error")
} else {
    message.textContent=`${myName},is not palindrome`

    myMessage.classList.add("error")
    myMessage.classList.remove("success")
}

// const digit=20;
// if(digit>=15){
//     console.log("not greater nor equal to 15")

    
}






console.log(myText);
console.log(myButton)