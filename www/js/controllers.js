angular.module('starter.controllers', [])

.controller('TodoListCtrl', function($scope, $ionicModal){
  console.log('Inside toDoList');
  $scope.todoListItems = [];

  
  //init the modal
  $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation : 'slide-in-up'
  }).then(function(modal){
    console.log("Modal window opened");
    $scope.modal = modal;

  });

  
  //function to open modal
  $scope.openModal = function(){
    console.log("Modal window opened");
    $scope.modal.show();
  };


  //function to close modal
  $scope.closeModal = function(){
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it
  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });

  $scope.AddItem = function(data){
    
    $scope.todoListItems.push({
      task : data.newItem,
      status:'not done'
    });
    data.newItem = '';
    $scope.closeModal();
  }
});