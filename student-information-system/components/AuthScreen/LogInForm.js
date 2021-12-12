import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { validateForm } from '../../utils/validateField';
import { ICONS_LIGHT, COLORS } from '../../styles';
import { IconBtn } from '../index';
import {clearAuthError, getAuthError, logIn, setAuthError} from '../../redux/auth';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	error: getAuthError(state),
});

export const LogInForm = connect(mapStateToProps, { logIn, setAuthError, clearAuthError })
	(({ logIn, clearAuthError }) => {
	const [ fields, setFields ] = useState({
		email: '',
		password: ''
	});
	const fieldChangeHndler = (name, value) => {
		clearAuthError();
		setFields((fields) => ({
			...fields,
			[name]: value
		}));
	};
	const submitHandler = (fields) => {
		const email = fields.email.trim();
		const pass = fields.password.trim();
			if (validateForm(false, email, pass, null)) {
				logIn(email, pass);
			}
	};
	return (
		<View style={styles.form}>
			<TextInput
				placeholder="email"
				value={fields.email.value}
				onChangeText={(value) => fieldChangeHndler('email', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
			<TextInput
				placeholder="password"
				secureTextEntry={true}
				value={fields.password.value}
				onChangeText={(value) => fieldChangeHndler('password', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
			<IconBtn icon={ICONS_LIGHT.logInBtn} style={styles.nextBtn} onPress={() => submitHandler(fields)} />
		</View>
	);
});
const styles = StyleSheet.create({
	form: {},
	input: {
		width: '100%',
		borderBottomColor: COLORS.backgroundLight,
		borderBottomWidth: 1,
		color: COLORS.backgroundLight,
		height: 40
	},
	groupBtn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	nextBtn: {
		alignSelf: 'flex-end',
		backgroundColor:COLORS.backgroundLight,
		height: 45,
		width:64,
		marginTop: 60,
		borderRadius: 25,
	},
	error: {
		fontSize: 16,
		color: "red",
		marginTop: 10,
	},
});
