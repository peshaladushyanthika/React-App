import React from 'react';
import { Table } from 'react-bootstrap';

const FilterData = ()=>{
    const[search,setSearch] = React.useState('');
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
const data = {
   
     };
return(
        <>
        <label htmlFor = "search">
        Search
<input id="search-input" type="search" onChange = {handleSearch} />
            </label>
              
           <Table data = {data}>

           </Table>
        </>   
        )
}

export default FilterData;