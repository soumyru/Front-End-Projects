const textarea=document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu=document.querySelector(".save-as select"),
saveBtn= document.querySelector(".save-btn");

saveBtn.addEventListener("click",()=>{
    const blob=new Blob([textarea.value],{type: selectMenu.value}) //{type: selectMenu.value} is an object
    //URL.createObjectURl creates a url that represent passed object
    const fileUrl=URL.createObjectURL(blob);//it calls URL.createObjectURL() to convert the blob into a URL.
    const link=document.createElement("a");//creating <a> tag
    link.download=fileNameInput.value;//passing filename as download value of link
    link.href=fileUrl;//paasing fileurl as href value of link
    link.click(); //clicking link so the file download
   
})