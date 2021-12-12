import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from '../../commons/CustomText';
import { COLORS } from '../../styles/colors';
import { Seperator } from '../../commons/Seperator';
import { ScheduleField } from './ScheduleField';
import { GLOBAL_STYLES } from '../../styles';
import { selectTheme } from '../../redux/theme';
import { connect } from 'react-redux';
import { getAndListenSchedule, selectSchedule } from '../../redux/materials';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	schedule: selectSchedule(state),
	darkMode: selectTheme(state)
});

export const ScheduleContainer = connect(mapStateToProps, {
	getAndListenSchedule
})(({ schedule=[], getAndListenSchedule, darkMode }) => {
	useEffect(() => {
		const unsub = getAndListenSchedule();
		return unsub;
	}, []);

	const theme = darkModeHandler(darkMode);

	return (
		<View style={styles.container}>
			<CustomText style={{ ...styles.heading, color: theme.headerColor }}>Schedule</CustomText>
			<Seperator distance={17} color={COLORS.commentsColorLight} />
			<View style={styles.row}>
				{schedule.map((schedule) => (
					<ScheduleField
						key={schedule.day}
						fontSize={{ fontSize: 14 }}
						heading={schedule.day}
						date={schedule.time}
						style={styles.schedule}
					/>
				))}
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 14,
		marginBottom: 20
	},
	heading: {
		fontSize: 24,
		marginVertical: 10,
		marginLeft: 10
	},
	schedule: {
		alignSelf: 'center',
		width: 116,
		height: 90
	},
	row: {
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		height: 90,
		borderRadius: 4,
		...GLOBAL_STYLES.shaddowTop
	}
});
