function ContactInfo() {
    return (
      <div className="contact-info">
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <div className="social-icons">
          <img src="/assets/twitterlogo.png"></img>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/Cp-2sem-web/src/assets/twitterlogo.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/discord-icon.png" alt="Discord" />
          </a>
        </div>
      </div>
    );
  }
  
  export default ContactInfo;