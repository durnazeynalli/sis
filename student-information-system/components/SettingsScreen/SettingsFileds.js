import React, { useState } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, View, TextInput } from 'react-native';
import { CustomText } from '../../commons/CustomText';
import { COLORS } from '../../styles';
import { selectUser, logOut, changeName } from '../../redux/auth';
import { Button } from '../../commons/Button';
import {selectTheme} from "../../redux/theme";
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	userName: selectUser(state).userName,
	darkMode: selectTheme(state)
});

export const SettingsFileds = connect(mapStateToProps, { logOut, changeName })
	(({ userName, logOut, changeName, darkMode }) => {

	const [ name, setName ] = useState(userName);

	const theme = darkModeHandler(darkMode);

	return (
		<View style={styles.container}>
			<View style={styles.input}>
				<CustomText style={{...styles.label, color: theme.mainColor}}>name:</CustomText>
				<TextInput value={name} onChangeText={(value) => setName(value)}
						   style={{...styles.name, color: theme.textColor, borderColor: theme.mainColor}} />
			</View>
			<View style={styles.btnContainer}>
				<Button text="save changes" onPress={() => changeName(name)} style={styles.btn} />
				<Button text="log out" onPress={logOut} style={styles.btn}/>
			</View>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 21
	},
	input:{
		width:"85%",
		justifyContent:'center',
	},
	label: {
		fontSize: 13,
		position:'absolute',
		left:15
	},
	name: {
		borderBottomWidth: 1,
		width: '100%',
		height: 35,
		// paddingVertical: 10,
		fontSize: 20,
		textAlign: 'center'
	},
	btn: {
		width: '100%',
		marginBottom: 10
	},
	btnContainer: {
		marginTop: 60,
		width: '85%',
		justifyContent: 'space-between'
		// alignItems: 'center',
		// alignSelf:'flex-end',
	},
	logBtnIcon: {
		width: 15,
		height: 15,
		position: 'absolute',
		right: 10
	}
});
