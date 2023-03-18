import Navbar from '../components/Navbar';
import styles from '../styles/faq.module.css';

const Faq = () => {
    const faqs = [
      {
        question: 'Why are only parts of my text being generated',
        answer: 'GPTinf is still in beta so there is a limit of 300 tokens per request. This will be changed as we get more users'
      },
      {
        question: 'What methods are used?',
        answer: `GPTinf uses a combination of prompt engineering and gpt davinci's fine tuning features to produce human-like text`
      },
      {
        question: 'Does it always work?',
        answer: 'GPTinf has a very high success rate. However, like with any AI model, errors are inevitable. Thats why we recommend that you double check before using any of the content that is generated.'
      },
      {
        question: 'When will I be able to upload files?',
        answer: 'GPTinf is still in beta, but more features will be added soon'
      }
    ];
  
    return (
        <div>
        <Navbar/>
        <div className={styles.faq}>
        <h1 className={styles.h1}>Frequently Asked Questions</h1>
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h2 className={styles.h2}>{faq.question}</h2>
            <p className={styles.p}>{faq.answer}</p>
          </div>
        ))}
      </div>
      </div>
    )
  }
  
  export default Faq