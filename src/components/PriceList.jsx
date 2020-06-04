import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
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
import Container from "@material-ui/core/Container";
import testStyles from "../styles/stylesTable";

const PriceList = () => {
  let [dataTable, setDataTable] = useState([]);
  let [page, setPage] = useState(0);
  let [rowsPerPage, setRowPerPage] = useState(10);
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 50,
    },
  }))(TableCell);
  const classes = testStyles.importStyle().container;
  //llena los datos desde la API
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
      <Container maxWidth="lg">
        <h2>Hola desde lista de precios</h2>
        <TableContainer component={Paper} className={classes}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.columnsPriceList.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
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
      </Container>
    </>
  );
};

export default PriceList;
