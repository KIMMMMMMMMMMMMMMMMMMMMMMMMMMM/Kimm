window.addEventListener("load", function (){
//=====================================================================================================

let $anchors = document.getElementsByTagName("a");

for (var i = 0; i < $anchors.length; i++){
	$anchors[i].onclick = function(){
		if(this.getAttribute("href") == "#") {
			return false;
		}
	}
}


//=====================================================================================================
let isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){

isMobile = true;

}

//common

// visual start

function visual_fadeInOut(_targetWrap){

		let $fade_wrap = _targetWrap;
		let $visual_wrap = document.querySelectorAll($fade_wrap + " div.visual_img");
		let $pn_btns_wrap = document.querySelector($fade_wrap + " #visual_btn");
		let $pn_btns = document.querySelectorAll($fade_wrap + " div.pagination > button.pn_btn");
		let $pause = document.querySelectorAll($fade_wrap + " div.pagination > button#pause");
		let $btn_prev = document.querySelector($fade_wrap + " button.prev");
		let $btn_next = document.querySelector($fade_wrap + " button.next");
		let $btn_pause = document.querySelector($fade_wrap + " button.btn_pause");
		let cnt = 0;
		let si_01 = null;
		let cur_color = "txt_color_" + cnt;



	function fadeOut(_target){
		opacity = opacity_val;
		if (opacity > 0){
			opacity = opacity - 0.1;
			$visual_wrap.style.opacity = opacity;
		}
		else {
			clearInterval(si_01);
		}
	}
	function fadeIn(_target){
		opacity = opacity_val;
		if (opacity < 1){
			opacity = opacity + 0.1;
			$visual_wrap.style.opacity = opacity;
		}
		else {
			clearInterval(si_01);
		}
	}

	function changeOpacity(){
	}

	function cnt_plus(){
		cnt = cnt == $visual_wrap.length - 1 ? 0 : cnt + 1;
		move_slide(cnt, "opacity 1.5s", "1");
		btn_change(cnt);
	}

	for (var i = 0; i < $pn_btns.length; i++){
		$pn_btns[i].index = i;
		$pn_btns[i].onclick = function(){
			if (cnt == this.index){
				return;
			}
			var cur_num = this.index;
			cnt = cur_num;
			move_slide(cur_num, "opacity 0.5s", "1")
			btn_change(cur_num);
		}
	}

	function move_slide(num, transition_val, opacity_val){
		stop_si();
		var next_num = num == $visual_wrap.length -1 ? 0 : num + 1;
		var prev_num = num == 0 ? $visual_wrap.length - 1 : num - 1;

		$pn_btns_wrap.classList.remove("txt_color_0", "txt_color_1", "txt_color_2");
		$pn_btns_wrap.classList.add("txt_color_" + num);

		for (var i = 0; i < $visual_wrap.length; i++){
			$visual_wrap[i].classList.remove("cur", "next", "prev");
			$visual_wrap[i].style.transition = "opacity 0.5s";
			$visual_wrap[i].style.opacity = "0";
		}

		for (var i = 0; i < $visual_wrap.length; i++){
			$visual_wrap[i].style.transition = transition_val;
			$visual_wrap[i].style.opacity = opacity_val;

		}
		$visual_wrap[num].classList.add("cur");
		$visual_wrap[next_num].classList.add("next");
		$visual_wrap[next_num].style.opacity = "0";
		$visual_wrap[prev_num].classList.add("prev");
		$visual_wrap[prev_num].style.opacity = "0";
		setTimeout(start_si, 300);
	}
	function btn_change(num){
		for (var i = 0; i < $pn_btns.length; i++){
			$pn_btns[i].classList.remove("active");
		}
		$pn_btns[num].classList.add("active");
	}

	function start_si(){
		if (si_01 != 0){
			clearInterval(si_01);
		}
		si_01 = setInterval(cnt_plus, 3000);
	}

	function stop_si(){
		if (si_01 != 0){
			clearInterval(si_01);
		}
		si_01 = null;
	}

	start_si();

	$btn_pause.onclick = function(){
		stop_si();
	}

}// visual end

	let $section = document.getElementsByTagName("section")[0];
	let $elm_nav = document.getElementsByClassName("header_wrap");
	let $elm_header = document.getElementsByTagName("header")[0];
	let $btn_menu = document.getElementById("btn_menu");
	let $btn_subs = document.querySelectorAll("nav > ul > li > button");
	let $ul_subs = document.querySelectorAll("ul.sub > li");
	let $local_switch = document.getElementById("btn_switch");
	let $local_switch_result = document.querySelector("#btn_switch > span.circle");
	let $on_map = document.querySelector("section.location div.on_map");


	//class toggle init
	function cls_toggle(elm, cls_name){
		elm.classList.toggle(cls_name);
	}

	//nav onclick init
	function nav_init(){
		for (var i = 0; i < $btn_subs.length; i++){
			$btn_subs[i].parentElement.classList.remove("active");
			$btn_subs[i].nextElementSibling.style.height = "0px";
		}
	}

	// active init cap
	function active_init(_this){
		for (var i = 0; i < _this.length; i++){
			_this[i].classList.remove("active");
		}
	}

	$btn_menu.onclick = function(){
		nav_init();
		cls_toggle($elm_header, "on");
	}

	$ul_subs.onclick = function(){
		active_init($ul_subs);
		cls_toggle($ul_subs, "active");
	}

	$local_switch.onclick = function(){
		cls_toggle($local_switch, "active");
		if ($local_switch.classList.contains("active")){
			$on_map.style.zIndex = "5";
		}
		else {
			$on_map.style.zIndex = "0";
		}
	}

	function rolling_slide(_targetWrap, deskTop, tabLet, moBile){
		let $wrap = _targetWrap;
		let $view_mask = document.querySelector($wrap + " div.view_mask");
		let $slide_ul = document.querySelector($wrap + " div.view_mask > ul");
		let $slide_ul_li = $slide_ul.children;
		let $btn_prev = document.querySelector($wrap + " button.prev");
		let $btn_next = document.querySelector($wrap + " button.next");
		let view_ea = (function(){
			var result;
			if (!isMobile){
				result = deskTop;
			}
			else {
				if (screen.width >= 768){
					result = tabLet;
				}
				else {//모바일
					result = moBile;
				}
			}
			return result;
		})();

		let move_cnt = 1;
		let li_width = $view_mask.offsetWidth / view_ea;
		let click_Event = true;
		let si_01 = null;
		let cnt = 0;
		let _li_sort = [];

		(function init(){
			for (var i = 0; i < $slide_ul_li.length; i++){
				$slide_ul_li[i].style.width = li_width + "px";
			}
			$slide_ul.style.position = "relative";
			$slide_ul.style.width = (li_width * $slide_ul_li.length) + "px";
			$slide_ul.style.left = "0px";
			$slide_ul.style.transition = "left 3s";
			$slide_ul.insertBefore($slide_ul_li[$slide_ul_li.length - 1], $slide_ul.firstChild);
			$slide_ul.style.marginLeft = -(li_width * move_cnt) + "px";
		})();

		$btn_prev.onclick = function(){
			move_ul("prev");
		}
		$btn_next.onclick = function(){
			move_ul("next");
		}

		function move_ul(_direction){
			if (click_Event){
				click_Event = false;
				stop_si();
				$slide_ul.style.left = _direction == "prev" ? li_width * move_cnt  + "px" : -li_width * move_cnt  + "px";
				$slide_ul.style.transition = "left 0.3s";
				setTimeout(function(){
					if (_direction == "prev"){
						$slide_ul.insertBefore($slide_ul_li[$slide_ul_li.length - 1], $slide_ul.firstChild);
					}
					else {
						$slide_ul.insertBefore($slide_ul_li[0], $slide_ul.lastChild);
					}
					$slide_ul.style.left = "0px";
					$slide_ul.style.transition = "none";
					click_Event = true;
					start_si();
				}, 300)
			}

			else {
				return false;
			}
		}

		function start_si(){
			if (si_01 != 0){
				clearInterval(si_01);
			}
			si_01 = setInterval(function(){move_ul("next")}, 3000);
		}

		function stop_si(){
			if (si_01 != 0){
				clearInterval(si_01);
			}
			si_01 = null;
		}

		start_si();
	}

//================location variation

let $selectWrap = document.getElementById("selectWrap");
let $location_btnWrap = document.getElementById("location_btnWrap");
let $location_btn = document.getElementById("location_btn");
let $location_ul = document.getElementById("location_ul");
let $location_ul_li = $location_ul.children;
let viewName;
//console.log($location_ul_li);

for (let i = 0; i < $location_ul_li.length; i++) {
	let _clone = $location_ul_li[i].children[0];
	let cloneName = _clone.childNodes[0];
	let loca_name = cloneName.cloneNode(true);
	let loca_name_arr = [];
	console.log(typeof(loca_name));
}


function location_active(){
	for (var i = 0; i < $location_ul_li.length; i++){
		$location_ul_li[i].onclick = function(){
			active_init($location_ul_li, "active");
			if (this.classList.contains("active")){
				active_init($location_ul_li, "active");
			}
			this.classList.add("active");
		}
	}
}

// $selectWrap = document.getElementById("selectWrap");
// $location_btnWrap = document.getElementById("location_btnWrap");
// $location_btn = document.getElementById("location_btn");
// $location_ul = document.getElementById("location_ul");

function location_select(){
	$selectWrap.onclick = function(){
		this.style.overflow = "visible";
		$location_btnWrap.style.display = "block";
		$location_ul.style.zIndex = "10";
		$location_ul.style.top = "100%";
	}
	if ($location_btnWrap.style.display == "block"){
		$location_btn.onclick = function(){
			$location_btnWrap.style.display = "none";
			$location_ul.style.zIndex = "0";
			$location_ul.style.top = "100%";
		}
		for (var i = 0; i < $location_ul_li.length; i++){
			$location_ul_li[i].onclick = function(){
				let name = this.children;
			//$location_btnWrap.innerHTML = name;
			//$selectWrap.style.overflow = "hidden";
			//$location_ul.style.top = "0%";
			console.log(name);
			}
		}
	}
}




//================location variation


//common

if (!isMobile){//데스크탑



}
else {
// TM common

// TM common

	if (screen.width >= 768){//태블릿



	}
	else {//모바일

		for (var i = 0; i < $btn_subs.length; i++){
			$btn_subs[i].onclick = function(){
				console.log($btn_subs[i]);
				if (this.parentElement.classList.contains("active")){
					this.nextElementSibling.style.height = "0";
				}
				else {
					nav_init();
					this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + "px";
				}
				cls_toggle(this.parentElement, "active");
			}
		}

		rolling_Slide_campain = rolling_slide(".campain", null, null, 1);

		location_select();


//==================================================================== moblie else close line
	}
//==================================================================== else close line
}


	let visual_fadeInOut_visual =  visual_fadeInOut(".top_visual");

	let rolling_Slide_best = rolling_slide(".best", 4, 3, 1);

	location_active();








//=====================================================================================================
});