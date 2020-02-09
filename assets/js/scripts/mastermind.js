$(document).ready(function () {
  dif = "easy";
  call_back_counter = 0;
  guess_count = 0;
  game_seq = [];
  plyr_guess = [];
  seq = [];
  document.getElementById("easy-mm").addEventListener("click", function () {
    dif = "easy";
    createGameArea("easy");
  });
  document.getElementById("med-mm").addEventListener("click", function () {
    dif = "med";
    createGameArea("med");
  });
  document.getElementById("hard-mm").addEventListener("click", function () {
    dif = "hard";
    createGameArea("hard");
  });
  document.getElementById("start").addEventListener("click", function () {
    createGuessMenues();
    generateCode(dif);
  });
  document.getElementById("reset").addEventListener("click", function () {
    createGameArea("reset");
  });
  document.getElementById("guess").addEventListener("click", function () {
    console.log(seq.length);
    plyrGuess(dif, seq.length);
  });


  function createGameArea(dif) {
    $(".game-area").html(`
      <div class="row empty-block mobile"></div>
      <divclass="row">
        <div class="col-md-12">
          <h3>Reveal the Code!</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div id="target1" class="col-md-2">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id="target2" class="col-md-2">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id="target3" class="col-md-2">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id="target4" class="col-md-2">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id="target5" class="col-md-2">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row empty-block mobile"></div>
      <divclass="row">
        <div class="col-md-12">
          <h3>Guess Here!</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div id="guess1" class="col-md-2"></div>
        <div id="guess2" class="col-md-2"></div>
        <div id="guess3" class="col-md-2"></div>
        <div id="guess4" class="col-md-2"></div>
        <div id="guess5" class="col-md-2"></div>
        <div class="col-md-1"></div>
      </div>
      <div class="row empty-block mobile"></div>
      <divclass="row">
        <div class="col-md-12">
          <h3>Previous Guesses</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div id="pguess1" class="col-md-2"></div>
        <div id="pguess2" class="col-md-2"></div>
        <div id="pguess3" class="col-md-2"></div>
        <div id="pguess4" class="col-md-2"></div>
        <div id="pguess5" class="col-md-2"></div>
        <div class="col-md-1"></div>
      </div>
    `)
    if(dif == "easy") {
      $("#guess1, #guess2, #guess3, #guess4, #guess5").removeClass("hide");
      $("#pguess1, #pguess2, #pguess3, #pguess4, #pguess5").removeClass("hide");
      $("#target1, #target2, #target3, #target4, #target5").removeClass("hide");
      $("#guess4, #guess5").addClass("hide");
      $("#pguess4, #pguess5").addClass("hide");
      $("#target4, #target5").addClass("hide");
    } else if(dif == "med") {
      $("#guess1, #guess2, #guess3, #guess4, #guess5").removeClass("hide");
      $("#pguess1, #pguess2, #pguess3, #pguess4, #pguess5").removeClass("hide");
      $("#target1, #target2, #target3, #target4, #target5").removeClass("hide");
      $("#guess5").addClass("hide");
      $("#pguess5").addClass("hide");
      $("#target5").addClass("hide");
    } else {
      $("#guess1, #guess2, #guess3, #guess4, #guess5").removeClass("hide");
      $("#pguess1, #pguess2, #pguess3, #pguess4, #pguess5").removeClass("hide");
      $("#target1, #target2, #target3, #target4, #target5").removeClass("hide");
    }
  }

  function createGuessMenues() {
    $("#guess1").html(`
      <form>
        <select id="playerinput1" name="colors">
          <option value="select">Select</option>
          <option value="0">Red</option>
          <option value="1">Orange</option>
          <option value="2">Yellow</option>
          <option value="3">Green</option>
          <option value="4">Blue</option>
        </select>
      </form>
    `);
    $("#guess2").html(`
      <form>
        <select id="playerinput2" name="colors">
          <option value="select">Select</option>
          <option value="0">Red</option>
          <option value="1">Orange</option>
          <option value="2">Yellow</option>
          <option value="3">Green</option>
          <option value="4">Blue</option>
        </select>
      </form>
    `);
    $("#guess3").html(`
      <form>
        <select id="playerinput3" name="colors">
          <option value="select">Select</option>
          <option value="0">Red</option>
          <option value="1">Orange</option>
          <option value="2">Yellow</option>
          <option value="3">Green</option>
          <option value="4">Blue</option>
        </select>
      </form>
    `);
    $("#guess4").html(`
      <form>
        <select id="playerinput4" name="colors">
          <option value="select">Select</option>
          <option value="0">Red</option>
          <option value="1">Orange</option>
          <option value="2">Yellow</option>
          <option value="3">Green</option>
          <option value="4">Blue</option>
        </select>
      </form>
    `);
    $("#guess5").html(`
      <form>
        <select id="playerinput5" name="colors">
          <option value="select">Select</option>
          <option value="0">Red</option>
          <option value="1">Orange</option>
          <option value="2">Yellow</option>
          <option value="3">Green</option>
          <option value="4">Blue</option>
        </select>
      </form>
    `);
  }

  function plyrGuess(dif, num) {
    for(var i = 0; i < num; i++) {
      var slot = "playerinput" + (i + 1);
      var inpt = document.getElementById(slot).value;
      plyr_guess.push(Number(inpt));
    }
    checkGuess(seq, plyr_guess);
    populatePrevGuess(plyr_guess);
    plyr_guess = [];
  }

  function populatePrevGuess(ary1) {
    for(var i = 0; i < ary1.length; i++) {
      var slot = "pguess" + (i + 1);
      var otpt = document.getElementById(slot);
      if(Number(ary1[i]) == 0) {
        otpt.html(`<p>RED</p>`);
      } else if(Number(ary1[i]) == 1) {
        otpt.html(`<p>ORANGE</p>`);
      } else if(ary1[i] == 2) {
        otpt.html(`<p>YELLOW</p>`);
      } else if(ary1[i] == 3) {
        otpt.html(`<p>GREEN</p>`);
      } else {
        otpt.html(`<p>BLUE</p>`);
      }
    }
    //plyr_guess = [];
  }

  function checkGuess(ary1, ary2) {
    console.log(ary1, ary2);
    for(i in ary1) {
      if(ary1[i] == ary2[i]) {
        console.log("Position " + (Number(i) + 1) + " is Correct");
      }
    }
  }

  function generateCode(dif) {
    let seq_count = 0;
    if(dif == "easy") {
      while(seq_count < 3) {
        seq.push(Math.floor(Math.random() * 3));
        seq_count++;
      }
    } else if(dif == "med") {
      while(seq_count < 4) {
        seq.push(Math.floor(Math.random() * 4));
        seq_count++;
      }
    } else {
      while(seq_count < 5) {
        seq.push(Math.floor(Math.random() * 5));
        seq_count++;
      }
    }
  }
})
