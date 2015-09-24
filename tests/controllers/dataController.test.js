describe("Data Controller Test", function () {

    var ctrl, scope, serviceMock;

    beforeEach(module("myApp"));

    beforeEach(inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new();

        serviceMock = {
            getAuthors: function() {
                var deferred = $q.defer();
                deferred.resolve([{ author: "Peter" }]);
                return deferred.promise;

            }
        }
        ctrl = $controller("dataController", {
            $scope: scope,
            authorService: serviceMock
        });
    }));


    it("Should get authors when get authors is called", function () {
      
        scope.$digest();
        expect(scope.authors[0].author).toBe("Peter");

    });



});