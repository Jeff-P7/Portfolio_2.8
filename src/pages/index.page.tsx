import type { NextPage } from 'next';
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { Header } from '../components/local';
import { Div, Head } from '../components/shared/atomicUI/atoms';
import { SocialLinks } from '../components/shared/atomicUI/molecules';
import { Container, Row, Col } from '../components/shared/grids';
import Intro from './sections/intro.component';

const Home: NextPage = () => (
  <Div colorize highlight>
    <Head
      title="JP Portfolio Home"
      description="Generated by create next app"
      icon="/favicon.ico"
    />
    <Header />
    <main>
      <Div classes="fixed bottom-3 left-3">
        <SocialLinks />
      </Div>
      <Container>
        <Row stack>
          <Col margin="y-36" colorize>
            <Intro />
          </Col>
          <Col margin="y-36" colorize>
            Projects
          </Col>
          <Col classes="h-full" margin="y-36" colorize>
            Experience
          </Col>
        </Row>
      </Container>
    </main>
  </Div>
);

export default Home;

const Section = ({ children }) => (
  <Col classes={styles.home__section} margin="y-24" colorize>
    {children}
  </Col>
);

const SectionList = () => {
  const { projects, skills } = data;

  return (
    <>
      {[
        <Intro />,
        // <Project data={projects} />,
        // <Experience />,
        // <Blog />,
        // <About />,
        // <Contact />
      ].map((item, index) => (
        <Section key={`${item}-${index}`}>{item}</Section>
      ))}
    </>
  );
};
