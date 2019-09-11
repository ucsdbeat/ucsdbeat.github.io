const Person = Vue.component('person', {
    props: ['first', 'last', 'part', 'picture', 'link', 'socla1', 'soli1', 'socla2', 'soli2'],
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
            <h5><a v-bind:href="link"> {{ first }} <br> {{ last }} </a></h5>
            <p>{{ part }}</p>
        </div>
    </div>
 </div>
    `
   });


