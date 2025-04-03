import { Sound } from "expo-av/build/Audio";
import { PAUSE, PLAY, RESUME, STOP } from "./PlayerActionTypes";
import { Player } from "../../models/Player";
import { PlayerStatus } from "../../constants/PlayerStatus";

export default function playerReducer(state: Player = {status : PlayerStatus.NA}, action: any) {
    switch(action.type) {
        case PLAY:
            return action.player
        case PAUSE:
            if (state && state.sound) { state.sound.pauseAsync() }
            return {...state, status: PlayerStatus.paused}
        case STOP:
            if (state && state.sound) {  state.sound.stopAsync() }
            return {...state, status: PlayerStatus.stoped}
        case RESUME:
            if (state && state.sound) {  state.sound.playAsync() }
            return {...state, status: PlayerStatus.playing}
        default:
            return state
    }
}