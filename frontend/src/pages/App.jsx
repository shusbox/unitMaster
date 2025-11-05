import { useState } from 'react'
import styled from "@emotion/styled";
import '../css/App.css'

function App() {
  const HeaderContainer = styled.div`
    padding: 8px 20px;
    display: flex;
    align-itmes: center;
    justify-content: space-between;
  `

  const HeaderButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `

  const Main = styled.div`
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const InputContainer = styled.div`
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  `

  const InputResult = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px
  `

  return (
    <>
      <HeaderContainer>
        <h2> 단위 마스터 </h2>
        <HeaderButtonContainer>
          <button> 회원가입 </button>
          <button> 로그인 </button>
        </HeaderButtonContainer>
      </HeaderContainer>
      <Main>
        <InputContainer>
          <input
            type='number'
            placeholder='m'
          />
          <InputResult>
            <input placeholder='nm' readOnly />
            <input placeholder='mm' readOnly />
            <input placeholder='cm' readOnly />
            <input placeholder='km' readOnly />
            <input placeholder='광년' readOnly />
          </InputResult>
        </InputContainer>
        <button> 전환하기 </button>
      </Main>
    </>
  )
}

export default App
