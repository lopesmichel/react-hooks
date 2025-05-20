import {useEffect, useState} from 'react'

const HookUseEffect = () => {

    // 1 sem dependência

    useEffect(() => {
        console.log("estou sendo executado")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber( number + 1)
    }

    // 2 array de dps vazio
    useEffect(()=> {
        console.log("serei executado")
    },[])

    // 3 item no array de dps
    const [anotherNumber, setAnotherNumer] = useState(0)
    useEffect(() => {
        if (anotherNumber >0){
          console.log("sou executado apenas quando o anotherNumber muda");
        }
    }, [anotherNumber])


    // 4 cleanup do  useeffect
    useEffect(() => {
       // const timer = setTimeout(() => {
        //    console.log("teste")
       //     setAnotherNumer(anotherNumber + 1)
       // }, 2000)
      //  return () => clearTimeout(timer)
    }, [anotherNumber])
  return (
    <div>
      <h2>HookUseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another Number: {anotherNumber} </p>
      <button onClick={() => setAnotherNumer(anotherNumber +1)}>Mudar anotherNumber</button>
      <hr />
    </div>
  );
}

export default HookUseEffect