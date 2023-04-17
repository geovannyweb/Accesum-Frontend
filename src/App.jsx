import { Suspense } from "react";
import { fetchData } from "./fetchData";
import './App.css'

const apiData = fetchData("http://localhost:9090/accesum/usuarios");
function App() {
  const data = apiData.read();
  return (
    <div className="App">
       <h1>Api Fetch Accesum</h1>
       <Suspense fallback={<div>Loading...</div> }>
       <ul>
           {data?.map((usuarios) => (
            <li key={usuarios.id}>{usuarios.nombre}</li>
           ))}
       </ul>
       </Suspense>
    </div>
  )
}

export default App
