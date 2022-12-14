/********************************************************************************
 * Copyright (c) 2021,2022 T-Systems International GmbH
 * Copyright (c) 2021,2022 Contributors to the CatenaX (ng) GitHub Organisation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/
import { Box } from '@mui/material';
import { GridCellEditCommitParams, GridRowId } from '@mui/x-data-grid';
import { Button, Table } from 'cx-portal-shared-components';

import { addRows, deleteRows, setRows, setSelectionModel } from '../features/submodels/slice';
import { schemaValidator } from '../helpers/SchemaValidator';
import { useAppDispatch, useAppSelector } from '../store/store';

export default function DataTable() {
  const { submodelDetails, columns, rows, selectionModel, selectedRows } = useAppSelector(state => state.submodelSlice);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Box>
          <Button variant="contained" size="small" onClick={() => dispatch(addRows())}>
            Add row
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(deleteRows())}
            sx={{ ml: 2 }}
            disabled={!Boolean(selectedRows.length)}
          >
            Delete row(s)
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="small"
            disabled={!Boolean(rows.length)}
            onClick={() => {
              schemaValidator(rows);
            }}
          >
            Next Step - Configure Policies
          </Button>
        </Box>
      </Box>
      <Table
        title={submodelDetails.title}
        getRowId={row => row.id}
        autoHeight
        rows={rows}
        columns={columns}
        hideFooter={true}
        disableColumnMenu={true}
        disableSelectionOnClick={true}
        checkboxSelection
        selectionModel={selectionModel}
        onSelectionModelChange={(ids: GridRowId[]) => {
          dispatch(setSelectionModel(ids));
        }}
        onCellEditCommit={(params: GridCellEditCommitParams) => {
          dispatch(setRows(params));
        }}
        sx={{
          '& .MuiDataGrid-columnHeaderTitle': {
            textOverflow: 'clip',
            whiteSpace: 'break-spaces',
            lineHeight: 1.5,
            textAlign: 'center',
          },
          '& .MuiDataGrid-columnHeader': {
            padding: '0 10px',
          },
          '& .MuiDataGrid-cell': {
            padding: '0 10px',
          },
          '& .MuiDataGrid-columnHeaderCheckbox': {
            height: 'auto !important',
          },
          '& .MuiDataGrid-cellCheckbox': {
            padding: '0 30px',
          },
          '& h5.MuiTypography-root.MuiTypography-h5 span': {
            display: 'none',
          },
        }}
      />
    </Box>
  );
}
