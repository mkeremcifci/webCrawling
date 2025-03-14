import { Button } from "antd"
import axios from "axios"


function About(){
    async function handleClick() {
        console.log("Tıklandı")
        try{
            const response = await axios.post("http://localhost:5000/develop",
                {},
                {
                headers:{
                    authorization: 'Kerem'
                }
            })
            console.log(response)
        }
        catch(error){
            console.error("Error sending data:", error)
        }
    }
    return(
        <div>
            <h1>
                Hakkımızda
            </h1>
            <Button onClick={handleClick}>Tıkla</Button>
        </div>
    )
}

export default About