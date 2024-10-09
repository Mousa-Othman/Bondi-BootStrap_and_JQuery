let serOffset=$('#services').offset().top;
// console.log(aboutOffset);

$(window).scroll(function(){
    let windScroll=$(window).scrollTop();
    // console.log(windScroll);
    if(windScroll>serOffset-50){
        $(".navbar").css("backgroundColor","red");
        $("#btnUp").fadeIn(500);
    }
    else{
        
        $(".navbar").css("backgroundColor","#19283f");
        // $("#btnUp").css("display","none");
        $("#btnUp").fadeOut(500);
    }
});

$("#btnUp").click(function(){
    // $(window).scrollTop(0);
    $("html , body").animate({ scrollTop:0},3000);
});

// $("#servicesLink").click(function(){
//     $("html , body").animate({ scrollTop:serOffset},3000);
    
// });

// $("a").click(function(e){
//     e.preventDefault();
//     let aHref= e.target.getAttribute('href');
//     let itemoffset=$(aHref).offset().top;
//     $("html , body").animate({ scrollTop:itemoffset},3000 ,'linear');
//     // document.querySelector(aHref).scrollIntoView({ behavior: 'smooth' });

// });

// $("a[href^='#']").click(function(e){
//     e.preventDefault();
//     let aHref= e.target.getAttribute('href');
//     let itemoffset=$(aHref).offset().top;
//     $("html , body").animate({ scrollTop:itemoffset},3000 ,'linear');
    

// });

$("a[href^='#']").filter(function() {
    return /#[a-z]/.test(this.getAttribute('href'));
}).click(function(e){
    e.preventDefault();
    let aHref= e.target.getAttribute('href');
    let itemoffset=$(aHref).offset().top;
    $("html , body").animate({ scrollTop:itemoffset},3000 ,'linear');
});

// window.onload=function(){
//     console.log('hallo');
// }; //pure javascript

// window.addEventListener('load',function(){
//     console.log('hallo load');
// });//pure javascript

// $(document).ready(function(){
//     console.log('hallo ready');
// });//jquery event fast time js

//  

// $(document).ready(function(){
//     $(".loading").fadeOut(1000);
// });

$(document).ready(function(){

    let colorBoxWidth=$(".colors-box").outerWidth();
    $("#optionsBox").animate({left:`-${colorBoxWidth}`},0)
    $(".loading .sk-chase").fadeOut(100 ,()=>
    {$(".loading").fadeOut(100,()=>{
        $(".loading").remove();
        $("body").css("overflow-y","auto")
        })
    });
});

// $(document).ready(function(){
//     $("#toggleBtn").click(function(){
//         $(".colors-box").toggle();
//     })
// })

$(document).ready(function(){
    $("#toggleBtn").click(function(){
        let colorBoxWidth=$(".colors-box").outerWidth();

        if( $("#optionsBox").css("left")=="0px"){
            $("#optionsBox").animate({left:`-${colorBoxWidth}`},1000)

        }
        else{
            $("#optionsBox").animate({left:`0px`},1000)
        }
    })
});

let colorItem= $(".color-item");
colorItem.eq(0).css("backgroundColor","lightgreen");
colorItem.eq(1).css("backgroundColor","#59677a");
colorItem.eq(2).css("backgroundColor","black");
colorItem.eq(3).css("backgroundColor","darkblue");
colorItem.eq(4).css("backgroundColor","tomato");

colorItem.click(function(e){
    let bgColor=$(e.target).css("backgroundColor");
    $("h1,h2,h3,h4,h5").css("color",bgColor);
})



