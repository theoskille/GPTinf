import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';
import Link from 'next/link';

const About = () => {
  return (
    <div>
    <Navbar />
    <div className={styles.container}>
      
      <h1 className={styles.h1}>{"Hi! I'm Theo"}</h1>
      <p className={styles.p}>
        {`AI is a tool that has the potential to enable people to do much more than they could have ever imagined. As an engineer, I have seen firsthand the incredible capabilities of AI and its potential to change the world for the better. That's why I created GPTinf - to help democratize the use of AI and make it accessible to everyone.`}
      </p>
      <p className={styles.p}>
        {`I firmly believe that we should not put limitations on the use of this tool. AI has the ability to solve some of the world's most pressing challenges and help us create a better future. By preventing the vilification of AI, we can unlock its full potential and empower people from all backgrounds to create innovative solutions and make a positive impact in their communities.`}
      </p>
      <h2 className={styles.h2}>Contact me: theo.skille@gmail.com</h2>
      <a href={'/TheoSkilleResume2023.pdf'} download>Download Resume</a>
    </div>
    </div>
  )
}

export default About