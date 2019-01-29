import React, {Component} from 'react';
import CurrentMap from './CurrentMap'




class SkiTrafficContainer extends Component {

	constructor() {
		super();

		this.state = {
			traffic: []
		}
	}

	// getTraffic = async () => {


	// 	try{
	// 		const trafficMap = await fetch(`https://traffic.api.here.com/traffic/6.0/flowavailability.xml?app_id=5KEZBADw3iT7mK6nlH6H&app_code=Z0fzo7p9UVg-VpPFhMojbQ&profile=NTdefault&zoom=10`, {
	// 			method: 'GET',
	// 		});
	// 		const parsedTrafficMap = trafficMap.json();

	// 		return parsedTrafficMap;

	// 	} catch (err) {
	// 		console.log(err, "<---- traffic map err")
	// 	}
		
	// }

	// componentDidMount(){

	// 	this.getTraffic().then((trafficInfo) => {
	// 		this.setState({
	// 			traffic: trafficInfo
	// 		})
	// 	})
	// }



	render() {
		const skiTrafficMap = this.state.traffic


		return(
			<div>
				<CurrentMap />
			</div>
		)
	}

}



export default SkiTrafficContainer;





