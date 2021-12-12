import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Footer, GradeShower, ProgressBar, ClassField, Header, ScheduleContainer, Information } from '../components';
import { COLORS } from '../styles/colors';
import { connect } from 'react-redux';
import { selectGroup, getAndListenHomeWorks } from '../redux/materials';
import {selectTheme} from "../redux/theme";
import {backgroundColor} from "react-native-calendars/src/style";
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	groupData: selectGroup(state),
	darkMode: selectTheme(state)
});

export const ClassScreen = connect(mapStateToProps, {
	getAndListenHomeWorks
})(({ navigation, groupData, getAndListenHomeWorks, darkMode }) => {
	useEffect(() => {
		const unsub = getAndListenHomeWorks();
		return unsub;
	}, []);

	const theme = darkModeHandler(darkMode);

	return (
		<View style={{...styles.container, ...theme}}>
			<Header title={`Group ${groupData.label}`} />
			<Information />
			<GradeShower />
			<ClassField
				heading="Homeworks"
				topic="Your assingned homeworks"
				backgroundColor = {{backgroundColor: theme.headerBackground}}
				textStyles = {{color: theme.textColor}}
				style={{ width: '92%', marginHorizontal: 15, marginVertical: 15 }}
				onPress={() => navigation.navigate('Homeworks')}
			/>
			<ScheduleContainer />
			<ProgressBar color={COLORS.acsentColor} height={10} progress={49} percentage={17} />
			<Footer style={styles.footer} screen="ClassStack" />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
