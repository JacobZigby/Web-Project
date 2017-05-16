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
$.ajax({
   type: "GET",
   url: 'data.html',
   dataType:"html",
   success: function(response){
     $('#navigation').html(response);
     }
   });

//working on xml
var xml = new XMLHttpRequest;
xml.onload = function(){
	if(xml.status==200){
			var response = xml.responseXML;
			document.getElementById("tetra").textContent(response.getElementsByTagName('tetra')[0].firstChild.nodeValue);
			document.getElementById("ganon").textContent(response.getElementsByTagName('ganondorf')[0].firstChild.nodeValue);
			document.getElementById("foes").textContent(response.getElementsByTagName('foes')[0].firstChild.nodeValue);
			document.getElementById("waker").textContent(response.getElementsByTagName('waker')[0].firstChild.nodeValue);
	}
}

xml.open('get', 'description.XML', true);
xml.send();

