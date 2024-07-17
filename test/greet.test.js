describe("the greet function", function () {
    it("should greet Michelle with 'Hello, Michelle'", function() {
        assert.equal(greet("Michelle"), "Hello, Michelle");
    });

    it("should greet Zweli with 'Hello, Zweli'", function() {
        assert.equal(greet("Zweli"), "Hello, Zweli");
    });

    it("should greet MBALI with 'Hello, MBALI'", function() {
        assert.equal(greet("MBALI"), "Hello, MBALI");
    });
});




