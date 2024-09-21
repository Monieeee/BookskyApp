var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbtn=document.querySelector(".add-button")

addbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var deletebutton=document.getElementById("delete-popup")

deletebutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var addbutton=document.getElementById("add-book")
var container=document.querySelector(".container")
var title=document.getElementById("book-title-input")
var author=document.getElementById("book-author-input")
var desc=document.getElementById("book-description-input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
            <h5>${author.value}</h5>
            <p>${desc.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}











        