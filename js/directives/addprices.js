/**
 * Created by LegendChen on 16/3/6.
 */
app.directive('addprices', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/addprices.html'
    };
});