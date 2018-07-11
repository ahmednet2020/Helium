/*global $, alert, document, window, console */
///<reference path="./declare/jquery.d.ts" />
///<reference path="./declare/greensock.d.ts" />
document.addEventListener("DOMContentLoaded", function () {
	//html element save in varibal
	let togglemenu:any = document.querySelector(".toggle-menu");
	let navlist:any = document.querySelector(".nav-list");
	let shadow:any = document.querySelector(".shadow");
	let navitem:any = document.querySelectorAll(".nav-item");
	//set all effect to be ready
	TweenMax.set(navlist,{scale:0});
	//function close menu effect
	function elemt(e:any){
		e.preventDefault();
		togglemenu.focus();
		return false;
	}
	function closeMenu():void
	{
		//effect button
		TweenMax.to(togglemenu,0.5,{className:"-=close",rotation:0,ease:SlowMo.easeIn,onComplete:()=>{
			togglemenu.setAttribute("aria-expanded","false");
			navitem[0].querySelector("a").focus();
			navitem.forEach((e:any)=>{
				e.querySelector("a").setAttribute("tabindex","-1")
			})
		}});
		//effect navlist
		TweenMax.to(navlist,0.5,{scale:0,transformOrigin:"top left"});
		//show the shadow div
		TweenMax.set(shadow,{className:"-=show"})
	}
	//function open menu effect
	function openMenu():void
	{
		//effect button
		TweenMax.to(togglemenu,0.5,{className:"+=close",rotation:180,ease:SlowMo.easeOut,onComplete:()=>{
			togglemenu.setAttribute("aria-expanded","true");
			navitem[0].querySelector("a").focus();
			navitem[navitem.length-1].addEventListener("keydown", elemt);
			navitem.forEach((e:any)=>{
				e.querySelector("a").setAttribute("tabindex","0")
			})
		}});
		//effect navlist
		TweenMax.to(navlist,1,{scale:1,transformOrigin:"top left",ease:Elastic.easeOut});
		//hidden the shadow div
		TweenMax.set(shadow,{className:"+=show"});
	}
	//toggle button navbar click event
	togglemenu.addEventListener("click", function(e:any):void{
		e.preventDefault();
		//check if menu open or close
		if(togglemenu.classList.contains("close"))
		{
			closeMenu();
		} else {
			openMenu();
		}
	});

	//shadow click to close
	shadow.addEventListener("click", function(e:any):void {
		e.preventDefault();
		closeMenu();
	});
	//preload
	setTimeout(()=>{
		TweenMax.to(".preload",0.5,{scale:0});
	},1000);

});