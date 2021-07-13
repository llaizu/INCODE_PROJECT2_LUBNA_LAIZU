//DOM ELEMENTS
const form = document.querySelector("#contact-form")
const closeModalButton = document.querySelector("#close-modal")
//body will need a class of "modal-active"
const body = document.querySelector("body")
// modal will need to have "hidden" removed
const modal = document.querySelector(".modal")
// modal overlay will need to have "hidden" removed
const modalOverlay = document.querySelector("#modal-overlay")
// Input

const name1 = document.querySelector("#lastName")
const name2 = document.querySelector("#firstName")
const telephone = document.querySelector("#telephone")
const email= document.querySelector("#email")
const message = document.querySelector("#message")
//------------Regex Validation---------------------
const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const validName1 = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'.0-9]+$/
const validTelephone = /^[0-9 \-+]+$/
const validMessage = /^[^<][\s\S]+$/
form.setAttribute("novalidate", true)
form.onsubmit = submitForm
function submitForm(event) {
    event.preventDefault()
   //--------------------- Validation------------
  if(inputValid(validName1, name1) && inputValid(validName1, name2) && inputValid
  (validEmail, email)&& inputValid(validMessage, message)&& (inputValid(validTelephone, telephone)
  || telephone.value=="")){
      console.log(
       `Name: ${name1.value}, ${name2.value}\n Telephone: ${telephone.value} \n Email: ${email.value} 
       \n Message: ${message.value}`)
        displayModal()
      }
      else {
        console.log("Please fill the form carefully")
       
       }
    } 
// Check all inputs are valid if so print
function inputValid(regex, input){
  return regex.test(input.value)
}
function displayModal() {
  
   body.classList.add("modal-active")
   modal.classList.remove("hidden")
  modalOverlay.classList.remove("hidden")
 }
 function closeModal() {
  body.classList.remove("modal-active")
 modal.classList.add("hidden")
  modalOverlay.classList.add("hidden")
 }
closeModalButton.addEventListener("click", closeModal)






