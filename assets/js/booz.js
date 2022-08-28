let b = document.querySelector("button");
b.addEventListener("click",change);
function change()
{
    let i = Math.floor(Math.random()*500)+1;
    let j = Math.floor(Math.random()*500)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}
