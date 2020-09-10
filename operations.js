/*CRUD functions* */

const assert=require("assert");

exports.insertDoc=(db,doc,collection,callback)=>{

const coll=db.collection(collection);

 coll.insert(doc,(err,docs)=>{
    assert.equal(err,null);

    console.log("inserted" + docs.result.n );

    callback(docs);
 });
};

exports.findDoc=(db,collection,callback)=>{

    const coll=db.collection(collection);

    coll.find({}).toArray((err,docs)=>{
        assert.equal(err,null);

        callback(docs);
    });
};

exports.deleteDoc=(db,doc,collection,callback)=>{

    const coll=db.collection(collection);

    coll.deleteOne(doc,(err,result)=>{
        assert.equal(err,null);

        console.log("deleted" , doc );

        callback(result);
    });
};

exports.updateDoc=(db,doc,update,collection,callback)=>{

    const coll=db.collection(collection);

   coll.updateOne(doc , { $set : update} , null , (err,result)=>{

    assert.equal(err,null);

    console.log("updated document" , doc);

    callback(result);
   });
};