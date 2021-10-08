
window.addEventListener('DOMContentLoaded',function(){

    //피팅룸 셀렉트 부분 전용 

        // 2. 아바타

        const popupContainer = document.querySelector('.popup_container');
        const clickBtn = document.querySelector('.click');   //빛나 클릭버튼

        // 2-1 머리
        const arrowHeadP = document.querySelector('.popup01 .popup_prev');
        const arrowHeadN = document.querySelector('.popup01 .popup_next');
        const sliderHWarp = document.querySelector('.slider .popup_head');
        const sliderHList = document.querySelectorAll('.slider .popup_head li');

        const arrowTopP = document.querySelector('.popup02 .popup_prev');
        const arrowTopN = document.querySelector('.popup02 .popup_next');
        const sliderTWarp = document.querySelector('.slider .popup_top');
        const sliderTList = document.querySelectorAll('.slider .popup_top li');

        const arrowBottomP = document.querySelector('.popup03 .popup_prev');
        const arrowBottomN = document.querySelector('.popup03 .popup_next');
        const sliderBWarp = document.querySelector('.slider .popup_bottom');
        const sliderBList = document.querySelectorAll('.slider .popup_bottom li');

        let idxH = 0, idxT = 0, idxB = 0; 

        popupSelect(idxH, sliderHWarp, sliderHList, arrowHeadP, arrowHeadN, person_head);
        popupSelect(idxT, sliderTWarp, sliderTList, arrowTopP, arrowTopN, person_top);
        popupSelect(idxB, sliderBWarp, sliderBList, arrowBottomP, arrowBottomN, person_bottom);


        

        //빛나  클릭하면 버튼사라지고 셀렉트 박스 생성
        clickBtn.addEventListener('click', function(){
            this.style =  `display:none`;
            popupContainer.style ='display:flex';
        });

        
        //유비 셀렉트박스 슬라이드기능
        function popupSelect(idx, warp, list, btnPrev, btnNext, character){
            let slideWidth = 162;
            warp.style.width = slideWidth * (list.length) + 'px';     
            btnPrev.addEventListener('click', ()=>{

                if (idx > 0 ) {            
                    warp.style.transform = "translate3d(-" + (slideWidth * (idx -1)) + "px, 0px, 0px)";
                    idx--;

                    //빛나 사람 머리,상체,하체 바꾸기
                    if( btnPrev == arrowHeadP ){
                        character.src = `img/clothes/avatar/svg/head/head_${idx+1}.svg`;
                    }else if(btnPrev == arrowTopP){
                        character.src = `img/clothes/avatar/svg/top/top_${idx+1}.svg`;
                    }else if(btnPrev == arrowBottomP){
                        character.src = `img/clothes/avatar/svg/bottom/bottom_${idx+1}.svg`;
                    }
                    
                    // 빛나 맨끝으로가면 슬라이드 버튼 사라지기 
                    if(idx == 0){
                        btnNext.style = `display:block`;
                        btnPrev.style = `display:none`;
                    }else{
                        btnNext.style = `display:block`;
                        btnPrev.style = `display:block`;
                    }
                    
                }//if idx end

            });   //btnPrev click event end

            btnNext.addEventListener('click', ()=>{

                if (idx < list.length -1) {
                    warp.style.transform = "translate3d(-" + (slideWidth * (idx + 1)) + "px, 0px, 0px)";
                    idx++;

                    //빛나 사람 머리,상체,하체 바꾸기
                    if( btnPrev == arrowHeadP ){
                        character.src = `img/clothes/avatar/svg/head/head_${idx+1}.svg`;
                    }else if(btnPrev == arrowTopP){
                        character.src = `img/clothes/avatar/svg/top/top_${idx+1}.svg`;
                    }else if(btnPrev == arrowBottomP){
                        character.src = `img/clothes/avatar/svg/bottom/bottom_${idx+1}.svg`;
                    }
                    
                    // 빛나 맨끝으로가면 슬라이드 버튼 사라지기 
                    if(idx == list.length -1){
                        btnNext.style = `display:none`;
                        btnPrev.style = `display:block`;
                    }else{
                        btnNext.style = `display:block`;
                        btnPrev.style = `display:block`;
                    }
                    
                }//if idx end

            }); //btnNext click event end

        }// popupSelect function end


}); //finish
