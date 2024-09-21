export const stylesMap = [
	{
		featureType: 'poi.park',
		elementType: 'geometry',
		stylers: [{ color: '#C3F1D5' }] // Cambia el color para las áreas verdes
	},
	{
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [{ color: '#C3F1D5' }]
	},
	{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [{ color: '#CCDDE0' }] // Cambia el color para las líneas de carreteras
	},
	// remove the points marked on the map (shops, restaurants, parks, etc.)
	{
		featureType: 'poi',
		elementType: 'labels',
		stylers: [{ visibility: 'off' }]
	},
	//remove bus station on the map
	{
		featureType: 'transit.station.bus',
		stylers: [{ visibility: 'off' }]
	}
];
