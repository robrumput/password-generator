const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var placeholderPWone = document.getElementById("placeholderPWone")

function generatepasswords(){
    var passwordlenght = 9
    var password = ""
    
    for (var i=0; i<= passwordlenght; i++){
        var randomPW = Math.floor(Math.random() * characters.length)
        password += characters[randomPW, randomPW +1]   
    }
    document.getElementById("placeholderPWone").value = password
    
}

function copypasswords() {
  var copyText = document.getElementById("placeholderPWone");
  copyText.select();
  document.execCommand("copy"); 
  document.getElementById("placeholderPWone").value = "👽👽👽👽👽👽👽👽👽👽"
}