import './App.css'
import ButtonMultiuso from "./examples/ButtonMultiuso"
import Contador from './examples/Contador'
function App() {
  const styles = {
  backgroundColor:'yellow',
  padding:'1rem',
  color:'black',
  fontWeight:'bold'
  }
  const saludar = () =>{
  alert('Hola!')
  }
  return (
    <>
      <Contador/>
      <ButtonMultiuso texto={'Mi boton alerta'} styles={styles} handler={saludar}/>
      <ButtonMultiuso texto='Otro boton' cssStyle='mi-boton'/>
    </>
  )
}
export default App
