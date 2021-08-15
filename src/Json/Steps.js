module.exports.steps = {
  step1: {
    index: 1,
    fields: [
      {
        name: 'email',
        type: 'input',
        stateName: 'email',
        text: 'Enter your corporate email to get started',
        placeholder: 'Corporate email',
      },
      {
        name: 'company',
        type: 'input',
        stateName: 'company',
        text: 'Your company name',
        placeholder: 'Company name',
      },
    ],
    button: 'Next Step',
  },
};
