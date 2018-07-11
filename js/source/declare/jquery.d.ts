/*<reference path="jquery.ts"/>*/
//ajax object setting
interface ajaxObject{
	url:string,
	type:string,
	dataType?:string,
	data?:Object,
	async?:boolean,
	cache?:boolean|string,
	complete?:Function,
	error?:Function,
	success?:Function
}
//jquery class
declare class jquery {
	offsetTop:void;
	top:void;
	left:void;
	//start function
	ready(fun:Function):jquery;
/*=================================================
			class function
==================================================*/
	/**
	* add class take  class name or function
	* Type: Function( Integer index, String currentClassName ) => String 
	*/
  	addClass(classname:string|Function):jquery;
	/**
	* remove class take  class name or function
	* Type: Function( Integer index, String currentClassName ) => String
	*/
  	removeClass(classname:string|Function):jquery;
	/**
	* toggle Class take  class name or boolean if ture add false remove
	*/
  	toggleClass(classname:string,state?:boolean):jquery;
  	/**
  	* check if element has class will return true or false
  	*/
  	hasClass(classname:string):jquery;
/*=================================================
			css function
==================================================*/
  	/**
  	* css style take object with css propertyName:value
  	*/
  	/**
  	* css style take propertyName and value
  	*/
  	css(object?:Object|any,propertyName?:any,value?:any):jquery;
/*=================================================
			effects function
==================================================*/
	//effect hiden element
	hide(duration?:number|string,callback?:Function,options?:Object):jquery;
	//effect show element
	show(duration?:number|string,callback?:Function,options?:Object):jquery;
	//effect switch hiden/show element
	toggle(duration:number|string|Object,callback?:Function):jquery;
	//effect fadeIn element
	fadeIn(duration?:number|string,callback?:Function,options?:Object):jquery;
	//effect fadeOut element
	fadeOut(duration?:number|string,callback?:Function,options?:Object):jquery;
	//effect switch hiden/show element
	fadeToggle(duration?:number|string,callback?:Function,options?:Object):jquery;
	//effect show element
	slideUp(duration?:number|string,callback?:Function,options?:Object):jquery;
	//effect hiden element
	slideDown(duration?:number|string,callback?:Function,options?:Object):jquery;
	//effect switch hiden/show element
	slideToggle(duration?:number|string,callback?:Function,options?:Object):jquery;
	//delay function
	delay(duration:number|string,callback?:Function,options?:Object):jquery;
/*=================================================
			animate function
==================================================*/
	animate(css:Object,duration?:number|string,callback?:Function):jquery;
	stop(clearQueue:boolean,jumpToEnd:boolean):jquery;
/*=================================================
			html get/set function
==================================================*/
	/**
	* get or set textcontent in html element
	*/
	text(text?:string):jquery;
	/**
	* get or set htmlcontent in html element
	*/
	html(text?:string):jquery;
	/**
	* get or set value in input tag in html element
	* Type: Function( Integer index, String value ) => String
	*/
	val(val?:string|number|Array<string|number>|Function):jquery;
	/**
	* get or set attribute in html element return attribute
	* Type: Function( Integer index, String value ) => String
	*/
	attr(attributeName:string,value?:any|Function):jquery;
	/**
	* remove attribute in html element
	*/
	removeAttr(attributeName:string):jquery;
	/**
	* get or set attribute in html element return true or false
	* Type: Function( Integer index, String value ) => String
	*/
	prop(attributeName:string,value?:any|Function):jquery;
	/**
	* remove attribute in html element
	*/
	removeProp(attributeName:string):jquery;
	/**
	* get window scrollTop
	*/
	scrollTop(val?:number):jquery;
/*===============================================
			add element function 	
===============================================*/
	/**
	* add new element to end  of elment target 
	*/
	append(element:any,...elements:any[]):jquery;
	/**
	* add new element to first  of elment target 
	*/
	prepend(element:any,...elements:any[]):jquery;
	/**
	* add new element  before  of elment target 
	*/
	before(element:any,...elements:any[]):jquery;
	/**
	* add new element  after  of elment target 
	*/
	after(element:any,...elements:any[]):jquery;
	/**
	* add new element to end  of elment target 
	*/
	appendTo(target:any):jquery;
	/**
	* add new element to first  of elment target 
	*/
	prependTo(target:any):jquery;
	/**
	* add new element to html page 
	*/
	add(element:string):jquery;
	/**
	* copy element in dom 
	*/
	clone(state?:boolean):jquery;
/*===============================================
			traversing	
===============================================*/
	offset():jquery;
	/**
	* Get the parent of element, optionally filtered by a selector.
	*/
	parent(selector?:any):jquery;
	/**
	* Get the ancestors of element, optionally filtered by a selector.
	* return array of elements
	*/
	parents(selector?:any):jquery;
	/**
	* Get the ancestors of element, optionally filtered by a selector.
	* return array of elements
	*/
	parents(stop?:any,selector?:any):jquery;
	/**
	* For each element in the set,
	* return array of elements
	*/
	closest(stop?:any):jquery;
	/**
	* Get the children of element, optionally filtered by a selector.
	* returnzero or one element selector
	*/
	children(selector?:any):jquery;
	/**
	* find element, filtered by a selector.
	*/
	find(selector:any):jquery;
	/**
	* Get the siblings of element, optionally filtered by a selector.
	* return array of elements
	*/
	siblings(selector?:any):jquery;
	/**
	* Get the immediately following sibling of each element in the set of matched elements.
	* If a selector is provided, it retrieves the next sibling only if it matches that selector.
	*/
	next(selector?:any):jquery;
	/**
	*  Get all following element in the set of matched elements, optionally filtered by a selector.
	*/
	nextAll(selector?:any):jquery;
	/**
	*  Get all following element but not including the element matched by the selector
	*/
	nextUntil(stop?:any,selector?:any):jquery;
	/**
	* Get the prev following sibling of element in the set of matched elements.
	* If a selector is provided, it retrieves the prev sibling only if it matches that selector.
	*/
	prev(selector?:any):jquery;
	/**
	*  Get all prevAll element in the set of matched elements, optionally filtered by a selector.
	*/
	prevAll(selector?:any):jquery;
	/**
	*  Get all prev element but not including the element matched by the selector
	*/
	prevUntil(stop?:any,selector?:any):jquery;
	/**
	*  Reduce the set of matched elements to the first in the set.
	*/
	first():jquery;
	/**
	*  Reduce the set of matched elements to the final one in the set.
	*/
	last():jquery;
	/**
	*  End he most current chain
	*/
	end():jquery;
	/**
	*  Get the closest ancestor element that is positioned.
	*/
	offsetParent():jquery;
	/**
	*  Reduce the set of matched elements to the one at the specified index.
	*/
	eq(index:number):jquery;
	/**
	*  Reduce the set of matched elements to those that match the selector or pass the function's test.
	*  Type: Function( Integer index, Element element ) => Boolean
	*/
	filter(selector?:any|Function):jquery;
	/**
	*  Remove elements from the set of matched elements.
	*  Type: Function( Integer index, Element element ) => Boolean
	*/
	not(selector?:any|Function):jquery;
	/**
	*  Reduce the set of matched elements to those that have a descendant that matches the selector
	*/
	has(selector:any):jquery;
	/**
	*  Remove elements from the set of matched elements.
	*  Type: Function( Integer index, Element element ) => Boolean
	*/
	is(selector?:any|Function):jquery;
	/**
	*  Iterate over a jQuery object, executing a function for each matched element.
	*  Type: Function( Integer index, Element element ) => Boolean
	*/
	each(func:Function):jquery;
	/**
	*   Create a new jQuery object with elements added to the set of matched elements.
	*/
	add(selector:any):jquery;
	/**
	*  Pass array of  element to return values.
	*  Type: Function( Integer index, Element element ) => Boolean
	*/
	map(func:Function):jquery;
	/**
	*  Reduce the set of matched elements to a subset specified by a range of indices.
	*/
	slice(start:number,end?:number):jquery;
	/**
	*   Get the children of each element in the set of matched elements, including text and comment nodes.
	*/
	contents():jquery;
	/**
	*   Add the previous set of elements on the stack to the current set.
	*/
	andSelf():jquery;
	/**
	*    Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
	*/
	addBack(selector?:any):jquery;
/*===============================================
			remove	
===============================================*/
	//remove element form html 
	remove(selector?:string):jquery;
	//remove content of element in html 
	empty():jquery;
/*===============================================
			dimenions	
===============================================*/
	/** 
	* get or set CSS width
	* Type: Function( Integer index, Integer value ) => String or Number
	*/
	width(value?:number|string|Function):jquery;
	/** 
	* get or set CSS height
	* Type: Function( Integer index, Integer value ) => String or Number
	*/
	height(value?:number|string|Function):jquery;
	/** 
	* get or set CSS innerWidth including padding but not border
	* Type: Function( Integer index, Integer value ) => String or Number
	*/
	innerWidth(value?:number|string|Function):jquery;
	/** 
	* get or set CSS innerHeight including padding but not border
	* Type: Function( Integer index, Integer value ) => String or Number
	*/
	innerHeight(value?:number|string|Function):jquery;
	/** 
	* get or set CSS outerWidth including padding, border, and optionally margin
	* Type: Function( Integer index, Integer value ) => String or Number
	*/
	outerWidth(includeMargin?:Boolean,value?:number|string|Function):jquery;
	/**
	* get or set CSS outerHeight including padding, border, and optionally margin
	* Type: Function( Integer index, Integer value ) => String or Number
	*/
	outerHeight(includeMargin?:Boolean,value?:number|string|Function):jquery;
/*===============================================
			events	
===============================================*/
	on(events:string,handler:Function):void;
	on(events:string,selector:any,handler:Function):void;
	hover(fucin:Function, fucout:Function):void;
	load(fucin:Function):void;
/*=================================================
			ajax function
==================================================*/
	ajax(settings:ajaxObject):jquery;
	get(url:string,data?:object,success?:Function):jquery;
	post(url:string,data?:object,success?:Function):jquery;
	getJSON(url:string,data?:object,success?:Function):jquery;
	load(url:string|Element,success?:Function):jquery;
	//when load data success run this function
	done(doneCallbacks:Function,callback?:Function):jquery;
	//when load data fail run this function
	fail(doneCallbacks:Function,callback?:Function):jquery;
	//when load data fail/success run this function
	always(doneCallbacks:Function,callback?:Function):jquery;
/*=================================================
		methode bootstrap
==================================================*/
	collapse(data:Object):jquery;

}
//declare $ to use class jquery
declare function $(selector?:any):jquery;
declare function Jquery(selector:Function):jquery;