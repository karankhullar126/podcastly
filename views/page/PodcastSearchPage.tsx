import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItem, TextInput, TouchableOpacity, View, StyleSheet, Button, Text } from "react-native";
import { apiService } from "../../services/APIService";
import { Podcast } from "../../models/Podcast";
import DataCell from "../components/DataCell/DataCell";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar/SearchBar";

function PodcastSearchPage() {

    const [ podcasts, setPodCasts ] = useState<Podcast[]>([])
    // const [ searchText, setSearchText ] = useState<string>("")
    const navigation: NavigationProp<ParamListBase> = useNavigation()
    let timer: string | number | NodeJS.Timeout | undefined 
   
     async function fetchPodCast(searchText: string) {
        if (searchText.length == 0) { 
            setPodCasts([]) 
            return
        }
        try {
            let podcast = await apiService.getPodcasts(searchText)
            setPodCasts(podcast)
        } catch {
            setPodCasts([])
        }
     }



     function search(value: string) {
        if(timer) { clearTimeout(timer) }
        
        timer = setTimeout(() => {
            fetchPodCast(value)
        }, 1000);
     }

     const renderTransferRows: ListRenderItem<Podcast> = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Podcast", {podcast: item}) }>
            <DataCell title={item.title} subTitle1={item.author} imgURL={item.image}></DataCell>
        </TouchableOpacity>
      );
     
    return (
        <View style={{flex:1}}>
            <SearchBar onChangeText={search}></SearchBar>

             <FlatList
                keyboardDismissMode={"on-drag"}
                data={podcasts}
                renderItem={renderTransferRows}></FlatList>
        </View>
    )
}

export default PodcastSearchPage