import zenith from '../apis/zenith';
import{ADD_ANNOUNCEMENT}  from './types'
import history from '../history';

export const addAnnouncment= (announcment) =>{
  return{
    type:ADD_ANNOUNCEMENT,
    payload:announcment
  }
}

//example action creater using API
export const createStream= (Values)=> async(dispatch, getState)=>{
  try{
    //example header, we may not have an Auth reducer but focus on the syntax here
    //important part is "Bearer + the token"
    const header = { headers:{Authorization: `Bearer ${getState().Auth.token}`}};
    const response= await zenith.post('/endpoint', Values ,header);
    dispatch({
     type: ACTION_NAME,
     payload:response.data
    });
    history.push('/')');
  }catch(err){
    console.log(err);
  }
};
