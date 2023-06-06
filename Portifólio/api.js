async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/GCaioS/js-developer-portfolio/main/data/profile.json'
    const fetching = fetch(url)
    return await fetching.json()
}