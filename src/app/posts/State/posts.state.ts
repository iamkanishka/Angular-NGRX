import { Post } from "src/app/models/posts.model"

export interface PostsState{
    posts:Post[]
}

export const initialState:PostsState ={

    posts:[
        {id:'1',title:'Sample Title 1', description:'Smaple Description 1'},
        {id:'2',title:'Sample Title 2', description:'Smaple Description 2'},
        {id:'3',title:'Sample Title 3', description:'Smaple Description 3'},
        {id:'4',title:'Sample Title 4', description:'Smaple Description 4'},

    ]
}