// Offset for Site Navigation

for(var index=1; index<=4; index++){
	var ref="#img" + index;
	$(ref).mouseover(grow);
	$(ref).mouseout(shrink);
};
function grow(){
	$(this).animate({
		height: "+=10",
		width: "+=10"
	})
};
function shrink(){
	$(this).animate({
		height: "-=10",
		width: "-=10"
	})
};
function mute(){
	var ref=document.getElementById("music");
	if(ref.muted==true){
		ref.muted=false;
		document.getElementById("mute").textContent="Mute";
	}
	else{
		ref.muted=true;
		document.getElementById("mute").textContent="UnMute";
	}
}
