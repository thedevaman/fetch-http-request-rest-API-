import {useState,useEffect} from 'react'
import 'font-awesome/css/font-awesome.min.css'
const App = () =>{
 const [data,setData] = useState([])
 const [title,setTitle] = useState([])
 const [loader,setLoader] = useState(false)
 const [titleloader,setTitleLoader] = useState(false)


 useEffect(()=>{
  fetchData()
  fetchTitle()
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


  const fetchTitle = ()=>{
    setTitleLoader(true)
    fetch('https://jsonplaceholder.typicode.com/albums')
    
    .then((response)=>response.json())

    .then((arraytitle)=>{
     setTitle(arraytitle)
     setTitleLoader(false)
    })
    .catch((error)=>{
      setTitleLoader(false)
    })
    
  }
  return(
    <div style={{
      display:"flex"
    }}> 
        <div style={{
          width:'50%',
          margin:'0'
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
        <div style={{
          width:'50%',
          margin:'0 0 0 10px',
        }}>
          <h1 style={{textAlign:'center'}}>Practice Fetch Data</h1>
          <button
          onClick={fetchTitle}
          style={{
            border:'none',
            padding:'15px',
            background:'#009688',
            color:'white',
            fontWeight:600,
            fontSize:'20px',
            borderRadius:'5px'
          }}>Load Data</button>
          <center>{titleloader &&<h1><i className="fa fa-refresh fa-spin" aria-hidden="true"></i></h1>}</center>
          {
            title.map((arraytitle,indextitle)=>(
              <div key={indextitle} style={{
                boxShadow:'0 0 10px gray',
                padding:'15px',
                marginTop:'15px',
                borderRadius:'5px',
              }}>
                <h3>User Id: {arraytitle.id}</h3>
                <p style={{margin:'0'}}><b>Title:</b> {arraytitle.title}</p>
              </div>
            ))
          }
      
        </div>
    </div>
  )
}

export default App