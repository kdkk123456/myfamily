reasons=[
    "me",
    "my mother",
    "my father",
    "my sister",
    ];
    images=[
    "images.jpg",
    "images1.jpg",
    "images2.jpg",
    "images3.jpg",
    ];
 i=0;
    function next() {
    document.getElementById("img").src=images[i];
    document.getElementById("reason").innerHTML=reasons[i];
    i++;
    if(i>3){
       i=0
    }
    }