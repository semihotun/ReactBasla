import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { getCategoriesData } from "../../redux/Actions/CategoryActions"
import { saveProduct } from "../../redux/Actions/ProductAction"
import ProductDetail from './ProductDetail';

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategoriesData,
    saveProduct,
    history,
    ...props
}) {
    const [product, setProduct] = useState({ ...props.product });
    const [errors,setErrors]=useState({});
    useEffect(() => {
        if (categories.length === 0) {
            getCategoriesData();
        }
        setProduct({ ...props.product });
    }, [props.product]);

    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryID" ? parseInt(value, 10) : value
        }))

        if(value ===""){
            setErrors(previousErrors=>({
                ...previousErrors,
                name:"Ürün ismi girin"
                }))
        }
        else{
            setErrors(previousErrors=>({
                ...previousErrors,
                name:""
                }))
        }

    }
    function handleSave(event) {
        event.preventDefault();
        console.log(product);
        saveProduct(product).then(() => {
            history.push("/")
        });
    }

    return (
        <ProductDetail
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
            errors={errors}
        />
    )


}

export function getProductById(products, productID) {
    let product = products.find(product => product.productID === parseInt(productID)) || null;
    return product;
}

//ownProps urldeki componenti kendi propları (querystring okuma işlemi)
function mapStateToProps(state, ownProps) {
    const productID = ownProps.match.params.productID
    const product = productID && state.productListForCategoryReducer.length > 0
        ? getProductById(state.productListForCategoryReducer, productID)
        : {}

    return {
        product: product,
        products: state.productListForCategoryReducer,
        categories: state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategoriesData,
    saveProduct
}
export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);