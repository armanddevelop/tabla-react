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

export default { productsResponse };
