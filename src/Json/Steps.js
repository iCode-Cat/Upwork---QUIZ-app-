module.exports.steps = {
  stepOneValue: {
    index: 1,
    fields: [
      {
        name: 'email',
        type: 'email',
        stateName: 'email',
        text: 'Enter your corporate email to get started',
        placeholder: 'Corporate email',
        questionType: 'input',
      },
      {
        name: 'company',
        type: 'text',
        stateName: 'companyName',
        text: 'Your company name',
        placeholder: 'Company name',
        questionType: 'input',
      },
    ],
    button: 'Next Step',
  },
};
