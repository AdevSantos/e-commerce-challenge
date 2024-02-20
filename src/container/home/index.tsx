import React, { useEffect, useState } from 'react'
import * as S from './styles'
import axios from 'axios'
import Loading from 'components/bases/loading'

const Home = () => {
const [weMovies, setWeMovies]= useState<object>({})
const [active, setActive]= useState(0)
const [loading, setLoading] = useState(true)

useEffect(()=>{
  axios.get('http://localhost:3001/products',{
  headers: {'content-type': 'application/json'}
  }).then((response)=>{
    console.log(response.data);
    setWeMovies(response.data)
  }).catch((error)=>{
    console.log(error);
  })
},[])

// console.log('weMovies',weMovies);

setTimeout(() => {
  if (loading) {
    setLoading(false)
  }
}, 2000)

  return (
    <>
    { loading ?
      <Loading/>
    : <S.Container>
    <S.Wrapper>{Object.values(weMovies)?.map((item)=> {
      return(
          <S.Box key={item?.id}>
          <img src={item.image} alt="" />
          <p>{item?.title}</p>
          <span>R$ {item?.price.toFixed(2).toString().replace('.',',')}</span>
        <S.Button $active={item.id === active}
        onClick={()=> setActive(item.id)}>
        <span>
          <img src="img/shopping-cart.png" alt="" />
          0
          </span>
          ADICIONAR AO CARRINHO
          </S.Button>
      </S.Box>
        )})}
        </S.Wrapper>
      </S.Container>
      }</>)
}

export default Home
