import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GLOBAL_STYLES } from '../../styles';
import { SearchBar } from './SearchBar';
import { connect } from 'react-redux';
import { selectChatsUsers, initPriviteChats, setRecieverInfo, getAndListenChatUsers } from '../../redux/chats';
import { UserCard } from './UserCard';
import { selectAuthUserID } from '../../redux/auth';
import { selectTheme } from '../../redux/theme';
import { darkModeHandler } from '../../styles/darkModeHandler';

const mapStateToProps = (state) => ({
  users: selectChatsUsers(state),
  userID: selectAuthUserID(state),
  darkMode: selectTheme(state),
});

export const PeopleListField = connect(mapStateToProps, {
  initPriviteChats,
  setRecieverInfo,
  getAndListenChatUsers,
})(
  ({
    users,
    initPriviteChats,
    userID,
    navigation,
    setRecieverInfo,
    darkMode,
    getAndListenChatUsers,
  }) => {
    const theme = darkModeHandler(darkMode);

    const usersArr = Object.keys(users)
      .map((key) => ({
        ID: key, //use uppercase letters for IDs
        ...users[key],
      }))
      .filter((user) => user.ID !== userID);


    const onUserCardPressHandler = async (reciever) => {
      initPriviteChats(reciever.ID);
      setRecieverInfo({
        userName: reciever.name,
        image: reciever.profilePiC,
      });
      navigation.navigate("PriviteChat");
      getAndListenChatUsers();
    };
   
      return (
        <View style={{ ...styles.container, ...theme }}>
          <SearchBar />
          {!!users && (
            <FlatList
              // ListHeaderComponent={()=><SearchBar/>}
              style={styles.listContainer}
              keyExtractor={(item) => item.ID}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={usersArr}
			 
			  renderItem={({ item }) => {
				  
                return (
                  <UserCard
                    user={item}
                    onPress={() => onUserCardPressHandler(item)}
                  />
                );
              }}
            />
          )}
        </View>
			  
	  );
    

  }
);


const styles = StyleSheet.create({
  container: {
    height: 170,
    width: "100%",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    // marginTop: 5,
    ...GLOBAL_STYLES.shaddowBottum,
  },
  listContainer: {
    width: "100%",
    height: "80%",
  },
  
});
