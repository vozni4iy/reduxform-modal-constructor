import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { SimpleModalForm } from './SimpleModalForm'

class SimpleModalContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: true
    }
  }

  handleFormSubmit (event) {
    this.props.doAction(event)
    this.onHide()
  }

  onHide () {
    this.setState({open: false}, () => {
      this.props.onClose && this.props.onClose(this)
    })
  }

  render () {
    const { handleSubmit, content, header, imageUpload, fileUpload } = this.props
    let buttonText = (this.props.buttonText) ? (this.props.buttonText) : 'Save'
    let subheader = (this.props.subheader) ? (this.props.subheader) : null
    return (
      <SimpleModalForm
        show={this.props.open}
        onHide={this.onHide.bind(this)}
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        content={content}
        header={header}
        subheader={subheader}
        buttonText={buttonText}
        imageUpload={imageUpload}
        fileUpload={fileUpload}
      />
    )
  }
}

export default connect(
  (state, props) => ({
    open: true,
    validate: props.validate,
    initialValues: props.initialValues
  }), {})(reduxForm({
    form: 'simpleModalForm'
  })(SimpleModalContainer))
