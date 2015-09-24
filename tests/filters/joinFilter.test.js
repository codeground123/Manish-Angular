describe("Join Filter Unit Test", function () {

    beforeEach(module("myApp"));

    it("Should join the array elements with seperator ,", inject(function($filter) {
        var arr = ["Phani", "Raj", "Kunal"];

        var arrOutput = $filter("join")(arr, ",");

        expect(arrOutput).toEqual("Phani,Raj,Kunal");

    }));

    it("Should return error when not proper array passed", inject(function ($filter) {
        var arr = null;

        var arrOutput = $filter("join")(arr);

        expect(arrOutput).toEqual("error");

    }));


});