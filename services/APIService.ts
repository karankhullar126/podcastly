import { sha1 } from "js-sha1";
import * as APIEndPoint from "../constants/APIEndPoint";
import { Podcast } from "../models/Podcast";


class APIService {

    private baseURL = "https://api.podcastindex.org/api/1.0"
    private APIKey = ""
    private APISecret = ""
    private userAgent = "PodCastApp/1.0"

    constructor() {}

    private getHeaders() {
        let date = String(Math.floor((new Date()).getTime() / 1000))
        let authorization =  sha1(this.APIKey + this.APISecret + date)
        return {
            "User-Agent": this.userAgent,
            "X-Auth-Key": this.APIKey,
            "X-Auth-Date": date,
            "Authorization": authorization
        }
    }

    getPodcasts(search: string): Promise<Podcast[]> {
        let request: RequestInit = {
            headers: this.getHeaders(),
            method: "GET"
        }
        let url = this.baseURL + APIEndPoint.GET_PODCASTS + search
        console.log("Feeds fetcheing", url)
        return fetch(url, request).then(async (response) => {
            let result = await response.json()
            let feeds: Podcast[] = result.feeds 
            return feeds ?? []
        }, (error) => {
            console.log("Error while fetching Podcasts", JSON.stringify(error))
            throw(error)
        })
    }


    getPodcastEpisodes(id: number): Promise<PodcastEpisode[]> {
        let request: RequestInit = {
            headers: this.getHeaders(),
            method: "GET"
        }
        let url = this.baseURL + APIEndPoint.GET_PODCAST_EPISODES + id
        console.log("Episodes fetching", url)
        return fetch(url, request).then(async (response) => {
            let result = await response.json()
            let feeds: PodcastEpisode[] = result.items 
            return feeds ?? []
        }, (error) => {
            console.log("Error while fetching episodes", JSON.stringify(error))
            throw(error)
        })
    }

    


}

export const apiService = new APIService()