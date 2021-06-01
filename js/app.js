window.onload = load;

function load() {

  // -------------------------BTN--------------------------->
  var startSceneBtn = document.getElementById("btn1");
  var punchBtn = document.getElementById("btn2");
  var powerBtn = document.getElementById("btn3");
  var kickBtn = document.getElementById("btn4");
  var fireBall = document.getElementById("btn5");
  var playPause = document.getElementById("btn6");
  var restartBtn = document.getElementById("btn7");
  var exitYesBtn = document.getElementById("yes-exit-btn");
  var exitNoBtn = document.getElementById("no-exit-btn");
  var soundCtrl = document.getElementById("btn0");
  // -------------------------CHARACTERS--------------------------->
  var frieza = document.getElementById("frieza");
  var goku = document.getElementById("goku");
  var vegeta = document.getElementById("vegeta");

  // -------------------------DIALOGUE BOX --------------------------->
  var vegetaDialImg = document.getElementById("vegeta-dial-img");
  var friezaDialImg = document.getElementById("frieza-dial-img");
  var gokuDialImg = document.getElementById("goku-dial-img");
  var gokuFlame = document.getElementById("goku-kamey-flame");
  // ------------------------- DIALOGUE BOX IMAGES--------------------------->

  var vegetaDialBox = document.querySelector(".vegeta-dialbox");
  var friezaDialBox = document.querySelector(".frieza-dialbox");
  var gokuDialBox = document.querySelector(".goku-dialbox");
  var restartMsgPop = document.getElementById("restart-game");

  // ---- DEMO VOICE ADDED FOR TESTING ,MORE WILL BE ADDED IN LATER STAGES--------------------------->
  // ------------------------- FRIEZZA VOICE AUDIO--------------------------->

  var friezaVoice = document.getElementById("freiza-voice");
  var secondSceneSound = document.getElementById("main-scene-sound");


  // ---- HIDING THE MAIN SCENE SECTION AND DISPLAYING THE FIRST SCENE ON START BUTTON CLICK--------------------------->
  $('#main-section').hide();
  $('#start-game-btn').click(function() {
    $('#start-page').hide();
    $('#main-section').show();

  })




  // ---- GRABBING THE REST OF THE ELEMENTS--------------------------->

  var cloud1 = document.querySelector("#cloud1");
  var cloud2 = document.querySelector("#cloud2");
  var cloud3 = document.querySelector("#cloud3");
  var cloud4 = document.querySelector("#cloud5");
  var cloud5 = document.querySelector("#cloud5");
  var cloud6 = document.querySelector("#cloud6");
  var cloud7 = document.querySelector("#cloud7");
  var cloud8 = document.querySelector("#cloud8");
  var thunder1 = document.getElementById("thunder1");
  var thunder2 = document.getElementById("thunder1");
  var friezaSpriteBall = document.querySelector(".sprite-ball");

  var vegetaFlame = document.querySelector(".vegeta-flame");
  var astroid = document.querySelector("#astroid");

  var mainBackgroundImage = document.getElementById("main-section");

  // ----HIDING THE BUTTONS AT THE START SCENE--------------------------->
  punchBtn.style.opacity = "0";
  kickBtn.style.opacity = "0";
  powerBtn.style.opacity = "0";
  fireBall.style.opacity = "0";
  soundCtrl.style.opacity = "0";


  // ---ON RESTART BUTTON CLICK- A RE-CONFIRM MESSAGE IS SENT --------------------------->
  restartBtn.onclick = confirmRestartPop;

  function confirmRestartPop() {
    restartMsgPop.classList.add("restart-btn-popup-launch");
  }

// ---IF CONFIRM EXIT IS YES- THEN PAGE WILL RELOAD --------------------------->
  exitYesBtn.onclick = function() {
    location.reload();
  }
  exitNoBtn.onclick = function() {
    restartMsgPop.classList.remove("restart-btn-popup-launch");
  }

// ---ON CLICK OF START SCENE- EACH CLICK WILL DISPLAY ONE DIALOGUE AT A TIME --------------------------->
  startSceneBtn.onclick = runStartScene;
  var counter = 1;

  function runStartScene() {

    vegeta.classList.add("vegeta-start-scene-launch");
    frieza.classList.add("frieza-start-scene-launch");

    if (counter === 1) {

      vegetaDialImg.classList.add("vegeta-dial-img-launch");
      vegetaDialBox.classList.add("vegeta-dialogue-launch");
      setTimeout(function() {
        vegetaDialImg.classList.remove("vegeta-dial-img-launch");
        vegetaDialBox.classList.remove("vegeta-dialogue-launch");

      }, 4000)
      counter = 2
    } else if (counter === 2) {
      gokuDialImg.classList.add("goku-dial-img-launch");
      gokuDialBox.classList.add("goku-dialbox-launch");
      setTimeout(function() {
        gokuDialImg.classList.remove("goku-dial-img-launch");
        gokuDialBox.classList.remove("goku-dialbox-launch");

      }, 4000)


      counter = 3;
    } else if (counter === 3) {

      var friezaCurse = document.getElementById("frieza-voice1");
      friezaDialImg.classList.add("frieza-dial-img-launch");
      friezaDialBox.classList.add("frieza-dialbox-launch");
      friezaVoice.play();
      setTimeout(function() {
        friezaDialImg.classList.remove("frieza-dial-img-launch");
        friezaDialBox.classList.remove("frieza-dialbox-launch");

      }, 4000);

      counter = 4;

    } else if (counter === 4) {
      friezaDialBox.src = "images/frieza-dial-2.png";
      friezaDialImg.classList.add("frieza-dial-img-launch");
      friezaDialBox.classList.add("frieza-dialbox-launch");
      setTimeout(function() {
        friezaDialImg.classList.remove("frieza-dial-img-launch");
        friezaDialBox.classList.remove("frieza-dialbox-launch");
      }, 4000);
      counter = 5;

    } else if (counter === 5) {
      vegetaDialBox.src = "images/vegeta-dial-2.png";
      vegetaDialImg.classList.add("vegeta-dial-img-launch");
      vegetaDialBox.classList.add("vegeta-dialogue-launch");
      setTimeout(function() {
        vegetaDialImg.classList.remove("vegeta-dial-img-launch");
        vegetaDialBox.classList.remove("vegeta-dialogue-launch");

      }, 4000)
      counter = 6;
    } else if (counter === 6) {
      gokuDialBox.src = "images/goku-dial-2.png";
      gokuDialImg.classList.add("goku-dial-img-launch");
      gokuDialBox.classList.add("goku-dialbox-launch");
      setTimeout(function() {
        gokuDialImg.classList.remove("goku-dial-img-launch");
        gokuDialBox.classList.remove("goku-dialbox-launch");

      }, 4000)
      counter = 7;
    } else if (counter === 7) {
      vegetaDialBox.src = "images/vegeta-dial-3.png";
      vegetaDialImg.classList.add("vegeta-dial-img-launch");
      vegetaDialBox.classList.add("vegeta-dialogue-launch");
      setTimeout(function() {
        vegetaDialImg.classList.remove("vegeta-dial-img-launch");
        vegetaDialBox.classList.remove("vegeta-dialogue-launch");

      }, 4000)
      counter = 8;
    } else if (counter === 8) {
      friezaDialBox.src = "images/frieza-dial-3.png";
      friezaDialImg.classList.add("frieza-dial-img-launch");
      friezaDialBox.classList.add("frieza-dialbox-launch");
      setTimeout(function() {
        friezaDialImg.classList.remove("frieza-dial-img-launch");
        friezaDialBox.classList.remove("frieza-dialbox-launch");
      }, 4000);
      counter = 9;

    } else if (counter === 9) {
      friezaDialBox.src = "images/frieza-dial-4.png";
      friezaDialImg.classList.add("frieza-dial-img-launch");
      friezaDialBox.classList.add("frieza-dialbox-launch");
      setTimeout(function() {
        friezaDialImg.classList.remove("frieza-dial-img-launch");
        friezaDialBox.classList.remove("frieza-dialbox-launch");
      }, 4000);
      counter = 10;

    } else if (counter === 10) {
      vegetaDialBox.src = "images/vegeta-dial-4.png";
      vegetaDialImg.classList.add("vegeta-dial-img-launch");
      vegetaDialBox.classList.add("vegeta-dialogue-launch");
      setTimeout(function() {
        vegetaDialImg.classList.remove("vegeta-dial-img-launch");
        vegetaDialBox.classList.remove("vegeta-dialogue-launch");

      }, 4000)
      counter = 11;
    } else if (counter === 11) {
      vegetaDialBox.src = "images/vegeta-dial-5.png";
      vegetaDialImg.classList.add("vegeta-dial-img-launch");
      vegetaDialBox.classList.add("vegeta-dialogue-launch");
      setTimeout(function() {
        vegetaDialImg.classList.remove("vegeta-dial-img-launch");
        vegetaDialBox.classList.remove("vegeta-dialogue-launch");

      }, 4000)
      counter = 12;
    } else if (counter === 12) {
      fireUpEverything();
      vegeta.classList.remove("vegeta-start-scene-launch");
      frieza.classList.remove("frieza-start-scene-launch");
      punchBtn.style.opacity = "1";
      kickBtn.style.opacity = "1";
      powerBtn.style.opacity = "1";
      fireBall.style.opacity = "1";
      startSceneBtn.style.opacity = "0";
      soundCtrl.style.opacity = "1";
    }
  }
// --FUNCTION THAT WILL FIRE UP THE SECOND SCENE- IT IS TRIGGERS ON THE LAST CLICKK OF THE START SCENE BUTTON --------------------------->

  function fireUpEverything() {

    mainBackgroundImage.classList.add("background-change-launch");
    cloud1.classList.add("cloud1-fire");
    cloud2.classList.add("cloud2-fire");
    cloud3.classList.add("cloud3-fire");
    cloud4.classList.add("cloud4-fire");
    cloud5.classList.add("cloud5-fire");
    cloud6.classList.add("cloud6-fire");
    cloud7.classList.add("cloud7-fire");
    cloud8.classList.add("cloud8-fire");
    thunder1.classList.add("thunder1-launch");
    thunder2.classList.add("thunder2-launch");
    secondSceneSound.play();
    secondSceneSound.loop = "true;"
    frieza.style.backgroundImage = "url('../frieza-sprite2-final.png')";
    frieza.classList.add("frieza-fire-launch");
    friezaSpriteBall.classList.add("frieza-fire-ball");
    vegeta.style.backgroundImage = "url('../vegeta-small.png')";
    vegeta.classList.add("vegeta-flame-launch");
    vegeta.style.opacity = 1;
    vegetaFlame.classList.add("vegeta-flame-fire");
    vegetaFlame.style.opacity = 3;
    goku.style.backgroundImage = "url('../goku-1.png')";
    goku.classList.add("goku-second-scene-launch");
    astroid.classList.add("astroid-launch");
    astroid.style.opacity = 10;

  }

  // --WHEN PUNCH BUTTON IS CLICKED- GOKU PUNCHES --------------------------->
//--BACKGROUNG IMAGE URL CONTAINS THE FILE PATH FOR OFFLINE VIEWING, IF USING TEXT EDITOR LIVE SERVER THEN USE  JUST EXAMPLE "url('../images/goku-1.png')"; --------------------------->
  punchBtn.onclick = punch;

  function punch() {

    goku.classList.remove("goku-second-scene-launch");
    goku.style.backgroundImage = "url('../goku-punch2.png')";
    goku.classList.add("goku-punch-launch")
    setTimeout(function() {
      goku.style.backgroundImage = "url('../goku-1.png')";
      goku.classList.remove("goku-punch-launch")
      goku.classList.add("goku-second-scene-launch");

    }, 500)
  }

  // -WHEN FIRE UP BUTTON IS CLICKED- GOKU FIRES UP INTO FLAMES --------------------------->
  //--BACKGROUNG IMAGE URL CONTAINS THE FILE PATH FOR OFFLINE VIEWING, IF USING TEXT EDITOR LIVE SERVER THEN USE  JUST EXAMPLE "url('../images/goku-1.png')"; --------------------------->
  powerBtn.onclick = powerUp;

  function powerUp() {
    goku.classList.remove("goku-second-scene-launch");
    goku.style.backgroundImage = "url('../goku-fire-btn.png')";
    goku.classList.add("goku-level-up-launch")
    setTimeout(function() {
      goku.style.backgroundImage = "url('../goku-1.png')";
      goku.classList.remove("goku-level-up-launch")
      goku.classList.add("goku-second-scene-launch");
    }, 4000)

  }

  // -WHEN KICK BUTTON IS CLICKED- GOKU KICKS --------------------------->
  //--BACKGROUNG IMAGE URL CONTAINS THE FILE PATH FOR OFFLINE VIEWING, IF USING TEXT EDITOR LIVE SERVER THEN USE  JUST EXAMPLE "url('../images/goku-1.png')"; --------------------------->
  kickBtn.onclick = kick;

  function kick() {
    goku.classList.remove("goku-second-scene-launch");
    goku.style.backgroundImage = "url('../goku-kick-btn.png')";
    goku.classList.add("goku-kick-launch")

    setTimeout(function() {
      goku.style.backgroundImage = "url('../goku-1.png')";
      goku.classList.remove("goku-kick-launch")
      goku.classList.add("goku-second-scene-launch");
    }, 500)

  }

  // -WHEN THROW FIRE BALL BUTTON IS CLICKED- GOKU THROWS A FIRE BALL --------------------------->
  fireBall.onclick = kamehamey;
  //--BACKGROUNG IMAGE URL CONTAINS THE FILE PATH FOR OFFLINE VIEWING, IF USING TEXT EDITOR LIVE SERVER THEN USE  JUST THE FOLLOWIMG  EXAMPLE PATH "url('../images/goku-1.png')"; --------------------------->
  function kamehamey() {
    goku.classList.remove("goku-second-scene-launch");
    goku.style.backgroundImage = "url('../goku-kame-sprite.png')";
    goku.classList.add("goku-kamey-launch");
    gokuFlame.classList.add("goku-kamey-flame-launch");

    setTimeout(function() {
      goku.style.backgroundImage = "url('../goku-1.png')";
      gokuFlame.classList.remove("goku-kamey-flame-launch");
      goku.classList.remove("goku-kamey-launch")
      goku.classList.add("goku-second-scene-launch");
    }, 1000)

  }
// -BUTTON FOR SOUND PLAY AND PAUSE OF BACKGROUND MUSIC --------------------------->

  var sound = true;
  soundCtrl.onclick = function() {
    if (sound === true) {

      secondSceneSound.pause();
      sound = false;
    } else {

      secondSceneSound.play();
      sound = true;
    }
  }

// -GETTING ELEMENTS FOR THE NAVIGATION  HEADER AND FOOTER AND STORING IT IN A VARIABLE --------------------------->
  var mobHamBtn = document.getElementById("ham-btn-cta");
  var exit = document.getElementById("mob-exit");
  var nav = document.getElementById("menu");

// -ON CLICK OD HAMBURGUR MENU ICON BUTTON THE NAV BAR APPEARS--------------------------->
  mobHamBtn.onclick = navToggle;

  function navToggle() {
    var nav = document.querySelector("nav");
    nav.style.display = "block";
  }
// -ON CLICK OD "X" EXIT BUTTON THE NAV BAR DISAPPEARS--------------------------->
  exit.onclick = exitNav;

  function exitNav() {
    var nav = document.querySelector("nav");
    nav.style.display = "none";
  }




}
