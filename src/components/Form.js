import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Город..."/>
		<input type="text" name="country" placeholder="Страна..."/>
		<button>Показать погоду</button>
	</form>
);

export default Form;