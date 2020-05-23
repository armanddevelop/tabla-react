import clientAxios from "../config/axios";

export async function productsResponse() {
  try {
    let priceList = await clientAxios.get("products");
    console.log(priceList.data);
    return priceList.data;
  } catch (error) {
    console.log("Este es el Error de la API ", error);
  }
}

export default { productsResponse };
