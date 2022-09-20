import styled from 'styled-components/macro'

export const PrimeVideoContainer = styled.div`
  background-color: #000000;
  min-height: 100vh;
  padding-bottom: 32px;
`

export const PrimeVideoImage = styled.img`
  width: 100%;
`

export const MoviesContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const MoviesHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  margin-top: 32px;
  margin-bottom: 23px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
