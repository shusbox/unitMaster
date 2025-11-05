import { useState } from 'react'
import styled from "@emotion/styled";
import '../css/App.css'

function App() {
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
    </>
  )
}

export default App
