import axios from "axios";

const BASE_PATH ="https://e029-36-81-88-195.ap.ngrok.io";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/read`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}