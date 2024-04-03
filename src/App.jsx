import { useState, useEffect } from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import {formatearDinero, calcularTotalPagar} from "./helpers"

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [ pago, setPago ] = useState(0);

  useEffect(() => {
      const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
      setTotal(resultadoTotalPagar)

      
  },[cantidad, meses]);

  useEffect(() => {
      //Calcular pagos mensuales
      setPago(total / meses);
  }, [total]);

  const MIN = 500;
  const MAX = 20000;
  const STEP = 100;


  function handleChance(e) { // esto esta conectado con onChange y cuando esta con onChange siempre hay que nombrarla asi. Si fuera onSumidt entonces fuera handleSumidt
    setCantidad( +e.target.value );
  }
  
  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      alert('Cantidad no valida');
      return;
    }

    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      alert('Cantidad no valida excediste el monto!');
      return;
    }

    setCantidad(valor);
  }

  

  return (
    <div className="my-1 max-w-lg mx-auto bg-white shadow p-10">
        
        <Header />

        <div className="flex justify-between my-6">
          <Button 
            operador='-'
            fn={handleClickDecremento}
          />
          <Button 
            operador='+'
            fn={handleClickIncremento}
          />
        </div>

        <input 
        type="range" 
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChance }
        min = {MIN}
        max = {MAX}
        step = {STEP}
        value = {cantidad} //cuando refrescas el indicador estara en el medio
        />

        <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
          {formatearDinero(cantidad)}
        </p>

        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
            Elige un <span className="text-indigo-600 ">Plazo</span> a pagar.
        </h2>

        <select
          className="mt-5 w-full p-2 bg-white border border-gray-300 
          rounded-lg text-center text-xl font-bold text-gray-500"
          value={meses}
          onChange={ e => setMeses(+e.target.value) }
        >
          <option value="6">6 Meses</option>
          <option value="12">12 Meses</option>
          <option value="24">24 Meses</option>
        </select>

        <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
            Resumen <span className="text-indigo-600 ">de Pagos.</span>

            <p className="txt-xl text-gray-500 text-center text-bold">{meses} Meses</p>
            <p className="txt-xl text-gray-500 text-center text-bold">{formatearDinero(total)}Total a pagar</p>
            <p className="txt-xl text-gray-500 text-center text-bold">{formatearDinero(pago)} Mensuales</p>
        </h2>
        </div>

        <h4 className=" text-indigo-600 text-center mx-auto">by Marco Monroy</h4>

    </div>
  )
}
export default App
