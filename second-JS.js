var box = document.getElementById('box');
var details = {
 color: "red",
 name: "Box",
 disappear: function(){
  box.style.visibility = "hidden"
 }
};

function revealShape(){
 box.style.visibility = "visible";
}

function magicTrick(){
 details.disappear();
}