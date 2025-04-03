import { Dispatch, StateFromReducersMapObject } from "redux";
import { Audio } from 'expo-av';
import { Sound } from "expo-av/build/Audio";
import { PAUSE, PLAY, RESUME, STOP } from "./PlayerActionTypes";
import { Player } from "../../models/Player";
import { PlayerStatus } from "../../constants/PlayerStatus";


export function playAudio(episode: PodcastEpisode) {
        return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<any>) => {
            // Return if already player is initiated
            let player: Player = getState().player as any
            if (player && player.status == PlayerStatus.initiated) { return }
            // Stop current playing player if any
            dispatch(stop())             
            // Set the player status as initiated 
            dispatch(play({status: PlayerStatus.initiated, episode: episode}))
            return Audio.Sound.createAsync( {uri: episode.enclosureUrl}).then((soundObject) => {
                dispatch(play({status: PlayerStatus.initiated, episode: episode, sound: soundObject.sound}))
                soundObject.sound.playAsync().then(() => {
                    // Set the player status as playinh with sound object
                    dispatch(play({status: PlayerStatus.playing, episode: episode, sound: soundObject.sound}))
                })
            })
        }
}

export function play(player: Player) {
    return { type: PLAY, player: player }
}

export function pause() {
    return { type: PAUSE }
}

export function resume() {
    return { type: RESUME }
}

export function stop() {
    return { type: STOP }
}
