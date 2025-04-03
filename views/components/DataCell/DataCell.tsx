import { Text, View, StyleSheet, Image } from "react-native";
import * as Styles from '../../../constants/Styles'

function DataCell(properties: { title: string, subTitle1: string, subTitle2?: string, imgURL?: string }) {
    
    const style = StyleSheet.create({
        margin: {
            margin: 12,
            flex: 2
        },
        subtitleFont: {
            color: "#667085"
        }
    })

    let subTileCompose = StyleSheet.compose(style.subtitleFont, Styles.font.subTitle)

    return (
        <View style= {{backgroundColor: "white", flexDirection:"row"}}>
            {properties.imgURL && <Image
            style={{width: 50, height: 50, backgroundColor: "gray", marginLeft: 12, alignSelf:"center", borderRadius: 25 }}
            src={properties.imgURL}
            />}
            <View style={style.margin}>
                <Text style={Styles.font.title}>{properties.title}</Text>
                <Text style={subTileCompose} numberOfLines={1}>{properties.subTitle1}</Text>
                { properties.subTitle2 && <Text style={subTileCompose}>{properties.subTitle2}</Text> }
            </View>
        </View>
    )
}

export default DataCell