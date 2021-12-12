import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../commons/Header';
import { Footer } from '../commons/Footer';
import {COLORS} from "../styles";
import {Feedback} from "../components";

import {selectTheme} from "../redux/theme";
import {connect} from "react-redux";
import {darkModeHandler} from "../styles/darkModeHandler";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state)
});


export const FeedbackScreen = connect(mapStateToProps, {})(({ darkMode }) => {

    const theme = darkModeHandler(darkMode);

    return (
        <View style={{...styles.container, ...theme}}>
            <Header title='Feedback' />
            <Feedback/>
            <Footer style={styles.footer} />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 0
    }
});
