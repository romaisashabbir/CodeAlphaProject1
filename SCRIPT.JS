const images = [
"https://picsum.photos/id/1015/800/600",
"https://picsum.photos/id/1011/800/600",
"https://picsum.photos/id/1025/800/600",
"https://picsum.photos/id/1040/800/600",
"https://picsum.photos/id/1060/800/600",
"https://picsum.photos/id/1074/800/600"
];

let current = 0;

function openLightbox(index){
current=index;
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=images[current];
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

function changeImage(step){
current=(current+step+images.length)%images.length;
document.getElementById("lightbox-img").src=images[current];
}

function filterImages(category){

let items=document.querySelectorAll(".image");

items.forEach(item=>{

if(category=="all" || item.classList.contains(category)){
item.style.display="block";
}
else{
item.style.display="none";
}

});

let buttons=document.querySelectorAll(".filters button");

buttons.forEach(btn=>btn.classList.remove("active"));

event.target.classList.add("active");

}