import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";

const Main = () => {
  return ( 
    <div style={{backgroundColor:"transperant", width:"100vw", height:"100vh"}}>
      <Navbar />
      <Outlet />
      {/** πΌπΌπΌ μ€λ₯ λμΈ μ μλ λ°©λ²μ μκ°ν΄λ³΄κΈ° πΌπΌπΌ*/}
      {/* <h1 style={{width:"100%", position:"absolute", top:"0", backgroundColor:"white"}}>404 Not found</h1> */}
    </div>
  );
}

export default Main;