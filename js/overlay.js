// TODO: 커스텀 오버레이 구현
// FIXME:마커에 마우스 커서를 올리면 갑자기 위치가 변경되는 이상한 현상이 발생한다.. 일단 인포윈도우 주석처리 해놔야지

            // 커스텀 오버레이에 표시할 컨텐츠 입니다
            // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
            // 별도의 이벤트 메소드를 제공하지 않습니다

            // var content =`
            // <div class="wrap">  
            //     <div class="info"> 
            //         <div class="title"> 
            //             ${places[i].title}
            //             <div class="closeBtn" onclick="closeOverlay()" title="닫기"></div> 
            //         </div>  
            //         <div class="body">  
            //             <div class="img"> 
            //                 <img src="${places[i].firstimage}" width="73" height="70"> 
            //             </div> 
            //             <div class="desc">  
            //                 <div class="ellipsis">${places[i].addr1}</div>  
            //             </div>  
            //         </div>  
            //     </div>    
            // </div>
            // `
            // var placeWrap = document.createElement("div")
            // placeWrap.className = "wrap"
            
            // var placeHead = document.createElement("div")
            // placeHead.className = "info"

            // var placeTitle = document.createElement("div")
            // placeTitle.className = "title"

            // var placeBody = document.createElement("div")
            // placeBody.className = "body"

            // var placeImg = document.createElement("div")
            // placeImg.className = "img"

            // var placeDesc = document.createElement("div")
            // placeDesc.className = "desc"

            // var closeBtn = document.createElement("div")
            // closeBtn.className = "closeBtn"

            // 마커 위에 커스텀오버레이를 표시합니다
            // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
            // var overlay = new kakao.maps.CustomOverlay({
            //     content: content,
            //     map: map,
            //     position: marker.getPosition()       
            //     });

            // // 커스텀 오버레이를 닫기 위해 호출되는 함수 
            // function closeOverlay() { 
            //     overlay.setMap(null);     
            // }

            // // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
            // kakao.maps.event.addListener(marker, 'click', function() {
            // overlay.setMap(map);
            // });

            // closeOverlay();
            