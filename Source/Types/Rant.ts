
import { Image } from './Image.ts'
import { Post } from './Post.ts'


export interface Rant extends Post {

    user_avatar_lg : Avatar ,

    attached_image : '' | Image ,

    num_comments : number ,

    special : bool ,

    tags : string [] ,

    text : string ,

    rt : number ,

    rc : number ,

    id : number ,

}
