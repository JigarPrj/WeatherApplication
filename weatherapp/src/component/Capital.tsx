
export default function Capital(props:any){
    return(
        <div style={{border:'2px solid red',width:'50%',margin:'auto',marginTop:'10px'}}>
         <h6>Temperature: {props?.location?.state?.detail?.current?.temperature}</h6>
         <h6>Wind_Speed: {props?.location?.state?.detail?.current?.wind_speed}</h6>
         <h6>Precip: {props?.location?.state?.detail?.current?.precip}</h6>
         <h6>Weathwer_icons:
             </h6>
              <img src={props?.location?.state?.detail?.current?.weather_icons[0]} style={{width:'-webkit-fill-available'}}/>
        
        </div>
    )
}