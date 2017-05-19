const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '591e2ea9dd429410e976ac50'}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove('591e2ea9dd429410e976ac50').then((todo) => {
    console.log(todo);
})
