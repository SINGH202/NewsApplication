async function topNews(){
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=16c6985c8c9541eabafd1e36f35537f8`)
    let data = await res.json();
    // console.log(data.articles);
    return (data.articles);
}
export default topNews;