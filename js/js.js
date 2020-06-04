function prev() {
   var a = document.getElementById('homescreen1');
   var b = document.getElementById('homescreen2');
   var c = document.getElementById('homescreen3');

    a.style.display = 'block' ;
    b.style.display = 'none' ;
    c.style.display = 'none' ;
}

function next() {
    var a = document.getElementById('homescreen1') ;
    var b = document.getElementById('homescreen2') ;
    var c = document.getElementById('homescreen3') ;

    a.style.display = 'none' ;
    b.style.display = 'block' ;
    c.style.display = 'none' ;
}

function next2() {
    var a = document.getElementById('homescreen1') ;
    var b = document.getElementById('homescreen2') ;
    var c = document.getElementById('homescreen3') ;

    a.style.display = 'none' ;
    b.style.display = 'none' ;
    c.style.display = 'block' ;
}


function maindish() {
    var a = document.getElementById('maindish1') ;
    var b = document.getElementById('desserts') ;
    var c = document.getElementById('drinks') ;

    a.style.display = 'block' ;
    b.style.display = 'none' ;
    c.style.display = 'none' ;
}

function showFeatures(idNames, btnId){
    let idName= idNames;
    let idBtn =btnId;

    var a = document.getElementById('maindish1') ;
    var b = document.getElementById('desserts') ;
    var c = document.getElementById('drinks') ;
    
    var btn1= document.getElementById('btn_1') ;
    var btn2= document.getElementById('btn_2') ;
    var btn3= document.getElementById('btn_3') ;

    if(idName==='maindish1' && idBtn=='btn_1' ){
        btn1.style.backgroundColor = 'rgb(241, 241, 241)' ;
        btn2.style.backgroundColor = 'white' ;
        btn3.style.backgroundColor = 'white' ;

        a.style.display = 'block' ;
        b.style.display = 'none' ;
        c.style.display = 'none' ;
    }
    if(idName==='desserts' && idBtn=='btn_2' ){
        btn1.style.backgroundColor = 'white' ;
        btn2.style.backgroundColor = 'rgb(241, 241, 241)' ;
        btn3.style.backgroundColor = 'white' ;

    a.style.display = 'none' ;
    b.style.display = 'block' ;
    c.style.display = 'none' ;
    }

    if(idName==='drinks'&& idBtn=='btn_3'){
       btn1.style.backgroundColor = 'white' ;
        btn2.style.backgroundColor = 'white' ;
        btn3.style.backgroundColor = 'rgb(241, 241, 241)' ;

    b.style.display = 'none' ;
    c.style.display = 'block' ;
    }


}
// function desserts() {
//     var a = document.getElementById('maindish1') ;
//     var b = document.getElementById('desserts') ;
//     var c = document.getElementById('drinks') ;

//     a.style.display = 'none' ;
//     b.style.display = 'block' ;
//     c.style.display = 'none' ;
// }

// function drinks() {
//     var a = document.getElementById('maindish1') ;
//     var b = document.getElementById('desserts') ;
//     var c = document.getElementById('drinks') ;

//     a.style.display = 'none' ;
//     b.style.display = 'none' ;
//     c.style.display = 'block' ;
// }


function fullmenu() {
    var a = document.getElementById('maindish_a') ;
    var b = document.getElementById('maindish_b') ;
    var c = document.getElementById('maindishbtn_b') ;
    var d = document.getElementById('maindishbtn_a') ;

    a.style.display = 'block' ;
    b.style.display = 'block' ;
    c.style.display = 'block' ;
    d.style.display = 'none' ;
}

function lessmenu() {
    var a = document.getElementById('maindish_a') ;
    var b = document.getElementById('maindish_b') ;
    var c = document.getElementById('maindishbtn_b') ;
    var d = document.getElementById('maindishbtn_a') ;

    a.style.display = 'none' ;
    b.style.display = 'none' ;
    c.style.display = 'none' ;
    d.style.display = 'block' ;
}

function dessertbtn_a() {
    var a = document.getElementById('dessert_a') ;
    var b = document.getElementById('dessert_b') ;
    var c = document.getElementById('dessertbtn_a') ;
    var d = document.getElementById('dessertbtn_b') ;

    a.style.display = 'block' ;
    b.style.display = 'block' ;
    c.style.display = 'none' ;
    d.style.display = 'block' ;
}

function dessertbtn_b() {
    var a = document.getElementById('dessert_a') ;
    var b = document.getElementById('dessert_b') ;
    var c = document.getElementById('dessertbtn_a') ;
    var d = document.getElementById('dessertbtn_b') ;

    a.style.display = 'none' ;
    b.style.display = 'none' ;
    c.style.display = 'block' ;
    d.style.display = 'none' ;
}

function drinksbtn_a() {
    var a = document.getElementById('drinks_a') ;
    var b = document.getElementById('drinks_b') ;
    var c = document.getElementById('drinksbtn_a') ;
    var d = document.getElementById('drinksbtn_b') ;

    a.style.display = 'block' ;
    b.style.display = 'block' ;
    c.style.display = 'none' ;
    d.style.display = 'block' ;
}

function drinksbtn_b() {
    var a = document.getElementById('drinks_a') ;
    var b = document.getElementById('drinks_b') ;
    var c = document.getElementById('drinksbtn_a') ;
    var d = document.getElementById('drinksbtn_b') ;

    a.style.display = 'none' ;
    b.style.display = 'none' ;
    c.style.display = 'block' ;
    d.style.display = 'none' ;
}

function allposts() {
    var a = document.getElementById('blogimagebox2') ;
    var b = document.getElementById('blogbutton1a') ;
    var c = document.getElementById('blogbutgton2a') ;

    a.style.display = 'block' ;
    b.style.display = 'none' ;
    c.style.display = 'block' ;
}

function lessposts() {
    var a = document.getElementById('blogimagebox2') ;
    var b = document.getElementById('blogbutgton2a') ;
    var c = document.getElementById('blogbutton1a') ;
    
    a.style.display = 'none' ;
    b.style.display = 'none' ;
    c.style.display = 'block' ;

}

$('#owl2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        }
    }
})

$('#owl1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


$('#owl3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        }
    }
})

new WOW().init();
