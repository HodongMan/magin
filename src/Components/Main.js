import React, {Component} from 'react';


class Main extends Component{

    render(){

        return(
            <div className="wrap">

        		<div className="alert">
        			<div className="alert_filter"></div>
        			<article>
        				<div className="text">
        					<div className="coin"><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/icon_warning.png" alt="warning" /></div>
        					<p>이미 참여하셨습니다.<br />다음 기회에 도전해보세요!</p>
        					<div className="btn">닫기</div>
        				</div>
        			</article>
        		</div>
        		<div className="alert_playstore">
        			<div className="alert_filter"></div>
        			<article>
        				<div className="text">
        					<div className="coin"><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/icon_warning.png" alt="warning" /></div>
        					<p>현재 이벤트 참여 가능한 버전이 아닙니다.<br />플레이스토어에서<br />캐시콜을 업데이트해주세요.</p>
        					<div className="btn">업데이트</div>
        				</div>
        			</article>
        		</div>
        		<div className="modal_movie">
        			<div className="modal_filter"></div>
        			<article>
        				<div className="text">
        					<p>
        						<strong>시청해주셔서 감사합니다!</strong>
        						<span>이제 ?번 더 참여하실 수 있습니다.</span>
        						<span>지금 바로 카드를 선택해볼까요?</span>
        					</p>
        				</div>
        				<div className="btn">
        					<a href="#close" ><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/btn_go_on_v2.png" alt="참여하러 가기" /></a>
        				</div>
        			</article>
        		</div>
        		<div className="modal">
        			<div className="modal_filter"></div>
        			<article>
        				<div className="text">
        					<div className="coin"><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/img_coin_animation64.gif" alt="success_coin" /></div>
        					<p>
        						<strong>( ? P 당첨 )</strong>
        						<strong>축하드립니다!</strong>
        						선물함으로 이동해<br />지급된 포인트를 확인해보세요
        					</p>
        				</div>
        				<div className="btn">
        					<a href="#movie" ><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/btn_movie_on_v4.png" alt="영상보고 한번 더!" /></a>
        					<a href="#close" ><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/btn_close_on_v3.png" alt="닫기" /></a>
        				</div>
        			</article>
        		</div>
        		<div>
        			<div className="main_up">
        				<img src="http://loadbalance.monkid.co.kr/img/event/magicflip/img_title.png" alt="오늘의 카드" />
        				<div className="mark">
        					<img src="http://loadbalance.monkid.co.kr/img/event/magicflip/img_coin_animation.gif" alt="P" />
        				</div>
        				<div className="star b1"><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/img_star_blue1.png" alt="star" /></div>
        				<div className="star b2"><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/img_star_blue2.png" alt="star" /></div>
        				<div className="star b3"><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/img_star_blue1.png" alt="star" /></div>
        				<div className="star p1"><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/img_star_purple2.png" alt="star" /></div>
        				<div className="star p2"><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/img_star_purple1.png" alt="star" /></div>
        				<div className="star p3"><img src="http://loadbalance.monkid.co.kr/img/event/magicflip/img_star_purple2.png" alt="star" /></div>
        			</div>
        			<div className="main_card_filter"></div>
        			<div className="main_btn off"></div>
        			<div className="main_down">
        				<div className="main_card off">
        					<ul>
        						<li className="p"><a href="#" className="card1" data-value="0">Card</a></li>
        						<li className="b"><a href="#" className="card2" data-value="1">Card</a></li>
        						<li className="p"><a href="#" className="card3" data-value="2">Card</a></li>
        					</ul>
        				</div>
        			</div>
        			<div className="main_description">
        				<span>[ 게임설명 ]</span>
        				- 이벤트 1회 참여 시 '10포인트'가 차감됩니다.<br />
        				- 당첨 지급 내역 : 캐시콜 포인트 10~100P (선물함에서 확인)<br />
        				- 영상 시청 후 추가 참여 가능 (1일 3번 시청 가능)
        			</div>
        		</div>
        	</div>
        );
    }
}

export default Main;


/// loading page;
/*
<div className="wrap-loading">
    <div className="loading">
        <div>
            <div className="c1"></div>
            <div className="c2"></div>
            <div className="c3"></div>
            <div className="c4"></div>
        </div>
    <span>loading</span>
    </div>
</div>

*/
