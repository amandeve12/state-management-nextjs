"use client"

import userStore from '@/store/useStore'



const Hero =()=>{
const zustandStates = userStore()
console.log(zustandStates);

const {increase,decrease,count} = zustandStates
    return(
        <>
       <button onClick={increase}>increase </button>
       {count}
       <button onClick={decrease}>decreaes </button>
        </>
    )
}

export default Hero