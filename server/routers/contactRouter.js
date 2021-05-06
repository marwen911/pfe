
import express from 'express';
import Contact from '../models/contactModel.js';
import expressAsyncHandler from 'express-async-handler';

const contactRouter = express.Router();


contactRouter.post('/contact',(request,response)=>{
    const contact = new Contact({
        name:request.body.name,
        subject:request.body.subject,
        email:request.body.subject,
        phone:request.body.phone,
        message:request.body.message,


    })
    contact.save()
    .then(data=>{
        response.json
    })
    .catch(error =>{
        response.json(error)
    })
})
export default contactRouter;