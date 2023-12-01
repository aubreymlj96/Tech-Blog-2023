const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This was very helpful",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "This is very insightful",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "I agree! Can't wait to see more of your stuff",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;