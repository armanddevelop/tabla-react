import clientAxios from "../config/axios";

export async function productsResponse() {
  try {
    let getProducts = await clientAxios.get("products");
    console.log(getProducts.data);
    return { response: getProducts.data };
  } catch (error) {
    console.log("This is the Api error ", error);
    return error;
  }
}
const productsResponse2 = (success, error) => {
  let urlProducts = "http://localhost:4000/products";
  fetch(urlProducts)
    .then((response) => response.json())
    .then((response) => {
      let productInformation = response;
      console.log("productResponse2 ", productInformation);
      success(productInformation);
    })
    .catch((err) => error(err));
};

export default { productsResponse, productsResponse2 };
