import angular from 'assets/angular.png';
import react from 'assets/react.png';
import apple from 'assets/apple.png';
import android from 'assets/android.png';
import windows from 'assets/windows.png';
import node from 'assets/node.png';

export const services = [{
  name: 'automation',
  line1: 'We offer automation services.',
  line2: `Our team of expert software developers have extensive experience
    developing and deploying complex functioning applications.`,
  line3: `Take advantage of our vast experience with Web Development,
    Mobile App Development, Desktop App Development and Embedded Software Development.`,
  line4: 'We develop low-scale projects in one month.',
}];

export const servicesImgs: { [key: string]: any } = {
  automation: [react, angular, node, apple, android, windows],
};
