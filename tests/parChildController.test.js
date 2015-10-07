describe("par child controller test", function () {

    var ctrl, scope;

    beforeEach(module("myApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        spyOn(scope, '$on').andCallThrough();
       

        ctrl = $controller("parentController", {
            $scope: scope
        });
    }));

    it("parent controller on should be called when emit is called from child controller", function () {

        var newMessage = "New Message",
        sub_scope = scope.$new();

        sub_scope.$emit("update_parent_controller", newMessage);
        expect(scope.$on).toHaveBeenCalled();

    });


    it("should update the parent messaeg when emit is called", function () {

        var newMessage = "New Message",
        sub_scope = scope.$new();

        sub_scope.$emit("update_parent_controller", newMessage);
        expect(scope.message).toBe("New Message");

    });

});