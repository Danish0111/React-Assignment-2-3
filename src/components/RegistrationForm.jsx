import { useState } from "react"


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        new_password: "",
        confirm_password: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        new_password: "",
        confirm_password: ""
    });

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        
        setErrors((prev) => {
            const updated = {...prev};

            if(name == "name") {
                updated.name = value.length < 2 ? "Name must contain at least 2 characters" : "";
            }
            if(name == "new_password") {
                updated.new_password = value.length < 8 ? "Password must contain at least 8 characters" : "";
            }
            if(name == "confirm_password") {
                updated.confirm_password = value.length != formData.new_password.length ? "Passwords do not match" : "";
            }
            return updated;
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        if(formData.name == "" && formData.email == "" && formData.new_password == "" && formData.confirm_password == "") return;

        if(!errors.name && ! errors.new_password && ! errors.confirm_password ) {
            alert("Form submitted successfully!");
            console.log(formData)
        } else {
            alert("Fix errors before submitting.");
        }
    }
  return (
    <div className="flex flex-col justify-center items-center w-[30%] mx-auto">
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <label className="text-lg font-semibold mt-4" htmlFor="name">Enter your Name</label>
        <input onChange={handleChange} type="text" name="name" id="name" value={formData.name} className="focus:outline-0 border-2 border-gray-300 bg-gray-200 rounded p-2"/>
        <div className="text-red-500 text-sm">{errors.name}</div>

        <label className="text-lg font-semibold mt-4" htmlFor="email">Enter your Email</label>
        <input onChange={handleChange} type="email" name="email" id="email" value={formData.email} className="focus:outline-0 border-2 border-gray-300 bg-gray-200 rounded p-2"/>

        <label className="text-lg font-semibold mt-4" htmlFor="new_password">Create Password</label>
        <input onChange={handleChange} type="password" name="new_password" id="new_password" value={formData.new_password} className="focus:outline-0 border-2 border-gray-300 bg-gray-200 rounded p-2"/>
        <div className="text-red-500 text-sm">{errors.new_password}</div>

        <label className="text-lg font-semibold mt-4" htmlFor="confirm_password">Confirm Password</label>
        <input onChange={handleChange} type="password" name="confirm_password" id="confirm_password" value={formData.confirm_password} className="focus:outline-0 border-2 border-gray-300 bg-gray-200 rounded p-2"/>
        <div className="text-red-500 text-sm">{errors.confirm_password}</div>

        <button type="submit" className="bg-blue-500 text-white p-2 mb-2 rounded mt-4">Submit</button>
      </form>
    </div>
  )
}

export default RegistrationForm
