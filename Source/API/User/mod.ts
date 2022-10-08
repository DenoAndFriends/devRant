
import { UserContentQuery } from '../../Types/UserContentQuery.ts'
import { Profile } from '../../Types/Profile.ts'

import fetchContent from './Content.js'
import fetchId from './Id.js'



/**
 *  Resolves the users id from their username.
 */

export async function id (

    username : string

) : number {

    return await
        fetchId ( username );
}


/**
 *  Queries for a users profile and the content specified.
 */

export async function content (

    query : UserContentQuery

) : Profile {

    return await
        fetchContent ( query ) as Profile;
}
