var imgCount=1;
var total=14;
var pos=0;
var j=2;
function changeImg(x){

	var image=document.getElementById('mainpic');
	imgCount=imgCount+x;

	if(imgCount>total){
		imgCount=1;
	}
	if (imgCount<1) {
		imgCount=total;
	}
    image.src = "img/pic"+imgCount+".jpg";

    var move = document.getElementById("box_border");

    if (j%7-1 ==0) {
      pos-=975;
      move.style.left=pos+'px';
      j++;
    } else {
       pos+=162.5;
       move.style.left=pos+'px';
       j++;
    }

    for (var i = 1; i < 8; i++) {
	  if(imgCount==8){
		document.getElementById("p"+i).src="img/"+Number(i+7)+".jpg";
	}
	  if (imgCount==1) {
		document.getElementById("p"+i).src="img/"+i+".jpg";
	}
  }

}

function fullscreen(){
	var elem = document.getElementById("container");
elem.getElementsByClassName("child");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
}

function download(){
	alert("Image "+imgCount+" downloaded!!!");
}