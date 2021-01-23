
import React from 'react';

type SelectOptionProps = {
  label?: string
  classes?: string
  changeEvent?: any
  value: string
  isDefault?: boolean
  parentClasses?: string
  message?: string
  options: any
}

const SelectOption = (props: SelectOptionProps) => {
  const {
    label, classes, changeEvent, value, isDefault, parentClasses, message, options
  } = props;

  type optionProps = {
    key: any
    name: string
  }

  const display = options.map((option: optionProps) =>
    <option key={option.name} value={option.name}>
    {option.name}
    </option>
  );


  let groupStyleClass = !isDefault ? 'form-group' : 'd-inline-block';
	let inputStyleClass = 'form-control';
	
	if (parentClasses) {
		groupStyleClass = `${groupStyleClass} ${parentClasses}`;
	}
	if (classes) {
		inputStyleClass = `${!isDefault ? inputStyleClass : ''} ${classes}`;
	}

  return (
    <div className={groupStyleClass}>
      {label && <label className="control-label">{label}</label>}
      <select
        className={inputStyleClass}
        onChange={e => changeEvent(e.target.value, e)}
        value={value}
      >
        <option>Pilih {label}</option>
        {display}
      </select>
			{ (message && message !== '') ? <p className="mb-0" style={{ marginTop: 8, fontSize: 12, color: 'red' }}>{message}</p> : '' }
    </div>
  );
};

export default SelectOption;