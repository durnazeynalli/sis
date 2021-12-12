import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

export const EditIcon = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Capa_1"
				viewBox="0 0 333 333"
				style="enable-background:new 0 0 333 333;"
				width="100%"
				height="100%"
			>
				<G>
					<G>
						<G>
							<Path
								d="M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill="#53565A"
							/>
						</G>
					</G>
					<G>
						<G>
							<Path
								d="M230,114.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h220c5.5,0,10-4.5,10-10S235.5,114.5,230,114.5z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill="#53565A"
							/>
						</G>
					</G>
					<G>
						<G>
							<Path
								d="M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill="#53565A"
							/>
						</G>
					</G>
					<G>
						<G>
							<Path
								d="M151,281.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h141c5.5,0,10-4.5,10-10S156.5,281.5,151,281.5z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill="#53565A"
							/>
						</G>
					</G>
				</G>
			</Svg>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 22,
		height: 22
	}
});
