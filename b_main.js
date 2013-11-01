var Box = {
	
greenButton: document.getElementById('green_b'),
redButton: document.getElementById('red_b'), 
blueButton: document.getElementById('blue_b'),

setButtonEvent: function() {
	Box.greenButton.addEventListener('click', Box.clickResponseGreen);
	Box.redButton.addEventListener('click', Box.clickResponseRed);
	Box.blueButton.addEventListener('click', Box.clickResponseBlue);

},

changeBoxColorGreen: function() {
	var divbox = document.getElementById('box_id'); 
	divbox.className = 'green';
},


changeBoxColorRed: function() {
	var divbox = document.getElementById('box_id'); 
	divbox.className = 'red';
},

changeBoxColorBlue: function() {
	var divbox = document.getElementById('box_id'); 
	divbox.className = 'blue';
},

clickResponseRed: function() {
	Box.changeBoxColorRed();
},

clickResponseGreen: function() {
	Box.changeBoxColorGreen();
},

clickResponseBlue: function() {
	Box.changeBoxColorBlue();
}

};

Box.setButtonEvent();



