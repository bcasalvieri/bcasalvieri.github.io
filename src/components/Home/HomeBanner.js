import React, { Component } from 'react';
import Typed from 'typed.js';
import styles from '../../css/homebanner.module.css';

export default class HomeBanner extends Component {
  componentDidMount() {
    this.typed = new Typed(this.el, {
      strings: [
        'React.js^1000',
        'Gatsby.js^1000',
        'Next.js^1000',
        'GraphQL^1000',
        'AWS^1000',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
  }

  render() {
    return (
      <div className={styles.banner}>
        <div>
          <h1>Hi, I'm Brad 👋</h1>
          <h2>I'm a Full Stack JavaScript developer</h2>
          <h3>
            I specialize in{' '}
            <span
              ref={(el) => {
                this.el = el;
              }}
            />
          </h3>
        </div>
      </div>
    );
  }
}
