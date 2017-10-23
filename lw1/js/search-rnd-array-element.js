const maxSizeArray = 9; 
var j=1; 
var Found;
var arr = [];
var isFound = false;
var Out = "";

for (i = 0; i <= maxSizeArray; i++) { 
  arr[i] = Math.floor(Math.random() * (16 - 1)) + 1;  
  Out = Out + j++ + ': '+arr[i] + "\n";
}
alert(Out);

var Found = prompt("Число для поиска: "); 
if ((Found == "") || (isNaN(Found)) || (Found == null)) {
  alert("Ошибка ввода");
  windows.stop;
}

for (i = 0; i <= maxSizeArray; i++) {
  if (arr[i] == Found) {
    isFound = true;
  }
}  	

if (!isFound) { 
  Out = "Число: " + Found + " не найдено";
} else {
  Out = "Число: " + Found + " найдено";
}
alert(Out);
