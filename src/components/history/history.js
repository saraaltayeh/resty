import "./history.css";
export default  function History(props) {

  let urlAarr=[{}];
  
  for(let i=5;i<props.history.length;i++)
  {
   
    urlAarr.push({
      url:props.history[i][0].url,
method:props.history[i][0].method,
data:props.history[i][0].result
    })
  }
  const  HistoryHandler= (e,method)=>{
    console.log(method);
    const formData = {
      // url:url
    };
  }
  return(
    <div id="his1">
    <h7>history</h7>
    <div id="5"   >
    {
    urlAarr.map((one,index) => {
      //one.method,one.url,one.data
        return (
          <div key={index} onClick={(e)=>{HistoryHandler(e,one.method,one.url,one.data)}} 
          
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