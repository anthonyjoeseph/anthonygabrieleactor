import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/anthonyjoeseph/anthonygabrieleactor.git', // Update to point to your repository
    user: {
      name: 'Stuart Leach', // update to use your name
      email: 'jstuartleach@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);