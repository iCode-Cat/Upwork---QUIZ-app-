module.exports.singleFlow = {
  numberOfSteps: 1,
  singleFLow: true,
  nextButton: 'Next Step',
  ctaButton: 'Calculate',
  heroBackground: '',
  partnerId: '936af988-2d21-4f79-8598-b0dbdd469bfe',
  campaignId: '936af988-2d21-4f79-8598-b0dbdd469bfe',
  sendTo: 'shelley@cognni.ai',
  heroVersion: 1,
  hero: {
    title: 'Single Flow',
    sub_title:
      'See how much you can save with autonomous mapping and information intelligence',
    button_text: 'Get Started',
    logo: '/security.svg',
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
      "I agree to receive marketing communications and have read and agree to Cognni's Privacy Policy and Terms of Service.",
    privacyPolicyUrl: 'https://cognni.ai/privacy-policy/',
    termsOfServiceUrl: 'https://cognni.ai/terms-of-use/',
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
          stateName: 'workEmail',
          text: 'Enter your corporate email to get started',
          placeholder: 'Corporate email',
          questionType: 'text',
          validation: 'email',
        },
        {
          name: 'Relevant Threats',
          stateName: 'relevantThreats',
          text: 'Which of the following information risks are you worried about?',
          questionType: 'booleanMulti',
          questionId: 1,
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
          questionType: 'boolean',
          questionId: 2,
          callQuestion: true,
          options: [
            {
              text: 'Cloud migration',
              icon: false,
              callQuestion: 3,
            },
            {
              text: 'Deploy MIP',
              icon: false,
              callQuestion: 4,
            },
            {
              text: 'Data Classification',
              icon: false,
              callQuestion: 5,
            },
            {
              text: 'Investigate Risks',
              icon: false,
              callQuestion: 6,
            },
          ],
        },
        {
          name: 'text',
          stateName: 'workEmail2',
          text: 'Enter your test answer',
          placeholder: 'test',
          questionType: 'text',
          validation: 'text',
        },
      ],
      relatedQuestions: [
        {
          name: 'Relevant Use Cases',
          stateName: 'useCases3',
          text: 'Which of the following are you already doing to minimize the risk? - Test',
          questionType: 'boolean',
          questionId: 3,
          callQuestion: true,
          relatedQuestion: true,
          options: [
            {
              text: 'Cloud migration',
              icon: false,
              callQuestion: 5,
            },
            {
              text: 'Deploy MIP',
              icon: false,
              callQuestion: 4,
            },
            {
              text: 'Data Classification',
              icon: false,
              callQuestion: 5,
            },
            {
              text: 'Investigate Risks',
              icon: false,
              callQuestion: 6,
            },
          ],
        },
        {
          name: 'test',
          stateName: 'test2',
          text: 'Question according to your answer Deploy MIP',
          placeholder: 'Question according to your answer',
          questionType: 'text',
          validation: 'text',
          questionId: 4,
          relatedQuestion: true,
        },
        {
          name: 'test',
          stateName: 'test3',
          text: 'Question according to your answer Data Classification',
          placeholder: 'Question according to your answer',
          questionType: 'text',
          validation: 'text',
          questionId: 5,
          relatedQuestion: true,
        },
        {
          name: 'test',
          stateName: 'test4',
          text: 'Question according to your answer Investigate Risks',
          placeholder: 'Question according to your answer',
          questionType: 'text',
          validation: 'text',
          questionId: 6,
          relatedQuestion: true,
        },
      ],
      button: 'Next Step',
    },
  ],
  stats: {
    tabMenuMod: 1,
    currency: '$',
    disclaimer: false,
    sectionGrade: true,
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
  recommendation: {
    showButton: 'See Recommendation',
    active: false,
    tabs: [
      {
        tabname: 'Minimize Impact',
        active: false,
        cards: [
          {
            readTime: '60 minutes',
            frequency: 'once a year',
            icon: '/icon1.svg',
            iconBgColor: '#F8E7E7',
            title: 'Review you critical information behavior ',
            href: '/',
            hrefTitle: 'Read more',
            readmore: true,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
          {
            readTime: '60 minutes',
            frequency: 'once a year',
            icon: '/icon2.svg',
            iconBgColor: '#E4F6FC',
            title: 'Review you critical information behavior ',
            href: '/',
            hrefTitle: 'Read more',
            readmore: true,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
          {
            readTime: '60 minutes',
            frequency: 'once a year',
            icon: '/icon3.svg',
            iconBgColor: '#FFF3CC',
            title: 'Review you critical information behavior ',
            href: '/',
            hrefTitle: 'Read more',
            readmore: true,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
          {
            readTime: '60 minutes',
            frequency: 'once a year',
            icon: '/icon4.svg',
            iconBgColor: '#D4ECD5',
            title: 'Review you critical information behavior ',
            href: '/',
            hrefTitle: 'Read more',
            readmore: true,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
        ],
      },
      {
        tabname: 'Minimize Likelihood',
        active: true,
        cards: [
          {
            readTime: '60 minutes',
            frequency: 'once a year',
            icon: '',
            iconBgColor: '#F8E7E7',
            title: 'Review you critical information behavior ',
            href: '/',
            hrefTitle: 'Read more',
            readmore: true,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
          {
            readTime: '60 minutes',
            frequency: 'once a year',
            icon: '',
            iconBgColor: '#F8E7E7',
            title: 'Review you critical information behavior ',
            href: '/',
            hrefTitle: 'Read more',
            readmore: true,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
          {
            readTime: '60 minutes',
            frequency: 'once a year',
            icon: '',
            iconBgColor: '#F8E7E7',
            title: 'Review you critical information behavior ',
            href: '/',
            hrefTitle: 'Read more',
            readmore: true,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
          {
            readTime: '60 minutes',
            frequency: 'once a year',
            icon: '',
            iconBgColor: '#F8E7E7',
            title: 'Review you critical information behavior ',
            href: '/',
            hrefTitle: 'Read more',
            readmore: true,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          },
        ],
      },
    ],
  },
  informationPractices: {
    title: 'Information Security Best Practices',
    active: true,
    section1: {
      sectionGrade: true,
      active: true,
      title: 'What you should be worried about?',
      image: '/securityImage1.svg',
      list: [
        {
          title: '#1 Rank is Data Breaches',
          content:
            'Montes, vel neque tristique vitae fermentum libero pellentesque ullamcorper ut.',
        },
        {
          title: '#2 Rank is Insider Threat',
          content:
            'Montes, vel neque tristique vitae fermentum libero pellentesque ullamcorper ut.',
        },
        {
          title: '#3 Rank is Ransomware',
          content:
            'Montes, vel neque tristique vitae fermentum libero pellentesque ullamcorper ut.',
        },
      ],
    },
    section2: {
      sectionGrade: true,
      active: true,
      title: 'What should you do about it?',
      image: '/securityImage2.svg',
      list: [
        {
          title: 'You need to do...',
          content:
            'Montes, vel neque tristique vitae fermentum libero pellentesque ullamcorper ut.',
        },
        {
          title: 'You need to do...',
          content:
            'Montes, vel neque tristique vitae fermentum libero pellentesque ullamcorper ut.',
        },
      ],
    },
  },
  lastSection: {
    buttonText: 'Connect Cognni',
    href: 'https://onboard.cognni.ai/consent',
  },
};
