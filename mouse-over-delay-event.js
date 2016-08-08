'use strict';
var app = app || {};

app.eventHandlers = (function(document, window){	
	var eventsMap = new Map();
	var timeout = null;			
	var eventHandler = null;
	let timeBeforeFireHandler = 0;

	var executeAfterDelay = function () {				
		if(!timeout){
			timeout = window.setTimeout(function(){
				eventHandler();									
				timeout = null;					
			}, timeBeforeFireHandler);	
		}			
	}	

	var myClearTimeout = function () {		
		window.clearTimeout(timeout);
		timeout = null;			
	}
	
	function setDelayedEventHandler(element, time, handler){
		eventHandler = handler;
		timeBeforeFireHandler = time;

		if(element){
			eventsMap.set('mouseover', executeAfterDelay);
			element.addEventListener('mouseover', executeAfterDelay)
			
			eventsMap.set('mouseleave', myClearTimeout);
			element.addEventListener('mouseleave', myClearTimeout);
		}		
			
	}
	function myRemoveEventHandler(element, event){
		if(eventsMap.get(event)){
			element.removeEventListener(event, eventsMap.get(event));				
			eventsMap.delete(event)
		}
		
	}

	return {
		setDelayedEventHandler: setDelayedEventHandler,
		myRemoveEventHandler: myRemoveEventHandler
	}; 		
}
(document, window));