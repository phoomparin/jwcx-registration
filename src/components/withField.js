import React from 'react'
import styled, {css} from 'react-emotion'
import {Field} from 'redux-form'

const Container = styled.div`
  position: relative;
  font-size: 1rem;

  width: 100%;
  margin: 1.4em 0.8em;
`

// prettier-ignore
const Label = styled.label`
  position: absolute;
  top: 9px;
  left: calc(0.625em + 3px);

  font-size: 1em;
  font-weight: 600;

  cursor: text;
  pointer-events: none;
  transition: transform 0.2s ease-out;

  ${props => props.float && css`
    transform: translateY(-40px) scale(1);
  `};
`

const wrap = Component => ({label, input, meta, ...props}) => (
  <Container>
    <Component {...meta} {...input} {...props} />
    <Label float={input.value || props.float}>{label}</Label>
  </Container>
)

const withField = Component => {
  const InputField = wrap(Component)

  return props => <Field component={InputField} {...props} />
}

export default withField