import Bezier from './bezier';

export default class BezierBatch{

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
