$(document).ready(function () {
    dif = 1;
    call_back_counter = 0;
    game_state = 0;
	game_seq = []

	document.getElementById("blue").addEventListener("click", function () {
		if (game_state == 1) {
			changeCol(0);
			checkBlue();
		}
	});
	document.getElementById("green").addEventListener("click", function () {
		if (game_state == 1) {
			changeCol(1);
			checkGreen();
		}
	});
	document.getElementById("red").addEventListener("click", function () {
		if (game_state == 1) {
			changeCol(2);
			checkRed();
		}
	});
	document.getElementById("yellow").addEventListener("click", function () {
		if (game_state == 1) {
			changeCol(3);
			checkYellow();
		}
	});	
	document.getElementById("easy").addEventListener("click", function () {
        dif = 1;
    })
    document.getElementById("hard").addEventListener("click", function () {
        dif = 11;
    })
	document.getElementById("hard-mob").addEventListener("click", function () {
        dif = 11;
    })
	document.getElementById("med").addEventListener("click", function () {
        dif = 6;
    })
	document.getElementById("med-mob").addEventListener("click", function () {
        dif = 6;
    })
	document.getElementById("reset").addEventListener("click", function () {
        $("#game-outcome").text("");
		$("#level").text("");
		resetGame();
    })
	document.getElementById("reset-mob").addEventListener("click", function () {
        $("#game-outcome").text("");
		$("#level").text("");
		resetGame();
    })
    document.getElementById("start").addEventListener("click", function () {
		$("#level").text(dif);
		$("#game-outcome").text("");
		pulse(getSeq(dif));
    })
	document.getElementById("start-mob").addEventListener("click", function () {
        $("#start-mob").addClass("mobile");
		$("#reset-mob").addClass("mobile");
		$("#med-mob").addClass("mobile");
		$("#hard-mob").addClass("mobile");
		$("#level").text(dif);
		$("#game-outcome").text("");
		$("#note-mob").text("Level: " + dif);
		pulse(getSeq(dif));
    })

    //generate the sequence for the game:
    function getSeq(num) {
        let seq = [];
        let seq_count = 0;
        if (dif < 6) {
            while (seq_count < (num + 2)) {
                seq.push(Math.floor(Math.random() * 4));
                seq_count++;
            }
        } else if (num < 10) {
            while (seq_count < (num + 3)) {
                seq.push(Math.floor(Math.random() * 4));
                seq_count++;
            }
        } else {
            while (seq_count < (num + 4)) {
                seq.push(Math.floor(Math.random() * 4));
                seq_count++;
            }
        }
        return seq;
    }
	
	function checkBlue() {
		repeat(0);
		console.log("Blue");
	}
	function checkGreen() {
		repeat(1);
		console.log("Green");
	}
	function checkRed() {
		repeat(2);
		console.log("Red");
	}
	function checkYellow() {
		repeat(3);
		console.log("Yellow");
	}

    /* timer and async sourced from https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop */
	/* A Promise is a proxy for a value not necessarily known when the promise 
		is created. It allows you to associate handlers with an asynchronous 
		action's eventual success value or failure reason. This lets 
		asynchronous methods return values like synchronous methods: instead 
		of immediately returning the final value, the asynchronous method 
		returns a promise to supply the value at some point in the future. 
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	
	*/
		
    function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }
    
    async function pulse(ary) {
        for (var i = 0; i < ary.length; i++) {
            changeCol(ary[i]);
            game_seq.push(ary[i]);
            if(ary.length < 6) {
				await timer(1000);
			} else if(ary.length < 10) {
				await timer(800);
			} else {
				await timer(600);
			}
        }
		game_state = 1;
    }

	// this function changes the colour of the block to indicate that the block
	// is part of the sequence
    function changeCol(num) {
        if (num == 0) {
            document.getElementById("blue").classList.remove("blue");
            document.getElementById("blue").classList.add("change-blue");
            setTimeout(function () {
                document.getElementById("blue").classList.remove("change-blue");
                document.getElementById("blue").classList.add("blue");
            }, 500);
        } else if (num == 1) {
            document.getElementById("green").classList.remove("green");
            document.getElementById("green").classList.add("change-green");
            setTimeout(function () {
                document.getElementById("green").classList.remove("change-green");
                document.getElementById("green").classList.add("green");
            }, 500);
        } else if (num == 2) {
            document.getElementById("red").classList.remove("red");
            document.getElementById("red").classList.add("change-red");
            setTimeout(function () {
                document.getElementById("red").classList.remove("change-red");
                document.getElementById("red").classList.add("red");
            }, 500);
        } else {
            document.getElementById("yellow").classList.remove("yellow");
            document.getElementById("yellow").classList.add("change-yellow");
            setTimeout(function () {
                document.getElementById("yellow").classList.remove("change-yellow");
                document.getElementById("yellow").classList.add("yellow");
            }, 500);
        }
    }
	
	function repeat(num) {
		console.log(game_seq);
		if(game_seq.length > 1) {
			if (num == game_seq[0]) {
				game_seq.shift();
			} else {
				$("#game-outcome").text("That's not right! Press Start to try again");
				$("#note-mob").text("Nope! Press Start to try again");
				resetGame();
			}
		} else if (game_seq.length == 1) {
			if (num == game_seq[0]) {
				game_seq.shift();
				game_state = 0;
				dif++;
				$("#game-outcome").text("Congratulations! Press Start for Level " + dif);
				$("#note-mob").text("Nice! Press Start for Level " + dif);
				$("#start-mob").removeClass("mobile");
				$("#reset-mob").removeClass("mobile");
			} else {
				$("#game-outcome").text("So Close! Press Start to try again");
				$("#note-mob").text("Nope! Press Start to try again");
				resetGame();
			}
		}
	}
	
    function resetGame() {
		game_state = 0;
		game_seq = [];
		dif = 1;
		$("#start-mob").removeClass("mobile");
		$("#reset-mob").removeClass("mobile");
		$("#med-mob").removeClass("mobile");
		$("#hard-mob").removeClass("mobile");
		$("#note-mob").text("Simon Says!")
    }
})
