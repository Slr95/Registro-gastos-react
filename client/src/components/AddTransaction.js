import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Agregar nueva transaccion</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Texto</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ingresar texto..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Cantidad <br />
            (negativo - gastos, positivo - ingresos)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Ingresar cantidad..." />
        </div>
        <button className="btn">Agregar transaccion</button>
      </form>
    </>
  )
}
