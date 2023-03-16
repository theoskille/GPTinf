import styles from '../styles/Features.module.css';
import Image from 'next/image';
const features = [
  {
    name: 'Effective',
    description: 'Passes mainstream AI detectors with 97% accuracy',
    image: '/checkmark.png',
  },
  {
    name: 'Powerful',
    description: 'Supports large documents',
    image: '/checkmark.png',
  },
  {
    name: 'Quality Control',
    description: 'Ensures quality writing and maintains information through translations',
    image: '/checkmark.png',
  },
];

const Features = () => {
    return(
    	<div className={styles.featurescontainer}>
        {features.map((feature, index) => (
        	<div className={styles.feature} key={index}>
            <Image width={100} height={100} className={styles.featureimg} src={feature.image} alt={feature.name} />
            <h2 className={styles.featureh2}>{feature.name}</h2>
            <p className={styles.featurep}>{feature.description}</p>
          </div>
      ))}
    </div>
    );
}

export default Features;