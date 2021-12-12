import React from "react";
import {COLORS} from "./colors";

export const darkModeHandler = (darkMode) => {
    let colorTheme={};

    if(darkMode){
        colorTheme= {
            backgroundColor: COLORS.backgroundDark,
            mainColor: COLORS.drawerDark,
            postBgColor: COLORS.screenBgDark,
            placeholderColor: COLORS.backgroundLight,
            textColor: COLORS.backgroundLight,
            headerColor: COLORS.headerColor,
            drawerStart: COLORS.drawerLight,
            drawerEnd: COLORS.drawerDark,
            drawerText: COLORS.backgroundDark,
            headerBackground: COLORS.acsentLight,
            linkColor: COLORS.backgroundLight,
            searchBgColor: COLORS.acsentLight,
            messageColor: COLORS.sendDark,
            senderColor: COLORS.textColorDark,
            calendarHeader: COLORS.headerColor,
        }
    }else{
        colorTheme= {
            backgroundColor: COLORS.backgroundLight,
            mainColor: COLORS.acsentColor,
            postBgColor: COLORS.screenBgLight,
            placeholderColor: COLORS.textColorDark,
            textColor: COLORS.acsentLight,
            headerColor: COLORS.drawerLight,
            drawerStart: COLORS.headerColor,
            drawerEnd: COLORS.acsentColor,
            drawerText: COLORS.backgroundLight,
            headerBackground: COLORS.commentsColorLight,
            linkColor: COLORS.drawerLight,
            searchBgColor: COLORS.backgroundLight,
            messageColor: COLORS.drawerLight,
            senderColor: COLORS.acsentLight,
            calendarHeader: COLORS.acsentColor,
        }
    }

    console.log(colorTheme);
    return {...colorTheme};
};
