import React from 'react';
import mapboxgl from '!mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";

mapboxgl.accessToken = 'pk.eyJ1IjoiemFybWFzb2V1cmV0dGUiLCJhIjoiY2thZmRxcjN3MDNmYTJ1cThicXNoMHg0bSJ9.B2qltnoj3tDA3pHPSmSWnQ';

class Mapp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lng: 6.945518553256988,
			lat: 46.2545448844787,
			zoom: 18
		}
	}

	componentDidMount() {
		// Set up map 
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/satellite-v9',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom,
		});

		//Setting up the tools to draw on the map
		const draw = new MapboxDraw({
			displayControlsDefault: false,
			controls: {
				polygon: true,
				line_string: true,
				trash: true
			},
			defaultMode: 'draw_polygon'
		});
		map.addControl(new mapboxgl.NavigationControl());
		map.addControl(draw);

		//Get coordinates for the polygon we draw
		map.on('draw.create', function (e) {
			var x = draw.getAll();
			console.log(x['features'][0]['geometry']['coordinates'][0]);
		});
	}

	render() {
		return (
			<div className='map'>
				<div ref={el => this.mapContainer = el} style={{ width: '100%', height: '100vh' }} />
			</div>
		)
	}
}

export default Mapp;