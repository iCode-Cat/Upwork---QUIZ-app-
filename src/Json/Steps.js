module.exports.steps = {
  stepOneValue: {
    index: 1,
    fields: [
      {
        name: 'email',
        validation: 'number',
        stateName: 'email',
        text: 'Enter your corporate email to get started',
        placeholder: 'Corporate email',
        questionType: 'increment',
      },
      {
        name: 'company',
        validation: 'text',
        stateName: 'companyName',
        text: 'Your company name',
        placeholder: 'Company name',
        questionType: 'input',
      },
      {
        name: 'company',
        validation: 'text',
        stateName: 'numberEmployees',
        text: 'Your company name',
        placeholder: 'Company name',
        questionType: 'dropdown',
        options: [
          {
            text: 'Zuhal',
          },
          {
            text: 'Ali',
          },
        ],
      },

      // {
      //   name: 'company',
      //   validation: 'text',
      //   stateName: 'CloudName',
      //   text: 'Your company name',
      //   placeholder: 'Company name',
      //   questionType: 'dropdown',
      //   options: [
      //     {
      //       text: 'Microsoft',
      //     },
      //     {
      //       text: 'Apple',
      //     },
      //   ],
      // },
    ],
    button: 'Next Step',
  },
};
