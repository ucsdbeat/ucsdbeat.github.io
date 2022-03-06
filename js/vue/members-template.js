const app = new Vue({
  el: '#app',
  data: {


// DO NOT EDIT ABOVE


      members: [
      // MEMBERS GO BELOW HERE

        {
          firstName : 'Anu',
          lastName : 'Sethuraman',
          image: './images/members/anu.jpg',
          partPos: 'Vice President - Alto',
          major: 'Urban Studies and Planning, Environmental Systems',
          year: '3rd',
          link: './members/anu.html',
          socials: [
            {
              class: 'fa fa-facebook',
              link: 'https://www.facebook.com/profile.php?id=100009895364911'
            },
            {
              class: 'fa fa-instagram',
              link: 'https://www.instagram.com/_anuuuuuu__/?hl=en'
            },
            {
              class: 'fa fa-linkedin',
              link: ''
            },
            {
              class: 'fa fa-youtube',
              link: 'https://www.youtube.com/user/theucsdbeat'
            }
          ]
        },

        {
          firstName : 'Andrew',
          lastName : 'Mokhtarzadeh',
          image: './images/members/and.jpg',
          partPos: 'Baritone',
          major: 'Data Science',
          year: '4th',
          link: './members/andrew.html',
          socials: [
            {
              class: 'fa fa-facebook',
              link: 'https://www.facebook.com/andrewmokht'
            },
            {
              class: 'fa fa-instagram',
              link: 'https://www.instagram.com/monkeytarzan/?hl=en'
            },
            {
              class: 'fa fa-linkedin',
              link: 'https://www.linkedin.com/in/andrewmokht/'
            },
            {
              class: 'fa fa-youtube',
              link: 'https://www.youtube.com/user/theucsdbeat'
            }
          ]
        }


      // MEMBERS GO ABOVE HERE
      ]


// DO NOT EDIT BELOW 


}});
