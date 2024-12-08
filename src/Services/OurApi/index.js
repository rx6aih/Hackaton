import axios from "axios";
const testReports =[
    {location:"Красная 200",title:"Затор"},
    {location:"Красная 220",title:"Затор"},
    {location:"Красная 200",title:"Затор"},
    {location:"Красная 200",title:"Затор"},
    {location:"Красная 200",title:"Затор"},
]
//REPORTS
export const reportGet = async() =>{
    const url = "http://localhost:8000/api/report-incidents/";
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return testReports;
    }
}
export const reportPost = async(report) =>{
    const url =  "http://localhost:8000/api/report-incidents/";
    try{
        const response = await axios.post(url,report);
        return response.data;
    } catch(err){
        console.log(err);
        return [];
    }
}

//PLACES
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
        return response.data;
    } catch (error) {
        console.error(error);
        return testArray;
    }
}
export const placePost = async(title) =>{
    const url = 'http://localhost:8000/api/report-location/';
    console.log('test')

    try{
        const response = await axios.post(url,title);
        return response.data;
    } catch (error){
        console.error(error);
        return [];
    }
}

//BOT
export const botPost = async (data) => {    const url = "https://traffic-incident-responder-notebookkaggle2.replit.app/api/incident";
    console.log('Отправка запроса:', data);
    try {
        const response = await axios({
        method: 'post', url: url,
        data: {street: data.street,incident: data.incident},
        headers: { 'Content-Type': 'application/json'},
        withCredentials: false,
        crossDomain: true });
        console.log('Получен ответ:', response.data);

        if (response.data.error) {
            console.log(response.data.error);
        }
        return response.data.result;
    } catch (error) {
        console.error('Ошибка:', error);
   }
};