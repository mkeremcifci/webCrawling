import axios from "axios"

export function handleInputChange(e, setJobValue){
    setJobValue(e.target.value)
}

export async function handleCLick(job){
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


