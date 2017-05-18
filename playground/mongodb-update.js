// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('591dbb18c0804dd38f7e44fa')
    // },
    // {
    //     $set: {
    //         completed: true
    //     }
    // },
    // {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('591db0552e0054352ceaa6c4')
    },
    {
        $set: {
            name: 'Fernando'
        },
        $inc: {
            age: 4
        }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
