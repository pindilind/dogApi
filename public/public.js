
let bodyDiv = document.getElementById('body') //hämtar bodydiven
bodyDiv.style.overflow = "hidden"
bodyDiv.style.display = "flex"
bodyDiv.style.flexDirection = "row-reverse"
bodyDiv.style.justifyContent = "space-evenly"


let containerTwo = document.getElementById('containerTwo') //skapar ContainerTwo
containerTwo.style.display = "flex"
containerTwo.style.flexDirection = "column"
containerTwo.style.alignItems = "center"
/* containerTwo.style.marginTop = "-65px" */

let containerOne = document.getElementById('containerOne') //skapar ContainerOne 
containerOne.style.display = "flex"
containerOne.style.flexDirection = "column"
containerOne.style.alignItems = "center"
containerOne.style.marginTop = "-65px"

bodyDiv.appendChild(containerOne, containerTwo) //Appendar containerOne / containerTwo till body


let getDogBtn = document.createElement('button') //skapar knapp
let getDogText = document.createElement('h4') // skapar h4
getDogText.innerText = 'PUSH HERE' //skriver text på knapp
let boneIcon = document.createElement("i")
boneIcon.classList = "fas fa-bone"
boneIcon.style.fontSize = "120px"
boneIcon.style.color = "#fff3b0";
boneIcon.style.zIndex = "-1"

getDogBtn.style.zIndex = "2"
/* getDogBtn.style.width = "200px" */
getDogBtn.style.height = "30px"
getDogBtn.style.justifyContent = "center"
getDogBtn.style.alignItems = "center"
getDogBtn.style.display = "flex"
getDogBtn.style.fontFamily = "Wire One";
getDogBtn.style.fontSize = "30px";
/* getDogBtn.style.padding= "0px";
getDogBtn.style.borderRadius = "2px"; */
getDogBtn.style.border = "none";
getDogBtn.style.backgroundColor = "#fff3b0";
getDogBtn.style.color = "#9e2a2b";
getDogBtn.style.marginTop = "-72px";
getDogBtn.style.marginLeft = "0px";

bodyDiv.appendChild(containerOne)
containerOne.appendChild(boneIcon)
containerOne.appendChild(getDogBtn)
getDogBtn.appendChild(getDogText)
/* getDogBtn.appendChild(boneIcon)  */

getDogBtn.onclick = async function() { //onclick funktion
    try {
    let response = await fetch("https://dog.ceo/api/breeds/image/random")
        let body = await response.json()
        console.log(body)
        
        let img = document.createElement('img')
        img.style.maxHeight = "300px"
        img.style.maxWidth = "300px"
        img.style.justifyContent = "center"
        img.style.alignItems = "center"
        img.style.display = "flex"
        img.style.objectFit = "cover";
        img.src = body.message//hämtar fetch

       document.getElementById('imgDiv').appendChild(img)

       /* document.getElementById('imgDiv').innerHTML = ""; */ //kod rensa div
       
    } catch(err) {
        console.log(err)
        document.body.innerHTML = "<h1>Det gick inte att hämta</h1>"
    }  
     
    
    } 


 let btnDiv = document.createElement("div")

let saveTodoBtn = document.createElement('button') //skapar knapp
let saveTodoText = document.createElement('h4') // skapar h4
saveTodoText.innerText = "Spara" //skriver text på knapp

containerTwo.appendChild(btnDiv)
btnDiv.appendChild(saveTodoBtn)
saveTodoBtn.appendChild(saveTodoText)

saveTodoBtn.onclick = async function() { //onclick funktion

    let taskInput = document.getElementById('someValue').value
    console.log(taskInput)
    
    const status = await makeRequest("http://localhost:3000/api", "POST", {dogItems: taskInput})
    console.log(status)    

}

let getToDoBtn = document.createElement('button') //skapar knapp
let getToDoText = document.createElement('h4') // skapar h4
getToDoText.innerText = 'Hämtar ToDo' //skriver text på knapp


containerTwo.appendChild(btnDiv)
btnDiv.appendChild(getToDoBtn)
getToDoBtn.appendChild(getToDoText)

    getToDoBtn.onclick = async function() { //onclick funktion 

        const displayToDo = await makeRequest("http://localhost:3000/api", "GET")
        console.log(displayToDo)

        for (let i = 0; i < displayToDo.length; i++) {
            const element = document.createElement('li')
            element.innerText = displayToDo[i].dogItems
            console.log(displayToDo[i])
            
            document.getElementById('toDoDiv').appendChild(element)
    
        } 


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