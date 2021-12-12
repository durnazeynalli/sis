import * as Font from 'expo-font';

import RelewayExtraLight from '../assets/fonts/Raleway-ExtraLight.ttf';
import RelewayRegular from '../assets/fonts/Raleway-Regular.ttf';
import RelewayMeium from '../assets/fonts/Raleway-Medium.ttf';
import RelewaySemiBold from '../assets/fonts/Raleway-SemiBold.ttf';
import RelewayBold from '../assets/fonts/Raleway-Bold.ttf';

export function loadFonts() {
	return Font.loadAsync({
		RelewayExtraLight,
		RelewayRegular,
		RelewayMeium,
		RelewaySemiBold,
		RelewayBold
	});
}

export const FontFamiles = Object.freeze({
	extraLight: 'RelewayExtraLight',
	regular: 'RelewayRegular',
	meium: 'RelewayMeium',
	semi: 'RelewaySemiBold',
	bold: 'RelewayBold'
});
