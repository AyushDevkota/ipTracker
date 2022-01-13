import L from "leaflet";
import markerIcon from "../images/icon-location.svg";

const customIcon = new L.Icon({
	iconUrl: markerIcon,
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(40, 50),
});

export { customIcon };
