import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "../../styles";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const GalleryIcon = connect(mapStateToProps, {})(({ darkMode, onPress }) => {

	const colorTheme = darkMode
		? {
			fill: COLORS.backgroundLight,
		} : {
			fill: COLORS.acsentLight,
		};

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 64 64" width="100%">
				<G>
					<Path
						d="m14 18h3v-2h-4a1 1 0 0 0 -1 1v4h2z"
						data-original="#000000"
						class="active-path"
						data-old_color="#000000"
						fill={colorTheme.fill}
					/>
					<Path
						d="m12 23h2v2h-2z"
						data-original="#000000"
						class="active-path"
						data-old_color="#000000"
						fill={colorTheme.fill}
					/>
					<Path
						d="m62 28h-8v-13a3 3 0 0 0 -2-2.816v-3.184a3 3 0 0 0 -3-3h-28a1 1 0 0 1 -1-1 3 3 0 0 0 -3-3h-12a3 3 0 0 0 -3 3v38a3 3 0 0 0 3 3h8v15a1 1 0 0 0 1 1h48a1 1 0 0 0 1-1v-32a1 1 0 0 0 -1-1zm-1 30.586-16.293-16.293a1 1 0 0 0 -1.414 0l-5.293 5.293-5.293-5.293a1 1 0 0 0 -1.414 0l-16.293 16.293v-28.586h46zm-13.414 1.414h-31.172l15.586-15.586zm-8.172-11 4.586-4.586 15.586 15.586h-9.172zm-35.414-6v-38a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1 3 3 0 0 0 3 3h28a1 1 0 0 1 1 1v3h-37a5.006 5.006 0 0 0 -5 5v24a4.948 4.948 0 0 0 1.026 3h-4.026a1 1 0 0 1 -1-1zm6-2v-24a3 3 0 0 1 3-3h38a1 1 0 0 1 1 1v13h-38a1 1 0 0 0 -1 1v15a3 3 0 0 1 -3-3z"
						data-original="#000000"
						class="active-path"
						data-old_color="#000000"
						fill={colorTheme.fill}
					/>
					<Path
						d="m38 42a5 5 0 1 0 -5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1 -3 3 3 3 0 0 1 3-3z"
						data-original="#000000"
						class="active-path"
						data-old_color="#000000"
						fill={colorTheme.fill}
					/>
				</G>
			</Svg>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		width: 22,
		height: 22
	}
});
