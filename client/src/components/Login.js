import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Login({ isLogging, onLogging }) {
  // useEffect(() => {
  //   // M.AutoInit();
  // }, []);

  const handleClick = () => {
    const compoLogin = document.getElementById('login');
    const compoPassword = document.getElementById('password');
    onLogging(compoLogin.value, compoPassword.value);
  };

  return (
    <div>
      <Modal isOpen={isLogging} style={customStyles}>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              name=""
              id="login"
              className="validate"
              placeholder="Informe o login"
            />
            <label htmlFor="login">Login</label>
          </div>
          <div className="input-field col s12">
            <input
              type="password"
              name=""
              id="password"
              className="validate"
              placeholder="Informe a senha"
            />
            <label htmlFor="password">Senha</label>
          </div>
          <div>
            <span
              className="waves-effect waves-light btn col s12"
              onClick={handleClick}
            >
              Entrar
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
}
