import {useRef, useState} from'react'
import './App.css';

function App() {

  const formRef = useRef(null)

  const scriptUrl = "https://script.google.com/macros/s/AKfycbzr9_QmreDGyn7jx23bKWUHwKgf9QtlAmwwd2OC7UrcalA1stTwoFx6kfe_E2vX-MkW/exec"

    const handleSubmit = (e) =>{
        e.preventDefault()

        fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
        .then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
       <h2>We're looking for a Software Developer to add to our fast-growing team.<br />Apply here </h2>
    <form method="post" className="form"ref={formRef} name="google-sheet" onSubmit={handleSubmit}>
     
    <div className="form-style">
        <label for="firstname">First Name</label><br/>
        <input type="" id='firstname' name="firstname" placeholder="" />
    </div>  

    <div className="form-style">
        <label for="lastname">Last Name</label><br/>
        <input type="" id='lastname' name="lastname" placeholder="" />
    </div>  


    <div className="form-style">
        <label for="email">Email</label><br />
        <input type="email" name="email" id="email"placeholder='' />
    </div>


    <div className="form-style">
        <label for="number">Phone Number</label><br />
        <input type="number" name="phone" id="number"placeholder='' />
    </div>


    <div className="form-style">
        <label for="address">Address</label><br />
        <input type="address"id="address" name="address" placeholder='' />
    </div>


    <div className="form-style">
        <label for="state">State</label><br />
        <input type="text" id='state' name="state" placeholder="" />
    </div> 


    <div className="form-style">
    <label for="githubprofile">Github Profile</label><br />
        <input type="text" id='githubprofile' name="githubprofile" placeholder="" />
    </div> 


    <div className="form-style">
    <label for="reasonforbeingagoodfit">Why do you think you would be a good fit for our team?</label><br />
        <input type="text" id='reasonforbeingagoodfit' name="reasonforbeingagoodfit" placeholder="" />
    </div> 

    <div className="form-style">

        <input type="submit" id='submit' name="submit" value="Submit" />
    </div> 


    </form>
    </div>
  );
}

export default App;
