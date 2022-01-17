const default_values = {
  first_name: '',
  last_name: '',
  created_at: null,
  last_modified: null,
  history: [{
    position: '',
    salary: NaN,
    current: true
  }]
}

/**
 * Creates a new employee.
 * 
 * @param {*} personal_data 
 */
function create_employee(personal_data) {
  const employee = Object.assign(
    {},
    default_values,
    {
      created_at: new Date(),
    },
    personal_data,
  );

  if (employee.first_name.length === 0) {
    throw new Error('You must provide first name to create a new employee');
  }

  if (employee.last_name.length === 0) {
    throw new Error('You must provide last name to create a new employee');
  }

  if (employee.history[0].position.length === 0) {
    throw new Error('You must assign position to create a new employee');
  }

  if (isNaN(employee.history[0].salary)) {
    throw new Error('You must assign salary to create a new employee');
  }

  if (employee.history[0].current === undefined) {
    throw new Error('You must assign current position to create a new employee');
  }

  console.log('[INFO] The employee has been created');

  return employee;
}

module.exports = create_employee;
