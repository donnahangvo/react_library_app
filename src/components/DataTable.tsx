import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


/* 
        first_name: "First Name",
        last_name: "Last Name",
        book_title: "Book Title",
        book_length: "Book Length",
        book_type: "Book Type",
        language: "Language",
        isbn: "ISBN Number",
*/

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true},
    { field: 'first_name', headerName: "Author First Name", flex: 1, },
    { field: 'last_name', headerName: "Author Last Name", flex: 1, },
    { field: 'book_title', headerName: "Book Title", flex: 1, },
    { field: 'book_length', headerName: "Book Length", flex: 1, },
    { field: 'book_type', headerName: "Book Type", flex: 1, },
    { field: 'language', headerName: "Language", flex: 1, },
    { field: 'isbn', headerName: "ISBN Number", flex: 1, }
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { libraryData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <Button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Add New Book
                </Button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Books</h2>
            <DataGrid rows={ libraryData } columns={ columns } rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable