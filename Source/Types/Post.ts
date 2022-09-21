
import { Avatar } from './Avatar.ts'
import { Link } from './Link.ts'


export interface Rant {

    created_time : number ,

    user_avatar : Avatar ,

    user_score : number ,

    vote_state : number ,

    user_id : number ,

    edited : bool ,

    links ? : Link [] ,

    score : number

}
