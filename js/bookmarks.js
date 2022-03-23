if(!localStorage.getItem("sidebar-bookmarks-list")){
    localStorage.setItem("sidebar-bookmarks-list",JSON.stringify([]))
}

let bookmarks=localStorage.getItem("sidebar-bookmarks-list")
bookmarks=JSON.parse(bookmarks)

bookmarks.forEach((i,d)=>{
    let li=document.createElement("li")
    li.classList.add("bookmark")
    li.innerHTML=`
        <button class="delete-bookmark" data-bookmark-index="${d}">-</button>
        <a target="_blank" href="${i}" class="bookmark-url">${i}</a>
    `
    document.querySelector("ul.all-bookmarks").appendChild(li)
})

document.querySelectorAll("button.delete-bookmark").forEach(e=>{
    e.onclick=()=>{
        bookmarks.splice(e.getAttribute("data-bookmark-index")-0,1)
        save()
    }
})

document.querySelector("input.bookmarks-input").onkeyup=(event)=>{
    if(event.code=="Enter"){
        let link=document.querySelector("input.bookmarks-input").value
        bookmarks.push(link)
        save()
    }
}

function save(){
    localStorage.setItem("sidebar-bookmarks-list",JSON.stringify(bookmarks))
    location.reload()
}