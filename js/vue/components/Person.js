const Person = Vue.component('person', {
    props: ['first', 'last', 'part', 'major', 'year', 'picture', 'link', 'socla1', 'soli1', 'socla2', 'soli2', 'socla3', 'soli3', 'socla4', 'soli4'],
    template: `
    <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="speaker-item">
        <div class="image">
            <img v-bind:src="picture" alt="speaker" class="img-fluid">
            <div class="primary-overlay"></div>
            <div class="socials">
                <ul class="list-inline">
                    <li class="list-inline-item"><a v-bind:href="soli1"><i v-bind:class="socla1"></i></a></li>
                    <li class="list-inline-item"><a v-bind:href="soli2"><i v-bind:class="socla2"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="content text-center">
            <h5><a href="#" v-on:click="openModal($event, picture)"> {{ first }} <br> {{ last }} </a></h5>
            <div class="theModal" v-if="toggleModal"> 
                <div class="modal-textbox">
                    <div class="row closeModal">
                            <img src=images/close.png v-on:click="closeModal()">
                    </div>
                    <div class="row">
                        <div class="col-md-6 na">
                        
                        </div>
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <h1>{{first}} {{last}}</h1>
                                <h6>Major: {{major}}</h6>
                                <h6>Year: {{year}}</h6>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <p>{{ part }}</p>
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

            let navbar = document.querySelector('.navbar');
            navbar.style.zIndex = -1; 

            let checkBox = setInterval(function() {
                if (box.length > 2) {
                    b = box[1].querySelector('.modal-textbox .col-md-6');

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