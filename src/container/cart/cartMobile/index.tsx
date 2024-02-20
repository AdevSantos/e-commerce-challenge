import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

const CartMobile = () => {

  return (
    <S.Content>
      <S.Wrapper>
          <S.BoxProduct>
            <img src="img/homem-aranha.png" alt="" />
          <p>Homem Aranha</p>
          <S.Price>R$ 29,99</S.Price>
          <Link to='/empty'>
          <img src="img/laystall.png" alt="" />
          </Link>
          </S.BoxProduct>

          <S.BoxQtd>
            <div><img src="img/decrease.png" alt="" />
          <S.Qtd>1</S.Qtd>
            <img src="img/add.png" alt="" /></div>
          <S.Title>SUBTOTAL<br/>
          <S.Price>
            R$ 29,99
          </S.Price>
          </S.Title>
          </S.BoxQtd>
      </S.Wrapper>

      <S.BoxButton>
      <hr/>
          <S.Title>TOTAL
            <S.Price>
              R$ 29,99
            </S.Price>
          </S.Title>
      <Link to='/buy-success'><S.Button>
            FINALIZAR PEDIDO
          </S.Button></Link>
      </S.BoxButton>
    </S.Content>
  )
}

export default CartMobile
