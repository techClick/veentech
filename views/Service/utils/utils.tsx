/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import angular from 'assets/angular.png';
import react from 'assets/react.png';
import apple from 'assets/apple.png';
import android from 'assets/android.png';
import windows from 'assets/windows.png';
import node from 'assets/node.png';
import php from 'assets/php.png';
import sql from 'assets/sql.png';
import js from 'assets/js.jpg';
import mariaDB from 'assets/mariadb.png';
import mysql from 'assets/mysql.png';
import postgres from 'assets/postgres.png';
import excel from 'assets/excel.png';
import powerBI from 'assets/powerbi.png';
import python from 'assets/python.png';
import pandas from 'assets/pandas.png';
import pdf from 'assets/pdf.png';
import word from 'assets/word.png';
import adwords from 'assets/adwords.png';
import google from 'assets/google.png';
import youtube from 'assets/youtube.png';
import fb from 'assets/fb.png';
import twitter from 'assets/twitter.png';
import instagram from 'assets/insta.svg';
// import ppro from 'assets/ppro.png';
// import pelements from 'assets/pelements.png';
// import fcutpro from 'assets/fcutpro.png';
// import imov from 'assets/imov.png';
import gmail from 'assets/gmail.png';
import outlook from 'assets/outlook.png';
import hostinger from 'assets/hostinger.svg';
import yandex from 'assets/yandex.png';
import zoho from 'assets/zoho.png';
import fastmail from 'assets/fastmail.png';
import { faEnvelope, faEye, faGlobe, faMobileScreen, faRobot, faServer } from '@fortawesome/free-solid-svg-icons';
import Contacts from '../Contacts/Contacts';
import * as S from './utils.styled';

