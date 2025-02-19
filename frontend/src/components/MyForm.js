import { Button } from "antd";
import {Input} from "antd";
import { useState } from "react";

import {handleInputChange, handleCLick} from "../helpers/handleInput";

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