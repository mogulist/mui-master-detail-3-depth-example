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

function DetailPanelContent({ row: rowProp }: { row: Customer }) {
  return (
    <Stack
      sx={{ py: 2, height: "100%", boxSizing: "border-box" }}
      direction="column"
    >
      <Paper sx={{ flex: 1, mx: "auto", width: "90%", p: 1 }}>
        <Stack direction="column" spacing={1} sx={{ height: 1 }}>
          <DataGridPro
            density="compact"
            columns={[
              { field: "name", headerName: "Product", flex: 1 },
              {
                field: "quantity",
                headerName: "Quantity",
                align: "center",
                type: "number",
              },
              { field: "unitPrice", headerName: "Unit Price", type: "number" },
              {
                field: "total",
                headerName: "Total",
                type: "number",
                valueGetter: (value, row) => row.quantity * row.unitPrice,
              },
            ]}
            rows={rowProp.products}
            sx={{ flex: 1 }}
            hideFooter
          />
        </Stack>
      </Paper>
    </Stack>
  );
}

const columns: GridColDef<(typeof rows)[number]>[] = [
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

export default function BasicDetailPanels() {
  const getDetailPanelContent = React.useCallback<
    NonNullable<DataGridProProps["getDetailPanelContent"]>
  >(({ row }) => <DetailPanelContent row={row} />, []);

  const getDetailPanelHeight = React.useCallback(() => 400, []);

  return (
    <Box sx={{ width: "100%", height: 900 }}>
      <DataGridPro
        columns={columns}
        rows={rows}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
      />
    </Box>
  );
}
