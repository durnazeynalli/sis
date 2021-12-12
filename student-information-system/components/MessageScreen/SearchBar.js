import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import { COLORS } from '../../styles';
import { selectChatsUsers, setChatsUsers, getAndListenChatUsers } from '../../redux/chats';
import { selectTheme } from '../../redux/theme';
import { SearchIcon } from '../../commons/icons/SearchIcon';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	users: selectChatsUsers(state),
	darkMode: selectTheme(state)
});

export const SearchBar = connect(mapStateToProps, {
	setChatsUsers,
	getAndListenChatUsers
})(({ users = {}, setChatsUsers, getAndListenChatUsers, darkMode }) => {
	const [ searchName, setSaerchName ] = useState('');
	const usersArr = Object.keys(users).map((key) => ({
		ID: key, //use uppercase letters for IDs
		...users[key]
	}));
	const onPressHandler = () => {
		if (searchName !== '') {
			if (!!usersArr) {
				let user = usersArr.filter((user) => {return user.userName.includes(searchName.toLowerCase().trim());});
				// console.log(user)
				setChatsUsers({...user});
			}
		}
		setSaerchName('');
	};

	const theme = darkModeHandler(darkMode);

	return (
		<View style={{ ...styles.container, backgroundColor: theme.searchBgColor }}>
			<SearchIcon onPress={onPressHandler} />
			<TextInput
				value={searchName}
				style={{ ...styles.searchBar, color: theme.placeholderColor }}
				placeholder="search by username"
				onChangeText={(value) => setSaerchName(value)}
				placeholderTextColor={theme.placeholderColor}
			/>
			<MaterialIcons
				name="cancel"
				size={24}
				color={COLORS.commentsColorLight}
				style={styles.refresh}
				onPress={getAndListenChatUsers}
			/>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: COLORS.borderLight,
		borderRadius: 4,
		height: 32,
		alignItems: 'center',
		paddingHorizontal: 11,
		paddingVertical: 8,
		marginTop: 8,
		marginBottom: 13
	},
	searchBar: {
		width: 275,
		height: '100%'
	},
	refresh: {
		position: 'absolute',
		right: 0,
		marginRight: 5
	}
});
