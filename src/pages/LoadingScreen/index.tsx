import './LoadingScreen.css';
import { Reveal, Tween } from 'react-gsap';

function LoadingScreen()
{
    return (
        <div className="loading-screen noselect">
            <div className="loading-wrapper">
                <Reveal>
                <Tween from={{ opacity: 0, top: -30 }} delay={0.5}>
                    <div className="loading-name">Joseph Pacitto</div>
                </Tween>
                </Reveal>
                <Reveal>
                    <Tween from={{ opacity: 0, top: -30 }} delay={0.75}>
                        <div className="loading-role">Full Stack Software Engineer</div>
                    </Tween>
                </Reveal>
                <Reveal>
                    <Tween from={{ opacity: 0, top: -30 }} delay={1}>
                        <div className="loading-bar">
                            <Tween from={{ width: 0 }} delay={2.5}>
                                <div className="loading"></div>
                            </Tween>
                        </div>
                    </Tween>
                </Reveal>
            </div>
        </div>
    )
}

export default LoadingScreen;
