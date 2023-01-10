var fabars = document.querySelector(".fa-bars");
var faxmark = document.querySelector(".fa-xmark");
var smolescein = document.querySelector(".smolescein");
fabars.onclick = () => {
  smolescein.classList.add('activesmoles');
};
faxmark.onclick = () => {
  smolescein.classList.remove('activesmoles');
};

//  scrollber

var navber = document.querySelector(".navber");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navber.classList.add("acctiveban");
    var iconbr = document.querySelectorAll(".iconbr i").forEach(icon => {
      icon.classList.add("iconbar");
    })
  }
  if (window.scrollY < 100) {
    navber.classList.remove("acctiveban");

    var iconbr = document.querySelectorAll(".iconbr i").forEach(icon => {
      icon.classList.remove("iconbar");
    })
  }
}

// coint section


var datavalue = document.querySelectorAll(".head");


let setinterval = 500;
datavalue.forEach((datavalue) => {
  let startvalue = 0;
  let endtvalue = parseInt(datavalue.getAttribute("data-val"));


  let uploaddara = Math.floor(setinterval / endtvalue);

  var counter = setInterval(() => {
    startvalue += 1;
    datavalue.textContent = startvalue;
    if (startvalue == endtvalue) {
      clearInterval(counter);
    }
  }, uploaddara);
})


var textb = document.querySelectorAll('.mainimg .contant');
textb.forEach(imgber => {
  imgber.addEventListener('mousemove', function () {

    textb.forEach(nav => {
      nav.classList.remove('acctiveber')

    })
    this.classList.add('acctiveber');
  })


})      