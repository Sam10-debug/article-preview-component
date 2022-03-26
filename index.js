const shareBtn= document.querySelector('#shareBtn')
const tooltip= document.querySelector('.tooltip')
shareBtn.addEventListener("click",()=>{
    tooltip.classList.toggle("active")
    shareBtn.classList.toggle("active")
})
shareBtn.addEventListener("blur",(e)=>{
    console.log(e.target, e.relatedTarget)
    if (e.relatedTarget !== tooltip){
        tooltip.classList.remove("active")
        shareBtn.classList.remove("active")
    }
})
tooltip.addEventListener("blur", (e)=>{
    tooltip.classList.remove("active")
    shareBtn.classList.remove("active")
})
