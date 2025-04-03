import { StyleSheet } from "react-native";

export const BORDER_COLOUR = '#D0D5DD'
export const BACKGROUND_COLOUR = '#FFFFFF'

export const font = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 22
    },
    subTitle: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18
    }
})

export const componentStyles = StyleSheet.create({

    inputContainer: {
        borderWidth: 1,
        backgroundColor: BACKGROUND_COLOUR,
        borderColor: BORDER_COLOUR,
        borderRadius: 8,
        display: "flex", 
        flexDirection: "row"
    },
    
    input: {
      backgroundColor: BACKGROUND_COLOUR,
      flex: 1
    },

    inputFont: {
        fontSize: 16,
        fontWeight: 400,
    }
    
  });

