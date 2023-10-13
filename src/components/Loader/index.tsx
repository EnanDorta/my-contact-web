import { createPortal } from 'react-dom'

import { Overlay } from './styles'

interface LoaderProps {
  isLoading?: boolean
}

const Loader = ({ isLoading }: LoaderProps) => {

  if (!isLoading) {
    return null
  }

  return createPortal(
    <Overlay>
      <div className="loader"></div>
    </Overlay>,
    document.getElementById('loader-root')!,
  )
}

export default Loader
