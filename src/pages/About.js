import Navbar from "../components/UI/Navbar";
import Quote from "../components/Quote";

import quotes from "../components/Quotes";

const About = () => {
  return (
    <>
      <Navbar />
      <Quote
        text={quotes[0].quote}
        author={quotes[0].author}
        background={quotes[0].background}
      />
    </>
  );
};
export default About;
