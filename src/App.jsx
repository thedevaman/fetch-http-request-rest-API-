import {useState,useEffect} from 'react'
import 'font-awesome/css/font-awesome.min.css'
const App = () =>{
 const [data,setData] = useState([])
 const [loader,setLoader] = useState(false)


 useEffect(()=>{
  fetchData()
 },[])//this effect called dom is ready

  const fetchData= ()=>{
    setLoader(true)
    fetch('https://jsonplaceholder.typicode.com/users')

    .then((response)=>response.json())
    .then((user)=>{
      setLoader(false)
      setData(user)
      
    })

    .catch((error)=>{
      console.log(error)
      setLoader(false)

    })
  }
  return(
    <div> 
        <div style={{
          width:'70%',
          margin:'0 auto'
        }}>
          <h1 style={{textAlign:'center'}}>Http Request</h1>
            <button 
            onClick={fetchData}
            style={
              {
                border:'none',
                padding:'12px 32px',
                background:'blue',
                color:'white',
                fontWeight:600,
                fontSize:17,
              }
            }>Fetch Data</button>

           {
            loader && (<h1><i className='fa fa-spinner fa-spin'></i></h1>)
           }
           {
              data.map((user,index)=>(
                <div key={index} style={{marginTop:24,display:'flex',flexDirection:'column',gap:24}}>
                <div style={{
                  border:'1px solid #ccc',
                  padding:16,
                  boxShadow:'0 0 10px #ddd',
                  background:'white',
                  borderRadius: 4
                }}>
                  <h1 style={{
                    padding:0,
                    margin:0
                  }}>{user.name}</h1>
                  <p style={{
                    padding:0,
                    margin:0,
                    color:'dodgerblue'
                  }}>{user.email}</p>
                  <p style={{
                    padding:0,
                    margin:0
                  }}>{user.phone}</p>
                </div>
              </div>

              ))
           }
        </div>
    </div>
  )
}

export default App