import axios from "axios";
export const postReport = async(report) =>{
    try{
        var response = await axios.post("http://localhost:8000/api/report-incedents",report)
        return response.status;
    } catch(err){
        console.log(err);
    }
}
export const placePost = async(title) =>{
    try{
        var response = await axios.post("http://localhost:8000/api/report-location",title)
        return response.status;
    } catch(err){
        console.log(err);
    }
}