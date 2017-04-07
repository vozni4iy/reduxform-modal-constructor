import React, { Component } from 'react'
import { validate } from 'validation/NameValidation'
import SimpleModalContainer from './SimpleModalContainer'

export default class ExampleModal extends Component {

  onClickClose () {
    this.props.closeModal()
  }

  onClickSave ({name, description, severity}) {
    this.props.sendInfoToServer({
      name: name,
      description: description,
      severity: severity
    })
  }

  render () {
    let header = 'Example'
    let options = [
      { value: 'HIGH', label: 'High' },
      { value: 'MEDIUM', label: 'Medium' },
      { value: 'LOW', label: 'Low' }
    ]
    let content = [
      {name: 'Name'},
      {name: 'Description'},
      {type: 'select', name: 'Severity', options: options}
    ]
    return (
      <SimpleModalContainer
        header={header}
        content={content}
        doAction={this.onClickSave.bind(this)}
        onClose={this.onClickClose.bind(this)}
        validate={validate}
        buttonText="Save"
      />
    )
  }
}
