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
		window.addEventListener("mousewheel", e => {
			const scrollY = window.scrollY;
			const direction = lastScrollY == 0 ? $welcome.classList.remove(a) : $welcome.classList.add(a);

			lastScrollY = scrollY;

		});
	}

	welcome_opacity ()
	header_style();












/* end -------------*/
});