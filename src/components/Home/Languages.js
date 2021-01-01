import React, { Component } from 'react';
import Typed from 'typed.js';

export default class Languages extends Component {
  componentDidMount() {
    this.typed = new Typed(this.el, {
      strings: [
        'React.js.^1000',
        'Gatsby.js.^1000',
        'Next.js.^1000',
        'GraphQL.^1000',
        'Amazon Web Services.^1000',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
  }

  render() {
    return (
      <b
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}
