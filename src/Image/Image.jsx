import React, { useState } from 'react'
import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const TopContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndexes.imageHover};
`

const Img = styled.img`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: 0.3s transform ease-in-out;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`

const Image = ({
  children,
  className,
  onClick,
  src,
  height = '100%',
  width = '100%'
}) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <ImageContainer
      className={className}
      height={height}
      width={width}
      onClick={onClick}
    >
      <TopContent>
        {children}
        {!children && !loaded && (
          <PulseLoader color='#fff' size={10} margin={3} />
        )}
      </TopContent>
      <Img src={src} loaded={loaded} onLoad={() => setLoaded(true)} />
    </ImageContainer>
  )
}

export default Image
