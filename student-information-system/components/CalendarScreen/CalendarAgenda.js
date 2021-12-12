import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { COLORS } from '../../styles';

import { connect } from 'react-redux';
import { selectAgenda, getAndListenAgenda } from '../../redux/materials';
import { ClassField } from '../ClassField';
import { selectTheme } from '../../redux/theme';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	agendaData: selectAgenda(state),
	darkMode: selectTheme(state)
});

export const CalendarAgenda = connect(mapStateToProps, {
	getAndListenAgenda
})(({ agendaData = [], getAndListenAgenda, darkMode }) => {
	useEffect(() => {
		const unsub = getAndListenAgenda();
		return unsub;
	}, []);

	const theme = darkModeHandler(darkMode);

	return (
		<Agenda
			items={agendaData}
			renderItem={(item) => {
				return (
					<View>
						<ClassField
							heading={item.time}
							topic={item.topic}
							backgroundColor={{ backgroundColor: theme.calendarHeader }}
							textStyles={{ color: COLORS.backgroundLight, fontSize: 15, textAlign: 'right' }}
						/>
					</View>
				);
			}}
			renderEmptyDate={() => {
				return <View />;
			}}
			renderEmptyData={() => {
				return <View />;
			}}
			refreshing={true}
			theme={{
				...theme,
				agendaTodayColor: theme.calendarHeader,
			}}
			style={{ ...theme }}
		/>
	);
});
