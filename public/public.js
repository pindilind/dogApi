
let bodyDiv = document.getElementById('body') //hämtar bodydiven

let getDogBtn = document.createElement('button') //skapar knapp
let getDogText = document.createElement('h4') // skapar h4
getDogText.innerText = 'Hämta hund' //skriver text på knapp

bodyDiv.appendChild(getDogBtn)
getDogBtn.appendChild(getDogText)

getDogBtn.onclick = async function() { //onclick funktion
    try {
    let response = await fetch("https://dog.ceo/api/breeds/image/random")
        let body = await response.json()
        console.log(body)
    } catch(err) {
        console.log(err)
        document.body.innerHTML = "<h1>Det gick inte att hämta</h1>"
    } 
       /*  const status = await makeRequest("http://localhost:3000/api", "GET")
        console.log(status) */

    } 


let saveDogBtn = document.createElement('button') //skapar knapp
let saveDogText = document.createElement('h4') // skapar h4
saveDogText.innerText = "Spara" //skriver text på knapp

bodyDiv.appendChild(saveDogBtn)
saveDogBtn.appendChild(saveDogText)

saveDogBtn.onclick = async function() { //onclick funktion
    
    const response = await makeRequest("http://localhost:3000/api", "POST", {dogItems})
    console.log(response)    

}


async function makeRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            headers: {"Content-Type": "application/json"},
            method,
            body: JSON.stringify(body)
        })
        console.log(response)
        const result = await response.json()
        return result
    }catch(err) {
        console.error(err)
    }
}