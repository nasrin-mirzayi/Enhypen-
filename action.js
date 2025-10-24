const paragraphs = document.querySelectorAll(".section-p")
document.addEventListener("scroll",function(){
    paragraphs.forEach(paragraphs => {
        if(isInView(paragraphs)){
            paragraphs.classList.add("section-p--visible");
        }
    });
});
function isInView(element){
    const rect = element.getBoundingClientRect();
    return (
         rect.bottom > 0 &&
         rect.top < 
         (window.innerHeight -  150 || document.documentElement.
            clientHeight - 150)
    );
}

const send2= document.getElementById("send2");
send2.addEventListener('mouseover',()=>{
    send2.style.backgroundColor="white"
})

const send=()=>{
    alert(` send it successfuly
        thanks for feedback 🤩`)
}



function buy() {
  const btn = document.getElementById(`buy`)
  btn.addEventListener('click', () => {
    const newpara = document.createElement('p')
    newpara.textContent = `congratulations! 😚
  you bought  "Desire Unleash" Album successfully!`

    const div = document.getElementById('div')
    div.appendChild(newpara)


  })
   }
   function buy0(){
const btn=document.getElementById(`buy0`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 😊
  you bought  "Dark Blood" Album seccessfully! 😊`
  newpara.style.color="black"
  const div=document.getElementById('div')
  div.appendChild(newpara)
})
}
   function buy1(){
const btn=document.getElementById(`buy1`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 😊
  you bought  "Dark Moon" Album seccessfully! 😊`
  const div=document.getElementById('div')
  div.appendChild(newpara)
})
}
   function buy2(){
const btn=document.getElementById(`buy2`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 😊
  you bought  "Romance Untold" Album seccessfully! 😊`
  newpara.style.color="black"
  const div=document.getElementById('div')
  div.appendChild(newpara)
})
}
  function buy3(){
const btn=document.getElementById(`buy3`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 😊
  you bought  "Dimension Dilemma" Album seccessfully! 😊`
  const div=document.getElementById('div')
  div.appendChild(newpara)

})
}
// const handlemouseover =(element)=>{
//     element.style.backgroundcolor="black"
// }

