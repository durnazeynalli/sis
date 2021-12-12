import React from 'react';
import { StyleSheet, TouchableOpacity , View} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "../../styles";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const MenuIcon = connect(mapStateToProps, {})(({ darkMode, onPress }) => {

	const colorTheme = darkMode
		? {
			fill: COLORS.backgroundLight,
		} : {
			fill: COLORS.acsentLight,
		};

	return (
		<View style={styles.container} onPress={onPress}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				id="Layer_1"
				enable-background="new 0 0 512 512"
				height="100%"
				viewBox="0 0 512 512"
				width="100%"
			>
				<G>
					<G>
						<Path
							d="m174 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="m446 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="m392 512c-66.168 0-120-53.832-120-120s53.832-120 120-120 120 53.832 120 120-53.832 120-120 120zm0-208c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="m174 512h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"
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
