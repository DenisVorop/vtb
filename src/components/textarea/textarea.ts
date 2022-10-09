import React from 'react'
import styled from 'styled-components/macro'

const Textarea = styled.textarea`
  transition: background-color 0.3s ease 0s;
  padding: 8px 8px 8px 16px;
  background-color: transparent;
  border: ${({theme}) => `1px solid ${theme.color.ultramarine}`};
  border-radius: 4px;
  width: 100%;
  color: ${({theme}) => theme.color.light_gray};
  min-height: 40px;
  height: 100%;
  overflow-y: auto;
  
  ::placeholder {
    font-family: 'Plex sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${({theme}) => `${theme.color_opacity.light_gray_60}`}
  }

  :hover {
    background-color: ${({theme}) => `${theme.color_opacity.light_gray_10}`};
  }

  :focus {
    outline: ${({theme}) => `2px solid ${theme.color.yellow}`};
  }

  :disabled {
    border: ${({theme}) => `1px solid ${theme.color_opacity.ultramarine_40}`};

    ::placeholder {
      color: ${({theme}) => `${theme.color_opacity.light_gray_40}`}
    }
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  resize: none;
`

export default React.memo(Textarea)
