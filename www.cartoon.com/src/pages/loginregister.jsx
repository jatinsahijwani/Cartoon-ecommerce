import React , {useState} from "react";
import '../styles/loginregister.css';
import SignIn from '../components/login';
import SignUp from '../components/register';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
// import Card3d from './3dcard';


const LoginRegister = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const toggleMode = () => {
        setIsLoginMode(prevMode => !prevMode);
    };

    // colored button mui
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));




    return (
        <div className='loginregisterouter'>

                    {/* <div className="threePhoto">
                        <div className="photo1">
                            0
                        </div>
                        <div className="photo2">
                            2
                        </div>
                        <div className="photo3">
                            1
                        </div>
                    </div> */}



            <div className="section over-hide">
                <div className={`container ${isLoginMode ? 'show-login' : 'show-register'}`}>
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section text-center py-5 py-md-0">
                            <div className="buttonContainer">
                                <p className="butt">Already have an account? </p>
                            {/* <ColorButton onclick={toggleMode} className='toggle-button' variant="contained">
                                    {isLoginMode ? 'Register' : 'Login'}
                                    </ColorButton> */}
                                    <button onClick={toggleMode} className='toggle-button'>{isLoginMode ? 'Register' : 'Login'}</button>
                            </div>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="pricing-wrap">
                                                <SignIn />
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="pricing-wrap">
                                                <SignUp />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
