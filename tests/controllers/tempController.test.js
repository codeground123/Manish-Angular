describe("Hello Controller Test", function () {

    var ctrl, scope;

    beforeEach(module("myApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller("tempController", {
            $scope: scope
        });
    }));

    it("true should always be true", function () {
       
        expect(true).toBe(true);
    });


    it("should test scope message to testMessage", function () {
        expect(scope.testMessage).toEqual("testMessage");
    });

  

});