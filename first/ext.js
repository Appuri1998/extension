let myarray=[]
let inputEl=document.getElementById("input-el")
const unEl=document.getElementById("ul-el")
let inputBtn=document.getElementById("input-btn")
let deleteBtn=document.getElementById("delete-btn")
let saveBtn=document.getElementById("save-btn")

saveBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myarray.push(tabs[0].url)
    localStorage.setItem("myarray",JSON.stringify(myarray))
    renderLeads()
    })
})


 let leadstorage=JSON.parse(localStorage.getItem("myarray"))

 if(leadstorage){
    myarray=leadstorage
    renderLeads()
 }

 deleteBtn.addEventListener("click",function(){

    localStorage.clear()
    myarray=[]
    renderLeads()
})
 

inputBtn.addEventListener("click", function(){
    //console.log("clicked")
    myarray.push(inputEl.value)
    
    inputEl.value=''
    localStorage.setItem("myarray",JSON.stringify(myarray))
    renderLeads()

})
function renderLeads(){
let listitems=""

    
    for(let i=0;i<myarray.length;i++){
   
    listitems+="<li><a target='_blank' href='#'>"+myarray[i]+"</a></li>"
   
    }   
unEl.innerHTML=listitems
}





 

 