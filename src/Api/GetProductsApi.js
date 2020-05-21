import clientAxios from "../config/axios";

export async function productsResponse() {
  try {
    let priceList = await clientAxios.get("products").then((res) => {
      return res.data;
    });
    return priceList;
  } catch (error) {
    console.log("Este es el Error de la API ", error);
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
