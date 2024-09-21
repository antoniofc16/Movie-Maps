export const convertCoordinates = (coordinates: ICoordinate[]): any[] => {
	coordinates.forEach((item: any) => {
		item.lat = item.lat ? item.lat : item.latitude;
		item.lng = item.lng ? item.lng : item.longitude;
		delete item.latitude;
		delete item.longitude;
	});
	return coordinates;
};

export interface ICoordinate {
	latitude: number;
	longitude: number;
}
