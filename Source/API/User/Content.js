
import { user as endpoint } from '../../Endpoints/mod.ts'
import { query } from '../../Fetch.js'


const { log } = console;


export default async function ( userId , options ){

    const { content = 'all' } = options;


    const { profile } = await
        fetch(userId,content);


    if(content === 'all'){

        const response = await
            fetch(userId,'collabs');

        profile.content.content.collabs
            = response.profile.content.content.collabs ?? [];
    }

    return profile;
}


async function fetch ( userId , content ){
    return await query({
        url : endpoint.user( userId ) ,
        parameters : { content }
    });
}
