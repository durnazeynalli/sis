import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "../../styles";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const SettingsIcon = connect(mapStateToProps, {})(({ darkMode, onPress }) => {

	const colorTheme = darkMode
		? {
			fill: COLORS.backgroundDark,
		} : {
			fill: COLORS.backgroundLight,
		};
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Svg width="100%" height="100%" viewBox="0 0 512 512">
				<G>
					<G>
						<G>
							<G>
								<Path
									d="M207,200c0-11.046-8.954-20-20-20h-80c-11.046,0-20,8.954-20,20v35.878H0v40h87V310c0,11.046,8.954,20,20,20h80     c11.046,0,20-8.954,20-20v-34.122h305v-40H207V200z M167,290h-40v-70h40V290z"
									data-original="#000000"
									class="active-path"
									data-old_color="#000000"
									fill={colorTheme.fill}
								/>
								<Path
									d="M431,382c0-11.046-8.954-20-20-20h-80c-11.046,0-20,8.954-20,20v35H0v40h311v35c0,11.046,8.954,20,20,20h80     c11.046,0,20-8.954,20-20v-35h81v-40h-81V382z M391,472h-40v-70h40V472z"
									data-original="#000000"
									class="active-path"
									data-old_color="#000000"
									fill={colorTheme.fill}
								/>
								<Path
									d="M433,56V20c0-11.046-8.954-20-20-20h-80c-11.046,0-20,8.954-20,20v36H0v40h313v34c0,11.046,8.954,20,20,20h80     c11.046,0,20-8.954,20-20V96h79V56H433z M393,110h-40V40h40V110z"
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
		width: 22,
		height: 22,
		marginLeft: 20
	}
});
