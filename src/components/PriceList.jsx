import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import Api from "../Api/GetProductsApi";
import columns from "../config/columns/Columns";

const PriceList = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const styleTable = useStyles();
  let [dataTable, setDataTable] = useState([]);
  let [page, setPage] = useState(0);
  let [rowsPerPage, setRowPerPage] = useState(5);
  useEffect(() => {
    Api.productsResponse().then((resp) => {
      setDataTable(resp);
    });
  }, []);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  //todo try to know what are doing thi blow functions
  const handleChangeRowPerPage = (e) => {
    setRowPerPage(+e.target.vale);
    setPage(0);
  };
  return (
    <>
      <h2>Hola desde lista de precios</h2>
      <TableContainer component={Paper}>
        <Table className={styleTable.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.columnsPriceList.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.columnsPriceList.map((column) => {
                      const value = row[column.id];

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={dataTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowPerPage}
      />
    </>
  );
};

export default PriceList;
