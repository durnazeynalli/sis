import React from 'react';
import { StyleSheet, View } from 'react-native';
import {CommentScreenHeader, CommentScreenField, Footer, Comment} from '../components';
import { COLORS } from '../styles';
import { connect } from 'react-redux';
import {selectTheme} from "../redux/theme";
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state)
});


export const CommentScreen = connect(mapStateToProps, {})(({ post, navigation, darkMode }) => {

    const theme = darkModeHandler(darkMode);

    return (
        <View style={{...styles.container, ...theme}}>
            <CommentScreenHeader navigation={navigation}/>
            <Comment navigation={navigation}/>
            <CommentScreenField style={styles.field}/>
            <Footer style={styles.footer} />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
    },
    field: {
        position: 'absolute',
        bottom: 60
    },
    footer: {
        position: 'absolute',
        bottom: 0
    }
});
