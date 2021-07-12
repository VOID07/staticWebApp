module.exports =  async function (context, req) {
    let url = "https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/random"

    let response = await fetch(url);

    if (response.ok) { 
        let json = await response.json();
    } else {
        alert("HTTP-Error: " + response.status);
    }
    context.res.json(
        {
            Text: response.phrase
        }
    )
}