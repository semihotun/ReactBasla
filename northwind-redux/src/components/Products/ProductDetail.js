import React from "react";
import SelectInput from "../Toolbox/SelectInput";
import TextInput from "../Toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange ,errors}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.productID ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="name"
        label="Product Name"
        value={product.name}
        onChange={onChange}
        error={errors.name}
      ></TextInput>

      <SelectInput
        label="Category Name"
        name="categoryID"
        value={product.categoryID || ""}
        defaultOption="Seçiniz"
        options={categories.map(category => ({
          value: category.categoryID,
          text: category.name
        }))}
        onChange={onChange}
        error={errors.categoryID}
      ></SelectInput>

      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      ></TextInput>

      <TextInput
        name="unitsInStock"
        label="units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      ></TextInput>

      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      ></TextInput>
      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};
export default ProductDetail;
