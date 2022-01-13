import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	MapConsumer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { customIcon } from "./Icon";
import { useSelector } from "react-redux";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = () => {
	const cords = useSelector((state) => state.data.cords);

	const handleMapMove = (map) => {
		map.setView(cords);
	};

	return (
		<MapContainer
			center={cords}
			zoom={18}
			scrollWheelZoom={true}
			zoomControl={false}
			style={{
				height: "80vh",
				width: "100%",
				position: "relative",
				zIndex: -1,
			}}
		>
			<MapConsumer>
				{(map) => {
					handleMapMove(map);
					return null;
				}}
			</MapConsumer>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={cords} icon={customIcon}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
