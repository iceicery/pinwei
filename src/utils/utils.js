import project1 from '../images/LearningHowToLearn.JPG';
import project2 from '../images/FromPortlandToPortland.JPG';
import project3 from '../images/AroundUs.JPG';
import project4 from '../images/baseCalculator.JPG';
import newsProject from '../images/newsExplorer.JPG';
import personalWP from '../images/PersonalWebSite.JPG';
import interative from '../images/interative.PNG';
import pwp from '../images/pwp.jpg';
import ctj from '../images/ctj.JPG';
import azure from '../images/Virtual-Machine.svg';
import mongooseDB from '../images/mongoose.png';
import storybook from '../images/storybook.svg';

export const Link = {
  news: {
    demo:
      'https://drive.google.com/file/d/168o22ITmdio860VVYuhER-UZ5pJPMvws/preview',
    website: 'https://newsfinder.students.nomoreparties.site',
    code: {
      font: 'https://github.com/iceicery/news-explorer-frontend',
      end: 'https://github.com/iceicery/news-explorer-api',
    },
  },
  around: {
    demo:
      'https://drive.google.com/file/d/1bwVGKJnFjQ2JElj43haUC9PUPOecJN6O/preview',
    website: 'https://iceicery.github.io/web_project_4/dist/index.html',
    code: {
      font: 'https://github.com/iceicery/react-around-auth',
      end: 'https://github.com/iceicery/react-around-api-full',
    },
  },
  learning: {
    demo:
      'https://drive.google.com/file/d/1T0iLeJ245rwH9roclAuk-Umafbd56QN5/preview',
    website: 'https://iceicery.github.io/web_project_1/',
    code: 'https://github.com/iceicery/web_project_1',
  },
  bicycle: {
    demo:
      'https://drive.google.com/file/d/1xF0GQ3JlLJUvGkUST3cXwYREpgC6vfxC/preview',
    website: 'https://iceicery.github.io/web_project_3/',
    code: 'https://github.com/iceicery/web_project_3',
  },
  calculators: {
    demo:
      'https://drive.google.com/file/d/11Ow-l9vhBtsTYinuDeHSndjqXbyj_u8G/preview',
    website: 'https://iceicery.github.io/BaseCaculator/',
    code: 'https://github.com/iceicery/BaseCaculator',
  },
  personal: {
    website: 'https://iceicery.github.io/pesonal-website-react',
    code: 'https://github.com/iceicery/pesonal-website-react',
  },
  personal_2: {
    website: 'https://iceicery.github.io/pinwei',
    code: 'https://github.com/iceicery/pinwei',
  },
  ctj: {
    website: 'https://ctjchen.github.io/',
    code: 'https://github.com/iceicery/ct-j-chen',
  },
};

export const projects = [
  {
    image: interative,
    text:
      'Iterative.ai landing website. In this project, I worked in a team of three. We created 34 reusable components with storybook documented, 150 commits and more than 50 pull requests. We finished the project in 3 weeks and presented it on Feb/2020.',
    tech: ['react', 'css3', 'js', 'node'],
    techIcons: [{ techName: 'storybook', techIcon: storybook }],
    demo:
      'https://drive.google.com/file/d/15rqg2bT5pQ_b3RITCBbLnYx0MXfbm6HA/preview',
    codes: [],
  },

  {
    image: newsProject,
    text:
      'News Explorer is a website users could search news by keyword and save them while signing in.',
    tech: ['react', 'css3', 'js', 'node'],
    techIcons: [
      { techName: 'azure', techIcon: azure },
      { techName: 'mongooseDB', techIcon: mongooseDB },
    ],
    website: Link.news.website,
    demo: Link.news.demo,
    codes: [
      {
        button: 'Font-end Code',
        link: Link.news.code.font,
      },
      {
        button: 'Back-end Code',
        link: Link.news.code.end,
      },
    ],
  },
  {
    image: project3,
    text:
      "Around the US is a website users could log in, costumize their profiles, share their photos and like others'.",
    tech: ['react', 'css3', 'js', 'node'],
    techIcons: [
      { techName: 'azure', techIcon: azure },
      { techName: 'mongooseDB', techIcon: mongooseDB },
    ],
    website: Link.around.website,
    demo: Link.around.demo,
    codes: [
      {
        button: 'Font-end Code',
        link: Link.around.code.font,
      },
      {
        button: 'Back-end Code',
        link: Link.around.code.end,
      },
    ],
  },
  {
    image: pwp,
    text:
      'This is my personal website with the info of my web project profolios, work experiences, and learning tracks.',
    tech: ['react', 'css3', 'js', 'node'],
    website: Link.personal_2.website,
    codes: [
      {
        button: 'Code',
        link: Link.personal_2.code,
      },
    ],
  },
  {
    image: personalWP,
    text:
      'This is another version of my personal website with the info of my web project profolios, work experiences, and learning tracks.',
    tech: ['react', 'css3', 'js'],
    website: Link.personal.website,
    codes: [
      {
        button: 'Code',
        link: Link.personal.code,
      },
    ],
  },
  {
    image: ctj,
    text: 'A personal website for a research scientist.',
    tech: ['react', 'css3', 'js'],
    website: Link.ctj.website,
    codes: [
      {
        button: 'Code',
        link: Link.ctj.code,
      },
    ],
  },
  {
    image: project1,
    text:
      'A website with info of learning how to learn. This is my very first independent web project from Praticum.',
    tech: ['html5', 'css3', 'js'],
    website: Link.learning.website,
    demo: Link.learning.demo,
    codes: [
      {
        button: 'Code',
        link: Link.learning.code,
      },
    ],
  },
  {
    image: project2,
    text:
      'A website with information of a bicycle journey across the USA. This is my second independent project from Practicum.',
    tech: ['html5', 'css3', 'js'],
    website: Link.bicycle.website,
    demo: Link.bicycle.demo,
    codes: [
      {
        button: 'Code',
        link: Link.bicycle.code,
      },
    ],
  },
  {
    image: project4,
    text:
      'A website with different bases calculators including binary, octal and more.',
    tech: ['html5', 'css3', 'js'],
    website: Link.calculators.website,
    demo: Link.calculators.demo,
    codes: [
      {
        button: 'Code',
        link: Link.calculators.code,
      },
    ],
  },
];
