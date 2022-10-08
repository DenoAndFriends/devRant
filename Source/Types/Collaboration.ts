
import { Image } from './Image.ts'
import { Post } from './Post.ts'


export interface Collaboration extends Post {

    attached_image : '' | Image ,

    user_avatar_lg : Avatar ,

    num_comments : number ,

    c_type_long : string ,

    user_dpp : number ,

    c_type : number ,

    tags : string [] ,

    text : string ,

    rt : number ,

    rc : number ,

    id : number ,

}
