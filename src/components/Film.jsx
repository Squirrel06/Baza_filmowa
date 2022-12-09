import React from 'react'

const Film = ({imgPath, title, descript, grade}) => {
  return (
    <div className='film'>
      <div className='film-img'>
        <img src={imgPath} alt="ikona filmu" id='film-image'/>
      </div>
      <div className='film-main'>
        <div className='title'>
          {title}
        </div>
        <div className='film-descript'>
          {descript}
        </div>
        <div className='film-grade'>
          {grade}
        </div>
      </div>
    </div>
  )
}

export default Film