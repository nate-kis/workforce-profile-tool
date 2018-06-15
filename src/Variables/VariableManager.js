class Variable {
  constructor (key, selectable, shortDisplay, display) {
    this._key = key
    this._selectable = selectable
    this._shortDisplay = shortDisplay || display
    this._display = display
  }

  get key () { return this._key }
  get selectable () { return this._selectable }
  get shortDisplay () { return this._shortDisplay }
  get display () { return this._display }
  get active () { return this._active }

  set active (active) { this._active = active }
}

class VariableGroup {
  constructor (key, exclusive, display, variables) {
    this._key = key
    this._exclusive = exclusive
    this._display = display
    this._variables = variables
    this._selectableVariables = variables.filter(v => v.selectable)
    this._buildVariableMap()
  }

  get key () { return this._key }
  get exclusive () { return this._exclusive }
  get display () { return this._display }
  get variables () { return this._variables }
  get selectableVariables () { return this._selectableVariables }
  get variableMap () { return this._variableMap }

  _buildVariableMap () {
    this._variableMap = {}
    this._variables.forEach(v => { this._variableMap[v.key] = v })
  }
}

class VariableManager {
  constructor (variableGroups) {
    this._variableGroups = variableGroups
    this._variableGroupMap = {}
    variableGroups.forEach(group => { this._variableGroupMap[group.key] = group })
  }

  get variableGroupMap () {
    return this._variableGroupMap
  }

  get variableGroups () {
    return this._variableGroups
  }

  variableGroupByKey (variableGroupKey) {
    return this._variableGroupMap[variableGroupKey]
  }

  variableByKey (variableGroupKey, variableKey) {
    try {
      return this._variableGroupMap[variableGroupKey].variableMap[variableKey]
    } catch (e) {
      console.error(`variableByKey: no variableGroupKey '${variableGroupKey}' and variableKey '${variableKey}' match found`)
    }
  }

  displayNameByKey (variableGroupKey, variableKey) {
    return this.variableByKey(variableGroupKey, variableKey).display
  }

  shortDisplayNameByKey (variableGroupKey, variableKey) {
    return this.variableByKey(variableGroupKey, variableKey).shortDisplay
  }
}

export const VARIABLE_MANAGER = new VariableManager([
  new VariableGroup(
    'Employee_Type', true, 'Employee Type',
    [
      new Variable('Employees_All', true, null, 'All'),
      new Variable('Employees_Reg', true, null, 'Regular'),
      new Variable('Employees_Aux', true, null, 'Auxiliary')
    ]
  ),
  new VariableGroup(
    'Des_Grp', false, 'Designated Group',
    [
      new Variable('IND', true, 'Indigenous', 'Indigenous Peoples'),
      new Variable('DIS', true, 'Disabled', 'People with Disabilities'),
      new Variable('VM', true, 'Vis. Min.', 'Visible Minorities'),
      new Variable('WOM', true, 'Women', 'Women'),
      new Variable('WOM_SM', false, null, 'Women in Senior Mgmt'),
      new Variable('AS_TOTAL', false, null, 'Total')
    ]
  )
])