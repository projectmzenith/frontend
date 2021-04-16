import{ADD_ANNOUNCEMENT}  from './types'

export const addAnnouncment= (announcment) =>{
  return{
    type:ADD_ANNOUNCEMENT,
    payload:announcment
  }
}
