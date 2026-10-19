function afterPageLoads() {
  var logoText = document.getElementById('logo-text');

  setTimeout(() => {
    logoText.style.opacity = "1";
  },1500)

  var logoText = document.getElementById('logo-text');
  var rowTop = document.getElementById('row-top');
  var rowMiddle = document.getElementById('row-middle');
  var rowBottom = document.getElementById('row-bottom');
  var canvas = document.getElementById('canvas');

  setTimeout(() => {
    rowTop.style.height = "20vh";
    rowMiddle.style.height = "60vh";
    rowBottom.style.height = "20vh";
    canvas.style.height = "60vh";
  },1400)

  /* Randomize Band Member Load order*/
  var members = $(".homepage-member");
  for(var i = 0; i < members.length; i++){
      var target = Math.floor(Math.random() * members.length -1) + 0;
      var target2 = Math.floor(Math.random() * members.length -1) + 0;
      members.eq(target).before(members.eq(target2));
      members[i].classList.add('homepage-member-sorted');
  }

  /* Odd and Even left right for each member after being randomised */
  var membersSorted = $(".homepage-member-sorted");
  for (let i = 0; i < membersSorted.length; i++) {
    if (i % 2 === 0) {
      membersSorted[i].classList.add('homepage-member-even');
    } else {
      membersSorted[i].classList.add('homepage-member-odd');
    }
  }

}

/* Runs the function after the page has fully loaded */
document.addEventListener('DOMContentLoaded', afterPageLoads);
