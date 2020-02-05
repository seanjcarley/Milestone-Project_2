$(document).ready(function () {
    dif = 1;
    callBackCounter = 0;
    game_state = 0;

    document.getElementById("easy").addEventListener("click", function () {
        dif = 1;
    })
    document.getElementById("med").addEventListener("click", function () {
        dif = 6;
    })
    document.getElementById("hard").addEventListener("click", function () {
        dif = 11;
    })
    document.getElementById("start").addEventListener("click", function () {
        pulse(getSeq(dif));
    })
	document.getElementById("reset").addEventListener("click", function () {
        resetGame();
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
        dif++;
        console.log(seq);
        return seq;
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
            //console.log(ary[i]);
            if(ary.length < 6) {
				await timer(1000);
			} else if(ary.length < 10) {
				await timer(800);
			} else {
				await timer(600);
			}
        }
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

    //set the game state
    function setGameState(num) {
        game_state = num
    }

    function resetGame() {
		game_state = 0;
		dif = 1;
    }
})
