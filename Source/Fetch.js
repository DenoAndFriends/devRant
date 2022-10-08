
const { error , log } = console;


export async function query ( options ){

    let { url , parameters } = options;

    url = new URL(url);

    parameters ??= {};
    parameters.app = 3;


    const { searchParams } = url;

    for(const [ parameter , value ] of Object.entries(parameters))
        searchParams.set(parameter,value);

    log(url.href);

    const response = await fetch(url);

    log(response);

    if(response.ok)
        return await response.json();

    throw new Error(
        `\n${ response.status } : ${ response.statusText }` +
        `\nUrl : ${ response.url }`
    )
}
