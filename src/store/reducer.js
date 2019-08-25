import data from '../assets/mockData';

const initialState = {
    user: data,
    searchList: null,
    curDate: 0,
    selectedItem: null,
    showAddForm: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "STORE_SEARCH_LIST":
            console.log(action.list)
            return {
                ...state,
                searchList: action.list
            };

        case "BACK":
            return {
                ...state,
                curDate: state.curDate - 1
            }

        case "NEXT":
            return {
                ...state,
                curDate: state.curDate + 1
            }

        case "SELECTED":
            return {
                ...state,
                selectedItem: action.item,
                showAddForm: true
            }

        case "CLOSE_ADD_FORM":
            return {
                ...state,
                showAddForm: false
            }

        case "ADD_ITEM":
            let newData = {...state.user};
            newData.data_points[0].intake_list.push(action.data);
            console.log(newData);
            return {
                ...state,
                user: newData,
                curDate: 0
            }
        default:
            return state;
    }
}
export default reducer