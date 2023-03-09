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

	let $elm_nav = document.getElementsByTagName("nav")[0];
	let $elm_header = document.getElementsByTagName("header")[0];
	let $elm_body = document.getElementsByTagName("body")[0];
	let $move_section = document.querySelectorAll(".scrollMove");
	let arr_section_start = [];
	let arr_section_end = [];
	let $menus = document.querySelector("nav > ul");
	let $menus_li = document.querySelectorAll("nav > ul > li");
	let $device_btn_wrap = document.querySelector("div.device_btns_wrap");
	let $device_btns = $device_btn_wrap.children;
	let $result03_btn_menu = document.getElementById("btn_menu");

//click event

	$elm_nav.onclick = function(){
		if ($elm_header.classList.contains("on")){
			$elm_header.classList.remove("on")
		}
		else {
			$elm_header.classList.add("on")
		}
	}

	

	
	for (var i = 0; i < $move_section.length; i++){
		$move_section[i].index = i;
		arr_section_start[i] = $move_section[i].offsetTop;
		arr_section_end[i] = $move_section[i].offsetTop + $move_section[i].offsetHeight;
	}

		console.log(arr_section_start);
		console.log(arr_section_end);

		window.addEventListener("scroll", function(e){
			e.preventDefault();

			var st_pos = window.scrollY || document.scrollTop;

			for (var i = 0; i < $menus_li.length; i++){
				if (st_pos >= arr_section_start[i] && st_pos <= arr_section_end[i]){
					for (var k = 0; k < $menus_li.length; k++){
						$menus_li[k].classList.remove("active")
					}
					$menus_li[i].classList.add("active")
				}
			}
		});

		for (var i = 0; i < $menus_li.length; i++){
			$menus_li[i].index = i;
			$menus_li[i].onclick = function(){
				let num = $move_section[this.index].offsetTop;
				window.scrollTo({top: num, behavior : "smooth"})
			}
		}


	$result03_btn_menu.onclick = function(){
		if ($result03_btn_menu.classList.contains("on")){
			$result03_btn_menu.classList.remove("on")
		}
		else {
			$result03_btn_menu.classList.add("on")
		}
	}

	for (var i = 0; i < $device_btns.length; i++){
		let $contentWrap = document.getElementById("contentWrap");
		$device_btns[i].index = i;
		$device_btns[i].onclick = function(){
			if (this.classList.contains("active")){
				active_init($device_btns);
			}
			else {
				active_init($device_btns);
				this.classList.add("active");
				$contentWrap.classList.remove("_Desktop", "_Tablet", "_Mobile");
				if (this.index == 0){
					$contentWrap.classList.add("_Desktop");
				}
				if (this.index == 1){
					$contentWrap.classList.add("_Tablet");
				}
				if (this.index == 2){
					$contentWrap.classList.add("_Mobile");
				}
			}
		}
	}

		function cls_toggle(elm, cls_name){
			elm.classList.toggle(cls_name);
		}

		function active_init(_this){
			for (var i = 0; i < _this.length; i++){
				_this[i].classList.remove("active");
			}
		}

// ====== skills wrap line

	let $skills = document.getElementsByClassName("skills");
	let $skills_span =  document.querySelectorAll($skills > " span");

		for (var i = 0; i < $skills.length; i++){
			$skills[i].onclick = function(){
				active_init($skills);
				this.classList.add("active");
			}
		}

// =========================== clone V line

	// function repeatV(dddd, tttt, mmmm) {
	// 	let $Pdesc = document.querySelector("section.visual p.desc");
	// 	let $repeatV = document.getElementsByClassName("repeatV");
	// 	let cloneV = $repeatV[0].cloneNode(true);
	// 	let view_ea = (function(){
	// 		var result;
	// 		if (!isMobile) {
	// 			result = dddd;
	// 		}
	// 		else {
	// 			if (screen.width >= 768) {
	// 				result = tttt;
	// 			}
	// 			else {
	// 				result = mmmm;
	// 			}
	// 		}
	// 		return result;
	// 	})();

	// 	function countV(view_ea) {
	// 		$Pdesc.insertBefore(cloneV, $Pdesc.children[8]);
	// 	}

	// }

	function repeatV(dddd, tttt, mmmm) {
		let $Pdesc = document.querySelector("section.visual p.desc");
		let $repeatV = document.getElementsByClassName("repeatV");
		let cloneV = $repeatV[0].cloneNode(true);
		let view_ea = (function(){
			var result;
			if (!isMobile) {
				result = dddd;
			}
			else {
				if (screen.width >= 768) {
					result = tttt;
				}
				else {
					result = mmmm;
				}
			}
			return result;
		})();
		let countV = function(){
			$Pdesc.insertBefore(cloneV, $Pdesc.children[8]);
		}

		for (var i = 0; i <= view_ea; i++) {
				countV * i;
		}
	}
	repeatV(6, 3, null);

// =========================== clone V line
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

		let $footerInfoOn_btn = document.getElementById("footerInfoOn");
		let $elm_footer = document.getElementsByTagName("footer")[0];

		$footerInfoOn_btn.onclick = function(){
			if ($elm_footer.classList.contains("on")){
				$elm_footer.classList.remove("on");
				$footerInfoOn_btn.textContent = "ON";
				
			}
			else {
				$elm_footer.classList.add("on"); 
				$footerInfoOn_btn.textContent = "OFF";
			}
		}



//=====================================================================================================
});