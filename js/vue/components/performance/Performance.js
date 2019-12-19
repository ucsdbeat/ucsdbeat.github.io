const performance = Vue.component('performance', {
    props: ['title', 'location', 'link', 'dateDay', 'dateMonth', 'picture', 'soli2', 'socla3', 'soli3', 'socla4', 'soli4'],
    template: `
    <div class="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
    <div class="blog-post">
        <div class="post-thumb">
            <a href="{{ link }}">
                <img v-bind:src="picture" alt="post-image" class="img-fluid">
            </a>
        </div>
        <div class="post-content">
            <div class="date">
                    <h4>{{ dateDay }}<span>{{ dateMonth }}</span></h4>
                </div>
            <div class="post-title">
                <h2><a href="{{ link }}"> {{ title }} <br><br> <span>{{ location }}</span></a></h2>
            </div>
        </div>
    </div>
</div>
    `,

    // <img v-bind:src="picture" alt="speaker" class="img-fluid">
    data: function(){
        return {
            toggleModal: false
        }
    },
    methods: {
        openModal: function(event, picture) {
            event.preventDefault();
            let box = event.target.parentNode.parentNode.children;
            console.log(box.length)
            let navbar = document.querySelector('.navbar');
            navbar.style.zIndex = -1; 
            console.log(box);
            let checkBox = setInterval(function() {
                if (box.length > 2) {
                    b = box[1].querySelector('.modal-textbox .col-md-6');
                    console.log("Exists!", b);
                    b.style.backgroundImage = "url('"+picture+"')";
                    // b.style.backgroundSize = "contain";
                   clearInterval(checkBox);
                }
             }, 100);
            
            this.toggleModal = true;
        },

        closeModal: function(){
            this.toggleModal = false;
            document.querySelector('.navbar').style.zIndex = 1;
        }
    }
   });



   /// v-bind:id="first + 'modal'"