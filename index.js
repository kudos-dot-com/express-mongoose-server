const mongoClient=require("mongodb").MongoClient;
const assert = require("assert");

/*const url='mongodb://localhost:27017/';
const dbname='mailingList';
*/
mongoClient.connect(' mongodb://localhost:27017/',(err,client)=>{

assert.equal(err,null);

console.log("connnected to database");

const db=client.db('mailingList');
const collection=db.collection('users');

collection.insertOne({"name":"rajarshi","email":"rajarshi@gmail.com"},(err,result)=>{
    assert.equal(err,null);

    console.log("after insert:\n");

    console.log(result.ops);

    collection.find({}).toArray((err,docs)=>{
        assert.equal(err,null);

        console.log('found:\n');
        console.log(docs);

        db.dropCollection('mailingList',(err,result)=>{
            assert.equal(err,null);
            
            client.close();
        });
    });
});
});
