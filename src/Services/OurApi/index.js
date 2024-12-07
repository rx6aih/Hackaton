import axios from "axios";
export const postReport = async(report) =>{
    try{
        var response = await axios.post("http://localhost:8000/",report)
        return response.status;
    } catch(err){
        console.log(err);
    }
}