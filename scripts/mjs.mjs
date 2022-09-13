export async function getapi(url) {
    const response = await fetch(url);

    var data = await response.json();
    return data
}