var audio;

//Hide play button
function hidePause(){
$('#pauseBtn').hide();
}

function play(){
    var audio = document.getElementById("audio");
    audio.play();
	$('#playBtn').hide();
	$('#pauseBtn').show();
	$('#duration').fadeIn(400);
}

//pause button

function pause(){
   
    audio.pause();
	$('#pauseBtn').hide();
	$('#playBtn').show();
}
