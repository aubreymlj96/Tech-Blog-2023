const { Post } = require('../models');

const postData = [
  {
    title: 'Session Storage',
    content: 'I learned a lot about session storage, cant wait to apply it to my code',
    user_id: 1
    
  },
  {
    title: 'Why are Handlebars important?',
    content: 'Handlebars allow data to populate HTML formats and evolve depending on the data and the databse.',
    user_id: 2
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'Authentication is confirming your own identity, authorization means being allowed access to system.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;