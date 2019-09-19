const app = new Vue({
    el: '#app',
    data: {
        members: [
          {
            firstName : 'Finiva',
            lastName : 'Ednalino',
            image: './images/members/fin.jpg',
            partPos: 'President - Alto',
            major: 'Psychology, spec. Developmental Psych',
            year: '4th',
            link: './members/finiva.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/icklefinniekins/?hl=en'
              },
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/finiva-ednalino-081110129/'
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
            partPos: 'Vice President - Baritone',
            major: 'Data Science',
            year: '2nd',
            link: './members/andrew.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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
            firstName : 'Jacob',
            lastName : 'Benson',
            image: './images/members/jac.jpg',
            partPos: 'Music Director - Baritone',
            major: 'Data Science',
            year: '3rd',
            link: './members/jacob.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/monkeytarzan/?hl=en'
              },
              {
                class: 'fa fa-snapchat',
                link: 'https://www.linkedin.com/in/andrewmokht/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },
          {
            firstName : 'Anu',
            lastName : 'Sethuraman',
            image: './images/members/anu.jpg',
            partPos: 'Music Director - Alto',
            major: 'Earth Science',
            year: '2nd',
            link: './members/anu.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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
            firstName : 'David',
            lastName : 'Chiu',
            image: './images/members/dav.jpg',
            partPos: 'Public Relations - Bass',
            major: 'Cognitive Science',
            year: '3rd',
            link: './members/david.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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
            year: '2nd',
            link: './members/cat.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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
            firstName : 'Mika',
            lastName : 'Carl',
            image: './images/members/mik.jpg',
            partPos: 'Treasurer - Soprano',
            major: 'Undeclared',
            year: '2nd',
            link: './members/mika.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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
            firstName : 'Katelyn',
            lastName : 'Benson',
            image: './images/members/kat.jpg',
            partPos: 'Soprano',
            major: 'Undeclared',
            year: '3rd',
            link: './members/katelyn.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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
            firstName : 'Sarah',
            lastName : 'Austin',
            image: './images/members/sar.jpg',
            partPos: 'Alto',
            major: 'TO BE INSERTED',
            year: '4th',
            link: './members/sarah.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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
            firstName : 'Christopher',
            lastName : 'Kagoo',
            image: './images/members/chr.jpg',
            partPos: 'Tenor',
            major: 'Cognitive Science',
            year: '4th',
            link: './members/chris.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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
            firstName : 'Jae',
            lastName : 'Lee',
            image: './images/members/jae.jpg',
            partPos: 'Bass/Vocal Percussion',
            major: 'INSERT MAJOR HERE',
            year: '4th',
            link: './members/jae.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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
            firstName : 'Johnathan',
            lastName : 'Chang',
            image: './images/members/joh.jpg',
            partPos: 'Bass',
            major: 'TO BE INSERTED',
            year: '2nd',
            link: './members/johnny.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100013713079111'
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

    ]
    }
  });