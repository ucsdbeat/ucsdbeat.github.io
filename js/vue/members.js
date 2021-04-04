const app = new Vue({
    el: '#app',
    data: {
        members: [
          {
            firstName : 'Mika',
            lastName : 'Carl',
            image: './images/members/mika.jpg',
            partPos: 'President - Soprano',
            major: 'Earth Science',
            year: '3rd',
            link: './members/mika.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/mika.carl.37'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/mika_carl/?hl=en'
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
            firstName : 'Jacob',
            lastName : 'Benson',
            image: './images/members/jac.jpg',
            partPos: 'Music Director - Tenor',
            major: 'Data Science',
            year: '4th',
            link: './members/jacob.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/jacob.benson.90857'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/jenbacobson/?hl=en'
              },
              {
                class: 'fa fa-tumblr',
                link: ''
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
          },
          {
            firstName : 'David',
            lastName : 'Chiu',
            image: './images/members/dav.jpg',
            partPos: 'Public Relations - Bass',
            major: 'Cognitive Science - Design & Interaction',
            year: '4th',
            link: './members/david.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/david.chiu.313371'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/da1chiu/'
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
            firstName : 'Johnathan',
            lastName : 'Chang',
            image: './images/members/joh.jpg',
            partPos: 'Treasurer - Bass',
            major: 'Real Estate and Development',
            year: '3rd',
            link: './members/johnny.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/johnathan.chang.7'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/johnathanchang/?hl=en'
              },
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/johnathan-chang/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },
          {
            firstName : 'Ani',
            lastName : 'Sancianco',
            image: './images/members/ani.jpg',
            partPos: 'Soprano',
            major: 'Undeclared',
            year: '1st',
            link: './members/ani.html',
            socials: [
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/mini_ariani/?hl=en'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://youtube.com/channel/UCnggCE9A7udE1WOPPfpqWDw'
              },
              {
                class: 'fa fa-linkedin',
                link: ''
              },
              {
                class: 'fa fa-facebook',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },
          {
            firstName : 'Janae',
            lastName : 'Gilford',
            image: './images/members/jan.jpg',
            partPos: 'Soprano',
            major: 'Music',
            year: '2nd',
            link: './members/janae.html',
            socials: [
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/channel/UCrhkjYQQc1iYyD22yfb-pEA'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/janaenae188/'
              },
              {
                class: 'fa fa-linkedin',
                link: ''
              },
              {
                class: 'fa fa-facebook',
                link: ''
              }
            ]
          },
          {
            firstName : 'Angie',
            lastName : 'Yogaratnam',
            image: './images/members/ang.jpg',
            partPos: 'Alto',
            major: 'Psychology',
            year: '1st',
            link: './members/angie.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/saansuau'
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
            firstName : 'Nicole',
            lastName : 'Dicen',
            image: './images/members/nic.jpg',
            partPos: 'Alto',
            major: 'Economics',
            year: '1st',
            link: './members/nicole.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/saansuau'
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
            firstName : 'Zachary',
            lastName : 'Miranda',
            image: './images/members/zac.jpg',
            partPos: 'Tenor',
            major: 'Neurobiology',
            year: '2nd',
            link: './members/zac.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/zacharymiranda.777'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/zetazeldamir/'
              },
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/zacharymiranda.777'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/zetazeldamir/'
              }
            ]
          },


          {
            firstName : 'Isaac',
            lastName : 'Douglas',
            image: './images/members/doug.jpg',
            partPos: 'Baritone/Vocal Percussion',
            major: 'Cognitive Science Spec. Machine Learning',
            year: '3rd',
            link: './members/isaac.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/isaac.douglas.330/'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/isaac_douglas/'
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
            firstName : 'Jude',
            lastName : 'Chau',
            image: './images/members/jud.jpg',
            partPos: 'Baritone',
            major: 'Psychology',
            year: '1st',
            link: './members/jude.html',
            socials: [
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/judechau/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              },
              {
                class: 'fa fa-linkedin',
                link: ''
              },
              {
                class: 'fa fa-facebook',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },
          {
            firstName : 'Vivek',
            lastName : 'Srinivasan',
            image: './images/members/viv.jpg',
            partPos: 'Bass',
            major: 'Chemistry',
            year: '1st',
            link: './members/vivek.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/Srinibeeny/'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/srinibeeny/?hl=en'
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
    }
  });