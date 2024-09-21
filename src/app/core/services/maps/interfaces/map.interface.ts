export interface IMap {
	id: any;
	code: string;
	name: string;
	type: string;
	color: string;
	image: string;
	coordinates: any[];
	children?: IMap[];
	objects?: IObject;
	state?: string;
	parentId?: string;
	show: boolean;
	geographicalObjectCoordinates?: any[];
	/**Cuadrantes */
	availability?: string;
	freeSpaces?: number;
	totalSpaces?: number;
	percentageEmployed?: number; //Se calcula por el lado del front
	usefullLife?: number;
	sectorName?: string;
	platformName?: string;
}

export interface Coordinate {
	lat: number;
	lng: number;
}

export interface CoordinateMap {
	latitude: number;
	longitude: number;
}

export interface ItemPolygon {
	coordinates: Coordinate[];
	color: string;
	code: string;
	colorLabel: string;
	isAddCode: boolean;
	image: string;
	type: string;
	clasification: string | null;
	name: string;
	id: any;
	colorStroke: string;
	show: boolean;
	typeName: string;
}

export interface IColorMap {
	id: number;
	type: string;
	color: string;
	colorLabel: string;
	colorStroke: string;
	states: IStatePoligon[];
}

export interface IStatePoligon {
	id: number;
	name: string;
	color: string;
	colorLabel: string;
	colorStroke: string;
}

export interface IChildrenFilter {
	code: string;
	name: string;
}

/*******Interface Object Children**********/

export interface IObject {
	spaces?: ISpace[];
	items?: ISpace[];
}

export interface ISpace {
	availability: string;
	code: string;
	geographicalType: string;
	geographicalTypeClasification: string;
	imageUrl?: string;
	deservedChoice: boolean;
	geographicalParentId: number;
	coordinates?: GeographicalObjectCoordinate[] | Coordinate[];
	geographicalSlots: IGeographicalSlot[];
	id: number;
	children?: IMap[];
	objects?: IObject;
	typesSlots?: TypeSlot[];
}

export interface IGeographicalSlot {
	slotBeneficiaryWith: number;
	slotBeneficiaryWithout: number;
	slotFree: number;
	slotQuantity: number;
	slotType: string;
	slotName: string;
}

export interface GeographicalObjectCoordinate {
	latitude: number;
	longitude: number;
}

export interface IMapObjectDetail {
	id: number;
	objectCode: string;
	type: string;
	deservedChoice: boolean;
	geographicalObjectLevels: GeographicalObjectLevel[];
}

export interface GeographicalObjectLevel {
	levelType: string;
	levelName: string;
	sections: Section[];
	isAvailability?: boolean; //Se asigna por el lado de front (depende de los slots)
	levelNumber: number;
	levelDepth: number;
	id: number;
}

export interface Section {
	id: number;
	sectionCode: string;
	slots: Slot[];
	sectionNumber: number;
	showSection?: boolean;
}

export interface Slot {
	slotType: string;
	slotName: string;
	quantity: number;
	size: string;
	free: SlotQuantity;
	reserved: {
		withBeneficiary: SlotQuantity | null;
		withoutBeneficiary: SlotQuantity | null;
		quantity: number;
	} | null;
}

export interface SlotQuantity {
	quantity: number;
	items?: ItemBeneficiary[];
}

export interface ItemBeneficiary {
	beneficiaryName: string;
	holderName: string;
	contract: string;
	dateOfDeath: string;
	urn?: boolean;
}

export interface SaleAttributes {
	useDispositionIds?: number[];
	temporalityIds?: number[];
	contentProductIds?: number[];
	familyIds?: number[];
	subFamilyIds?: number[];
}

export interface INamesFilterMap {
	NameCementery: string;
	NamePlatform: string;
	CodePlatform: string;
}

export interface RequestToDirectionService {
	origin?: { lat: number; lng: number };
	destination: { lat: number; lng: number };
	travelMode?: string;
}

export interface ISectionColumbarium {
	code: string;
	typeReserved: string;
	beneficiaries: ItemBeneficiary[];
}

export interface ItemPolygonStrategic {
	coordinates: Coordinate[];
	color: string;
	code: string;
	colorLabel: string;
	isAddCode: boolean;
	type: string;
	name: string;
	id: any;
	colorStroke: string;
	parentId: any;
	opacity: number;
	clickable: boolean;
	typeName: string;
}

export interface TypeSlot {
	type: string;
	name: string;
}

export interface IGoogleMapsCoordinate {
	lat: number;
	lng: number;
}

