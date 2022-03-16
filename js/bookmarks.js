if(!localStorage.getItem("quick-bookmarks-list")){localStorage.setItem("quick-bookmarks-list",JSON.stringify([]))}
let bookmarks=JSON.parse(localStorage.getItem("quick-bookmarks-list"))

bookmarks.forEach((i,d)=>{
    let li=document.createElement("li")
    li.innerHTML=`<button class="delete-bookmark" data-id="${d}">-</button> <a href="${i}" target="_blank" class="bookmark-url">${i}</a>`
    li.classList.add("bookmark")

    document.querySelector("ul.all-bookmarks").appendChild(li)
})

document.querySelectorAll(".delete-bookmark").forEach(e=>{
    e.onclick=()=>{
        bookmarks.splice(e.getAttribute("data-id")-0,1)
        localStorage.setItem("quick-bookmarks-list",JSON.stringify(bookmarks))
        location.reload()
    }
})

document.querySelector("input.bookmarks-input").onkeyup=(event)=>{
    if(event.code=="Enter"){
        bookmarks.push(document.querySelector("input.bookmarks-input").value)
        localStorage.setItem("quick-bookmarks-list",JSON.stringify(bookmarks))
        location.reload()
    }
}