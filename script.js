function getFormvalue() {
    //Write your code here

const fname=	document.getElementById("fname");
const lname= document.getElementById("lname"); 
let name=fname.value+" "+lname.value 
alert(name);

	

}

const form =document.getElementById("form1");
form.addEventListener("submit",getFormvalue)