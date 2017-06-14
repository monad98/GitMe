'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.describeTable('projects').then(function(attributes) {
      if(!attributes.hasOwnProperty('weightValue')) {
        return queryInterface.addColumn(
          'projects',
          'weightValue',
          {
            type: Sequelize.INTEGER,
            defaultValue: 0
          }
        );
      }
    });





  },

  down: function (queryInterface, Sequelize) {
    /*
     Add reverting commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.dropTable('users');
     */
  }
};
