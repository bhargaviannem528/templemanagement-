const { request } = require("express");
const express=require("express");
const connection=require("./connection");
const router=express.Router();
router.post('/registerapi',(req,res)=>{
    connection.query("insert into  users1 set?",[req.body],
    (err,result)=>{
        if(err) throw err;
        else{
            res.send({submit:true,})
        }
    });
});
//donate postdata
router.post('/donateapi',(req,res)=>{
    connection.query("insert into  donate set?",[req.body],
   
    (err,result)=>{
        if(err) throw err;
        else{
            res.send({submit:true})
        }
    });
});
router.post('/darshanapi',(req,res)=>{
    connection.query("insert into  darshan set?",[req.body],
   
    (err,result)=>{
        if(err) throw err;
        else{
            res.send({submit:true})
        }
    });
});
router.post('/sevaapi',(req,res)=>{
    connection.query("insert into  seva1 set?",[req.body],
   
    (err,result)=>{
        if(err) throw err;
        else{
            res.send({submit:true})
        }
    });
});
router.post('/poojaapi',(req,res)=>{
    console.log(req.body);
    connection.query("insert into  pooja set?",[req.body],
   
    (err,result)=>{
        if(err){
        console.log("err");
        }
        else{
            res.send({submit:true})
            
        }
    });
});
router.get('/detailsapi',(req,res)=>{
  
    connection.query("select *  from pooja",
   
    (err,result)=>{
        if(err){
        console.log(err);
        }
        else{
            res.send({result:result})
            
        }
    });
});
router.get('/donateapi',(req,res)=>{
  
    connection.query("select *  from donate",
   
    (err,result)=>{
        if(err){
        console.log(err);
        }
        else{
            res.send({result:result})
            
        }
    });
});
router.get('/detailssapi',(req,res)=>{
  
    connection.query("select *  from seva1",
   
    (err,result)=>{
        if(err){
        console.log(err);
        }
        else{
            res.send({result:result})
            
        }
    });
});
router.post('/userapi',(req,res)=>{
    connection.query("insert into  user set?",[req.body],
   
    (err,result)=>{
        if(err) throw err;
        else{
            res.send({submit:true})
        }
    });
});
router.post('/marrapi',(req,res)=>{
    connection.query("insert into  marriage set?",[req.body],
   
    (err,result)=>{
        if(err) throw err;
        else{
            res.send({submit:true})
        }
    });
});
router.get('/darapi',(req,res)=>{
  
    connection.query("select *  from darshan",
   
    (err,result)=>{
        if(err){
        console.log(err);
        }
        else{
            res.send({result:result})
            
        }
    });
});
router.get('/marrapi',(req,res)=>{
  
    connection.query("select *  from marriage",
   
    (err,result)=>{
        if(err){
        console.log(err);
        }
        else{
            res.send({result:result})
            
        }
    });
});
module.exports=router;