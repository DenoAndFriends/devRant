
import { Image } from './Image.ts'
import { Post } from './Post.ts'


export interface Rant extends Post {

    attached_image : '' | Image ,

    user_avatar_lg : Avatar ,

    num_comments : number ,

    special : bool ,

    edited : bool ,

    tags : string [] ,

    text : string ,

    rt : number ,

    rc : number ,

    id : number

}
