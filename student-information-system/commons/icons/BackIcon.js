import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "../../styles";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const BackIcon = connect(mapStateToProps, {})(({ darkMode, onPress }) => {

	const colorTheme = darkMode
		? {
			fill: COLORS.backgroundLight,
		} : {
			fill: COLORS.acsentLight,
		};

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Capa_1"
				viewBox="0 0 443.52 443.52"
				style="enable-background:new 0 0 443.52 443.52;"
				width="100%"
				height="100%"
			>
				<G>
					<G>
						<G>
							<Path
								d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712    L143.492,221.863z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill = {colorTheme.fill}
							/>
						</G>
					</G>
				</G>
			</Svg>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		width: 22,
		height: 22,
		marginLeft: 16
	}
});
