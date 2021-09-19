module.exports.defaultJson = {
  numberOfSteps: 2,
  nextButton: 'Next Step',
  ctaButton: 'Calculate',
  heroBackground: '',
  parterId: null,
  campaignId: null,
  heroVersion: 1,
  hero: {
    title: 'Information Risk Assessment',
    sub_title: 'See how much information risks are costing you',
    button_text: 'Calculate your risk',
    logo: '/CompanyLogo.svg',
  },
  heroTabMenu: {
    active: false,
    brandLogo: 'String',
    mainColor: '#F8F8F8',
    tabs: [
      {
        name: '',
        href: '',
      },
      {
        name: '',
        href: '',
      },
      {
        name: '',
        href: '',
      },
    ],
  },
  terms: {
    content:
      'I agree to receive my quiz results and a series of emails that will teach me how to get potential financial impact. I also have read and agree to the Privacy Policy and Terms of Service.',
    privacyPolicyUrl: '/',
    termsOfServiceUrl: '/',
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
          stateName: 'Work email',
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
          name: 'Relevant Threats',
          stateName: 'relevantThreats',
          text: 'Which of the following information risks are you worried about?',
          questionType: 'booleanMulti',
          options: [
            {
              text: 'Data breaches',
              icon: false,
            },
            {
              text: 'Insider threats',
              icon: false,
            },
            {
              text: 'Ransomware attacks',
              icon: false,
            },
            {
              text: 'Regulations',
              icon: false,
            },
          ],
        },
        {
          name: 'Relevant Use Cases',
          stateName: 'useCases',
          text: 'Which of the following are you already doing to minimize the risk?',
          questionType: 'booleanMulti',
          options: [
            {
              text: 'Cloud migration',
              icon: false,
            },
            {
              text: 'Deploying Information Protection',
              icon: false,
            },
            {
              text: 'Investigating information risks',
              icon: false,
            },
            {
              text: 'Data Classification',
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
          name: 'Not used 1',
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
          name: 'Not used 2',
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
    tabMenuMod: 0,
    currency: '$',
    disclaimer: false,
    tabMenus: [
      {
        key: 0,
        subTitle: 'Potential Impact',
        name: 'Potential Impact',
        mainTitle: 'Your potential impact cost',
        mainTitle2: 'Minimize your potential impact cost',
        tooltip: true,
        costs: [
          {
            yourCost: {
              title: 'The total potential impact cost',
              formulaVariable: 3474,
            },
            cognniCost: {
              title: 'You can save with Cognni',
              formulaVariable: 2268,
            },
          },
        ],
        labels: [
          {
            color: '#2196F3',
            name: 'Insider threats',
            formulaVariable: 1110,
            tooltipText: {
              title: 'Insider threats',
              content:
                'Insider threats potential impact is a direct result of exposure of the critical information in the organization, the potential impact assume average exposure of critical information in your organization.',
            },
          },
          {
            color: '#FFC300',
            name: 'Ransomware Threats',
            formulaVariable: 868,
            tooltipText: {
              title: 'Ransomware Threats',
              content:
                'Ransomware potential impact is a direct result of exposure of the critical information in the organization, the potential impact assume average exposure of critical information in your organization.',
            },
          },
          {
            color: '#565656',
            name: 'Data Breaches',
            formulaVariable: 1496,
            tooltipText: {
              title: 'Data Breaches',
              content:
                'Data breach potential impact is a direct result of exposure of the critical information in the organization, the potential impact assume average exposure of critical information in your organization.',
            },
          },
        ],
      },
      {
        key: 1,
        name: 'Cost of Exposure',
        subTitle: 'Cost',
        mainTitle: 'Potential financial impact',
        mainTitle2: 'Minimize your potential impact cost',
        compareTitle: "Here's how much money you can <br /> save every year",
        tooltip: true,
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
            name: 'Insider Risk',
            formulaVariable: 130,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
          {
            color: '#00B746',
            name: 'Data Breach',
            formulaVariable: 130,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
          {
            color: '#565656',
            name: 'Ransomware',
            formulaVariable: 130,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
        ],
      },
    ],
  },
  lastSection: {
    buttonText: 'Connect Cognni',
    href: '/',
  },
};
