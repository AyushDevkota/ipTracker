import { useSelector, useDispatch } from "react-redux";
import { inputActions } from "../store/input";
import { dataActions } from "../store/geoData";
import btnImg from "../images/icon-arrow.svg";
import { StyledForm } from "./styled/form.styled";
import { useEffect } from "react";

const API_KEY = "at_G7kTzbFdCjmRt3RuolRTvz2M2snKa";

const Form = () => {
	const dispatch = useDispatch();
	const inputValue = useSelector((state) => state.input.value);

	useEffect(() => {
		getUserIP();
	}, []);

	const getUserIP = async () => {
		const response = await fetch("https://api.ipify.org?format=json");
		const data = await response.json();
		fetchData(data.ip);
	};

	const inputChangeHandler = (e) => {
		dispatch(inputActions.update(e.target.value));
	};

	const fetchData = async (ipAddress) => {
		const response = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
		);
		const data = await response.json();

		const formattedData = {
			ip: data.ip,
			location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
			timezone: `UTC ${data.location.timezone}`,
			isp: data.isp,
			cords: [data.location.lat, data.location.lng],
		};
		dispatch(dataActions.update(formattedData));
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		fetchData(inputValue);
	};

	return (
		<StyledForm>
			<input
				type="text"
				name="ip"
				placeholder="Search for any IP address or domain"
				onChange={inputChangeHandler}
			/>
			<button onClick={submitHandler}>
				<img src={btnImg} alt="" />
			</button>
		</StyledForm>
	);
};

export default Form;
