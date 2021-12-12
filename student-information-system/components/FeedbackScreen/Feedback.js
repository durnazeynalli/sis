import React, {useState} from 'react';
import {StyleSheet, View, TextInput } from 'react-native';
import {connect} from "react-redux";

import { COLORS } from '../../styles/colors';
import { GLOBAL_STYLES } from "../../styles";
import {Modal} from "./Modal";
import {submitFeedback} from "../../redux/feedback";
import {selectTheme} from "../../redux/theme";
import {SendIcon} from "../../commons/icons/SendIcon";
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state)
});

export const Feedback = connect(mapStateToProps, { submitFeedback })(({submitFeedback, darkMode }) => {
    const [ field, setField ] = useState('');
    const [send, setSend] = useState(false);
    const submitHandler = () => {

        if (field.trim() !== '') {
            submitFeedback(field);
            setField('');
        }
        toggleSend();
    };
    const toggleSend = () => setSend(v => !v);

    const theme = darkModeHandler(darkMode);

    return (
        <>
            <View style={styles.container }>
                <View style={{...styles.textInput, ...theme}}>
                    <TextInput
                        placeholder = 'any suggestions for us to improve ?..'    
                        placeholderTextColor = {theme.placeholderColor}
                        onChangeText={setField}
                        value={field}
                        style={{...styles.text, color: theme.placeholderColor}}
                    />
                    <SendIcon
                        style={styles.sendIcon}
                        onPress={toggleSend}  />
                </View>
            </View>
            {send && (
                <Modal 
                    cancel={toggleSend} 
                    sent={submitHandler} 
                    text="Do you want to submit this feedback?"
                />
            )}
        </>
    );
});
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        alignItems:'center',
        justifyContent:'center',
    },
    textInput: {
        width:"90%",
        height: 400,
        borderRadius: 4,
        padding: 20,
        marginTop:60,
        ...GLOBAL_STYLES.shaddowTop
    },
    text: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexWrap: 'wrap',
    },
    sendIcon: {
        alignSelf: 'center',
        position: 'absolute',
        right: 15,
        top: 25
    },
    touchIcon: {
        marginTop: -35,
    }
});
