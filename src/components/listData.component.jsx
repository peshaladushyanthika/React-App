import React,{Component} from 'react';
import axios from 'axios';
import BreedsTableRow from './breedsTableRow.componenet';
import FilterData from './filtering.component';


//import table from 'react-bootstrap/Table';

export default class ListData extends Component{

  constructor(props){
    super(props)

    this.state = {

      breeds : []

    };
  }

  componentDidMount(){
    const result = axios.get('http://localhost:3000/breedsList')
    .then(res => {
      this.setState({
        breeds : res.data
      });
    })
    .catch((error) => {
      console.log("error" , error);
    });
  }

   DataTable(){
    return this.state.breeds.map((res,i)=>{
      return <BreedsTableRow object = {res}  key = {i} />
    })
  }
 render(){
       
        return(
             <div className="input-group">
               
                <FilterData/>
               
               {/* <div className="form-outline">
                <input id="search-input" type="search" id="form1" className="form-control" />
                <label className="form-label" for="form1">Search</label>
              </div> */}
            
            <table className="table">
                <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Adaptability</th>
      <th scope="col">Affection_Level</th>
      <th scope="col">Child_Friendly</th>
      <th scope="col">Stranger_Friendly</th>
      <th scope="col">Energy_Level</th>
      <th scope="col">Weight</th>
    </tr>
    <tr>
    
    </tr>
  </thead>
  <tbody>
   
<tr>
  <td>1</td>
  <td>name1</td>
  <td>des1</td>
</tr>


    {this.DataTable()}

  </tbody>
</table>


           </div>
           );
        
    }
}
