'use strict';

angular.module('groceryApp')
  .controller('TripsCtrl', function ($scope, $routeParams, TripService) {
    $scope.discountTypes = [
      'Coupon',
      'Reward Card'
    ];
    $scope.calculatePricePaid = function (item) {
      if(item.discounts === undefined) {
        return item.regularPrice;
      }
      var pricePaid = item.regularPrice;
      item.discounts.forEach(function (discount) {
        pricePaid -= discount.amount;  
      });
      return pricePaid;
    };
    $scope.trips = [
      {
        id: 1,
        date: '02-14-2014',
        location: 'Metro Market - Brookfield',
        total: 88.97
      }
    ];
    $scope.itemsBought = TripService.fetchItemsBoughtOnTrip($routeParams.id);
    $scope.addDiscount = function (item) {
      if(item.discounts === undefined) {
        item.discounts = [];
      }
      item.discounts.push(
        {
          edit: true,
          type: 'Discount Type',
          amount: 0.0
        }
      );
    };
  });
