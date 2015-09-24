myApp.filter("join", function () {
   

    return function (arr, seperator) {
            
        if (!arr) {
            return "error";
        }
        return arr.join(seperator);
    };

});
