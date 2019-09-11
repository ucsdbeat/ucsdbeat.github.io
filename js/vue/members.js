const app = new Vue({
    el: '#app',
    data: {
        members: [
          {
            firstName : 'Finiva',
            lastName : 'Ednalino',
            image: './images/members/fin.jpg',
            partPos: 'President - Alto',
            link: './members/finiva.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
              },
              {
                class: 'fa fa-instagram',
                link: 'ewe'
              }
            ]
          },
          {
            firstName : 'Andrew',
            lastName : 'Mokhtarzadeh',
            image: './images/members/and.jpg',
            partPos: 'Vice President - Baritone',
            link: './members/andrew.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
              },
              {
                class: 'fa fa-instagram',
                link: 'h079111'
              },
            ]
          }

    ]
    }
  });