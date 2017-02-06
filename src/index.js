import Animation from './main';
import log from './tools/log'

import * as timing from './timing'

const {
	Bezier
} = timing;

class Animoic{
	constructor(props){
		this.timing = { ...timing };
	}

	/*{
		duration:2000,
		delay:3000,
		timing:,
		onstart:function(){

		},
		onupdate:function(progress,percentage){

		},
		onend:function(){

		}
	}*/

	tween = (aniObj) => {
		if( !arguments.length ){
			log("There's no config object");
			return;
		}

		const {
			duration,delay,timing,onstart,onend,onupdate
		} = aniObj;

		if( timing && !(timing instanceof Bezier) ){
			log("Timing function should be contructed");
			return;
		}

		return new Animation(aniObj)
	}
}

export default Animoic;