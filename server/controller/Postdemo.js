const Demo = require("../Model/Postdemo.js");

app.post("/#demoform", async (res, req) => {
    try {
      console.log(req.body.firstname);

      const demoForm= new Demo({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        number:req.body.number,
        companyname:req.body.companyname,
        place:req.body.place,

      })

      const demobooked= await demoForm.save()
      res.status(201).render()
    } catch (e) {
      res.statusCode(400).send(e);
    }
  });