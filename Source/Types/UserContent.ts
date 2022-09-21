
import { Comment } from './Comment.ts'
import { Rant } from './Rant.ts'


export interface UserContent {

    favorites : Rant [] ,

    comments : Comment [] ,

    upvoted : Rant [] ,

    collabs : Rant [] ,

    rants : Rant []

}
