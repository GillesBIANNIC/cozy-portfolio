// ----------------------------------------------------------------------------
// define controller
app.controller( 'hobbies', ['$scope', '$http', function( $scope, $http ) {
    $scope.data = {
        contents: []
    };

    // ----------------------------------------------------------------------------
    // get data provide by cozydb
    $http.get( 'portfolio/hobbies' ).then( function( res ) {
        if( !require( 'empty-value' )( res.data )) {
            $scope.data = res.data;
        }
    });

    // ----------------------------------------------------------------------------
    // ng change listener
    $scope.change = function() {
        $http.post( 'portfolio/hobbies', $scope.data );
    };

    // ----------------------------------------------------------------------------
    // add an element
    $scope.add = function( element ) {
        if( !element ) {
            element = {};
        }

        $scope.data.contents.push( element );
    };

    // ----------------------------------------------------------------------------
    // remove an element
    $scope.remove = function( $index ) {
        $scope.data.contents = $scope.data.contents.filter( function( element, index ) {
            return index != $index;
        });

        if( !$scope.data.contents.length ) {
            $scope.add();
        }

        $scope.change();
    };

    // ----------------------------------------------------------------------------
    // default case
    $scope.add();
}]);