import * as Permissions from 'expo-permissions';
import { Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


//presets for images
export const imagePickerOptions = Object.freeze({
	mediaTypes: ImagePicker.MediaTypeOptions.Images,
	allowsEditing: true,
	aspect: [ 1, 1 ]
});

//a function to handle permissions for camera and camera roll depending on os
export async function askForCameraPermissions() {
	try {
		if (Platform.OS === 'ios') {
			//for IOS we need also CAMERA_ROLL
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				Alert.alert('Fail', 'Sorry, we need camera roll permissions to make this work!');
				return false;
				//todo handele error
			}
		}
		//for both Android and IOS
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		if (status === 'granted') {
			return true;
		} else {
			Alert.alert('Insufficient permissions!', 'You need to grant camera permissions to use this app.', [
				{ text: 'Okay' }
			]);
			return false;
		}
	} catch (err) {
		console.log('askForCameraPermissions err', err);
		//todo handle error
	}
}
//a function that waits for agguments whether to camera roll or galerry checks for permissions and appload them

