window.addEventListener("load", function (){
//=====================================================================================================


//=====================================================================================================
let isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){

isMobile = true;

}

//common

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

	let $input_check = document.getElementsByClassName("checkBox");

	for (var i = 0; i < $input_check.length; i++){
		let $sel_check = document.getElementById("sel_check");
		$input_check[i].index = i;
		var val_val = $input_check[i].getAttribute("value");
		$input_check[i].onclick = function(){
			var elm_input = this.cloneNode(true);
			var elm_label = this.nextElementSibling.cloneNode(true);
			elm_label.setAttribute("value", "val_" + (this.index + 1));
			$sel_check.appendChild(elm_label);
			if (elm_label.textContent == val_val){
				return false;
			}
			console.log(elm_label);
		}
	}


//common

if (!isMobile){//데스크탑


}
else {
// TM common

// TM common

	if (screen.width >= 768){//태블릿



	}
	else {//모바일



	}

}
let rolling_Slide_recycle= rolling_slide(".recycle", 4, 3, 2);

//=====================================================================================================
});