export default function (state=null,action){
      
     
  switch(action.type)
  {
    case 'STUNDENT_SELECTED':
    return action.payload;
  }
  return state;

}