window.addEventListener('DOMContentLoaded',function(){

    //1. 토글
    const menuPath = [
      'M1481.43,0s27.8,2.89,48.36,20.31c8.33,7.06,13.35,18,19,28.64,8.25,15.56,17.78,30.32,41,30.76,22.81.44,32.48-11.76,39.29-24.77,4.82-9.22,8.22-18.85,13.83-24.68C1654.46,18.19,1667.47,6.58,1701,0Z',
      'M1481.43,0s29.1,1.46,48.36,20.31c12.2,11.94,14.35,43.68,19,54.76,7.47,17.91,17.78,30.32,41,30.76,22.81.44,36.45-11,40.42-28.16,2.43-10.48,2.06-32.36,12.7-47.41C1652.52,16.58,1667.47,6.58,1701,0Z',
      'M1481.43,0s26.1,5.13,48.36,20.31c51.76,35.3,65.5,131.23,53.5,131.28-316.64,1.38-440.93,526.83,6.42,526.83,431,0,280.45-534.21,13.74-526.3-10.76.32,13.18-101.78,39.38-121.86C1656.14,20.07,1667.27,9.72,1701,0Z'  
    ];

    const tglColor = ['#8DD5E5', 'white'];
    const menuBox = document.querySelector('.menubox');
    const tglBtn = document.querySelector('.tgl_btn');
    const tglClose = document.querySelector('.tgl_close');
    const tglOpen = document.querySelector('.tgl_open');
    let path, num;
    const elBody = document.querySelector('body');
    const menuBoxUl = document.querySelector('.menubox');
    const menuLi = document.querySelectorAll('.menubox li');
    
    const headerDiv = document.querySelector('header');
    const personDiv= document.querySelector('.person');
    const busDiv= document.querySelector('.bus');
    const elDiv= document.querySelector('.el');
    const dropDiv= document.querySelector('.drop');
    const h1= document.querySelector('h1');

    // 빛나 기본셋팅


    // 빛나  타이틀 클릭하면 헤더 사라지게
    h1.addEventListener('mouseover', ()=>{
        if(num == 2){
            path = menuPath[2];
        }else{
            path = menuPath[1];
        }        
        svgMorphing(path); 
    });
    h1.addEventListener('mouseleave', ()=>{        
        if(num == 2){
            path = menuPath[2];
        }else{
            path = menuPath[0];
        }
        svgMorphing(path);    
    });           

    h1.addEventListener('click', ()=>{   

            num = 2;
            path = menuPath[2];
            svgMorphing(path);
            setTimeout(()=>{
                tgl.style="opacity:0; transition:0.1s;"
                // menuBox.style = "opacity:0; transition:0.1s;"
            },300)
            

        menuBox.style = 'display:block; animation: big 0.3s 0.3s forwards linear'
        setTimeout(() => {
            
            elBody.style = "background: white;";            
            headerDiv.style = "opacity:0; transition:0.3s";
            
            
        
        }, 600);   
 


    });


    function svgMorphing(path){  //svg이미지 변형
        let timeline = anime({
            duration:100,
            targets : '#tgl_path',
            d:[{
                value: path
            }],
            easing: 'easeInQuad',
        });
    }


    const person = document.querySelector('.person');
    const fitPer = document.querySelector('.fitting_person');

    let w,z,l;
    w = window.innerWidth;
    z = window.innerHeight;
    fitPer.style = 'display:none';
    spacesuit.style='display:none';
    document.getElementById("sleep").style = 'display:block';
    // person.style = `transform:translate(${w/2 -40}px, ${z/2-194}px)`;

    const bus = document.querySelector('.bus')
    
    // w = window.innerWidth;
    let l1, l2, l3,l4, l5, l6, t1, t2, t3, t4, t5, t6, y1, y2, y3,y4,y5,y6,y7, scale, scale2;
    person.style = "left:calc(50% - 640px + 600px); top:calc(350px);";
    bus.style = "left:calc(50% - 2000px); top:calc(300px);";
    // console.log(bus.firstElementChild.src);

    //빛나 하늘배경 바꾸기 시도하다 처참하게
    // ------------------------------------------------------하늘 배경색바꾸기
    let a,b,c,y;
    const skyBg = document.querySelector('.sky');
    window.addEventListener('scroll', function(){
        if(this.scrollY > 0 && this.scrollY <= 1000){
            y = this.scrollY;
            a = 74 + 66/1000*y;
            b = 74 + 127/1000*y;
            c = 74 + 146/1000*y;
            skyBg.style.background = `rgb(${a},${b},${c})`;
        }else if(this.scrollY == 0){
            skyBg.style.background = `rgb(74,74,74)`;
        }else{
            skyBg.style.background = `rgb(140,201,220)`;
        }
    });

    //  -----------------------------------------------------사람 + 버스 + 우주선
    window.addEventListener('scroll',function(){
        headerDiv.classList.add('none');
        console.log(document.body.scrollHeight);
        fitPer.style = 'display:none';  
        spacesuit.style='display:none';
        document.getElementById("sleep").style = 'display:block';
        
        let scrolling = (this.scrollY/10).toFixed(0)*10
        // console.log(this.scrollY);

        // 사람 눈감았다 떴어요
        if(700 < window.scrollY ){

            document.getElementById("sleep").src = "img/clothes/avatar/jpg/person/person_wakeup.png";
        }else if(700 > window.scrollY){
            document.getElementById("sleep").src = "img/clothes/avatar/jpg/person/person_sleep.png";
        }

        //샤워 할때 사람바뀌게
        if(1000 < window.scrollY && window.scrollY < 11515 ){ 
            // sleep.src = "img/clothes/avatar/svg/person/nomal.svg";
            sleep.style = 'display:block';
        }else if(11515 < window.scrollY && window.scrollY < 31000){
            fitPer.style = 'display:block';
            sleep.style = 'display:none';
            spacesuit.style = 'display:none';
        }else if(31000 <= window.scrollY){
            spacesuit.style = 'display:block';
            sleep.style = 'display:none';
            fitPer.style ='display:none';
        }

    })


    gsap.registerPlugin(ScrollTrigger);

    // 로드 bg
    let road = gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            scrub: true,
            pin: false,
            start: "34000 top",
            end: "36000 top",
            ease: "power3", 
            markers:false
        }
    });
    road.to(".road2", {
        rotation:0,x:0 ,y:0,width:0, duration:1
    },0);
    road.to(".road", {
        rotation:0,x:0 ,y:0, duration:0.8, opacity:0
    },0.1);

    //빛나 사람위치이동
       
    
    gsap.to('.person',{     //침실에서 욕실
        y:-50,
        scale:1,
        scrollTrigger:{
            trigger:'main',
            start:'6000 top',
            end:'7000 top',
            scrub:true,
            markers: false
        }

    });
    gsap.to('.person',{     //욕실에서 피팅룸
        x:+120,
        scale:1,
        immediateRender: false,
        scrollTrigger:{
            trigger:'main',
            start:'15000 top',
            end:'16000 top',
            scrub:true,
            markers: false
        }

    });
    
    gsap.to('.person',{     //피팅룸에서 주방
        x:-430,
        y:+80,
        scale:1,
        scrollTrigger:{
            trigger:'main',
            start:'22000 top',
            end:'25000 top',
            scrub:true,
            markers: false
        }
    });
    gsap.to('.person',{     //주방에서 도로(사람)
        x:-280,
        y:+250,
        scale:0,
        immediateRender: false,
        scrollTrigger:{
            trigger:'main',
            start:'30000 top',
            end:'30800 top',
            scrub:true,
            markers: false
        }    
    },0);
    gsap.to('.bus',{        //주방에서 도로(버스)
        x:1646,
        scrollTrigger:{
            trigger:'main',
            start:'29000 top',
            end:'31000 top',
            scrub:true,
            markers: false
        }    
    },0.1);
    gsap.to('.bus',{        //도로에서 차선변경(오른쪽)
        x:2121,
        y:50,
        immediateRender: false,
        scrollTrigger:{
            trigger:'main',
            start:'31000 top',
            end:'31300 top',
            scrub:true,
            markers: false
        }        
    });
    gsap.to('.bus',{        //도로에서 차선변경(왼쪽)
        x:1646,
        y:50,
        immediateRender: false,
        scrollTrigger:{
            trigger:'main',
            start:'31300 top',
            end:'32100 top',
            scrub:true,
            markers: false
        }        
    });
    gsap.to('.bus',{   //도로-우주 : 버스>>>우주선
        rotation:180,
        immediateRender: false,
        scrollTrigger:{
            trigger:'main',
            start:'34000 top',
            end:'35000 top',
            scrub:true,
            markers: false
        }        
    },0);
    gsap.to('.person',{   // 빛나 버스 우주선될때사람이동
        x:-274,
        y:+130,
        scale:0,
        immediateRender: false,
        scrollTrigger:{
            trigger:'main',
            start:'34000 top',
            end:'35000 top',
            scrub:true,
            markers: false
        }        
    },0);

    gsap.to('.person',{   // 우주에서 책
        x:+600,
        y:+200,
        scale:0.8,
        immediateRender: false,
        scrollTrigger:{
            trigger:'main',
            start:'42000 top',
            end:'44300 top',
            scrub:true,
            markers: false
        }        
    },0);


    // 빛나 우주선 소스 1-64, 스크롤 1000(scrollY : 34000 - 35000)
    let change = 1000/64;
    window.addEventListener('scroll',function(){

        if(this.scrollY< 34000 + change*1){
            // console.log(bus.firstElementChild.src);
            bus.firstElementChild.src = `img/road/spaceship-${1}.png`;
        };
        for(let i=1; i<64; i++){

            if(this.scrollY >= 34000 + change*i  && this.scrollY < 34000 + change*(i+1) ){
                bus.firstElementChild.src = `img/road/spaceship-${i+1}.png`;
    
            }
        };
        if(this.scrollY >= 34000 + change*63){
            bus.firstElementChild.src = `img/road/spaceship-${64}.png`;
        };

    });
    gsap.to('.bus',{   //도로-우주 : 버스>>>우주선
        scale:0,
        rotation:180,
        immediateRender: false,
        scrollTrigger:{
            trigger:'main',
            start:'35000 top',
            end:'36000 top',
            scrub:true,
            markers: false
        }        
    },0);
    gsap.to('.person',{     //빛나 우주선에서 사람나오기 
        x:-10,
        y:-76,
        scale:1,
        immediateRender: false,
        scrollTrigger:{
            trigger:'main',
            start:'35000 top',
            end:'36000 top',
            scrub:true,
            markers: false
        }    
    },0);

    
    // 김교현 - 여기서부터 밑으로 전부 수정하였습니다.
    
    const bath = document.querySelector('.bath');
    const fitthing = document.querySelector('.fitthing');
    const living = document.querySelector('.living');

    // let winHei = window.innerHeight;
    // let domHei = document.documentElement.offsetHeight;
    let bathHei = bath.offsetTop;
    let fitthingHei = fitthing.offsetTop;
    let livingHei = living.offsetTop;


    // console.log(bathHei)
    // console.log(fitthingHei)
    // console.log(livingHei)
    // console.log(window.scrollY, 'scroll');





    //전등
    const light = document.querySelector('.light');
    let o,p;
    window.addEventListener('scroll',function(){
        if(window.scrollY  >= 6000 && window.scrollY < 7000){   
            o = this.scrollY-6000; 
            p = 870 / (7000 - 6000);
            light.style=`transform:translateX(${o*p}px) translateY(0px)`;
        }
    })
    let sky = gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=1000",
            // toggleClass: "active",
            ease: "power3",   //https://greensock.com/docs/v2/Easing
            markers:false
        }
        });

    sky.to(".night", {
        rotation: 0,xPercent:10 ,yPercent: -150, duration:1
    },0);


    sky.to(".sun", {
        rotation: 0,xPercent:-30 ,yPercent: -115, duration:1
        },0);

    let sweetroom = gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            scrub: true,
            pin: true,
            start: "1 top",
            end: "+=5000",
            // toggleClass: "active",
            ease: "power3",   //https://greensock.com/docs/v2/Easing
            markers:false
        }
    });
            
    sweetroom.to(".bed", {
        rotation: 0,xPercent:0 ,y:1100, duration:10
    },3);
    sweetroom.to(".bed-sheet", {
        rotation: 0,xPercent:500 ,yPercent:0, duration:10
    },3);
    sweetroom.to(".side-table", {
        rotation: 0,xPercent:-1700 ,yPercent:0, duration:10
    },3);
    sweetroom.to(".desk", {
        rotation: 0,xPercent:0 ,y:-600, duration:10
    },3);
    sweetroom.to(".tree", {
        rotation: 0,xPercent:-2000 ,yPercent:0, duration:10
    },3);
    sweetroom.to(".rug", {
        rotation: 0,xPercent:0 ,yPercent:500, duration:10
    },3);
    // sweetroom.to(".person", {
    //     rotation: 0,x:830 ,y:1290, duration:10
    // },6);




    let bathroom = gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            scrub: true,
            pin: true,
            start: "top -100%",
            end: "+=8000",
            // toggleClass: "active",
            ease: "power3", 
            markers:false
        }
    });
    // bathroom.to(".person", {
    //     rotation: 0,x:830 ,y:1290, duration:0.1
    // },0);
    bathroom.to(".bath-tub", {
        rotation: 0,x:470 ,y:290, duration:0.1
    },0);
    bathroom.to(".bath-tub-top", {
        rotation: 0,x:470 ,y:290, duration:0.1
    },0);
    bathroom.to(".curtain", {
        rotation:0,width:500, duration:0.1
    },0.1);
    bathroom.to(".clock-hand", {
        rotation:720,x:1050 ,y:100,duration:0.1
    },0.2);
    bathroom.to(".clock-face", {
        rotation:0,x:1050 ,y:100,duration:0.1
    },0.2);
    bathroom.to(".mirror", {
        rotation:0,x:-1000 ,y:60,width:0, duration:0.1
    },0.3);
    bathroom.to(".shelf", {
        rotation:0,x:-1200 ,y:170,width:0, duration:0.1
    },0.3);
    bathroom.to(".sink", {
        rotation:0,x:-900 ,y:0,width:0, duration:0.1
    },0.3);
    bathroom.to(".window", {
        rotation:0,x:2000 ,y:60,width:0, duration:0.1
    },0.3);
    bathroom.to(".clock-face", {
        x:2000 ,y:100,duration:0.1
    },0.3);
    bathroom.to(".clock-hand", {
        x:2000 ,y:100,duration:0.1
    },0.3);

    
    bathroom.to(".mat", {
        rotation:0,x:700 ,y:1500,width:0, duration:0.1
    },0.3);
    bathroom.to(".chair", {
        rotation:0,x:2000 ,y:500,width:0, duration:0.1
    },0.3);
    bathroom.to(".bath-tub", {
        rotation:0,x:0 ,y:1500,width:0, duration:0.1
    },0.3);
    bathroom.to(".bath-tub-top", {
        rotation:0,x:0 ,y:1500,width:0, duration:0.1
    },0.3);
    bathroom.to(".light", {
        rotation:0,x:-1000 ,y:0,width:0, duration:0.3
    },0.3);
    bathroom.to(".curtain", {
        rotation:0,width:0, duration:0.3
    },0.3);



    let fittingroom = gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            scrub: true,
            pin: true,
            start: "top -200%",
            end: "+=8000",
            toggleClass: "active",
            ease: "power3", 
            markers:false
        }
    });
    
    fittingroom.to(".wardrobe", {
        rotation:0,x:100 ,y:-250,width:0, duration:0.5
    },0);
    fittingroom.to(".rail", {
        rotation:0,x:100 ,y:-250,width:0, duration:0.5
    },0);
    fittingroom.to(".rug2", {
        rotation:0,x:500 ,y:294,width:0, duration:0.5
    },0);
    fittingroom.to(".lamp", {
        rotation:0,x:1000 ,y:30,width:0, duration:0.5
    },0);
    fittingroom.to(".picture", {
        rotation:0,x:650 ,y:-300,width:0, duration:0.5
    },0);
    fittingroom.to(".click", {  //빛나 클릭버튼 생기게
        opacity:1,duration:0.3
    },0.5);

    fittingroom.to(".wardrobe", {
        rotation:0,x:-1200 ,y:-250,width:0, duration:1 // 유비 수치값 변경
    },1);
    fittingroom.to(".rail", {
        rotation:0,x:-1000 ,y:-250,width:0, duration:1
    },1);
    fittingroom.to(".rug2", {
        rotation:0,x:500 ,y:-1400,width:0, duration:1
    },1);
    fittingroom.to(".lamp", {
        rotation:0,x:2000 ,y:30,width:0, duration:1
    },1);
    fittingroom.to(".picture", {
        rotation:0,x:1950 ,y:-300,width:0, duration:1  // 유비 수치값 변경
    },1);
    fittingroom.to(".popup_container", {
        rotation:0,x:1650 ,y:0,width:0, duration:1
    },1);
    
    //  유비 밑으로 전부 수정
    let livingroom = gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            scrub: true,
            pin: true,
            start: "top -300%",
            end: "+=5500",
            toggleClass: "active",
            ease: "power3", 
            markers:false
        }
    });
    // in ----------------------------------------
    livingroom.to(".counters", {
        rotation:0,x:550 ,y:250,width:0, duration:1
    },0);
    livingroom.to(".knife", {
        rotation:0,x:430 ,y:280,width:0, duration:1
    },0);
    livingroom.to(".shelf2", {
        rotation:0,x:680 ,y:250,width:0, duration:1
    },0);
    livingroom.to(".chalkboard", {
        rotation:0,x:150 ,y:200,width:0, duration:1
    },0);

    livingroom.to(".bin", {
        rotation:0,x:450 ,y:300,width:0, duration:1
    },0);
    livingroom.to(".rug3", {
        rotation:0,x:700 ,y:340,width:0, duration:1
    },0);
    livingroom.to(".table", {
        rotation:0,x:76 ,width:0, duration:1
    },0);

    // ing
    livingroom.to(".chalkboard2", {
        rotation:0,x:150 ,y:200,width:0,opacity:1,duration:2
    },1);

    // out--------------------------------------
    livingroom.to(".counters", {
        rotation:0,x:-1300 ,y:250,width:0, duration:3
    },2);
    livingroom.to(".knife", {
        rotation:0,x:-1300 ,y:280,width:0, duration:3
    },2);
    livingroom.to(".shelf2", {
        rotation:0,x:-1300 ,y:140,width:0, duration:3
    },2);
    livingroom.to(".chalkboard", {
        rotation:0,x:2000 ,y:200,width:0, duration:3
    },2);
    livingroom.to(".chalkboard2", {
        rotation:0,x:2000 ,y:200,width:0,opacity:1,duration:3
    },2);
    livingroom.to(".bin", {
        rotation:0,x:450 ,y:800,width:0, duration:3
    },2);
    livingroom.to(".rug3", {
        rotation:0,x:700,y:-1300,width:0, duration:3
    },2);
    livingroom.to(".table", {
        rotation:0,x:2000,width:0, duration:3
    },2);

    let space = gsap.timeline({
        scrollTrigger:{
            trigger: "main",
            scrub: true,
            pin: true,
            start: "top -750%",
            end: "+=7000",
            toggleClass: "active",
            ease: "power3", 
            markers:false
        }
    })

    // in ----------------------------------------
    space.to(".alien", {
        rotation:0,x:0 ,y:100,width:0, duration:1
    },0);
    space.to(".earth", {
        rotation:0,x:-100 ,y:400,width:0, duration:1
    },0);
    space.to(".venus", {
        rotation:0,x:1100 ,y:50,width:0, duration:1
    },0);
    space.to(".mercury", {
        rotation:0,x:1300 ,y:550,width:0, duration:1
    },0);
    space.to(".saturn", {
        rotation:0,x:400 ,y:740,width:0, duration:1
    },0);




    //교현 별 움직임
    const spaceStar = document.querySelector('.spaceStar');
    let pos = {y:0, y2:0, state:''}
    
    window.addEventListener('scroll',function(){
        
        let yy =  this.scrollY;

        pos.y = window.scrollY;
        if(pos.y > pos.y2){
            pos.state = true;                
        }else{
            pos.state = false;
        }
        pos.y2 = pos.y;

            if(pos.state){
                yy = yy/150;
            }else{
                yy = yy/150;
            }
            spaceStar.style = `transform:translateY(${-yy}px)`;
    });


                    

    //   https://codepen.io/isladjan/pen/abdyPBw
    // https://webty.tistory.com/117



    


}); //finish



// https://greensock.com/forums/topic/12409-svg-shape-morphing/
// https://lpla.tistory.com/106
// https://greensock.com/docs/v3/GSAP/gsap.to()
