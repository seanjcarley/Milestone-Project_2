let dif = 16;

function getSeq(dif) {
	let seq = [];
	let seq_count = 0;
	while (seq_count < (dif)) {
		seq.push(Math.floor(Math.random() * 4));
		seq_count++;
	}
	return seq.length;
}