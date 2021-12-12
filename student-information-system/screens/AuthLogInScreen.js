import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles';
import signInImage from '../assets/icons/signIn.png';
import { CustomText } from '../components';
import { LinearGradient } from 'expo-linear-gradient';
import { LogInForm } from '../components/AuthScreen/LogInForm';
import { TouchableText } from '../commons/ToucableText';

//todo reduc this screen and delete unwanted compnents
export const AuthLogInScreen = ({ navigation }) => {
	return (
		<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
			<LinearGradient
				colors={[ COLORS.drawerLight, COLORS.acsentColor ]}
				style={{ ...StyleSheet.absoluteFill }}
			/>
			<ScrollView style={styles.form}>
				<Image style={styles.image} source={signInImage} style={styles.signInImage} />
				<CustomText style={styles.greetingText}>Welcome</CustomText>
				<TouchableText style={styles.link} onPress={() => navigation.navigate('SignUp')} text="Sign Up?" />
				<LogInForm navigation={navigation} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30
	},
	greetingText: {
		color: COLORS.backgroundLight,
		alignSelf: 'center',
		fontSize: 50
	},
	signInImage: {
		alignSelf: 'center',
		width: 250,
		height: 250,
		resizeMode: 'contain',
		marginTop: 80,
		marginLeft: 20
	},
	link: {
		marginLeft: 210,
		color: COLORS.backgroundLight,
		fontSize: 18,
		textDecorationLine: 'underline'
	}
});
