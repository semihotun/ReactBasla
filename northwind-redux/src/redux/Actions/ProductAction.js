import * as actionTypes from "../Actions/ActionsTypes";

export function productListForCategory(products) {
    return {
        type: actionTypes.GET_PRODUCTS,
        payload: products,
    };
}

export function productListForCategoryData(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products?";

        if (categoryId != null) {
            url = url + "categoryID=" + categoryId;
        }
        fetch(url)
            .then((Response) => Response.json())
            .then((result) => dispatch(productListForCategory(result)));
    };
}

export function createProductSuccess(savedProduct) {
    return {
        type: actionTypes.CREATE_PRODUCT_SUCCESS,
        payload: savedProduct,
    };
}

export function updateProductSuccess(savedProduct) {
    return {
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: savedProduct,
    };
}

export function saveProductApi(product) {
    return fetch("http://localhost:3000/products/" + (product.productID || ""), {
        method: product.productID ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    })
        .then(handleResponse)
        .catch(handleEror);
}

export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product).then(saveProduct => {
            product.productID
                ? dispatch(updateProductSuccess(saveProduct))
                : dispatch(createProductSuccess(saveProduct));
        }).catch(eror => { throw eror; });

    };
}

export async function handleResponse(Response) {
    console.log(Response);
    if (Response.ok) {
        debugger
        return Response.json
    }
    const error=await Response.text()
    throw new Error(error)
}

export function handleEror(error){
    console.log("Bir hata oluştu");
    throw error;
}