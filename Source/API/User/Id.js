
import { user as endpoint } from '../../Endpoints/mod.ts'
import { query } from '../../Fetch.js'


const { log } = console;


export default async function ( username ){

    const response = await query({
        url : endpoint.id ,
        parameters : { username }
    });

    const { user_id } = response;

    return user_id;
}
