
import { UserContentWrapper } from './UserContentWrapper.ts'
import { Avatar } from './Avatar.ts'


export interface Profile {

    created_time : number ,

    avatar_sm : Avatar ,

    username : string ,

    location : string ,

    content : UserContentWrapper ,

    website : string ,

    skills : string ,

    github : string ,

    avatar : Avatar ,

    score : number ,

    about : string ,

    dpp : 0

}
