angular 
    .module('bower-yarn', ['19degrees.ngSweetAlert2'])
    .controller("IndexController", IndexController)

    IndexController.$inject = ['$scope', 'sweetAlert']

    function IndexController($scope, sweetAlert) {

      $scope.exibirAlertBower = function() {

        sweetAlert.swal({title: 'Bower', text: 'Sweet alert running from bower components'});
      }


    }