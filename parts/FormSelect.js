import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { errorStyle, underlineFocusStyle, inputStyle,
   selectedItemStyle } from 'style/materialStyles'

const FormSelect = ({input, label, style, meta: { touched, error }, options}) => (
  <SelectField
    hintText={label}
    errorText={touched && error}
    errorStyle={errorStyle}
    underlineStyle={underlineFocusStyle}
    selectedMenuItemStyle={selectedItemStyle}
    menuItemStyle={inputStyle}
    labelStyle={inputStyle}
    style={style}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}>
    {options.map(option => <MenuItem key={option.value} value={option.value} primaryText={option.label}/>)}
  </SelectField>
)

export default FormSelect
