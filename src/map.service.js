const API_TOKEN = 'pk.fbbbc289d3b8da74f415caccb3d823b3';
const BASE_URL = 'https://us1.locationiq.com/v1';

export async function getGeolocation(location) {
    const url = `${BASE_URL}/search.php?key=${API_TOKEN}&q=${location}&format=json`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return { lat: data[0].lat, lon: data[0].lon };
}