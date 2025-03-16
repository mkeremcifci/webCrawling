import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import axios from "axios"



const MyForm = () => {
    const [jobValue, setJobValue] = useState('')
    const navigate = useNavigate()

    async function handleCLick(job){
        console.log(job)
        try{
            const response = await axios.post("http://localhost:5000/search",{
                keyword: job
            })
            navigate("/search-results",{state:{userInput:jobValue,results:response.data.message}})
        }
        catch(error){
            if(error.response.status === 403){
                console.log("Bota düştü")
            }
        }
    }

    return(
        <div>
            <Input 
                placeholder="İş"
                value={jobValue}
                onChange={(e)=>setJobValue(e.target.value)}
            ></Input>
            <Button onClick={()=> handleCLick(jobValue)}>Ara</Button>
        </div>
    )
}
export default MyForm