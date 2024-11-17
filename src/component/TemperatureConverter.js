import React, { useState } from 'react';
import { TextField, Grid } from '@mui/material';

const TemperatureConverter = () => {
	const [celsius, setCelsius] = useState('');
	const [fahrenheit, setFahrenheit] = useState('');

	const handleCelsiusChange = (event) => {
		const value = event.target.value;
		setCelsius(value);
		if (value) {
			setFahrenheit(((parseFloat(value) * 9 / 5) + 32).toFixed(2));
		} else {
			setFahrenheit('');
		}
	};

	const handleFahrenheitChange = (event) => {
		const value = event.target.value;
		setFahrenheit(value);
		if (value) {
			setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
		} else {
			setCelsius('');
		}
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<TextField
					label="Градусы Цельсия"
					variant="outlined"
					type="number"
					value={celsius}
					onChange={handleCelsiusChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					label="Градусы Фаренгейта"
					variant="outlined"
					type="number"
					value={fahrenheit}
					onChange={handleFahrenheitChange}
				/>
			</Grid>
		</Grid>
	);
};

export default TemperatureConverter;
