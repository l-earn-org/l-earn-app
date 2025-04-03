import callIcon from '../assets/call.png'
import mailIcon from '../assets/mail.png'

export const Footer = () => {
  return (
    <footer>
      <div className="left">
        <div>
          <div className="left">
            <div className="logo">Lē</div>
            <p>L-earn Platform</p>
            <p>Kenyatta University, Thika Rd</p>
          </div>
        </div>
      </div>
      <div className="right">
        <p><img src={mailIcon} />learnorganisation@gmail.com</p>
        <p>
          <img src={callIcon} />
          0797257269
        </p>
        <span>

          @2025 L-earn. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};
