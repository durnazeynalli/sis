import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../../styles';

export const SignUpInput = ({ fields, fieldsChangeHandler }) => {

	return (
		<View>
				<TextInput
					style={styles.input}
					placeholder='email'
					value={fields.email}
					placeholderTextColor="rgba(255,255,255, 0.3)"
					onChangeText={(value) => fieldsChangeHandler("email", value)}
				/>
					<TextInput
					style={styles.input}
					value={fields.name}
					placeholder='full name'
					placeholderTextColor="rgba(255,255,255, 0.3)"
					onChangeText={(value) => fieldsChangeHandler("name", value)}
				/>
					<TextInput
					style={styles.input}
					value={fields.username}
					placeholder='username'
					placeholderTextColor="rgba(255,255,255, 0.3)"
					onChangeText={(value) => fieldsChangeHandler("username", value)}
				/>
					<TextInput
					style={styles.input}
					placeholder='password'
					value={fields.password}
					placeholderTextColor="rgba(255,255,255, 0.3)"
					secureTextEntry={true}
					onChangeText={(value) => fieldsChangeHandler("password", value)}
				/>
					<TextInput
					style={styles.input}
					value={fields.rePassword}
					placeholder='repeat password'
					placeholderTextColor="rgba(255,255,255, 0.3)"
					secureTextEntry={true}
					onChangeText={(value) => fieldsChangeHandler("rePassword", value)}
				/>
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		width: '100%',
		borderBottomColor: COLORS.backgroundLight,
		borderBottomWidth: 1,
		color: COLORS.backgroundLight,
		height: 40
	}
});
