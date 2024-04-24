import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import {
  DataGridPro,
  DataGridProProps,
  GridColDef,
} from "@mui/x-data-grid-pro";

import { rows, type Customer } from "./itemData";
import { ItemOptionPanel } from "./ItemOptionPanel";

export default function ItemPanel() {
  const getDetailPanelContent = React.useCallback<
    NonNullable<DataGridProProps["getDetailPanelContent"]>
  >(({ row }) => <ItemOptionPanel row={row} />, []);

  const getDetailPanelHeight = React.useCallback(() => 400, []);

  return (
    <Box sx={{ width: "100%", height: 900 }}>
      <DataGridPro
        columns={itemColumns}
        rows={rows}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
      />
    </Box>
  );
}

const itemColumns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "Order ID" },
  { field: "customer", headerName: "Customer", width: 200 },
  { field: "date", type: "date", headerName: "Placed at" },
  { field: "currency", headerName: "Currency" },
  {
    field: "total",
    type: "number",
    headerName: "Total",
    valueGetter: (value, row) => {
      const subtotal = row.products.reduce(
        (acc: number, product: any) => product.unitPrice * product.quantity,
        0,
      );
      const taxes = subtotal * 0.05;
      return subtotal + taxes;
    },
  },
];
