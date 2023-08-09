import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Features from '../components/Features';
import UploadPdf from '../components/UploadPdf';
import { BeatLoader } from 'react-spinners';
import { useState } from 'react';
import styles from '../styles/Home.module.css';


const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/openai', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }),
      });
      const data = await response.json();
      setOutputValue(data.completion);
      setIsLoading(false);
      console.log(data.completion);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  

  return (
    <div>
    <Navbar />
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.h1}>GPT</h1>
          <h2 className={styles.h2}>inf</h2>
        </div>
        <p className={styles.p}>AI for everyone</p>
      </header>

      

      <h1 className={styles.h4}>Try GPTinf</h1>
      <h1 className={styles.h4}>Attention!!! GPTinf is under construction and will be temporarily unavailable. Expect to have the site back up within a week or so. I will be adding new features so if anyone has any request feel free to reach out to me at theo.skille@gmail.com</h1>
      <div className={styles.arrow}/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea className={styles.input} placeholder="Type in the text that you would like rewritten (Max: 300 characters)" value={inputValue} onChange={handleInputChange} />
        <button className={styles.button} onClick={() => setIsLoading(true)}type="submit">{isLoading ? <BeatLoader size={10} color="#ffffff" /> : 'Rewrite'}</button>
      </form>

      <hr className={styles.hr}/>

      <h1 className={styles.h3}>Here is your rewritten text</h1>
      <p className={styles.paragraph}>This text has been altered in order to pass AI detection tests. It is recomended that you double check that no content was lost during this process and that the original meaning was preserved. Visit GPTZero or another AI detection service to confirm that the text passes.</p>
      <textarea readOnly className={styles.output} value={outputValue} placeholder="Your rewritten text will appear here."></textarea>

      <h1 className={styles.h3}>Unlock the potential of GPT</h1>
      <Features/>

      <Footer />
    </div>
    </div>
  );
};

export default Home;

