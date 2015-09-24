describe("Reverse Filter Unit Test", function () {

    beforeEach(module("myApp"));

    it("Should reverse the given string", inject(function ($filter) {
        var str = "Phani";

        var arrOutput = $filter("reverse")(str);

        expect(arrOutput).toEqual("inahP");

    }));



});