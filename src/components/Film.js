import React from 'react'

const Film = ({imgPath, title, descript, grade, genre}) => {
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
        <img src={require('../assets/images/star.png')} alt="ikona oceny filmu" id='star-img'/>
          {grade}
        </div>
        <div className='film-genre'>
            Gatunek:{genre}
        </div>
      </div>
    </div>
  )
}

export default Film