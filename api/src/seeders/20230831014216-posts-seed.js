'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const posts = [
      {
        title: 'A silly post',
        content: 'Roses are red, violets are blue, I am a poet... and so are you!',
        createdAt: new Date('2010/08/17 12:09'),
        updatedAt: new Date('2010/08/17 12:09')
      },
      {
        title: 'New Technology',
        content: 'These things called computers are fance',
        createdAt: new Date('2011/03/06 13:09'),
        updatedAt: new Date('2011/03/06 13:19')
      },
      {
        title: 'Harry and Hermione should have ended up together!',
        content: 'Ron and Hermione do not make sense, like trying to pair electrons!',
        createdAt: new Date('2015/08/17 12:34'),
        updatedAt: new Date('2015/08/17 12:41')
      },
      {
        title: 'Will AI displace programmers?',
        content: 'I sure hope not, I need a job!',
        createdAt: new Date('2023/08/17 10:09'),
        updatedAt: new Date('2023/08/17 10:09')
      },
      {
        title: 'Programming is fun!',
        content: 'I hope I can continue to program forever and build a legacy!',
        createdAt: new Date('2021/08/12 12:09'),
        updatedAt: new Date('2021/08/13 09:09')
      },
      {
        title: 'A poets post',
        content: 'Roses are red, violets are blue, sugar is sweet my love...but not as sweet as you!',
        createdAt: new Date('2022/03/17 12:15'),
        updatedAt: new Date('2022/03/17 12:15')
      }

    ];

    //Inser posts into the database
    return queryInterface.bulkInsert('Posts', posts, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
