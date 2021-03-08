// onClick functions

function onClick1(){
  var target = document.getElementById('slidernav');
  if(target.style.display==='block') target.style.display = "none";
  else target.style.display = "block";
}

function onClick2(){
  var target = document.getElementById('dropdownnav');
  if(target.style.display==='block') target.style.display = "none";
  else target.style.display = "block";
}

// onscroll functions

window.onscroll = function() {myFunction()};

function myFunction() {
  appear1(0, 50, 600, 800);
  appear2(0, 50, 600, 800);
  appear3(0, 50, 600, 800);
  appear4(0, 50, 600, 800);
  appear5(0, 50, 600, 800);
}

/*-----------------appear1---------------*/

let fadeEffect1;
let isEffect1 = false;

function appear1(end, aniend, anistart, start){
  var target1 = document.getElementById('under1');
  var target2 = document.getElementById('over1');
  var floats = document.getElementsByClassName('float');

  var scrolltop = target1.getBoundingClientRect().top;
  var scrollbottom = target1.getBoundingClientRect().bottom;
  if ( scrolltop < anistart &&  scrollbottom > aniend ) {
    target1.classList.add("fadeLeftTop");
    target1.style.visibility="visible";
    target1.style.opacity = 1;
    target2.classList.add('fadeRightBottom');
    target2.style.visibility="visible";
    target2.style.opacity = 1;
    for(var float of floats) {
      float.classList.add('fadeRightBottom');
      float.style.visibility="visible";
      float.style.opacity = 1;
    }
    clearInterval(fadeEffect1);
    isEffect1 = false;
  }
  else if(scrolltop>start || scrollbottom>end){
    target1.classList.remove("fadeLeftTop");
    target2.classList.remove('fadeRightBottom');
    for(var float of floats){
      float.classList.remove('fadeRightBottom');
    }
    //target1.style.visibility="hidden";
    fadeOutEffect1(target1, target2);
  }
}

function fadeOutEffect1(fadeTarget1, fadeTarget2) {
  if(!isEffect1) fadeEffect1 = setInterval(function () {
        var floats = document.getElementsByClassName('float');
        if (!fadeTarget1.style.opacity || fadeTarget1.style.opacity===0) {
            fadeTarget1.style.opacity = 1;
            fadeTarget2.style.opacity = 1;
            for(var float of floats){
              float.style.opacity = 1;
            }
        }
        if (fadeTarget1.style.opacity > 0) {
            fadeTarget1.style.opacity -= 0.1;
            fadeTarget2.style.opacity -= 0.1;
            for(var float of floats){
              float.style.opacity -= 0.1;
            }
        } else {
            clearInterval(fadeEffect1);
            for(var float of floats){
              float.style.visibility = "hidden";
            }
        }
    }, 30);
    isEffect1 = true;
}


/*-----------------appear2-------------*/

let fadeEffect2;
let isEffect2 = false;

function appear2(end, aniend, anistart, start){
  var target1 = document.getElementById('fade1');
  var scrolltop = target1.getBoundingClientRect().top;
  var scrollbottom = target1.getBoundingClientRect().bottom;
  //console.log(scrolltop);
  //console.log(scrollbottom);
  if ( scrolltop < anistart &&  scrollbottom > aniend ) {
    target1.classList.add("fadeCenter");
    target1.style.visibility="visible";
    target1.style.opacity = 1;
    clearInterval(fadeEffect2);
    isEffect2 = false;
  }
  else if(scrolltop>start || scrollbottom>end){
    target1.classList.remove("fadeCenter");
    //target1.style.visibility="hidden";
    fadeOutEffect2(target1);
  }
}

function fadeOutEffect2(fadeTarget) {
  if(!isEffect2) fadeEffect2 = setInterval(function () {
        if (!fadeTarget.style.opacity || fadeTarget.style.opacity===0) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect2);
        }
    }, 30);
    isEffect2 = true;
}

/*-------------appear3-------------*/

let fadeEffect3;
let isEffect3 = false;

