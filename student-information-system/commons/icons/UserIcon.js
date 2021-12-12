import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "../../styles";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const UserIcon = connect(mapStateToProps, {})(({ darkMode, onPress, style }) => {

	const colorTheme = darkMode
		? {
			fill: COLORS.backgroundLight,
		} : {
			fill: COLORS.acsentLight,
		};

	return (
		<TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
			<Svg
				id="Capa_1"
				enable-background="new 0 0 512 512"
				height="100%"
				viewBox="0 0 512 512"
				width="100%"
				class=""
			>
				<G>
					<G>
						<Path
							d="m256 0c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm0 482c-124.617 0-226-101.383-226-226s101.383-226 226-226 226 101.383 226 226-101.383 226-226 226z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="m256 270c57.897 0 105-47.103 105-105s-47.103-105-105-105-105 47.103-105 105 47.103 105 105 105zm0-180c41.355 0 75 33.645 75 75s-33.645 75-75 75-75-33.645-75-75 33.645-75 75-75z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="m424.649 335.443c-19.933-22.525-48.6-35.443-78.649-35.443h-180c-30.049 0-58.716 12.918-78.649 35.443l-7.11 8.035 5.306 9.325c34.817 61.187 100.131 99.197 170.453 99.197s135.636-38.01 170.454-99.198l5.306-9.325zm-168.649 86.557c-55.736 0-107.761-28.197-138.383-74.295 13.452-11.352 30.579-17.705 48.383-17.705h180c17.804 0 34.931 6.353 48.383 17.705-30.622 46.098-82.647 74.295-138.383 74.295z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
					</G>
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
