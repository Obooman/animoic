class Bezier{
	constructor(SVGPath){
		// M0,0 C0.2,0.3 0.8,0.9 1,1
		this.bezierArray = this.handlePath(SVGPath);
	}

	handlePath = (SVGPath) => {
		var pathSplit = SVGPath.split(' ');

		pathSplit.forEach((path,index) => {
			// current timing function range from path.x to index+1 path.x
			
			if( /M/.test(path) ){
				// moveTo

			} else if( /C/.test(path) ){
				// curveTo

			} else if( /L/.test(path) ){
				// lineTo

			}
		})
	}

	queueUp = (bezierObject) => {
		if(this.queue){
			this.queue.push(bezierObject)
		} else {
			this.queue = [];
			this.queue.push(bezierObject)

			// global.queues.push(this.queue);
		}
	}
}

// down and up timing function
class Bounce extends Bezier{

}


// repeat regularly
class Wiggle extends Bezier{

}

// jump to somewhere
class Elastic extends Bezier{

}

class BezierBatch{

	/*	bezierObject
	 *
	 *	{
	 *		"0":Bezier
	 *		"0.2":Bezier,
	 *		"0.6":Bezier,
	 *		"1.0":Bezier
	 *	}
	 *
	 */

	constructor(bezierObject){
		this.timeline = [];

		bezier.keys((key) => {
			this.timeline.push(key)
		})

		this.bezierHub = bezierObject;
	}

	get(x){
		return this.bezierHub[
			this.getZone(x)
		](x)
	}

	getZone(x){
		var leftSide = parseInt(this.timeline.length/2);

		if( this.timeline[left] > x ){

		} else {

		}
	}
}
