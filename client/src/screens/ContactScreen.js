import { Component } from "react";
import Axios from 'axios';
class ContactScreen extends Component {
    constructor(){
        super()
        this.state={
          name:'',
          subject:'',
          email:'',
          phone:'',
          message:''
        }
        this.changename=this.changename.bind(this)
        this.changeSubjects=this.changeSubjects.bind(this)
        this.changEmail=this.changEmail.bind(this)
        this.changePhone=this.changePhone.bind(this)
        this.changeMessage=this.changeMessage.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
      }
      changename(event){
        this.setState({
          name:event.target.value
        })
      }
      changEmail(event){
        this.setState({
          email:event.target.value
        })
      }
      changeMessage(event){
        this.setState({
          message:event.target.value
        })
      }
      changeSubjects(event){
        this.setState({
          subject:event.target.value
        })
      }
      changePhone(event){
        this.setState({
          phone:event.target.value
        })
      }
      onSubmit(event){
        event.preventDefault()
    
        const registeted={
          name:this.state.name,
          subject:this.state.subject,
          email:this.state.email,
          phone:this.state.phone,
          message:this.state.message,
    
        }
        Axios.post('http://localhost:3000/api/contacts/contact',registeted)
        /*.then(response=> console.log(response.data))*/
    
        this.setState({
          name:'',
          subject:'',
          email:'',
          phone:'',
          message:''
    
        })
      }
  render() {
    return(
        <div className="contact-form">
        <div className="second-container">
         <h4>Get in touch</h4>
         <br/>
       <h2>Write us a message</h2>
       <br/>
       <form onSubmit={this.onSubmit}>
       <div className="info">
           <div>
                     <label>Name<span>*</span></label><br/>
                      <input type="text" name="name" className="contact_input" placeholder="Name"
                onChange={this.changename}
                value={this.state.name}
                /><br/><br/>
                     
             </div>
             <div>
                     <label>Email<span>*</span></label><br/>
                       <input type="Email" name="name" className="contact_input" placeholder="Email"
                                    onChange={this.changEmail}
                                    value={this.state.email}
                 /><br/><br/>
                     <br/>
             </div>
       </div>
       <div className="info">
           <div>
                     <label>Your Subjects<span>*</span></label><br/>
                      <input type="text" name="name" className="contact_input" placeholder="Name"
                                   onChange={this.changeSubjects}
                                   value={this.state.subject}
                                   /><br/><br/>
                     
             </div>
             <div>
                     <label>Your Phone<span>*</span></label><br/>
                       <input type="text" name="name" className="contact_input" placeholder="Your Phone"
                            onChange={this.changePhone}
                            value={this.state.phone}
                 
                 /><br/><br/>
                     <br/>
             </div>
       </div>
       <div className="info"> 
              
            <div>
                  <label>your message<span>*</span></label>	
           </div>
         </div>	
         <textarea name="message" placeholder="" className="message"
                                               onChange={this.changeMessage}
                                               value={this.state.message}
         
         
         /><br/> 
         <button type="submit" className="contact_butt">Send Message</button>
       
             
       </form>
     </div>

      
  </div>
    )
  }
}
export default ContactScreen;

/*     <div className="first-container">
         <div className="info-container">
             <div>
                  <i className="fa fa-location-arrow"></i>
                 <h3>Our Address:</h3>
                 <p>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York</p>
             </div>
             
             <div>
                  <i className="fa fa-location-arrow"></i>
                 <h3>Call us Now:</h3>
                 <p>+060 (800) 801-582</p> 
                 <p>+522 672-452-1120</p>
             </div>
             <div>
             <i className="fa fa-location-arrow"></i>
              <h3 >Email:</h3>
                 <p>info@yourwebsite.com</p>
                 <p>support@yourwebsite.com</p> 
             </div>
         </div>

     </div>*/