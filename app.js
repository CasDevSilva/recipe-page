document.addEventListener('click',(e)=>{
    let li = e.target
    if(li.classList.contains("nochecked")){
        li.classList.remove("nochecked")
        li.classList.add("checked")
        li.classList.add("checkItem")
    }else if(li.classList.contains("checked")){
        li.classList.remove("checked")
        li.classList.remove("checkItem")
        li.classList.add("nochecked")
    }
})