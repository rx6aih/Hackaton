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
const testArray = [
{id: 1, title: "{'title': '123'}"},
{id: 3, title: 'title'},
{id: 5, title: 'bar'},
{id: 10, title: '123'},
{id: 11, title: '4567'},
{id: 12, title: 'rrr'},
]
export const placeGet = async() =>{
    const url = 'http://localhost:8000/api/report-location/';
    try {
        const response = await axios.get(url);
        return testArray;
    } catch (error) {
        console.error(error);
        return testArray;
    }
}