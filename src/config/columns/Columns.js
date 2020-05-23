export const columnsPriceList = [
  { id: "name", label: "Productos", minWidth: 170 },
  {
    id: "wholesalePrice",
    label: "Precio\u00a0Mayoreo\u00a0X\u00a0Kilo",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("es-MX"),
  },
  {
    id: "retailPrice",
    label: "Precio\u00a0Menudeo\u00a0X\u00a0Kilo",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("es-MX"),
  },
];

export default { columnsPriceList };
