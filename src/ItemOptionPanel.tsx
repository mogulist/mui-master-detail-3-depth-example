import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { type Customer } from "./itemData";

export function DetailPanelContent({ row: rowProp }: { row: Customer }) {
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
