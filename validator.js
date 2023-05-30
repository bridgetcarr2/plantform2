//display error message on php page
function printError(elemId, msg){
    document.getElementById(elemId).innerHTML = msg;

}

//this function will ensure that the foorm inputs are valid
function validateForm(){
    //these are the input fromthe html text/input elements
    var FullName = document.appForm.FullName.value;
    var PhoneNumber = document.appForm.PhoneNumber.value;
    var Address = document.appForm.Address.value;
    var CreditCardNumber = document.appForm.CreditCardNumber.value;
    var plants = document.appForm.plants.value;

//track whether or not the inuts are valid
    var nameValid = true;
    var PhoneNumberValid = true;
    var AddressValid = true;
    var CreditCardNumberValid = true;
    var plantsValid = true;
     //clears out any errors when the form is resbmitted
    
        printError("FullNameErr", "");
        printError("PhoneNumberErr", "");
        printError("AddressErr", "");
        printError("CreditCardNumberErr", "");
        printError("plantsErr", "");
    
//check to see if the user entered a valid name
    if (FullName == ""){
        printError("FullNameErr", "Please enter your name.");
        nameValid = false;
    }

//check to see if the user entered a valid phone number
    if (PhoneNumber == ""){
        printError("PhoneNumberErr", "Please enter your phone number.");
        PhoneNumberValid = false;
    }

//check to see if the user entered a valid address
if (Address == ""){
    printError("AddressErr", "Please enter your address.");
    AddressValid = false;
}

//check to see if the user entered a valid credit card
if (CreditCardNumber == ""){
    printError("CreditCardNumberErr", "Please enter your credit card.");
    CreditCardNumberValid = false;
}

//check to see if the user entered a valid planta
if (plants == ""){
    printError("plantsErr", "Please choose a option.");
    plantsValid = false;
}
    if (!nameValid || !PhoneNumberValid || !AddressValid || !CreditCardNumberValid || !plantsValid ){
        return false;
    }
}