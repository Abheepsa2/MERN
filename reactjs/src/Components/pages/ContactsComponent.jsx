import React,{useState} from 'react'

function ContactsComponent() {
  const[name,setName]=useState('john doe')
  return (
    <div>
      <h1>
        contact
      </h1>
      <h1>{name}</h1>
      <label for="name" >Name  :</label>
      <input type="text " onChange={(e)=>setName(e.target.value)} />
      <br/> <br/> 


      <label for="email" >Email :</label>
      <input type="text" id="email"/> 
      <br/> <br/> 
      <label> Gender :</label> 
     <label> <input type="radio" name="gender"/> Male</label>
     
     <label> <input type="radio" name="gender"/> Female</label><br/> <br/> 
    
     <label for=""> Course :</label>
     <label for=""> <input type="checkbox"/> Html</label>
     <label for=""> <input type="checkbox"/> css</label>
     <label for=""> <input type="checkbox"/> js</label>
     <br/> <br/> 
  
     <label for=""> Country :</label>
     <select name="" id="country">
    <option selected disabled>-------Select Country --------</option>
    <option value="">nepal</option>
    <option value="">india</option>
    <option value="">china</option>
    </select>
    <br/> <br/> 
  
    <label for=""> Image :</label>
  
    <input type="file" id="image"/>
    <br/> <br/> 
    <label for="dob">DOB :</label>
    <input type="dob" id="dob"/>
    <br/> <br/> 
    <label for="description">Descption :</label> <br/>  
    <textarea name="" id="description" rows="8" cols="30"></textarea> <br/>
    <br/> 
   <button> Add Record </button>


    </div>
  )
}

export default ContactsComponent
