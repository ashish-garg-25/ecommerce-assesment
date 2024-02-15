import { BaseUrl } from "./BaseUrl";

export default class Api  {

    static async getResponse(requestOptions) {
        console.log("request option === ",requestOptions)
        console.log("requezs==",requestOptions.params)
        if(requestOptions.params) {
            var localurl = BaseUrl + requestOptions.params
        } else {
            var localurl = BaseUrl + endpoint
        }
        console.log("local url ===",localurl)
       
        try {
            const response = await fetch(localurl,requestOptions)
            console.log("resp===",response)
            const responseJson = await JSON.stringify(response.json());
            console.log("responseJson===",responseJson)
            return responseJson;
        } catch (error) {
            console.log("error==",error)
        }
    }
  


} 

