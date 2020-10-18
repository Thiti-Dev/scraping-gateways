import needle from 'needle'

//@Iternal function utility
function getOnlyBodyPartFromFullHtmlBody(full_html_body:string):boolean|string{
    const pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
    const array_matches = pattern.exec(full_html_body);
    if(array_matches){
        return array_matches![1]
    }else{
        return false
    }
}
// ────────────────────────────────────────────────────────────────────────────────


export async function GET_FullHtmlResponseFromPath(url:string):Promise<string|boolean>{
    return new Promise((resolve, reject) => {
    needle.get(url, function(error, response) {
        if (!error && response.statusCode == 200){
            resolve(getOnlyBodyPartFromFullHtmlBody(response.body))
        }
        else{
            resolve(false)
        }
        })
    })
}