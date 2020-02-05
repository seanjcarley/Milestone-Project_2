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
	describe("Change_Colour", function() {
		it("should return colour", function () {
			expect(changeCol(num)).toBe("Blue")
		});
		it("should return colour", function () {
			expect(changeCol(num)).toBe("Green")
		});
		it("should return colour", function () {
			expect(changeCol(num)).toBe("Red")
		});
		it("should return colour", function () {
			expect(changeCol(num)).toBe("Yellow")
		});
	});
});