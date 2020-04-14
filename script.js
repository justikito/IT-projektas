function background1() {
	document.body.style.backgroundImage  = "url('bg2.jpg')";
}
function background2() {
	document.body.style.backgroundImage  = "url('bg.jpg')";
}

var dataReload=document.querySelectorAll("[data-reload]");
var kalba = {
	lt: {
		works: "Darbai",
		about: "Apie",
		referrals: "Atsiliepimai",
		contact: "Susisiek",
	}
};

	if(window.location.hash) {
		if(window.location.hash === "#lt") {
			works1.textContent=kalba.lt.works;
			works2.textContent=kalba.lt.works;
			about1.textContent=kalba.lt.about;
			referrals1.textContent=kalba.lt.referrals;
			contact1.textContent=kalba.lt.contact;
	}
}