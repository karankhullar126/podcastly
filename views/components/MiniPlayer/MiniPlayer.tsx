import { View, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DataCell from "../DataCell/DataCell";
import { Player } from "../../../models/Player";
import { PlayerStatus } from "../../../constants/PlayerStatus";
import * as Styles from '../../../constants/Styles'
import { pause, resume } from "../../../redux/Player/PlayerAction";


function MiniPlayer() {

    const player: Player = useSelector((state: any) => state.player)
    const dispatch = useDispatch()

    const style = StyleSheet.create({
        container: {
            marginBottom: player.status != PlayerStatus.NA ? 40 : 0, 
            height: player.status != PlayerStatus.NA ? 70 : 0,
            backgroundColor: "white"
        },
        icon: { 
            height: 40,
            width: 40,
            backgroundColor: "black", 
            marginLeft: 12, 
            marginTop: 12,
            borderRadius: 20
        }
    })

    function playToggle() {
        if (player.status == PlayerStatus.playing) {
            dispatch(pause())
        } else {
            dispatch(resume())
        }
    }


    return (
        <View style={style.container}>
            <View style={{backgroundColor:"black", height: 2}}></View>
            <View style={{ flexDirection: "row"}}>
                <TouchableOpacity onPress={playToggle}>
                    { player.status == PlayerStatus.playing && <Image source={require('../../../assets/ic_pause_white.png')} style={style.icon}></Image> }
                    { player.status == PlayerStatus.paused && <Image source={require('../../../assets/ic_play_white.png')} style={style.icon}></Image> }
                    { player.status == PlayerStatus.initiated && <ActivityIndicator style={{marginLeft: 12, marginTop: 12}} size="large"/> }
                </TouchableOpacity>
                
                <View style={{flexDirection: "column", margin: 12}}>
                    <Text style={Styles.font.title}>{player.episode?.title ?? ""}</Text>
                    <Text style={Styles.font.subTitle}>{(player.episode?.episode) ? "Episode: " + (player.episode?.episode ?? "") : ""}</Text>
                </View>
            </View>
            
        </View>
    )
}

export default MiniPlayer