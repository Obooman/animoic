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
