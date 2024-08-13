import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
 import { faFacebook} from '@fortawesome/free-brands-svg-icons'   //coming from package.json
const FontAwesome = () => {
  return (
    <div>
FontAwesome
<i className="fa-solid fa-house fa-5x "></i>{/*using html  */}
<button className='text-bg-danger'><FontAwesomeIcon icon={faPhone} className='fa-5x' /></button> {/*using react  */}
 <button className='text-bg-secondary'><FontAwesomeIcon icon={faFacebook} className='fa-5x' />{/*using react  INDIVIDUAL IMPORT FROM REACT OPTION IN FONT AWESOM ICONS */}</button>

    </div>
  )
}

export default FontAwesome