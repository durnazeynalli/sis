import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { selectMaterials } from '../../redux/materials';
import { COLORS } from '../../styles';
import { ClassField } from '../ClassField';
import {selectTheme} from "../../redux/theme";
import {darkModeHandler} from "../../styles/darkModeHandler";


const mapStateToProps = (state) => ({
	materials: selectMaterials(state),
	darkMode: selectTheme(state)
});

export const Materialslist = connect(mapStateToProps)(({ materials, darkMode }) => {

	const theme = darkModeHandler(darkMode);

	return (
		<FlatList
         	keyExtractor={(item)=>item.ID}
      		style={styles.container}
			data={materials}
			renderItem={({ item }) => {
				return (
					<ClassField
						heading={item.title}
						topic={item.link}
						backgroundColor={{ backgroundColor: theme.headerColor }}
						textStyles={{ color: COLORS.backgroundLight }}
					/>
				);
			}}
		/>
	);
});

const styles = StyleSheet.create({
   container:{
      paddingVertical:30
   }
});
