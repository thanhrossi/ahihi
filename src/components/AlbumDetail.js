import React from "react";
import {Text, Image, View, Linking} from "react-native";
import Card from "./Cart";
import CartSection from "./CartSection";
import Button from "./Button";


const AlbumDetail = ({album}) => {
	const {
		title, 
		artist, 
		thumbnail_image,
		image,
		url
	} = album;

	const {
		headerContentStyle, 
		headerTextStyle,
		thumbnailStyle,
		thumbnailContainerStyle,
		imageStyle
	} = styles;

	return(
		<Card>
			<CartSection>
				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>
						{title}
					</Text>
					<Text>
						{artist}
					</Text>
				</View>
			</CartSection>

			<CartSection>
				<Image style={imageStyle} source={{uri: image}} />
			</CartSection>

			<CartSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy now !
				</Button>
			</CartSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		width: 50,
		height: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};
export default AlbumDetail;