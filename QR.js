let image=document.getElementById("imgs");
let inpValue=document.getElementById("UserInput");
let btn =document.getElementById("btn");
image.style.display="none";
btn.addEventListener("click",()=>{
    if(inpValue.value!="")
    {
    let qrCode="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    let SrcValue=qrCode+inpValue.value;
    image.src=SrcValue;
    image.style.display="block";
    }
    else{
        alert("Please Enter the value")
    }
    
})