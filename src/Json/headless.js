module.exports.steps = {
  stepOneValue: {
    index: 1,
    fields: [
      {
        name: 'email',
        stateName: 'email',
        text: 'Enter your corporate email to get started',
        placeholder: 'Corporate email',
        questionType: 'text',
        validation: 'email',
      },
      {
        name: 'company name',
        stateName: 'companyName',
        text: 'Your company name',
        placeholder: 'Company name',
        questionType: 'text',
        validation: 'text',
      },
    ],
    button: 'Next Step',
  },
  stepTwoValue: {
    index: 2,
    fields: [
      {
        name: 'Number of employees',
        stateName: 'numberEmployees',
        text: 'Number of employees',
        questionType: 'numeric',
        initialValue: 100,
      },
      {
        name: 'Working with cloud?',
        stateName: 'workingCloud',
        text: 'Are your organization working on the cloud',
        questionType: 'boolean',
        options: [
          {
            text: 'Yes',
            icon: 'fa-check',
          },
          {
            text: 'No',
            icon: 'fa-times',
          },
        ],
      },
      {
        name: 'Working with cloud v2?',
        stateName: 'workingCloudv2',
        text: 'Are your organization working on the cloud',
        questionType: 'boolean',

        options: [
          {
            text: 'Yes',
            icon: 'fa-check',
          },
          {
            text: 'Maybe',
            icon: false,
          },
          {
            text: 'No',
            icon: 'fa-check',
          },
        ],
      },
    ],
    button: 'Next Step',
  },
  stepThreeValue: {
    index: 3,
    fields: [
      {
        name: 'how do you',
        stateName: 'howProtectInfo',
        text: 'How are you protecting your information?',
        placeholder: 'Choose answer',
        questionType: 'dropdown',
        options: [
          {
            text: 'Not yet',
          },
          {
            text: 'Microsoft Information Protection',
          },
          {
            text: 'Forcepoint DLP',
          },
          {
            text: 'Mcafee DLP',
          },
          {
            text: 'Other DLP',
          },
        ],
      },
      {
        name: 'how do you risk',
        stateName: 'howProtectRisk',
        text: 'How are you protecting your information?',
        placeholder: 'Choose answer',
        questionType: 'dropdown',
        options: [
          {
            text: 'Not yet',
          },
          {
            text: 'Microsoft Cloud App Security',
          },
          {
            text: 'Microsoft Sentinel',
          },
          {
            text: 'Other CASB or SIEM',
          },
        ],
      },
    ],
    button: 'Calculate',
  },
};

module.exports.heroJSON = {
  welcomePage: {
    title: 'Cost of Information Risk',
    sub_title:
      'See how much money you can save with autonomous <br/> information intelligence in just 3 easy steps.',
    button_text: 'Start Quiz',
  },
  conclusionPage: {
    title: 'Thanks for participation <br/> in our survey!',
    sub_title: 'We send you our deal on your email.',
  },
};
