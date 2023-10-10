window.addEventListener("load", () => {
	/* start -------------*/

	// 리사이즈마다 높이 변경

	let vh = 0;

	const setVh = () => {
		document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
	};

	window.addEventListener('resize', setVh);
	setVh();

	///////////////////

	// 클래스 초기화 - 단일

	function initClass(a, b){
		if (a.classList.contains(b)){
			a.classList.remove(b);
		} else {
			a.classList.add(b);
		}
	}

	// 클래스 초기화 - 복수

	function initsClass(c, d, e){
		//e = document.getElementsByClassName;

		for (var i = 0; i = c.length; i++){
			if (c[i].classList.contains(d)){
				c[i].classList.remove(d);
			} else {
				c[i].classList.add(d);
			}
		}
	}

	///////////////////

	// 캘리그라피 투명도

	function welcome_opacity (){
		$welcome.style.opacity = "1";
	}

	// 캘리그라피 딜레이

	let $welcome_line = document.querySelector('.path_welcome');
	let paths = $welcome_line.querySelectorAll('path');
	function line_draw(){
		paths.forEach((path, index) => {
			let length = path.getTotalLength()
			path.style.setProperty('--length', length)
			path.style.setProperty('--delay', index * 300 + 'ms')
			path.style.setProperty('--duration', length * 15 + 'ms')
		})
	}

	line_draw();

	///////////////////

	// 헤더 스타일

	let a = "atv";
	let $welcome = document.getElementById("welcome");
	let lastScrollY = 0;

	// 스크롤시 상단 fixed

	function header_style (){
		window.addEventListener("scroll", e => {
			const scrollY = window.scrollY;
			//const direction = lastScrollY == 0 ? $welcome.classList.remove(a) : $welcome.classList.add(a);
			if (lastScrollY < 30){
				$welcome.classList.remove(a);
			} else if (lastScrollY > 0){
				$welcome.classList.add(a);
			}

			lastScrollY = scrollY;

		});
	}

	welcome_opacity ()
	header_style();


	// 장식 생성

	const $section_title = document.getElementsByClassName("section_title");
	const $shapeBox = "<div class='shapeBox'></div>";
	const colors = ["#849bd1", "#ebc9fb", "#8a85ab", "#d7d4ee", "#e6e8fd", "#d2bbd5", "#f7d2d8"];
	let cnt = Math.floor(Math.random() * 10);
	let $seq;
	let $si;

	for (var i = 0; i < $section_title.length; i++){
		$section_title[i].insertAdjacentHTML("beforeend", $shapeBox);
	}

	// 장식 배경색 랜덤 변경

	function auto_bg (){
		cnt++;
		if (cnt >= colors.length){
			cnt = 0;
		}

		var sb = document.getElementsByClassName("shapeBox");

		for (var i = 0; i < sb.length; i++){
			sb[i].style.borderTopColor = colors[cnt];
		}
	}

	$si = setInterval(auto_bg, 1000);



	/* mobile start */

	//if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || //(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
		// mobile only code
		//function header_style (){
		//	window.addEventListener("touchstart", e => {
		//		const scrollY = window.scrollY;
		//		const direction = lastScrollY == 0 ? $welcome.classList.remove(a) : $welcome.classList.add(a);
		//
		//		lastScrollY = scrollY;
		//
		//	});
		//}


	/* mobile end */
	//}
	/* mobile end */




/* end -------------*/
});