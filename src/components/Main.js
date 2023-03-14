import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons'

const Main = (props) => {
  return (
    <section className="splash">
      <section>
          {/* <div className="container mx-auto" style={{maxWidth: '80vw'}}> */}
          <div>
              <div>
                  <h1 className='intro-heading'>{props.title} </h1>
                  <p>Currently looking for full-time development opportunities. Open to freelance projects.</p>
                  <a href="#contact" className="intro-link">
                      <span>Let's chat!&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></span>
                  </a>
              </div>
          </div>
      </section>
    </section>
  )}

  export default Main;