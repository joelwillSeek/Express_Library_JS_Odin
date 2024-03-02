const Express=require('express');
const router=Express.Router();


//index html
router.get("/",(Req,Res)=>{
    Res.render("index");
});

//list all the data in object document
router.get("/:objects",(Req,Res)=>{
    Res.send(Req.params.objects);
});

//list one data in object document
router.get("/:objects/:id",(Req,Res)=>{
    Res.render(`${Req.params.objects}/${Req.params.id}`);
});

//create a object
router.post("/:objects/:id/create",(Req,Res)=>{
   Res.render(`${Req.params.objects}/${Req.params.id}/create`);
});

//update a object
router.post("/:objects/:id/update",(Req,Res)=>{
    Res.render(`${Req.params.objects}/${Req.params.id}/update`);
});

//delete a object
router.delete("/:objects/:id/delete",(Req,Res)=>{
    Res.render(`${Req.params.objects}/${Req.params.id}/delete`);
});

module.exports = router;