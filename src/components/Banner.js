import React, { Component } from 'react'
import Typed from 'typed.js'
import styles from "../css/banner.module.css"

export default class Banner extends Component {
  componentDidMount() {
    this.typed = new Typed(this.el, {
      strings: ["Hi! I'm Brad.^1000", "Hi! I'm a UX-Focused Web Developer.^1000"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    })
  }
  render() {
    return (
      <div className={styles.banner}>
        <span ref={(el) => {this.el = el}} />
      </div>
    )
  }
}
