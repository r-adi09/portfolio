import Card from '../../components/Card'
import data from './data'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h2>Skills</h2>
      <p>I possess skills in these areas and I am actively seeking positions that align with my skill set.</p>
      <div className="container services__container">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services