import AboutImage from '../../assets/rajilogo.jpeg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Passionate about development of robust, scalable and high-performance applications, infrastructure and backend systems that power modern applications. Excited to contribute to innovative projects and cultivate continuous growth in dynamic software development.                </p>
                <p>
                <b>Work Experience</b><br>
                </br>
                <b>MathWorks - SDE Intern - Jan 2023 to May 2023 </b>
                <p>I developed RESTful microservices in JAVA with Spring Boot for the Internal tools team, automating components and reducing incident resolution time by 40%. This included enhancing API performance with Hibernate projections, integrating the Swagger ecosystem, and creating a comprehensive test suite in JUnit and JMockit to achieve 100% code coverage and improved code reliability.</p>
                <b>Deloitte - SDE - Aug 2020 to Nov 2021</b>
                <p>I developed KPI dashboards for a major oil and gas conglomerate, utilizing JAVA, AngularJS, Node.js, and SAP OData to provide critical data insights to stakeholders, implemented CI/CD pipelines to reduce deployment time and received consecutive 'Applause Awards' for building complex features within tight deadlines.</p>
                <b>Cisco - SDE Intern - Jan 2020 to Jun 2020</b>
                <p>I overhauled a web application using Java, MVC, Spring Boot to analyze Cisco ASA firewall logs via RESTful APIs, streamlining network troubleshooting. Additionally, I enhanced product recommendations for Cisco ISE versions by 30% through a dashboard built with Python, Flask, MongoDB, matplotlib, and Plotly to monitor bug occurrences.</p>
                <b>Microsoft - SWE Intern (WISE Mentorship Program) - Sep 2018 to Sep 2019</b>
                <p>I designed and developed 'Smart Scheduler' with a team of 3 people as Microsoft's garage project using Android, JAVA and Azure, featuring a decision trees algorithm for task prioritization based on user preferences, leading to a 40% improvement in task management. I also enhanced the user experience by creating an intuitive UI prototype in AdobeXD and conducting usability tests.</p>
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About