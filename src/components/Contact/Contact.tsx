import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contacto</h2>
        <p>Listo para un nuevo poryecto </p>
        <p>Contácteme ahora.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:leaadev@icloud.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="leaadev@icloud.com">leaadev@icloud.com</a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+39) 3277290074</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}