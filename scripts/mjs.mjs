export function getapi(url) {
    const response = fetch(url).then(result => { return result.json() });

    return response
}