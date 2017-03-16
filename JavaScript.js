	var divS = document.getElementsByTagName("div");
	function changeDiv(num){
		for(var index=0; index<divS.length; index++){
			divS[index].style.display="none";
		}
	divS[num].style.display="block";
	}		