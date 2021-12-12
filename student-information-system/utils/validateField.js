import { showMessage } from 'react-native-flash-message';
import { COLORS } from '../styles/colors';

export const validateForm = (isSignUP, email, password, rePassword, userName, name, selectedGroup) => {
	//if urser is tryring to log their account name must not be left empty
	if (email.trim() === '') {
		showMessage({
			message: 'e-mail is required',
			description: 'e-mail field can not be left empty',
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		return false;
	}
	//they have to provide a password
	if (password.trim() === '') {
		showMessage({
			message: 'Password is required',
			description: 'Password field can not be left empty',
			type: 'danger',
			icon: 'auto',
			style: { backgroundColor: COLORS.error },
			textStyle: { fontFamily: 'RelewayRegular' }
		});
		return false;
	}
	//if user is trying to sign up(create new acount)
	if (isSignUP) {
		//they have to provede repassword which has to mach with password itself
		if (password.trim() !== rePassword.trim()) {
			showMessage({
				message: 'Passwords must match',
				description: 'Password and repeating of the pasword mast be same',
				type: 'danger',
				icon: 'auto',
				style: { backgroundColor: COLORS.error },
				textStyle: { fontFamily: 'RelewayRegular' }
			});
			return false;
		}
		//they have to choose what group they r in
		if (!selectedGroup) {
			showMessage({
				message: 'group is not celected',
				description: 'pick your group',
				type: 'danger',
				icon: 'auto',
				style: { backgroundColor: COLORS.error },
				textStyle: { fontFamily: 'RelewayRegular' }
			});
			return false;
		}
		if (password.trim().length < 8) {
			showMessage({
				message: 'Password is too short',
				description: 'Password should be included at least 8 characters',
				type: 'danger',
				icon: 'auto',
				style: { backgroundColor: COLORS.error },
				textStyle: { fontFamily: 'RelewayRegular' }
			});
			return false;
		}
		if (userName.trim() === '') {
			showMessage({
				message: 'Username required',
				description: 'Username field can not be empty',
				type: 'danger',
				icon: 'auto',
				style: { backgroundColor: COLORS.error },
				textStyle: { fontFamily: 'RelewayRegular' }
			});
			return false;
		}
		if (name.trim() === '') {
			showMessage({
				message: 'name is required',
				description: 'name field can not be empty',
				type: 'danger',
				icon: 'auto',
				style: { backgroundColor: COLORS.error },
				textStyle: { fontFamily: 'RelewayRegular' }
			});
			return false;
		}
	}
	//if all of the conditions are checked the user can log in/sign up validate it
	return true;
};
//todo handle error
