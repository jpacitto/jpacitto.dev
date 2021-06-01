import './About.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function About()
{
    return (
        <div className="page">
            <Navbar />

            <div className="about">
                <div className="about-wrapper">
                    <div className="about-profile">
                        <div className="profile-image"></div>
                    </div>
                    <div className="about-info">
                    <p>
                        Hi, I’m Joseph! I am an engineer currently based in Boston, MA. I like to make applications with user-centered design.<br /><br />
                        As a Software Engeer at Stratus Technologies, I build features for the ztC Edge Fault Tolerant and High Availability solutions. I also enjoy programming in my free time, where I love finding problems communities have and creating simple solutions that anyone can use. I studied at UMass Dartmouth where I got my degree in Computer Science. While at school I also did fun things like be the Co-Founder & Treasurer of the Smash Bros. Club and stage manage performances for 20 Cent Fiction Drama Club.<br /><br />
                        In my spare time I also enjoy being outdoors hiking, snowboarding, and boating. I love watching eSports, movies, and gaming live streams. Please reach out, always looking for new friends and collaborators!
                    </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About;