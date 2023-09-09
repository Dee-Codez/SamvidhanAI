import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
    return (

    <div className='mt-[10vw] xl:mt-0 xl:p-20 text-lg xl:text-2xl xl:tracking-[.3rem] tracking-[.1rem] xl:leading-[3.5rem] leading-[3rem] text-center'>
      <TypeAnimation
        sequence={[
          "The Constitution of India, adopted in 1950, is the supreme law of the country. It provides the framework for governance, defining the structure of government, fundamental rights, and duties of citizens. India's constitution is known for its democratic principles, secularism, and commitment to social justice. It guarantees individual freedoms and equality under the law. It also establishes a federal structure with a division of powers between the central and state governments. The Constitution of India is one of the world's lengthiest written constitutions, reflecting the nation's diverse culture, values, and commitment to democracy."
        ]}
        wrapper="span"
        speed={82}
        style={{display: 'inline-block' }}
      />
    </div>
    );
  };
export default Typewriter;