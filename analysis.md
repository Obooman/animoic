create a animation obejct:
	animoic.tween

create a bezier curve timing function
	animoic.timing.curve

create a wiggle timing function
	animoic.timing.wiggle

static animation methods
	animoic.timing[linear,ease,bounce,elastic]

animation stacks
	animoic.stack(sorted by creating time)

animatiom life circle
	onstart
	onupdate -> progress
	onend


---

ani.timing.linear

ani.timing.bounce

ani.timing.elastic

ani.timing.bezier("M0 0,C20,20 10,32 21 22,C89");

ani.timing.wiggle('')

ani.timing.define('custom',Bezier || Wiggle);// animoic.timing.custom

```js
var animation = ani.tween({
	duration:2000,
	delay:3000,
	timing:animioc.timing.ease,
	// timing:animioc.timing.wiggle('12,32 43,12 43,33 43,54'),
	// timing:animioc.timing.bezier('M..C..'),
	onstart:function(){

	},
	onupdate:function(progress,percentage){

	},
	onend:function(){

	}
});

var aniQueue = ani.queueUp(animoic.tween({
	duration:2000,
	delay:1000,
	timing:animoic.timing.elastic,
}))
```

