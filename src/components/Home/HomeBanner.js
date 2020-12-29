import React, { Component } from 'react';
import Typed from 'typed.js';
import styles from '../../css/homebanner.module.css';

export default class HomeBanner extends Component {
  componentDidMount() {
    this.typed = new Typed(this.el, {
      strings: [
        "Hey, I'm Brad.^1000",
        "I'm a Full Stack\n JavaScript developer.^1000",
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
          <span
            ref={(el) => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
  }
}
