window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop:true,
        autoplay:3000
    });

    var yuannavs=document.querySelectorAll(".nav");
    var bignav=document.querySelector(".bignav");
    var yuannavbtn=document.querySelector(".yuannav");
    var heng=document.querySelector(".heng");
    var shu=document.querySelector(".shu");
    var backcolor=document.querySelector('.backcolor');
    var r=(bignav.offsetWidth-yuannavs[0].offsetWidth-16)/2;
    var ang=180/(yuannavs.length-1);
    function xy(r,ang){
        var x=r*Math.sin(ang*Math.PI/180);
        var y=r*Math.cos(ang*Math.PI/180);
        return {x:x,y:y};
    }
    for (var i=0; i<yuannavs.length; i++){
        yuannavs[i].style.transform="translate("+xy(r,ang*i).x+"px,"+-xy(r,ang*i).y+"px)";
    }
    var flag=true;
    yuannavbtn.onclick=function (){
        if (flag==true){
            bignav.style.transform="scale(1,1)";
            yuannavbtn.style.cssText+="transform:translateY(-2.2rem);background:#fff;border:1px solid #ccc";
            heng.style.cssText+="background:#ccc;transform:rotate(45deg)";
            shu.style.cssText+="background:#ccc;transform:rotate(45deg)";
            backcolor.style.opacity=0.4;
            flag=false;
        }else if (flag==false) {
            bignav.style.transform="scale(0,0)";
            yuannavbtn.style.cssText+="transform:translateY(0);background:#eda200;border:none";
            heng.style.cssText+="background:#fff;transform:rotate(0deg)";
            shu.style.cssText+="background:#fff;transform:rotate(0deg)";
            backcolor.style.opacity=0;
            flag=true;
        }
    }
};