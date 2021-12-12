import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../commons/Header';
import { Footer } from '../commons/Footer';
import { COLORS } from '../styles';
import { connect } from 'react-redux';
import { getAndListenMaterials } from '../redux/materials';
import { Materialslist } from '../components/MaterialScreen/MaterialsList';
import {selectTheme} from "../redux/theme";
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});


export const MaterialsScreen = connect(mapStateToProps, {
	getAndListenMaterials
})(({ getAndListenMaterials, darkMode }) => {
	useEffect(() => {
		getAndListenMaterials();
	}, []);

	const theme = darkModeHandler(darkMode);

	return (
		<View style={{...styles.container, ...theme}}>
			<Header title={'Materials'} style={{ position: 'absolute', top: -20 }} />
			<Materialslist/>
			<Footer style={styles.footer} screen="MaterialsStack" />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.backgroundLight
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
