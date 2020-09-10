const mongoClient=require("mongodb").MongoClient;
const assert = require("assert");
const oper=require("./operations");

mongoClient.connect(' mongodb://localhost:27017/',(err,client)=>{

assert.equal(err,null);

console.log("connnected to database");

const db=client.db('mailingList');

oper.insertDoc(db,{"name":"jennifer","email":"jenifer2133@gamil.com"},'users',(result)=>{
   
    console.log("inserted doc\n",result.ops);

    oper.findDoc(db,'users',(docs)=>{
    console.log("documents\n",docs);

    oper.updateDoc(db,{name:"jennifer"},{email:"great escape"},'users',(result)=>{
        console.log("updates:/n",result.result);
        oper.findDoc(db,'users',(docs)=>{
            console.log("newly updated documents\n",docs);
        
            db.dropCollection('mailingLIst',(result)=>{
                console.log("dropped collection:",result);

                client.close();
            });
        });        


    });
    });
});


});
