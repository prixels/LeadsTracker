// let myLeads = `["hey"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("hellew")
// console.log(myLeads)

// let myLeads = ["hiii", "hellew"]
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

let myLeads = []
// let oldLeads = []
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.google.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        // let activeTab = tabs[0]
        // let activeTabId = activeTab.id // or do whatever you need
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})



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





deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads=[]
    render(myLeads) //clearing the DOM
})


// localStorage.setItem("name","Pho3n1x")
// localStorage.clear()
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("myLeads1"))







inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})



//null is a falsy value that devs use to symbolise emptiness
/*values in local storage are local to me and isn't shared by default to everyone who visits the domain */

//truthy
//falsy

//fasle
//0
//null -> how you as a developer signalize emptiness
//""
//undefined -> how JavaScript signalizes emptiness
//NaN

// let trueOrFalse = Boolean("")
// console.log(trueOrFalse)
// trueOrFalse = Boolean("hey")
// console.log(trueOrFalse)

// console.log(  Boolean("")   ) // false
// console.log(  Boolean("0")  ) // true
// console.log(  Boolean(100)  ) // true
// console.log(  Boolean(null) ) // false
// console.log(  Boolean([0])  ) // true
// console.log(  Boolean(-0)   ) // false


// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(x) {
//     welcomeEl.textContent = x + ", Per Harald Borgen 👋"    
// }
// greetUser("Greeting")

// function greetUser(greeting, name) {
//     // Rewrite the expression using template literals
//     welcomeEl.textContent = `${greeting}, ${name}👋`
// }
// greetUser("Howdy", "James")
// function add(a,b) {
//     return a+b
// }




// //.                parameters
// function greetUser(greeting, name) { 
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// //.        arguments
//let hi="Howdy"
//let name="James"
// greetUser(hi, name)


// function getFirst(arr) {
//     return arr[0]
// }
// let A = ["hey",2,3.76,4,5]
// console.log(getFirst(A))

//I wanna query you for some of the objects