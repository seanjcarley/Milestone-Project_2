describe("SimonSays", function() {
	xdescribe("Dif_Easy_Test", function() {
		it("should return 1", function() {
			expect(returnDif(dif)).toBe(1);
		});
	});
	describe("Array_Length", function() {
		it("sould return Array len", function() {
			expect(getSeq(dif)).toBe(dif)
		});
	});
});