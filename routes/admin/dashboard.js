import moment from 'moment';

export default (req, res) => {
  res.render('dashboard', {
    user: req.session.user.name,
    lastLoggedIn: moment(req.session.user.lastLoggedIn).format('MMMM, Do YYYY, h:mm:ss a'),
    posts: [
      {
        id: 1,
        author: 'Akash',
        title: 'Suntel',
        content: 'Suntel Global Data Processing Pvt Ltd is an India based company managed by highly experienced information technology professionals and offers consulting services in the areas of Software Development, IT Infrastructure Management, Security Quality Assurance and implementation of various needs of the customers based on the requirements across the board for every industry in the ITES sector. Suntel Global Data Processing Pvt Ltd has considerable experience delivering solutions in single and multioperating system environments and all the sectors across the board.',
      }
    ],
    role: req.session.user.role,
  });
};
