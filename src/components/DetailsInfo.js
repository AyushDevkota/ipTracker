import { StyledDetailsInfo } from "./styled/detailsinfo.styled";

const DetailsInfo = ({ title, data }) => {
	return (
		<StyledDetailsInfo>
			<p className="title">{title}</p>
			<p className="data">{data}</p>
		</StyledDetailsInfo>
	);
};

export default DetailsInfo;
