import { Container, Paper } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

type users = {
    name: string,
    birthdate: string,
    username : string,

}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'birthdate', headerName: 'Birthdate', width: 90 },
    { field: 'username', headerName: 'Username', width: 105 },
];
const data = [
    {id: 1, name:'Mario', birthdate:'19-04-1990', username:'mario1990'},
    {id: 2, name:'Pedrio', birthdate:'19-04-1999', username:'pedro_d_14'},
];



export const ListUsersPage = () => {
    return (
        <Container maxWidth="sm">
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                <DataGrid 
                    columns={columns}
                    rows={data} />
            </Paper>
        </Container>
    )
}