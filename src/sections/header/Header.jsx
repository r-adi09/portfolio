import { useEffect } from 'react'
import HeaderImage from '../../assets/raji.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3  data-aos="fade-up">Rajeshwari Adi</h3>
        <p  data-aos="fade-up">
        Hi I'm Raji, an Enthusiastic MS in CS student at Northeastern University, Boston with 2 years of SDE experience. Skilled in Java, Spring Boot, microservices,Cloud technologies like AWS, GCP and MERN full-stack development. Seeking full-time SWE roles from January'24/ May'24 in backend development, cloud, and full-stack web development.
        </p>
        <div className="header__cta"  data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header