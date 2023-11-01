let myLeads = []


// let myLeads = []
let leadsCounter = 0
const container = document.querySelector('.container')
container.innerHTML = "<button class='delete-el'>Delete input</button>"

const showUl = document.querySelector('#ul-el')
const inputEl = document.querySelector('.input-el')
let inputBtn = document.querySelector('.save-btn')
const saveTab = document.querySelector('.save-tab-btn')

saveTab.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem('leads', JSON.stringify(myLeads))
        showLinks(myLeads)
    })
    
})

const deleteInput = document.querySelector('.delete-el')
deleteInput.addEventListener('click', function(){
    myLeads.pop()
    showLinks(myLeads)
})

const deleteAll = document.querySelector('.delete-all-btn')
deleteAll.addEventListener('dblclick', function(){
    console.log('double clicked')
    localStorage.clear()
    myLeads = []
    showLinks(myLeads)
})

function showLinks(leads){
    let listItems = ""
    for (let i=0;i < leads.length; i++){
        // const liEl = document.createElement('li')
        // liEl.textContent = myLeads[i]
        // showUl.append(liEl)
        listItems += `<li><a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a></li>`
    }
    // console.log(listItems)
    showUl.innerHTML = listItems
    
}


inputBtn.addEventListener('click', function(){
    // console.log('click')
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem('leads', JSON.stringify(myLeads))
    
    
    console.log(localStorage.getItem('leads'))
    showLinks(myLeads)
})

// localStorage.clear()
// console.log(localStorage.getItem('leads'))

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('leads'))

// console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    showLinks(myLeads)
}

