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
        placeholder: 'Enter number',
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
        text: 'Which of those information risks are you working to minimize in the next 12 months?',
        questionType: 'booleanMulti',

        options: [
          {
            text: 'Deploy MIP',
            icon: 'fa-check',
          },
          {
            text: 'Data breach',
            icon: false,
          },
          {
            text: 'Compliance & Governance',
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

module.exports.stats = {
  tabMenuMod: 2,
  ctaText: 'Want to Learn More?',
  ctaUrl: '/',
  tabMenus: [
    {
      key: 0,
      currency: '$',
      subTitle: 'Savings',
      name: 'Estimate Cost',
      mainTitle: "Here's how much money </br> you can save EVERY year",
      costs: [
        {
          yourCost: {
            title: 'Your Current Cost',
            amount: '1389600',
          },
          cognniCost: {
            title: 'With Cognni',
            amount: '1036560',
          },
        },
      ],
      breakDown: {
        title: "Here's how the break down in the next 12 months:",
        disclaimer: {
          isActive: true,
          content:
            'The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni\'s experience. <br/><br/> The Cognni Calculator is provided "as is" and Cognni does not warrant nor make any representations regarding the use, validity, or accuracy of the results of this tool.<br/><br/> Cognni undertakes to keep in confidentiality all information provided within the tool.<br/><br/>  Actual savings may vary and a more accurate result, that will also take into account the investment in purchasing the Cognni Security Management Solution, may be obtained by contacting us via the online contact form.',
        },
        labels: [
          {
            color: '#2196F3',
            name: 'Implementing MIP',
            value: '$190,800',
          },
          {
            color: '#00B746',
            name: 'Know Your Data',
            value: '$124,800',
          },
          {
            color: '#565656',
            name: 'Detecting Risks',
            value: '$32,640',
          },
          {
            color: '#FFC300',
            name: 'Investigating Incidents',
            value: '$12,240',
          },
        ],
      },
    },
    {
      key: 1,
      currency: '$',
      name: 'Estimate Rist',
      subTitle: 'Savings',
      mainTitle:
        "Here's how much you can minimize </br> your organization’s Information Risk EVERY year",
      costs: [
        {
          yourCost: {
            title: 'Your Current Cost',
            amount: '1700000',
          },
          cognniCost: {
            title: 'With Cognni',
            amount: '1500000',
          },
        },
      ],
      breakDown: {
        title: 'Cost break down in the next 12 months:',
        disclaimer: {
          isActive: false,
          content:
            'The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni\'s experience. <br/><br/> The Cognni Calculator is provided "as is" and Cognni does not warrant nor make any representations regarding the use, validity, or accuracy of the results of this tool.<br/><br/> Cognni undertakes to keep in confidentiality all information provided within the tool.<br/><br/>  Actual savings may vary and a more accurate result, that will also take into account the investment in purchasing the Cognni Security Management Solution, may be obtained by contacting us via the online contact form.',
        },
        labels: [
          {
            color: '#2196F3',
            name: 'Reduced Insider Potential Impact',
            value: '$190,800',
          },
          {
            color: '#00B746',
            name: 'Reduced Databreach Potential Impact',
            value: '$124,800',
          },
          {
            color: '#565656',
            name: 'Reduced Ransomeware Potential Impact',
            value: '$32,640',
          },
          {
            color: '#FFC300',
            name: 'Reduced Information Likelihood',
            value: '$12,240',
          },
        ],
      },
    },
  ],
};
