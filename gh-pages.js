import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:DenDL/itemBoardSvelte.git', // Update to point to your repository
        user: {
            name: 'Denys Denysenko', // update to use your name
            email: 'ddenisenko1989@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);