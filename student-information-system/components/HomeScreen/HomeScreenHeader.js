import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { COLORS, GLOBAL_STYLES } from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { setActivePosts, selectActivePosts } from '../../redux/posts';
import { selectAuthGroup } from '../../redux/auth';
import {selectTheme} from "../../redux/theme";
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	activePostID: selectActivePosts(state),
	groupID: selectAuthGroup(state), //ID of the groups user
	darkMode: selectTheme(state)
});

export const HomeScreenHeader = connect(mapStateToProps, {
	setActivePosts
})(({ feeds, setActivePosts, activePostID, groupID, darkMode }) => {
	const filteredFeed = feeds.filter((feed) => feed.ID === groupID || feed.feed === 'News');

	const theme = darkModeHandler(darkMode);

	return (
		<View style={{...styles.container, ...theme}}>
			{filteredFeed.map((feed) => (
				<TouchableOpacity style={styles.btn} onPress={() => setActivePosts(feed.ID)} key={feed.ID}>
					<CustomText
						style={{
							...styles.btnText,
							color: activePostID === feed.ID ? theme.mainColor : theme.textColor
						}}
					>
						{feed.feed}
					</CustomText>
					{activePostID === feed.ID && <View style={styles.indicator} backgroundColor={theme.mainColor}/>}
				</TouchableOpacity>
			))}
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		height:50,
		flexDirection: 'row',
		alignItems: 'center',
		overflow: 'hidden',
		justifyContent: 'space-between'
	},
	btnText: {
		fontSize: 18,
		marginHorizontal: 30
	},
	indicator: {
		position: 'absolute',
		bottom: -14,
		marginTop: 10,
		width: 50,
		height: 3,
		alignSelf: 'center'
	}
});

