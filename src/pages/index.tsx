import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Inteli Blockchain 🧱⛓️
        </Heading>
        <p className="hero__subtitle">
          Seja muito bem-vindo!
          <br />
        </p>
        <p>
          Essa documentação tem como foco principal contemplar os principais assuntos sobre o ecossistema Web3.
          <br />
          O repostitório se tornará open-source em algum momento, mas por enquanto, é um projeto privado para membros do Inteli Blockchain.
          <br />
          <br />
          Vamos juntos contruir essa documentação e deixar um legado para a comunidade!
        </p>
        <div className={styles.buttons}>
          <Link style={{marginRight: '10px'}}
            className="button button--secondary button--lg"
            to="/docs/welcome">
            Comece por aqui!
          </Link>
        </div>

        <br/>
        <br/>
        <br/>

      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
