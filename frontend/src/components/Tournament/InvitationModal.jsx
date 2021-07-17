import {useState} from "react";
import BackgroundImg from "../../assets/images/background3.jpg";
import PageTitle from "../../styles/page-title";
import Modal from "react-modal";
import styled from "styled-components";
import {BaseButton} from "../../pages/Login";
import StartButton from '../StartButton'


const Wrapper = styled.div`
  height: 70vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  //close button div
  .close {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .result {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
`


const EditButton = styled(BaseButton)`
  margin: 20px;
  font-weight: 700;
  font-size: 24px;
  align-self: center;
  
` 


const Mails = styled.ul`
  width: 50%;
  color: white;
  overflow: auto;
  max-height: 30vh;
  margin-top: 50px;
  list-style-type: none;  
  background-color: black;


  div {

    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  input {
    border-radius: 20px;
    background: none;
    max-width: max-content;
    margin: 20px;
    padding: 10px;
    color: white;
    border: solid 3px  ${props => props.borderColor};
    text-align: center;
    font-size: 20px;
  }
  
  li {
    border-radius: 20px;
    max-width: max-content;
    background: none;
    padding: 10px;
    margin: 20px;

    color: white;
    border: solid 3px #19c5db;
    text-align: center;
    font-size: 20px;
  }



`


Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgb(145, 145, 145, 0.6)";
Modal.defaultStyles.content.border = "none";
Modal.defaultStyles.content.padding = "none";

const CloseButton = styled.button`
  outline: none;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  margin-right: 2%;
  margin-top: 2%;
  transform: perspective(100px) translateZ(0px);
  transition: transform 100ms linear;

  :hover {
    cursor: pointer;
    transform: perspective(100px) translateZ(20px);
  }

  :active {
    transform: translateY(2px);
  }
`


const InvitationModal = (props) => {

    const [mails, setMails] = useState([]);
    const [mail, setMail] = useState("");
    const [border, setBorder] = useState("#19c5db");
    const [placeholder, setPlaceholder] = useState("email");

    const re = /\S+@\S+\.\S+/;


    const addmail = (e) => {

      if (re.test(mail)) {
        const newmail = {
          id: new Date().getTime(),
          text: mail,
          status: 'open',
        };
        setMails([...mails].concat(newmail));
        setMail("");
      } else {
        setMail("");
        setPlaceholder("invalid email");
        setBorder("red");

      } 

    }
  
    const deletemail = (id) => {
      let updatedmails = [...mails].filter((mail) => mail.id !== id);
      setMails(updatedmails);
    }


    const closeModal = () => {
        setBorder("#19c5db");
        setPlaceholder("email");
        setMail("");
        props.closeModal();
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: `url(${BackgroundImg})`,
        },
    };

    return (
        <Modal 
            isOpen={props.modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Invitation"
        >  
          <Wrapper>
            <div className={"close"}>
                <CloseButton onClick={closeModal}>X</CloseButton>
            </div>
            <div className={"result"}>
              <PageTitle pageTitle={"Invitations"} margin={"none"}/>
              <Mails borderColor={border}>
                <div>  
                  <input
                    type="email"
                    onChange={(e) => {
                      if (re.test(mail)) {
                        setBorder("#19c5db");
                        setPlaceholder("email");
                      } 
                      setMail(e.target.value)}
                    }
                    value={mail}
                    placeholder={placeholder}
                  />
                <EditButton onClick={addmail}>ADD</EditButton>
                </div>
              </Mails>
              <Mails>
                {mails.map((mail) => (
                  <div>
                    <li>{mail.text}</li>
                    <EditButton onClick={() => deletemail(mail.id)}>Delete</EditButton>
                  </div>
                ))}
              </Mails>
            </div>
            <StartButton onClick={closeModal} type='submit'text={'SEND'}/>
          </Wrapper>
        </Modal>
    )
}

export default InvitationModal