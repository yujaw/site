import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="error-container">
        <div className="error">
          <div class="text"><p>404</p></div>
          <div class="container">
            <div class="caveman">
              <div class="leg">
                <div class="foot"><div class="fingers"></div></div>
              </div>
              <div class="leg">
                <div class="foot"><div class="fingers"></div></div>
              </div>
              <div class="shape">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
              <div class="head">
                <div class="eye"><div class="nose"></div></div>
                <div class="mouth"></div>
              </div>
              <div class="arm-right"><div class="club"></div></div>
            </div>
            <div class="caveman">
              <div class="leg">
                <div class="foot"><div class="fingers"></div></div>
              </div>
              <div class="leg">
                <div class="foot"><div class="fingers"></div></div>
              </div>
              <div class="shape">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
              <div class="head">
                <div class="eye"><div class="nose"></div></div>
                <div class="mouth"></div>
              </div>
              <div class="arm-right"><div class="club"></div></div>
            </div>
          </div>
          <div className="contents">
            <div className="text-container">
              <p>Oops! The page you are looking for was not found on this server.</p>
            </div>
            <div className="button-container">
              <button onClick={() => navigate('/')} className="button">
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Error