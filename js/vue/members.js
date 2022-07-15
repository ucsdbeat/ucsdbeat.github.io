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
            partPos: 'President - Alto',
            major: 'Urban Studies and Planning, Environmental Systems',
            year: '4th',
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
            firstName : 'Vivek',
            lastName : 'Srinivasan',
            image: './images/members/viv.jpg',
            partPos: 'External Vice President - Bass',
            major: 'Chemistry',
            year: '2nd',
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
          },

          {
            firstName : 'Zachary',
            lastName : 'Miranda',
            image: './images/members/zac.jpg',
            partPos: 'Internal Vice President - Tenor',
            major: 'Neurobiology',
            year: '3rd',
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
            firstName : 'Janae',
            lastName : 'Gilford',
            image: './images/members/jan.jpg',
            partPos: 'Music Director - Soprano',
            major: 'Business',
            year: '3rd',
            link: './members/janae.html',
            socials: [
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/janaenae188/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/channel/UCrhkjYQQc1iYyD22yfb-pEA'
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
            firstName : 'Jude',
            lastName : 'Chau',
            image: './images/members/jud.jpg',
            partPos: 'Music Director - Baritone',
            major: 'Chemistry',
            year: '2nd',
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
            firstName : 'Nicole',
            lastName : 'Dicen',
            image: './images/members/nic.jpg',
            partPos: 'Music Director - Tenor',
            major: 'Psychology',
            year: '4th',
            link: './members/nicole.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/nck0le'
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
                class: 'fa fa-youtube',
                link: ''
              }
            ]
          },

          {
            firstName : 'Ani',
            lastName : 'Sancianco',
            image: './images/members/ani.jpg',
            partPos: 'Public Relations - Soprano',
            major: 'Visual Arts (Media)',
            year: '2nd',
            link: './members/ani.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/patty.mode.7'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/mini_ariani/?hl=en'
              },
              {
                class: 'fa fa-linkedin',
                link: ''
              },
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/patty.mode.7'
              }
            ]
          },

          {
            firstName : 'Michelle',
            lastName : 'Escudero',
            image: './images/members/mich.jpg',
            partPos: 'Public Relations - Soprano',
            major: 'Cognitive Science Spec. Design & Interaction',
            year: '1st',
            link: './members/michelle.html',
            socials: [
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/mich-esc/'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/michelleescudero_/'
              },
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/mich-esc/'
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
            year: '4th',
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
                link: 'https://www.linkedin.com/in/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },

          {
            firstName : 'Ximena',
            lastName : 'Gonzalez',
            image: './images/members/xim.jpg',
            partPos: 'Soprano',
            major: 'General Biology',
            year: '3rd',
            link: './members/ximena.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/profile.php?id=100045505608148'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/xi.mena_gonzalez/'
              },
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },

          {
            firstName : 'Angie',
            lastName : 'Yogaratnam',
            image: './images/members/ang.jpg',
            partPos: 'Alto',
            major: 'Psychology',
            year: '2nd',
            link: './members/angie.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/angie.yogaratnam.14'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/angieyogaratnam/'
              },
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/'
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
            partPos: 'Alto',
            major: 'Cognitive Psychology',
            year: '4nd',
            link: './members/catherine.html',
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
                link: 'https://www.linkedin.com/in/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },

          {
            firstName : 'Katrina',
            lastName : 'Garay',
            image: './images/members/kat.jpg',
            partPos: 'Alto',
            major: 'Chemical Engineering',
            year: '3rd',
            link: './members/katrina.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/katrina.garay.1'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/katrinagaray/'
              },
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },

          {
            firstName : 'Kaye',
            lastName : 'Han',
            image: './images/members/kay.jpg',
            partPos: 'Alto',
            major: 'Clinical Psychology',
            year: '1st',
            link: './members/kaye.html',
            socials: [
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/Kaye_han26/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              },
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },

          {
            firstName : 'Macky',
            lastName : 'Ito',
            image: './images/members/mac.jpg',
            partPos: 'Tenor',
            major: 'Real Estate and Development',
            year: '2nd',
            link: './members/katrina.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/macky.ito.9'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/mackyito/'
              },
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/'
              },
              {
                class: 'fa fa-youtube',
                link: 'https://www.youtube.com/user/theucsdbeat'
              }
            ]
          },

          {
            firstName : 'Jordan',
            lastName : 'Lin',
            image: './images/members/jor.jpg',
            partPos: 'Baritone',
            major: 'Molecular and Cell Biology',
            year: '2nd',
            link: './members/jordan.html',
            socials: [
              {
                class: 'fa fa-facebook',
                link: 'https://www.facebook.com/jordanlin0420'
              },
              {
                class: 'fa fa-instagram',
                link: 'https://www.instagram.com/jor_420/?hl=en'
              },
              {
                class: 'fa fa-linkedin',
                link: 'https://www.linkedin.com/in/'
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
