import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';

const Contact = (props) => {

    return (
      <div className="splash">
        <ContactDetails contactTitle1={props.contactTitle1} email={props.email} contactTitle2={props.contactTitle2}/>
        <ContactForm />
      </div>
    )
}
    


export default Contact;