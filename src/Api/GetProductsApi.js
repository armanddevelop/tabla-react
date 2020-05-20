import clientAxios from "../config/axios";

export async function productsResponse() {
  try {
    return await clientAxios.get("products").then((resp) => {
      console.log(resp.data);
      return resp.data;
    });
  } catch (error) {
    console.log("This is the Api error ", error);
    return error;
  }
}
export async function productsResponse2(success, error) {
  let urlProducts = "http://localhost:4000/productsed";
  try {
    let response = await fetch(urlProducts);
    console.log("este es el response ", response);
    let products = await response.json();
    console.log("este es el valor de products ", products);
    success(products);
  } catch (err) {
    error(err);
  }
}

export default { productsResponse, productsResponse2 };