export const services = [{
  name: 'Automation',
  contact: <Contacts msg={`If you would like more information about our automation skills, you can message us
    or call us.`}
  />,
  description: `Acquire hardware or software that is tailored to your business needs.
    Simplify business processes with custom devices or software.`,
  icon: faRobot,
  path: '/services/automation',
  line1: 'Simplify your business processes with our automation service.',
  line2: `Our team of agile software developers can develop
    and deploy complex functioning applications easily.`,
  line3: `Take advantage of our extensive experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
  images: [react, angular, node, apple, android, windows],
  constDesc: 'automation',
  price: {
    setup: {
      Nigeria: <><S.Big>₦3.5m</S.Big><S.Small>/mo</S.Small></>,
      Africa: <><S.Big>$5,500</S.Big><S.Small>/mo</S.Small></>,
      World1: <><S.Big>$20,000</S.Big><S.Small>/mo</S.Small></>,
      World2: <><S.Big>$10,000</S.Big><S.Small>/mo</S.Small></>,
    },
    fee: {
      Nigeria: <><S.Big>₦20,000</S.Big><S.Small>/mo</S.Small></>,
      Africa: <><S.Big>$650</S.Big><S.Small>/yr</S.Small></>,
      World1: <><S.Big>$200</S.Big><S.Small>/mo</S.Small></>,
      World2: <><S.Big>$100</S.Big><S.Small>/mo</S.Small></>,
    },
  },
}, {
  name: 'Business Website',
  contact: <Contacts msg={`If you would like more information about our Web Development skills, you can message us
    or call us.`}
  />,
  description: `Acquire an online application that showcases your business,
    builds consumer base and gathers feedback.`,
  icon: faGlobe,
  path: '/services/website',
  line1: 'Showcase your business with our Business Website service.',
  line2: `Our team of agile software developers can develop
    and deploy simple to complex websites easily.`,
  line3: `Build strong relationships with consumers, increase business efficiency,
    boost your reputation, promote your business and create a tool for sales generation
    with a business website.`,
  line4: 'We develop low-scale websites in one month.',
  images: [react, angular, node, php, sql, js],
  constDesc: 'a business website',
  price: {
    setup: {
      Nigeria: 'N/A',
      Africa: 'N/A',
      World1: 'N/A',
      World2: 'N/A',
    },
    fee: {
      Nigeria: <><S.Big>₦75,000</S.Big><S.Small>/yr</S.Small></>,
      Africa: <><S.Big>$125</S.Big><S.Small>/yr</S.Small></>,
      World1: <><S.Big>$100</S.Big><S.Small>/mo</S.Small></>,
      World2: <><S.Big>$50</S.Big><S.Small>/mo</S.Small></>,
    },
  },
}, {
  name: 'Custom Mobile App',
  contact: <Contacts msg={`If you would like more information about our Mobile App Development skills, you can message us
    or call us.`}
  />,
  description: `Acquire a mobile application that is tailored to your business processes.
    Be ever close to your consumers and effiecient in your operations.`,
  icon: faMobileScreen,
  path: '/services/mobileapp',
  line1: 'Aquire a mobile application that simplifies your business processes and engages consumers.',
  line2: `Our team of agile software developers can develop
    and deploy simple to complex mobile applications easily.`,
  line3: `Mobile phones are the most frequently used devices by consumers.
    Take advantage of our extensive experience with iOS and Android Development and
    increase your business proficiency with a mobile app.`,
  line4: 'We develop low-scale mobile apps in one month.',
  images: [apple, android, react, angular, node, php],
  constDesc: 'a custom mobile app',
  price: {
    setup: {
      Nigeria: 'N/A',
      Africa: 'N/A',
      World1: 'N/A',
      World2: 'N/A',
    },
    fee: {
      Nigeria: <><S.Big>₦75,000</S.Big><S.Small>/yr</S.Small></>,
      Africa: <><S.Big>$125</S.Big><S.Small>/yr</S.Small></>,
      World1: <><S.Big>$100</S.Big><S.Small>/mo</S.Small></>,
      World2: <><S.Big>$50</S.Big><S.Small>/mo</S.Small></>,
    },
  },
}, {
  name: 'Database Management',
  contact: <Contacts msg={`If you would like more information about our Database Management and
    Administration skills, you can message us or call us.`}
  />,
  description: `Acquire a repository for your data and information. Access to this database
    can be granted to your clients or employees.`,
  icon: faServer,
  path: '/services/dba',
  line1: 'Aquire a database manager for your business data and information.',
  line2: `A database is the best way to store, maintain and retrieve information.
    We have expert Database Administrators ready to handle your database needs.`,
  line3: `Take advantage of our extensive experience in Database Optimization and writing SQL queries
    on platforms such as MySQL, MSSQL, PostgreSQL, NoSQL, Maria DB and more.`,
  line4: 'We deploy databases in under 24 hours,',
  images: [sql, postgres, mariaDB, mysql, node, php],
  constDesc: 'our database management service',
  price: {
    setup: {
      Nigeria: 'N/A',
      Africa: 'N/A',
      World1: 'N/A',
      World2: 'N/A',
    },
    fee: {
      Nigeria: <><S.Big>₦30,000</S.Big><S.Small>/mo</S.Small></>,
      Africa: <><S.Big>$50</S.Big><S.Small>/mo</S.Small></>,
      World1: <><S.Big>$500</S.Big><S.Small>/mo</S.Small></>,
      World2: <><S.Big>$250</S.Big><S.Small>/mo</S.Small></>,
    },
  },
}, {
  name: 'Data Analysis',
  contact: <Contacts msg={`If you would like more information about our Data Analysis skills, you can message us
    or call us.`}
  />,
  description: `Utlizie software tools like Python, Excel and Power BI to
    visualize data and analyze your business.`,
  icon: faEnvelope,
  path: '/services/dataanalysis',
  line1: 'Vizualize and analyze your data with our Data Analytics team.',
  line2: `We have accredited professionals in our data analytics team that can help
    you make critical decisions by creating interactive charts and graphs of your
    business dealings.`,
  line3: `We support our data analysis with interactive reporting using Microsoft Power BI, PDF's and 
    documents that contain findings and suggestions by our expert data analysts.`,
  line4: (
    <>
      To view a sample of our report click
      {' '}
      <S.WhitePart>here</S.WhitePart>
      .
    </>
  ),
  images: [excel, powerBI, python, pandas, pdf, word],
  constDesc: 'our data analytics',
  price: {
    setup: {
      Nigeria: 'N/A',
      Africa: 'N/A',
      World1: 'N/A',
      World2: 'N/A',
    },
    fee: {
      Nigeria: <><S.Big>₦10,000</S.Big><S.Small>/mo</S.Small></>,
      Africa: <><S.Big>$330</S.Big><S.Small>/yr</S.Small></>,
      World1: <><S.Big>$200</S.Big><S.Small>/mo</S.Small></>,
      World2: <><S.Big>$100</S.Big><S.Small>/mo</S.Small></>,
    },
  },
}, {
  name: 'Digital Marketing',
  contact: <Contacts msg={`If you would like more information about our Digital Marketing service, you can message us
    or call us.`}
  />,
  description: `Take advantage of tools like Google Adwords, Facebook and YouTube Display Ads
    and grow your consumer base.`,
  icon: faEye,
  path: '/services/marketing',
  line1: 'Grow your consumer base with our Digital Marketing service.',
  line2: `We have 10+ years experience creating Display Ads on Social and Media platforms as well
    as Search Engine Marketing and Google SEO.`,
  line3: `Drive sales in your business by directing people to your store,
    displaying your products in their browsers as ads and showing up in their searches.
    Digital Marketing is what you need to acheive success in your business.`,
  line4: 'We deploy search and display ads in under 24 hours.',
  images: [adwords, google, youtube, fb, twitter, instagram],
  constDesc: 'our digital marketing service',
  price: {
    setup: {
      Nigeria: 'N/A',
      Africa: 'N/A',
      World1: 'N/A',
      World2: 'N/A',
    },
    fee: {
      Nigeria: <><S.Big>₦30,000</S.Big><S.Small>/mo</S.Small></>,
      Africa: <><S.Big>$50</S.Big><S.Small>/mo</S.Small></>,
      World1: <><S.Big>$500</S.Big><S.Small>/mo</S.Small></>,
      World2: <><S.Big>$250</S.Big><S.Small>/mo</S.Small></>,
    },
  },
},
//  {
//   name: 'Video Advertising',
//   contact: <Contacts msg={`If you would like more information about our
//     Video Advertising skills, you can message us or call us.`}
//   />,
//   description: `Take advantage of tools like iMovie and Final Cut Pro.
//     Create attractive and informative videos that grow your consumer base via YouTube.`,
//   icon: faEnvelope,
//   path: '/services/videoads',
//   line1: 'Grow your consumer base with our YouTube Video Advertising service.',
//   line2: `We have years of experience developing curative videos that direct consumers to
//     your business.`,
//   line3: `Out Video Advertising team are experts with tools such as Premier Pro,
//     Premier elements, Final Cut Pro, iMovie and more.
//     Utilize the power of Video Advertising and drive success in your business`,
//   line4: 'We create 30 second videos in under two weeks.',
//   images: [adwords, youtube, ppro, pelements, fcutpro, imov],
//   constDesc: 'our video advertising',
// price: {
//   setup: {
//     Nigeria: '₦3m/mo',
//     Africa: '$5k/mo',
//     World1: '$20k/mo',
//     World2: '$10k/mo',
//   },
//   fee: {
//     Nigeria: '₦200k/yr',
//     Africa: '$330/yr',
//     World1: '$200/mo',
//     World2: '$100/mo',
//   },
// },
// },
{
  name: 'Business Email',
  contact: <Contacts msg={`If you would like more information about setting up a Business Email, you can message us
    or call us.`}
  />,
  description: `Standout and have a private and personalized company email address,
    which will be used by you and your employees.`,
  icon: faEnvelope,
  path: '/services/email',
  line1: 'We offer business email management services.',
  line2: `Our team of computer engineers can host a domain
    and business email address for you easily.`,
  line3: `E-mail is the main operator of business and e-commerce services, grow your repuation,
    attract clients, send private messages and communicate better using our business email service.`,
  line4: 'We deploy a maximum 100 email reciepients in 24 hours.',
  images: [gmail, outlook, hostinger, yandex, zoho, fastmail],
  constDesc: 'a business email',
  price: {
    setup: {
      Nigeria: 'N/A',
      Africa: 'N/A',
      World1: 'N/A',
      World2: 'N/A',
    },
    fee: {
      Nigeria: <><S.Big>₦30,000</S.Big><S.Small>/yr</S.Small></>,
      Africa: <><S.Big>$50</S.Big><S.Small>/yr</S.Small></>,
      World1: <><S.Big>$500</S.Big><S.Small>/yr</S.Small></>,
      World2: <><S.Big>$250</S.Big><S.Small>/yr</S.Small></>,
    },
  },
}];
