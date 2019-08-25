import axios from 'axios';
let config = {
  headers: {
    "Content-Type": "application/json",
    "x-app-id": "bd9755c1",
    "x-app-key": "89d6af018b5f09b1d75c40a1910fa698",
    "x-remote-user-id": 0
  }
}

export const getItem = (event) => {
  return dispatch => { 
      axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        "query":event.target.value
    }, config)
    .then(res => {
        console.log(res.data);
      })
  }
}

export const SEARCH = (event) => {
  return dispatch => {
    axios.post('https://trackapi.nutritionix.com/v2/search/instant', {
      "query": event.target.value,
      "detailed":true,
      "self":true
    }, config)
      .then((res) => {
        dispatch(STORE_SEARCH_LIST(res.data));
      }, (err) => {
        dispatch(STORE_SEARCH_LIST(null));
      })
    
  };
};

export const STORE_SEARCH_LIST = (list) => {
  return {
      type: "STORE_SEARCH_LIST",
      list
  };
};

export const BACK = () =>{
  return{
    type:"BACK"
  }
}

export const NEXT = () =>{
  return{
    type:"NEXT"
  }
}

export const SELECTED = (item) =>{
  return{
    type:"SELECTED",
    item
  }
  
}

export const CLOSE_ADD_FORM = () =>{
  return{
    type:"CLOSE_ADD_FORM"
  }
}

export const ADD_ITEM = (data) =>{
  return{
    type:"ADD_ITEM",
    data
  }
}