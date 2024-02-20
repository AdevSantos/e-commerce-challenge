import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import CartMobile from './cartMobile'

const Cart = () => {

  return (
    <S.Container>
      <CartMobile />
    <S.Content>
      <S.Wrapper>
          <S.Title>PRODUTO</S.Title>
          <S.Title>QTD</S.Title>
          <S.Title>SUBTOTAL</S.Title>
      </S.Wrapper>

      <S.Wrapper>
          <S.BoxProduct>
            <img src="img/homem-aranha.png" alt="" />
          <p>Homem Aranha<br/><S.Price>R$ 29,99</S.Price>
          </p>
          </S.BoxProduct>

          <S.BoxQtd>
            <img src="img/decrease.png" alt="" />
          <S.Qtd>1</S.Qtd>
            <img src="img/add.png" alt="" />
          </S.BoxQtd>

          <S.Price>R$ 29,99</S.Price>
          <Link to='/empty'>
          <img src="img/laystall.png" alt="" />
          </Link>
      </S.Wrapper>


      <hr/>
      <S.BoxButton>
      <Link to='/buy-success'><S.Button>
            FINALIZAR PEDIDO
          </S.Button></Link>
          <S.Title>TOTAL
          </S.Title>
            <S.Price>
              R$ 29,99
            </S.Price>
      </S.BoxButton>
    </S.Content>
    </S.Container>
  )
}

export default Cart
