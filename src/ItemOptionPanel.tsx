import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { DataGridPro, DataGridProProps } from "@mui/x-data-grid-pro";
import { type Customer } from "./itemData";
import { ProductsPanel } from "./ProductsPanel";

export function ItemOptionPanel({ row: rowProp }: { row: Customer }) {
  const getDetailPanelContent = React.useCallback<
    NonNullable<DataGridProProps["getDetailPanelContent"]>
  >(({ row }) => <ProductsPanel row={row} />, []);

  const getDetailPanelHeight = React.useCallback(() => 400, []);

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
              { field: "itemOptionName", headerName: "아이템옵션", flex: 1 },
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
            rows={rowProp.itemOptions}
            sx={{ flex: 1 }}
            hideFooter
            getDetailPanelHeight={getDetailPanelHeight}
            getDetailPanelContent={getDetailPanelContent}
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
