import { createTheme, ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'


const darktheme = createTheme({
    palette: {
        type: "dark",
    },
})



const CustomPagination = ({ setPage, numberofPages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
        }}
    >
        <ThemeProvider theme={darktheme}>
            <Pagination
                count={numberofPages}
                onChange={(e) => handlePageChange(e.target.textContent)}
                color="secondary"
            />
        </ ThemeProvider>
    </div>
};

export default CustomPagination;