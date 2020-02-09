$(document).ready(function () {
  dif = "easy";
  call_back_counter = 0;
  game_state = 0;
  game_seq = [];
  document.getElementById("easy-mm").addEventListener("click", function () {
    dif = "easy";
  });
  document.getElementById("med-mm").addEventListener("click", function () {
    dif = "med";
  });
  document.getElementById("hard-mm").addEventListener("click", function () {
    dif = "hard";
  });
  document.getElementById("start").addEventListener("click", function () {
    createGameArea(dif);
  });
  document.getElementById("reset").addEventListener("click", function () {
    createGameArea("reset");
  });


  function createGameArea(dif) {
    if(dif == "easy") {
      $("#target-mm").html(`
        <h3>Easy</h3>
        <div class="col-md-2"></div>
        <div id ="target1" class="col-md-2 slot-one">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div class="col-md-1"></div>
        <div id ="target2" class="col-md-2 slot-two">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div class="col-md-1"></div>
        <div id ="target3" class="col-md-2 slot-three">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div class="col-md-2"></div>
      `);
    } else if(dif == "med") {
      $("#target-mm").html(`
        <h3>Medium</h3>
        <div class="col-md-2"></div>
        <div id ="target1" class="col-md-2 slot-one">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id ="target2" class="col-md-2 slot-two">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id ="target3" class="col-md-2 slot-three">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id ="target4" class="col-md-2 slot-four">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div class="col-md-2"></div>
      `);
    } else if(dif == "hard") {
      $("#target-mm").html(`
        <h3>Hard</h3>
        <div class="col-md-1"></div>
        <div id ="target1" class="col-md-2 slot-one">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id ="target2" class="col-md-2 slot-two">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id ="target3" class="col-md-2 slot-three">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id ="target4" class="col-md-2 slot-four">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div id ="target5" class="col-md-2 slot-five">
          <i class="fas fa-question" aria-hidden="true"></i>
        </div>
        <div class="col-md-1"></div>
      `);
    } else {
      $("#target-mm").html(``);
    };
  }
})
