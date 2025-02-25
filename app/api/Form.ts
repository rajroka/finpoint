import axios from "axios"


 const apiToken = process.env.API_TOKEN
 async function postData({  username ,  email , number , message} :{  username: string ,  email : string , number : Number  , message : string}  ) {
      try {
         const response = await axios.post('/api/createdata' , { username: username , email: email , number , message} , )
         console.log(response)
         return response.data;
      } catch (error) {
        console.error(" erorr has occured " , error)
        throw error;
      } 
}

async function login({email, password}: {email: string, password: string}){
       

     try {
         const response =  await axios.post('/api/auth/login' ,{ email , password } ,{
             headers: {
                 'Authorization': `Bearer ${apiToken}`
             }
         })
          
     
         return response.data 
     } catch (error) {
        console.error('error has occured ')
     }

   


}

async function postContact (name: string, email: string, message: string){
    const response =  await axios.post( '/api/contact',{name , email , message })
     return response.data 
}

export {postData , login , postContact}

