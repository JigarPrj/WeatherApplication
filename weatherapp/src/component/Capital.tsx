import {useSelector } from 'react-redux';
export default function Capital(props:any){

    const data = useSelector((state:any) => state?.takeAction?.Data[0])
    
    return(
        <div style={{border:'2px solid red',width:'50%',margin:'auto',marginTop:'10px'}}>
         <h6>Temperature: {data?.current?.temperature}</h6>
         <h6>Wind_Speed: {data?.current?.wind_speed}</h6>
         <h6>Precip: {data?.current?.precip}</h6>
         <h6>Weathwer_icons:
             </h6>
              <img src={data?.current?.weather_icons[0]} style={{width:'-webkit-fill-available'}}/>
        
        </div>
    )
}