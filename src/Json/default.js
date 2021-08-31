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
        name: 'Cost of Information Protection',
        mainTitle: 'Potential financial impact',
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
        labels: [
          {
            color: '#2196F3',
            name: 'Classiying your critical data',
            formulaVariable: 130,
          },
          {
            color: '#00B746',
            name: 'Managing information behavior',
            formulaVariable: 130,
          },
          {
            color: '#565656',
            name: 'Detecting information risks',
            formulaVariable: 130,
          },
          {
            color: '#FFC300',
            name: 'Investigating risks',
            formulaVariable: 130,
          },
        ],
      },
      {
        key: 1,
        currency: '$',
        name: 'Cost of Exposure',
        subTitle: 'Savings',
        mainTitle: 'Potential financial impact',
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
        labels: [
          {
            color: '#2196F3',
            name: 'Classiying your critical data',
            formulaVariable: 130,
          },
          {
            color: '#00B746',
            name: 'Managing information behavior',
            formulaVariable: 130,
          },
          {
            color: '#565656',
            name: 'Detecting information risks',
            formulaVariable: 130,
          },
          // {
          //   color: '#FFC300',
          //   name: 'Investigating risks',
          //   formulaVariable: 130,
          // },
        ],
      },
    ],
  },
};
