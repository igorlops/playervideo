import { videoStore } from "./VideoContext";
import { useContext } from "react";
import {StorageService} from '../services/StorageService'

export const videoInitialState = {
    selectedVideo: {},
    videos: StorageService.get('videoList',[
        {
            id:1,
            title:'Brincando na piscina',
            duration:7,
            url:'assets/videos/piscina.mp4',
            cover:'assets/imgs/piscina.png'
        },
        {
            id:2,
            title:'Jogando XBox',
            duration:13,
            url:'assets/videos/play.mp4',
            cover:'assets/imgs/play.png'
        },
        {
            id:3,
            title:'Pão de queijo',
            duration:11,
            url:'assets/videos/pao-one.mp4',
            cover:'assets/imgs/pao-one.png'
        },{
            id:4,
            title:'Pãozinho de queijo',
            duration:23,
            url:'assets/videos/pao-two.mp4',
            cover:'assets/imgs/pao-two.png'
        }
    ])
}

export function videoReducer(state, action){
    switch(action.type){
        case 'add':
            const newList = [...state.videos, action.value];
            StorageService.set('videoList',newList)
            return {...state, videos:newList}
        case 'select':
            return {...state, selectedVideo: action.value}
        default: return state;
    }
}