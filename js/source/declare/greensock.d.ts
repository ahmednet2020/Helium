//greensock declare to us in typescript easy and view text
// aouther : ahmed net
// version :1.0
// data : 2018

//declare some ease property
declare let Bounce:ease;
declare let Linear:ease;
declare let Power0:ease;
declare let Power1:ease;
declare let Power2:ease;
declare let Power3:ease;
declare let Power4:ease;
declare let Quad:ease;
declare let Cubic:ease;
declare let Quart:ease;
declare let Quint:ease;
declare let Elastic:ease;
declare let Strong:ease;
declare let Back:ease;
declare let SlowMo:ease;
declare let Circ:ease;
declare let SteppedEase:ease;
declare let Expo:ease;
declare let Sine:ease;
//moust use one property of this after one use one  property of up linke Bounce.easeIn
declare class ease
{
	easeIn:ease;
	easeOut:ease;
	easeInOut:ease;
	easeNone:ease;
	easeOutStrong:ease;
	rough:ease;
}
//property object animates interface
declare interface vars
{
	x?:number|string,
	y?:number|string,
	delay?:number,
	paused?:boolean,
	ease?:ease,
	onComplete?:Function,
	onStart?:Function,
	onUpdate?:Function,
	opacity?:number,
	rotation?:number,
	width?:number|string,
	height?:number|string,
	autoAlpha?:number,
	transformOrigin?:string|number,
	display?:string,
	position?:string,
	left?:string,
	top?:string|number,
	scale?:number,
	cycle?:object,
	repeat?:number,
	repeatDelay?:number,
	yoyo?:boolean,
	bezier?:any[],
	className?:string,

}
// class TweenLite script Methods 
declare class tweenlite 
{
	/**
	* Static method for creating a TweenLite instance that animates to the specified destination values 
	*/
	to(target:any,duration:number,Object:vars,position?:any):tweenlite;
	/**
	*  Immediately sets properties of the target accordingly
	*/
	set(target:any,Object:vars,position?:any):tweenlite;
	/**
	* Static method for creating a TweenLite instance that tweens backwards
	*/
	from(target:any,duration:number,Object:vars,position?:any):tweenlite;
	/**
	* Static method for creating a TweenLite instance that tweens backwards
	*/
	fromTo(target:any,duration:number,Objectfrom:vars,Objectto:vars,position?:any):tweenlite;
	/**
	* Gets or sets the animation's initial delay
	*/
	delay(value:number):tweenlite;
	/**
	* Gets or sets the animation's duration
	*/
	duration(value:number):tweenlite;
	/**
	* Returns the time at which the animation will finish according 
	*/
	endTime():tweenlite;
	/**
	* Pauses the instance, optionally jumping to a specific time.
	*/
	pause(atTime?:any,suppressEvents?:boolean):tweenlite;
	/**
	* Begins playing forward, optionally from a specific time
	*/
	play(from?:any,suppressEvents?:boolean):tweenlite;
	/**
	* Gets or sets the animation
	*/
	paused(value?:boolean):tweenlite;
	/**
	* Gets or sets the animations's progress which is a value between 0 and 1 indicating the position of the virtual 
	*/
	progress(value?:any,suppressEvents?:boolean):tweenlite;
	/**
	* Resumes playing without altering direction
	*/
	resume(from?:any,suppressEvents?:boolean):tweenlite;
	/**
	* Reverses playback so that all aspects of the animation are oriented backwards including, for example, a tween's ease.
	*/
	reverse(from?:any,suppressEvents?:boolean):tweenlite;
	/**
	*  Jumps to a specific time (or label)
	*/
	seek(position?:any,suppressEvents?:boolean):tweenlite;
	/**
	* Restarts and begins playing forward from the beginning.
	*/
	restart(includeDelay?:boolean,suppressEvents?:boolean):tweenlite;
	/**
	* Adds a tween, timeline, callback, or label (or an array of them) to the timeline.
	*/
	add(value?:any, position?:any, align?:String, stagger?:Number):tweenlite;
	/**
	* speedup time line
	*/
	timeScale(speed:number):tweenlite;
	/**
	* Factor that's used to scale time in the animation
	*/
	call(callback?:Function, params?:any[], scope?:any, position?:any ):tweenlite;
}
declare class TimelineLite extends tweenlite
{
	/**
	* Tweens an array of targets to a common set of destination values
	*/
	staggerTo(targets:any,duration:number, Object:vars,stagger:number,position?:any):TimelineLite;
	/**
	* Tweens an array of targets from a common set of destination values
	*/
	staggerFrom(targets:any,duration:number, Object:vars,stagger:number,position?:any):TimelineLite;
	/**
	* Tweens an array of targets from and to a common set of values, but staggers their start times by a specified amount of time,
	*/
	staggerFromTo(targets:any,duration:number, Objectfrom:vars,Objectto:vars, stagger:number,position?:any):TimelineLite;
}
declare class TimelineMax extends TimelineLite
{
	constructor(Object?:vars);
}

declare let TweenLite:tweenlite;
declare let TweenMax:TimelineMax;