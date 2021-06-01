import './Footer.css';

function Footer()
{
    const handleClick = (e: any,url: string) => {
        e.preventDefault();
        window.open(url, '_blank');
    }

    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-links">
                    <div className="footer-link" onClick={(e) => handleClick(e, "https://github.com/jpacitto")}>
                        <div className="link-icon">
                            <div className="icon github-icon"></div>
                        </div>
                    </div>
                    <div className="footer-link" onClick={(e) => handleClick(e, "https://www.linkedin.com/in/joseph-pacitto/")}>
                        <div className="link-icon">
                            <div className="icon linkedin-icon"></div>
                        </div>
                    </div>
                    <a href="mailto:josephpacitto@gmail.com">
                        <div className="footer-link">
                            <div className="link-icon">
                                <div className="icon email-icon"></div>
                            </div>
                        </div>
                    </a>
                    <div className="footer-link" onClick={(e) => handleClick(e, "https://twitter.com/WhiffedPunish")}>
                        <div className="link-icon">
                            <div className="icon twitter-icon"></div>
                        </div>
                    </div>
                </div>
                <div className="footer-creation">
                    built using React.js by yours truely 👨‍💻
                </div>
            </div>

        </div>
    );
}

export default Footer;