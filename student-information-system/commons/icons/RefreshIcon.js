import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "../../styles";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const RefreshIcon = connect(mapStateToProps, {})(({ darkMode, onPress, style }) => {

	const colorTheme = darkMode
		? {
			fill: COLORS.backgroundLight,
		} : {
			fill: COLORS.acsentLight,
		};

	return (
		<TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Capa_1"
				viewBox="0 0 500.552 500.552"
				style="enable-background:new 0 0 500.552 500.552;"
				width="100%"
				height="100%"
				class=""
			>
				<G>
					<G>
						<G>
							<G>
								<Path
									d="M452.568,329.917l13.944,4.336c-46.326,119.462-180.724,178.75-300.186,132.424     C100.939,441.321,50.532,387.749,29.2,320.941c-1.343-4.211-5.845-6.535-10.056-5.192c-4.211,1.343-6.535,5.845-5.192,10.056     c41.682,130.47,181.239,202.447,311.709,160.765c71.752-22.923,129.197-77.213,156.131-147.557l15.2,4.712l3.56-89.72     L452.568,329.917z"
									data-original="#000000"
									class="active-path"
									data-old_color="#000000"
									fill={colorTheme.fill}
								/>
								<Path
									d="M34,166.381C80.303,46.91,214.689-12.405,334.161,33.898c65.98,25.572,116.682,79.857,137.695,147.427     c1.049,3.336,4.143,5.604,7.64,5.6c0.813,0,1.622-0.121,2.4-0.36c4.219-1.312,6.576-5.795,5.265-10.014     c0-0.001,0-0.001-0.001-0.002C446.474,45.765,307.469-27.274,176.685,13.413C104.098,35.994,45.877,90.619,18.72,161.621     l-15.16-4.712L0,246.629l47.944-75.912L34,166.381z"
									data-original="#000000"
									class="active-path"
									data-old_color="#000000"
									fill={colorTheme.fill}
								/>
							</G>
						</G>
					</G>
				</G>
			</Svg>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		width: 18,
		height: 18
	}
});
