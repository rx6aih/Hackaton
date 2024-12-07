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
    const url = 'http://localhost:8000/api/report-location/';
    axios.post(url, title)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}
 export const placeGet = async() =>{
     const url = 'http://localhost:8000/api/report-location/';
     axios.get(url)
         .then(response => {
             console.log(response.data);
         })
     .catch(error => {
         console.error(error);
     })
 }