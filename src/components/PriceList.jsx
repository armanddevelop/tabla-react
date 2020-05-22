import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Api from "../Api/GetProductsApi";

const PriceList = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  let [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    Api.productsResponse().then((resp) => {
      setDataTable(resp);
    });
  }, []);

  const styleTable = useStyles();

  return (
    <>
      <h2>Hola desde lista de precios</h2>
      <TableContainer component={Paper}>
        <Table className={styleTable.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Productos</TableCell>
              <TableCell align="center">Precio Mayoreo</TableCell>
              <TableCell align="center">Precio Menudeo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">$ {row.wholesalePrice}</TableCell>
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
