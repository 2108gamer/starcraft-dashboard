import { auth } from "@/auth";
import axios from "axios"

 export const hacerSolicitud = async () => {
    
    try {
        const session = await auth()
     const response = await axios.post('http://localhost:3002/info/' + session?.user?.name)
     return response.data
   } catch (error) {
     console.error('Error en la solicitud:', error);
     return null; 
   }
 };
 
 
