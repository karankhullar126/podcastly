import { useRoute } from "@react-navigation/native";
import { Image, View, Text, ListRenderItem, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Podcast } from "../../models/Podcast";
import DataCell from "../components/DataCell/DataCell";
import { useEffect, useState } from "react";
import { apiService } from "../../services/APIService";
import { useDispatch } from "react-redux";
import { playAudio } from "../../redux/Player/PlayerAction";

function PodcastDetailPage() {

    const route = useRoute()
    const podcast: Podcast = (route.params as any)?.podcast
    const [ episodes, setEpisodes ] = useState<PodcastEpisode[]>([])
    const dispatch = useDispatch<any>()

    useEffect(()=> {
        getEpisodes()
    }, [])

    async function getEpisodes() {
        let episode = await apiService.getPodcastEpisodes(podcast.id)
        setEpisodes(episode)
    }
    
    return (
        <ScrollView>
        <View style={{flex: 1}}>
            <Image style={{height: 300, width: '100%', backgroundColor:"black"}} src={podcast.image}></Image>
            <DataCell title={podcast.title} subTitle1={podcast.author} subTitle2={podcast.description} ></DataCell>

            <Text style={{fontSize: 18, padding: 16,  width: '100%', backgroundColor: "white"}}>{"Episodes"}</Text>
            { episodes.map((item) => {
             return (
                <TouchableOpacity key={item.id} onPress={() => {
                    dispatch(playAudio(item))
                }}>
                    <DataCell title={item.title} subTitle1={"Episode: " + item.episode} subTitle2={item.datePublishedPretty} ></DataCell>
                 </TouchableOpacity>
             )
            }) }
        </View>
        </ScrollView>
    )
}

export default PodcastDetailPage