import Linear from './timing'

export default class Animation{
	constructor(
		aniObj={
			duration:1000,
			delay:0,
			onstart:function(){},
			onend:function(){},
			onupdate:function(){},
			timing:new Linear()
		}
	){
		this.params = {...aniObj}

		this.timePercentage = 0
	}

	play(){

	}

	pause(){

	}
}