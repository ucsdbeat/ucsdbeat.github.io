const performance = Vue.component('performance', {
    props: ['title', 'location', 'link', 'dateday', 'datemonth', 'picture'],
    template: `
    <div class="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
        <div class="blog-post">
            <div class="post-thumb">
                <a v-bind:href="link">
                    <img v-bind:src="picture" alt="post-image" class="img-fluid">
                </a>
            </div>
            <div class="post-content">
                <div class="date">
                        <h4>{{ dateday }}<span>{{ datemonth }}</span></h4>
                    </div>
                <div class="post-title">
                    <h2><a v-bind:href="link">{{ title }}<br><br> <span>{{ location }}</span></a></h2>
                </div>
            </div>
        </div>
    </div>

    `

   });



   /// v-bind:id="first + 'modal'"