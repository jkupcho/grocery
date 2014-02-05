'use strict';

angular.module('groceryApp')
  .service('TripService', function Tripservice() {
    this.amountSaved = function (quantity, regularPrice, pricePaid) {
      return quantity * (regularPrice - pricePaid);
    };
    this.fetchItemsBoughtOnTrip = function (id) {
      return [
          {
            tripId: id,
            name: '15oz Roundy\'s Kidney Beans',
            quantity: 2,
            regularPrice: 1.09,
            amountSaved: 0.42,
            discounts: [
              {
                edit: false,
                type: 'Coupon',
                amount: 0.50
              }
            ]
          },
          {
            name: '15oz Roundy\'s Kidney Beans',
            quantity: 2,
            regularPrice: 1.09,
            amountSaved: 0.42
          },
          {
            name: '15oz Roundy\'s Kidney Beans',
            quantity: 2,
            regularPrice: 1.09,
            amountSaved: 0.42
          },
          {
            name: '15oz Roundy\'s Kidney Beans',
            quantity: 2,
            regularPrice: 1.09,
            amountSaved: 0.42
          }
        ];
    };
  });
