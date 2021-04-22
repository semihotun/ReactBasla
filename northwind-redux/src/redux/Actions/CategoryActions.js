import * as actionTypes from "./ActionsTypes"

export function changeCategory(category) {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }
}
export function getCategories(categories) {
    return {
        type: actionTypes.GET_CATEGORIES,
        payload: categories
    }
}

export function getCategoriesData() {
    return function (dispatch) {
        let url = "http://localhost:3000/category";

        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getCategories(result)));
    }
}