function appear3(end, aniend, anistart, start){
  var target1 = document.getElementById('fade2');
  var scrolltop = target1.getBoundingClientRect().top;
  var scrollbottom = target1.getBoundingClientRect().bottom;
  //console.log(scrolltop);
  //console.log(scrollbottom);
  if ( scrolltop < anistart &&  scrollbottom > aniend ) {
    target1.classList.add("fadeCenter");
    target1.style.visibility="visible";
    target1.style.opacity = 1;
    clearInterval(fadeEffect3);
    isEffect3 = false;
  }
  else if(scrolltop>start || scrollbottom>end){
    target1.classList.remove("fadeCenter");
    //target1.style.visibility="hidden";
    fadeOutEffect3(target1);
  }
}

function fadeOutEffect3(fadeTarget) {
  if(!isEffect3) fadeEffect3 = setInterval(function () {
        if (!fadeTarget.style.opacity || fadeTarget.style.opacity===0) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect3);
        }
    }, 30);
    isEffect3 = true;
}

/*-----------------appear4---------------*/

let fadeEffect4;
let isEffect4 = false;

function appear4(end, aniend, anistart, start){
  var target1 = document.getElementById('under2');
  var target2 = document.getElementById('over2');
  var scrolltop = target1.getBoundingClientRect().top;
  var scrollbottom = target1.getBoundingClientRect().bottom;
  //console.log(scrolltop);
  //console.log(scrollbottom);
  if ( scrolltop < anistart &&  scrollbottom > aniend ) {
    target1.classList.add("fadeLeft");
    target1.style.visibility="visible";
    target1.style.opacity = 1;
    target2.classList.add('fadeRight');
    target2.style.visibility="visible";
    target2.style.opacity = 1;
    clearInterval(fadeEffect4);
    isEffect4 = false;
  }
  else if(scrolltop>start || scrollbottom>end){
    target1.classList.remove("fadeLeft");
    target2.classList.remove('fadeRight');
    //target1.style.visibility="hidden";
    fadeOutEffect4(target1, target2);
  }
}

function fadeOutEffect4(fadeTarget1, fadeTarget2) {
  if(!isEffect4) fadeEffect4 = setInterval(function () {
        if (!fadeTarget1.style.opacity || fadeTarget1.style.opacity===0) {
            fadeTarget1.style.opacity = 1;
            fadeTarget2.style.opacity = 1;
        }
        if (fadeTarget1.style.opacity > 0) {
            fadeTarget1.style.opacity -= 0.1;
            fadeTarget2.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect4);
        }
    }, 30);
    isEffect4 = true;
}

/*---------------appear5-------------------*/

let fadeEffect5;
let isEffect5 = false;

function appear5(end, aniend, anistart, start){
  var target1 = document.getElementsByClassName('card')[0];
  var target2 = document.getElementsByClassName('card')[1];
  var target3 = document.getElementsByClassName('card')[2];
  var target = document.getElementsByClassName('cardcontainer')[0];
  var scrolltop = target.getBoundingClientRect().top;
  var scrollbottom = target.getBoundingClientRect().bottom;
  //console.log(scrolltop);
  //console.log(scrollbottom);
  if ( scrolltop < anistart &&  scrollbottom > aniend ) {
    target1.classList.add("fadeRight3");
    target1.style.visibility="visible";
    target1.style.opacity = 1;
    target2.classList.add('fadeCenter3');
    target2.style.visibility="visible";
    target2.style.opacity = 1;
    target3.classList.add('fadeLeft3');
    target3.style.visibility="visible";
    target3.style.opacity = 1;
    clearInterval(fadeEffect5);
    isEffect5 = false;
  }
  else if(scrolltop>start || scrollbottom>end){
    target1.classList.remove("fadeRight3");
    target2.classList.remove('fadeCenter3');
    target3.classList.remove('fadeLeft3');
    fadeOutEffect5(target1, target2, target3);
  }
}

function fadeOutEffect5(fadeTarget1, fadeTarget2, fadeTarget3) {
  if(!isEffect5) fadeEffect5 = setInterval(function () {
        if (!fadeTarget1.style.opacity || fadeTarget1.style.opacity===0) {
            fadeTarget1.style.opacity = 1;
            fadeTarget2.style.opacity = 1;
            fadeTarget3.style.opacity = 1;
        }
        if (fadeTarget1.style.opacity > 0) {
            fadeTarget1.style.opacity -= 0.1;
            fadeTarget2.style.opacity -= 0.1;
            fadeTarget3.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect5);
        }
    }, 30);
    isEffect5 = true;
}
