'use strict';

var app = app || {};

var startBtn = document.querySelector('.startBtn');
var refreshBtn = document.querySelector('.refreshBtn');

var outsideBox = document.querySelector('.outside');

function handler() {
	console.log(`mouse hovered over 2000 msec`)
}

function handlerOnce(){
	handler();
	app.eventHandlers.myRemoveEventHandler(outsideBox, 'mouseover');			
	app.eventHandlers.myRemoveEventHandler(outsideBox, 'mouseleave');			
}
startBtn.addEventListener('click', function(evnet){
	var executionValue = document.querySelector('input[name="execution"]:checked').value;
	if(app.eventHandlers){
		if(executionValue === 'multiple') {
			app.eventHandlers.setDelayedEventHandler(outsideBox, 2000, handler);			
		} else {
			app.eventHandlers.setDelayedEventHandler(outsideBox, 2000, handlerOnce);			
		}
	}	 		
});

refreshBtn.addEventListener('click', function(){
	location.reload();	
})
