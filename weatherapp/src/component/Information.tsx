import Button from '@mui/material/Button';
import {
    useHistory
    //@ts-ignore
  } from "react-router-dom";
  import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {useDispatch} from 'react-redux';
  import { GET_DATA } from '../allActions/allAction';
  import axios from 'axios';
  toast.configure()
export default function Information(props:any){

    const history=useHistory()    
    const dispatch=useDispatch()
    const  getData=async(capital:any)=>{
        await axios.get(`http://api.weatherstack.com/current?access_key=0d5ca82bfe8f44a53ba3db734e089930&query=${capital}`)
         .then((res:any) => {
             dispatch(GET_DATA(res?.data))
           history.push('/capital')
           
         }).catch((err:any)=>{
             toast.error('Information not available')
         })
       }
    return(
    <div>
        <h3>Information</h3>
    {
        props?.location?.state?.detail.map((country:any,index:number) => {
            return(
            <div style={{border:'2px solid red',width:'50%',margin:'auto',marginTop:'10px'}}>
                <h5>Capital:{country?.capital}</h5>
                <h5>Population:{country?.population}</h5>
                <h5>Latlng:{
                    country?.latlng?.map((element:any,indexEle:number) => {
                        return(
                            <>
                            <h5>{element}</h5>
                            </>
                        )
                    })
                    }</h5>
                <h5>Flag:</h5>
                <img src={country?.flag} style={{width:'-webkit-fill-available'}}/> 
                <div style={{margin:'10px'}}>
            <Button variant="contained"
            onClick={()=>{
                getData(country?.capital)
            }}
            >Capital Weather</Button>
            </div>
            </div>
            )
            
        })
    }
       
    </div>
    )
}