let body =document.getElementById("my-body");


let arr =[
    {
        heading:"My heading 1",
        text:"This is some text 1"
    },
    {
        heading:"My heading 2",
        text:"This is some text 2"
    },
    {
        heading:"My heading 3",
        text:"This is some text 3"
    },
    {
        heading:"My heading 4",
        text:"This is some text 4"
    }
]

arr.forEach((item,i)=>{
    //------ other way of appendchiled-------
//  body.innerHTML+=`
//  <div class="my-card">
//         <h1>${item.heading}</h1>
//         <p>${item.text}</p>
//     </div>`



let myCard =document.createElement("div");
myCard.setAttribute("class","my-card");
let heading =document.createElement("h1")
heading.textContent= item.heading;
let text=document.createElement("p")
text.textContent= item.text;

myCard.appendChild(heading)
myCard.appendChild(text)

myCard.addEventListener("click",()=>myfuc(i))

body.appendChild(myCard);
})

function myfuc(i){
    console.log("element number",i,"was clicked");
    alert("element number",i,"was clicked")
    
}