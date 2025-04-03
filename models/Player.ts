import { Sound } from "expo-av/build/Audio";
import { PlayerStatus } from "../constants/PlayerStatus";

export interface Player {
    status: PlayerStatus,
    sound?: Sound,
    episode?: PodcastEpisode
}