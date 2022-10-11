import { useState } from "react";
import "./MyForm.css";
function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <>
    <div className="cont">
      <form onSubmit={handleSubmit}>

      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">firstName:
           <input className="form-control" id="in1"
                type="text"
                name="firstName"
                value={inputs.firstName || ""}
                onChange={handleChange}
              />
        </label>
              
      </div>


      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">lastName:
           <input className="form-control" id="in2"
                type="text"
                name="lastName"
                value={inputs.lastName || ""}
                onChange={handleChange}
              />
        </label>        
      </div>

      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Education:
           <input className="form-control" id="in3"
                type="text"
                name="education"
                value={inputs.education || ""}
                onChange={handleChange}
              />
        </label>        
      </div>
      
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Email:
            <input className="form-control" id="in4"
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
        </label>        
      </div>
      

      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Phone:
             <input className="form-control" id="in5"
                type="number"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange}
              />
        </label>        
      </div>
      

      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">experience:
            <input className="form-control" id="in6"
                type="text"
                name="experience"
                value={inputs.experience || ""}
                onChange={handleChange}
              />
        </label>        
      </div>
      
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Address:
            <input className="form-control" id="in7"
                type="text"
                name="address"
                value={inputs.address || ""}
                onChange={handleChange}
              />
        </label>
      </div>
      
       <input type="submit"
              value="Submit"
              className="bb"
        />
    </form>

    </div>

    </>
  )
}

export default MyForm;