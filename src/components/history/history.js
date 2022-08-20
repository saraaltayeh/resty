import "./history.css";

export default  function History(props) {

  let urlarr=[{}];
  let isHovering=false;
  for(let i=1;i<props.history.length;i++)
  {
   if(props.history[i][0].url!="")
    urlarr.push({
      url:props.history[i][0].url,
method:props.history[i][0].method,
data:props.history[i][0].result
    })
  }
  const  handler= (e,method,url,data)=>{
    isHovering=true;
    props.isClicked(true);
    
    const formData = {
      url:url,
      method:method,
      data:data
    };
   
    props.historyHandler(formData);
    props.isClicked(true);
  }
  
  const handleMouseEnter = () => {
    isHovering=true;
  };

  const handleMouseLeave = () => {
    isHovering=false;
  };
  return(
    <div id="his1">
    <h7>history</h7>
    <div id="his"   >
    {
    urlarr.map((one,index) => {
      if(one.method)
        return (
          <div key={index} onClick={(e)=>{handler(e,one.method,one.url,one.data)}} 
          >
            <p>method: {one.method}</p>
          <p>url: {one.url}</p>
          <p>________________________</p>
          </div>
        )
      })}
    </div>
    </div>

  )
}