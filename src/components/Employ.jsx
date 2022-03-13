import {useState} from "react";
import axios from "axios";
export function Employ(){
    const [formData, setFormData] = useState(
        {empname: "",
        empage:"",
        empaddress:"",
        empdepart:"",
        empsalary:"",
        marital:"",
        });
        
        const handleChange = (e) => {
            const { id, value } = e.target;
           console.log(e.target)
           console.log(e.target.id)
           console.log(e.target.value)
            setFormData({
              ...formData,
              [id]: value,
            });
          };

        const handleSubmit = (e)=>{
            const {id,value} = e.target;
            // console.log("ID"+" "+id+" "+"Value"+" "+value)

            setFormData({...formData,[id]:value});
            axios.post("http://localhost:3001/users",formData).then(()=>{
                alert("employ data sucessfully save");
            })
        };

        return(
            <form action="" onSubmit={handleSubmit}>
              <input type="text" id="empname" onChange={handleChange} placeholder="Enter Employee Name"/> <br /> 
              <input type="text" id="empage" onChange={handleChange} placeholder="Enter Employee Age"/> <br />
              <input type="text" id="empaddress" onChange={handleChange} placeholder="Enter Employee Address"/>  <br />

              <select name="" id="empdepart" onChange={handleChange} >
               <option value="">---</option>
               <option value="Teacher">Teacher</option>
               <option value="Doctor">Doctor</option>
               <option value="Principal">Principal</option>     
              </select>  <br />
                
              <input type="text" id="empsalary" onChange={handleChange} placeholder="Enter Employee Salary"/> <br />
              <label htmlFor="" >Enter Employee marital State</label><br />
    
              <input type="checkbox"id="marital"onChange={handleChange} value="married" />
              <label htmlFor="">Married</label>
              <input type="checkbox" id="marital"  onChange={handleChange} value="unmarried"/> 
              <label htmlFor="">Unmarried</label> <br />
             <input type="submit" value="Submit" />
            </form>
        )
}
