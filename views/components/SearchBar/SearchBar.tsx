import { useRef } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";

function SearchBar(props: {onChangeText: (value: string) => void}) {

    let inputRef:any

    const style = StyleSheet.create({
        searchBar: {
            marginHorizontal: 12,
            marginVertical: 4,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 22,
            height: 50,
            flex: 1
        }, 
        searhCrossButton: {
            backgroundColor: "#D3D3D3",
            height: 20,
            width: 20,
            borderRadius: 10,
            alignSelf: "center",
            margin: 8,
            alignContent: "center"

        }
     })


     function crossAction() {
        inputRef.clear()
        props.onChangeText("")
     }

    return (
        <View style={{display:"flex", flexDirection: "row"}}>
                <TextInput ref={(input) => { inputRef = input }}  style={style.searchBar} placeholder="Search Podcast" onChangeText={props.onChangeText}></TextInput>
                <TouchableOpacity style={style.searhCrossButton} onPress={crossAction}>
                    <Text style={{alignSelf:"center"}}>{"x"}</Text>
                </TouchableOpacity>
            </View>
    )
}

export default SearchBar