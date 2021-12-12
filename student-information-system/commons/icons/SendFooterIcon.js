import React from 'react';
import { StyleSheet, TouchableOpacity,View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "../../styles";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});
//airplane icon on footer,feedback screen
export const SendFooterIcon = connect(mapStateToProps, {})(({ darkMode, onPress, style }) => {

	const colorTheme = darkMode
		? {
			fill: COLORS.backgroundLight,
		} : {
			fill: COLORS.acsentLight,
		};

	return (
		<View style={{...styles.container, ...style}} onPress={onPress}>
			<Svg
				height="100%"
				viewBox="0 0 512.005 512.005"
				width="100%"
			>
				<G>
					<G>
						<Path
							d="m511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184c-5.801 2.215-9.638 7.775-9.65 13.984-.012 6.21 3.803 11.785 9.596 14.022l135.403 52.295v164.713c0 6.948 4.771 12.986 11.531 14.593 6.715 1.597 13.717-1.598 16.865-7.843l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669 127.599-418.357 122.083-400.163 122.31-401.214zm-118.981 52.718-234.803 167.219-101.028-39.018zm-217.677 191.852 204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546-120.296-89.276 217.511-229.462z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
					</G>
				</G>
			</Svg>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		width: 22,
		height: 22
	}
});
