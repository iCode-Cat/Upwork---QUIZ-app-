module.exports.defaultJson = {
  numberOfSteps: 2,
  nextButton: 'Next Step',
  ctaButton: 'Calculate',
  parterId: null,
  campaignId: null,
  hero: {
    title: 'Calculate Cognni’s ROI',
    sub_title:
      'See how much you can save with autonomous mapping </br> and information intelligence',
    button_text: 'Start Calculation',
    image: '/logo.svg',
  },
  conclusion: {
    title: 'Thanks for participation <br/> in our survey!',
    sub_title: 'We send you our deal on your email.',
  },
  steps: [
    {
      index: 1,
      fields: [
        {
          name: 'Number of employees',
          stateName: 'numberEmployees',
          text: 'Number of employees',
          questionType: 'numeric',
          placeholder: 'Enter number',
        },
        {
          name: 'email',
          stateName: 'email',
          text: 'Enter your corporate email to get started',
          placeholder: 'Corporate email',
          questionType: 'text',
          validation: 'email',
        },
      ],
      button: 'Next Step',
    },
    {
      index: 2,
      fields: [
        {
          name: 'Working with cloud v2?',
          stateName: 'workingCloudv2',
          text: 'Which of those information risks are you working to minimize in the next 12 months?',
          questionType: 'booleanMulti',

          options: [
            {
              text: 'Data breach',
              icon: 'fa-check',
            },
            {
              text: 'Insider Threats',
              icon: 'fa-check',
            },
            {
              text: 'Insider Threats',
              icon: false,
            },
            {
              text: 'Regulation & Compliance',
              icon: false,
            },
            {
              text: 'Ransomware',
              icon: false,
            },
          ],
        },
      ],
      button: 'Next Step',
    },
    {
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
    },
  ],
  stats: {
    tabMenuMod: 2,
    ctaText: 'Want to Learn More?',
    ctaUrl: '/',
    currency: '$',
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
              content: 'hello',
              formulaVariable: 232,
            },
            {
              color: '#00B746',
              name: 'Know Your Data',
              value: '$124,800',
              content: 'hello',
              formulaVariable: 232,
            },
            {
              color: '#565656',
              name: 'Detecting Risks',
              content: 'hello',
              formulaVariable: 232,
            },
            {
              color: '#FFC300',
              name: 'Investigating Incidents',
              content: 'hello',
              formulaVariable: 232,
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
            },
            cognniCost: {
              title: 'With Cognni',
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
              formulaVariable: 130,
            },
            {
              color: '#00B746',
              name: 'Reduced Databreach Potential Impact',
              formulaVariable: 130,
            },
            {
              color: '#565656',
              name: 'Reduced Ransomeware Potential Impact',
              formulaVariable: 130,
            },
            {
              color: '#FFC300',
              name: 'Reduced Information Likelihood',
              formulaVariable: 130,
            },
          ],
        },
      },
    ],
  },
};
