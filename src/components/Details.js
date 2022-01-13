import { useSelector } from "react-redux";
import DetailsInfo from "./DetailsInfo";
import { StyledDetails } from "./styled/details.styled";

const Details = () => {
	const geoData = useSelector((state) => state.data);

	return (
		<StyledDetails>
			<DetailsInfo title="ip address" data={geoData.ip} />
			<DetailsInfo title="location" data={geoData.location} />
			<DetailsInfo title="timezone" data={geoData.timezone} />
			<DetailsInfo title="isp" data={geoData.isp} />
		</StyledDetails>
	);
};

export default Details;
