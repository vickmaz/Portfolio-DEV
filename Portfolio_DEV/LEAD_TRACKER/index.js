/* definisco le variabili e costanti tramite getElementById e creo l'array vuoto myLeads, 
che verrà riempito con gli input dell'utente */

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
// uso localStorage per salvare i lead direttamente nella cache del browser
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// bottone SAVE TAB, permette di salvare la tab che l'utente sta attualmente visitando
tabBtn.addEventListener("click", function(){    
    // snippet di codice che permette al bottone SAVE TAB di funzionare collegandosi all'API di Chrome
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

// render() stampa a schermo myLeads dentro listItems, a sua volta incluso nella lista non ordinata ulEl
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

// bottone DELETE ALL, usato per resettare sia myLeads sia la cache tramite localStorage.clear()
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

//bottone SAVE INPUT, permette all'utente di inserire manualmente un lead dopo averlo digitato dentro la casella inputEl
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})