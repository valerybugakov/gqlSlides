import React, { Component } from 'react'
import './steps.css'

export default class Steps extends Component {
  componentDidMount() {
    const steps = document.querySelectorAll('.steps')

    const stepsTimer = 700

    // Bounce Animation
    // steps.addClass('is-circle-entering');

    // Delay for BounceIn
    setTimeout(() => {
      steps.forEach((el, i) => {
        const step = el
        const timer = (stepsTimer * 2) * i

        setTimeout(() => {
          // Line Flow
          step.classList.add('is-line-entering')
          step.classList.add('is-title-entering')
          // }
        }, timer)
      })
    }, 0)
  }

  render() {
    const { steps } = this.props

    return (
      <ul className="steps-box">
        {steps.map(step =>
          (<li
            key={step.label}
            className="steps is-circle-entering is-completed"
          >
            <div className="steps-point">
              <div className="steps-circle">{step.label}</div>
              <div className="steps-title">
                {step.title}
              </div>
            </div>
          </li>)
        )}
      </ul>
    )
  }
}
