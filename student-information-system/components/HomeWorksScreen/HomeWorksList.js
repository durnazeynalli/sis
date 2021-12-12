import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { selectHomeworks } from '../../redux/materials';
import { connect } from 'react-redux';
import { ClassField } from '../ClassField';
import { COLORS } from '../../styles';
import { selectTheme } from '../../redux/theme';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	homeworks: selectHomeworks(state),
	darkMode: selectTheme(state)
});

export const HomeWorksList = connect(mapStateToProps)(({ homeworks, darkMode }) => {

	const theme = darkModeHandler(darkMode);

	return (
		<FlatList
			style={styles.container}
         keyExtractor={(item)=>item.ID}
			data={homeworks}
			renderItem={({ item }) => {
				return (
					<ClassField
						heading={item.title}
						topic={item.link}
						backgroundColor={{ backgroundColor: theme.headerBackground }}
						textStyles={{ color: theme.textColor }}
					/>
				);
			}}
		/>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		marginBottom: 50
	}
});
