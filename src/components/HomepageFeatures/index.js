import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🌿 Balance Your Digital Life',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
         Digital wellness is about using technology in a way that supports your mental peace, focus, and overall well-being. 
         By creating healthy boundaries with screens, you can enjoy the benefits of the digital world without feeling overwhelmed or stressed.
      </>
    ),
  },
  {
    title: '🧠 Technology That Serves You',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Digital wellness encourages mindful and intentional use of devices. Instead of letting apps and notifications control your time and attention, 
        you learn to use technology as a helpful tool that improves productivity, learning, and personal growth.
      </>
    ),
  },
  {
    title: '⏳ Disconnect to Reconnect',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Practicing digital wellness means taking regular breaks from screens to reconnect with yourself and the real world. Reducing
         excessive screen time helps improve sleep, relationships, and emotional health, leading to a more balanced and fulfilling life.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
