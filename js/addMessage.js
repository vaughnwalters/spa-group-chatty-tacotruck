var inputObject = {};
var messagesArray= []
var cleared = false;
var inputText = document.getElementById("input");
var clearMessagesButton = document.getElementById("clearMessagesButton");
var chatty = (function(originalFunction) {

    inputText.addEventListener('keydown', function(e){
			var key = e.which||e.keyCode;
			if (key === 13){
				if (cleared===true){
					counter = 0;
					counter ++;
          inputObject.name = input.value
					console.log("inputObject",inputObject );
					messagesArray.push(inputObject);
					console.log("messagesArray",messagesArray );
					input.value = "";
  				for (let i =0; i < messagesArray.length; i++){
  					outputDiv.innerHTML +=
      	 `
      	<div id = "message--${counter}">${messagesArray[i].name}
        <button id="deleteButton--${counter}">delete</button>
      	</div>
    		`
    		return inputObject
  				}
  				
		} else {
					messagesArray = chatty.getMessages();
					populateOnEnter();
				}
			}
    })
  clearMessagesButton.addEventListener('click', function(){
  	 cleared = true;
  	 outputDiv.innerHTML = "";
  	 return cleared;
  	})
  return originalFunction;

}(chatty || {}))

function populateOnEnter(){
	counter = 0;
	inputObject.name = input.value;
	console.log("inputObject",inputObject );
  messagesArray.push(inputObject);
  console.log("messagesArray", messagesArray );
  input.value = "";
  outputDiv.innerHTML = "";
  populateMessagesDiv(messagesArray);
}