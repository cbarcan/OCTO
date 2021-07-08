import React from 'react';
import EmailSignUp  from './EmailForm';
import VerificationForm  from './Verification';
import CongratsMessage  from './CongratsDiv';
import { PageContentPicture} from '../LeftContainer';
import Login from '../LeftContainer';
import OctoWall from '../RigthContainer';





class UserFormContainer extends React.Component  {

    state = {
        step : 1,
        code: '',
        email: '',
        username: '',
        password: '',
        passwordRepeat: ''
    }

    Continue = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    handleChange = input => e => {
        console.log('in da handle change')
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state;
        const { code, email, username, password, passwordRepeat} = this.state;
        const values = { code, email, username, password, passwordRepeat};

        switch(step) {
            
            case 1:
                return (
                    <PageContentPicture>
                    <EmailSignUp 
                    Continue={ this.Continue }
                    handleChange={ this.handleChange }
                    values={ values }
                    />
                    <OctoWall/>
                    </PageContentPicture>
                )
            case 2:
                return (
                    <PageContentPicture>
                    <CongratsMessage 
                    Continue={ this.Continue }
                    handleChange={ this.handleChange }
                    values={ values }
                    />
                    <OctoWall/>
                    </PageContentPicture>
                )
            case 3:
                return (
                    <PageContentPicture>
                    <VerificationForm 
                    Continue={ this.Continue }
                    handleChange={ this.handleChange }
                    values={ values }
                    />
                    <OctoWall/>
                    </PageContentPicture>
                )
            case 4:
                return <Login />
            default:
                break;
        }
    }
    
}

export default UserFormContainer;