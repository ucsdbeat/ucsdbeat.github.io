const app = new Vue({
    el: '#app',
    data: {



      // MEMBERS GO BELOW HERE

        members: [

          {
            firstName : 'Andrew',
            lastName : 'Mokhtarzadeh',
            image: './images/members/and.jpg',
            partPos: 'Music Director - Baritone',
            major: 'Data Science',
            year: '3rd',
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
          },

          {
            firstName : 'Catherine',
            lastName : 'Kuh',
            image: './images/members/cat.jpg',
            partPos: 'Public Relations - Alto',
            major: 'Psychology',
            year: '3rd',
            link: './members/cat.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/catherine.kuh'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/catherinekuh/'
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
          }



    ]
  
  
  // MEMBERS GO ABOVE HERE

  
  }});
