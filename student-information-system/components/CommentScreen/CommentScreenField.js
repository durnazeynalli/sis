import React, { useState } from 'react';
import {StyleSheet, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

import {COLORS, GLOBAL_STYLES } from '../../styles';
import { connect } from 'react-redux';
import {selectTheme} from "../../redux/theme";
import {addNewComment, selectSelectedPost} from "../../redux/comments";
import {OrigamiIcon} from "../../commons/icons/OrigamiIcon";
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
    selectedPost: selectSelectedPost(state),
    darkMode: selectTheme(state)
});

export const CommentScreenField = connect(mapStateToProps, { addNewComment })(({ selectedPost, addNewComment, darkMode, style }) => {
    const [ newComment, setNewComment ] = useState('');

    const sharePostHandler = () => {
        if (newComment.trim() !== '') {
            addNewComment(selectedPost.ID, newComment);
            setNewComment('');
        }
    };

    const theme = darkModeHandler(darkMode);

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={20}
            style={{ ...style, ...styles.container, ...theme, ...GLOBAL_STYLES.shaddowBottum, ...GLOBAL_STYLES.shaddowTop, }}
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
        >
            <TextInput
                value={newComment}
                onChangeText={setNewComment}
                placeholderTextColor = {theme.placeholderColor}
                style={{...styles.field, color: theme.placeholderColor}}
                placeholder="write a comment"
            />
            <OrigamiIcon style={styles.icon} onPress={sharePostHandler} />
        </KeyboardAvoidingView>
    );
});

const styles = StyleSheet.create({
    container: {
        minHeight: 50,
        flexDirection: 'row',
        borderRadius: 50,
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    field: {
        width: '90%',
        height: '100%',
        textAlign:"auto",
        flexWrap:'wrap',
    }
});
