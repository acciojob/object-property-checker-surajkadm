const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {

var isKey;
   for (let i in sampleObject) {
        if(i==key){
            isKey=true;
            console.log("in if stat");
            break;
        }
        console.log("in for stat");
	   isKey=false
    } 
 return isKey;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
