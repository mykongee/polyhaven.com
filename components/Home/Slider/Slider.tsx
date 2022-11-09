import { useState } from 'react';
import { useTranslation } from 'next-i18next';

import styles from './Slider.module.scss'

const imageUrls = [
  'https://cdn.polyhaven.com/site_images/home/landing.jpg?width=1903',
  'https://cdn.polyhaven.com/gallery/ea087a0f574975f7209d.jpg?width=1871'
]

const Slider = () => {
  const { t } = useTranslation('common');
  const [carouselImage, setCarouselImage] = useState(imageUrls[0]);

  const clickHandler = (event) => {
    carouselImage === imageUrls[0] ? setCarouselImage(imageUrls[1]) : setCarouselImage(imageUrls[0]);
  }

  return (
    <div className={styles.wrapper} style={{ background: `url(${carouselImage}) no-repeat center center`}}>
      <img src='/Logo 256.png' className={styles.logo} />
      <h1>Poly Haven</h1>
      <p>{t('tagline')}</p>
      <button onClick={clickHandler}>
        Change image
      </button>
    </div>
  )
}

export default Slider
