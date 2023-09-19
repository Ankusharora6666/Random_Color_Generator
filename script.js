const getColor = () => {
    
    const randomNumber = Math.floor(
Math.random() * 16777215); 
    const randomCode = "#" + 
randomNumber.toString(16); 
    document.body.style.
backgroundColor = randomCode;
    document.getElementbyId( 
"color-code").innerText = randomCode; 


}


document.getElementById("btn"). 
AddEventListener( 
    "click", 
    getColor 
) 
getColor()