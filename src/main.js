import Linear from './timing'

export default class Animation{
	constructor(aniObj){
		this.params = {...aniObj}
	}

	play(){
		if( this.playing ) return;

		this.playing = true;
	}

	draw = (timestamp) => {
		const {
			timing,onupdate,onend,onstart,duration,delay
		} = this.params

		if( !this.startTime ){
			this.startTime = timestamp
			onstart && onstart(timestamp);
		}

		let progress = (timestamp - startTime)/duration;
		let targetValue = timing(progress)

		onupdate && onupdate(targetValue);

		if( progress >= 1 ){
			onend && onend();
		} else {
			requestAnimationFrame(this.draw)
		}
	}

	pause(){

	}
}