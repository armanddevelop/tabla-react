import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import clientAxios from "../config/axios";
import Api from "../Api/GetProductsApi";

const PriceList = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  let [dataTable, setDataTable] = useState({});

  useEffect(() => {
    const test = Api.productsResponse();
    setDataTable(test);
  }, []);
  console.log(dataTable);
  // async function productsResponse() {
  //   try {
  //     const getProductos = await clientAxios.get("products");
  //     console.log(getProductos.data);
  //     setDataTable(getProductos.data);
  //   } catch (error) {
  //     console.log("This is the Error ", error);
  //   }
  // }

  const createData = (nameProduct, wholeSalePrice, retailPrice, id) => {
    return { nameProduct, wholeSalePrice, retailPrice, id };
  };

  const styleTable = useStyles();
  const rows = [
    createData("Lentejas", 8, 10, 1),
    createData("Ajo Japones", 55, 65, 2),
    createData("Tamarindo", 12, 15, 3),
    createData("Fijol texano", 12, 15, 4),
    createData("Fijol peruano", 15, 18, 5),
    createData("Fijol peruano bola", 18, 22, 6),
  ];
  return (
    <>
      <h2>Hola desde lista de precios</h2>
      <TableContainer component={Paper}>
        <Table className={styleTable.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Products</TableCell>
              <TableCell align="center">Precio Mayoreo</TableCell>
              <TableCell align="center">Precio Menudeo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.nameProduct}
                </TableCell>
                <TableCell align="center">$ {row.wholeSalePrice}</TableCell>
                <TableCell align="center">$ {row.retailPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PriceList;
