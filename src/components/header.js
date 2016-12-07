// import lib for making component

import React from "react";
import {Text, View} from "react-native";

// make a component 
const Header = (props) => {
	const { textStyle , viewStyle} = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle} >{props.headerText}</Text>
		</View>
	);
}; 

const styles  = {
	viewStyle: {
		backgroundColor: '#3F51B5',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60
	},
	textStyle: {
		fontSize: 15,
		color: "#fff",
		// textAlign: 'center',
		padding: 5

	}
};
// make the component available to the parts of  the app
export default Header;