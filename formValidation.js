window.addEventListener("load",prepareGUI,false);


function validateForm(){

	

	try{

		var inputRefs = document.getElementsByTagName("input");
		var i = 0; 
		var PH  = null;


		for(i=0 ; i < inputRefs.length; i++){
			var current = inputRefs[i];
			var PH = current.getAttribute("placeholder");
		
			//console.log(i);

			if(current.value === " "){
				throw new Error(PH + "saknas");
				console.log(PH + " if");

			}
			if(!isNaN(current.value)){
				throw new Error(PH + "ska vara i bokstäver");
			} 
		}
	}


	catch(oError){
		var text = document.createTextNode(oError);
		var errorRef = document.getElementById("errMsg");
		errorRef.appendChild(text);
		return false;
	}

	return true;

}
function resetForm(){
	var spanRef = document.getElementById("errMsg");
	if(spanRef.firstchild){
		spanRef.removechild("firstchild");
	}
}

function prepareGUI(){

	var sendRef = document.getElementsByTagName("input")[5];
	var resetRef = document.getElementById("resetId");

	sendRef.addEventListener("click",validateForm,false);
	resetRef.addEventListener("click",resetForm,false);
}
