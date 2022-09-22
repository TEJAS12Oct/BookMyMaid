import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";

function CustomerDash()
{   
    let navigate = useNavigate();
    const[maids,setMaids]=useState({
        maids : []
        
     });
     const[category,setCategory] = useState({
         allCategories : [],
        
     })


     const handleInput=(ev)=>{
        setCategory((category)=>({
            ...category,
            [ev.target.name]:ev.target.value

        }));
    }

    const  submitData=(e)=>{
        e.preventDefault();
        const reqOptions = {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                

            })
        }
    }

    React.useEffect(() => {
        fetch("http://localhost:8080/getAllCategory")
        .then(resp => resp.json()) 
        .then(data =>
             setCategory({allCategories : data}))
       
        

      }, []);
      
     const getAllMaids = (c) => 
     {     
        fetch("http://localhost:8080/maidList/"+c.target.value)
       .then(resp => resp.json())   //.then(data => alert(JSON.stringify(data)))
       .then(data => setMaids({maids : data}))

     }

     return(
        <div className='container-fluid'> 
            <div className="app-wrapper">
                    <div>
					  <select className="form-select"  name="category"   >
                          <option>Select Category</option>
						     {
								category.category.map((s) => {
								 return(<option key={s.category_name} value={s.category_name}>{s.category_name}</option>)
								 })
							 }
                      </select>
                   </div>
                   <div className="label">
                  </div> 
             <div className="label">
             <h4 className='sub'> select maid </h4>
              </div> 
              <div className="maids">
              <select name="maid" onChange={(c) => {getAllMaids(c)}}>
                            {                                        
                                        maids.maids.map((s) => {
                                            return(<option value={s.maidId}> {s.maidName} </option>)
                                        })
                            }
                            </select>
             </div>

            
            </div>
        </div>    
     );

}
export default CustomerDash;