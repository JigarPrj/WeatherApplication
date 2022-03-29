import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState} from 'react'
import {
    useHistory
    //@ts-ignore
  } from "react-router-dom";
  import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import axios from 'axios';
  toast.configure()
export default function Home(){
    const [disableBtn,setDisableBtn]=useState<boolean>(true)
    const [inputEntered,setinputEntered]=useState<string>('')
    const history=useHistory()
    

    const  getData=async()=>{
       await axios.get(`https://restcountrIes.com/v2/name/${inputEntered}`)
        .then((res:any) => {
          history.push({
            pathname: '/information',
            state: { detail: res?.data}
          })
        })
        .catch((err:any)=>{
            toast.error('Information not available')
        })
      }

    return(
        <div data-testid='div-html' style={{padding:'40px',border:'2px solid red',width:'50%'}}>
            <div style={{margin:'40px'}}>
            <TextField id="outlined-basic" variant="outlined" placeholder='Enter country'
            onChange={(event:any)=>{
                if(event.target.value){
                    setDisableBtn(false)
                    setinputEntered(event.target.value)
                }else{
                    setDisableBtn(true)
                }
            }}
            />
            </div>
            <div>
            <Button variant="contained"
            disabled={disableBtn}
            onClick={()=>{
                getData()
            }}
            >Submit</Button>
            </div>
        </div>
    )
}