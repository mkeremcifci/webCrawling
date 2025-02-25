import { Button } from "antd";
import {Input} from "antd";
import { useState } from "react";
import axios from "axios"



function handleInputChange(e, setJobValue){
    setJobValue(e.target.value)
}

async function handleCLick(job){
    console.log(job)
    try{
        const response = await axios.post("http://localhost:5000/search",{
            job: job
        })
        console.log("Server response:", response.data)
        
    }catch(error){
        console.error("Error sending data:", error)
    }
}

const MyForm = () => {
    const [jobValue, setJobValue] = useState('')

    return(
        <div>
            <Input 
                placeholder="İş"
                value={jobValue}
                onChange={(e)=>handleInputChange(e, setJobValue)}
            ></Input>
            <Button onClick={()=> handleCLick(jobValue)}>Ara</Button>
        </div>
    )
}
export default MyForm