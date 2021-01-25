//membuat component header
Vue.component('header-component', {
    props: ['title'],
    template: `
    <nav class="navbar navbar-dark bg-success">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{title}}</a>
        </div>
    </nav>`
});

//membuat component content
Vue.component('content-component', {
    props: ['message','image'],
    template: `
    <div class="content">
        <div class="container">
            <div class="jumbotron mt-3 mb-5">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde reprehenderit incidunt minus dicta molestias et natus eaque deleniti earum, expedita voluptates adipisci repudiandae nobis ut quos id animi harum?.</p>
                <hr class="my-4">
                <p>{{message}}</p>
                <a class="btn btn-primary btn-lg" href="#" role="button" @click="btnLearn">Learn more</a>
            </div>
        </div>
        <div class="container">
            <h3>List Item</h3>
            <div class="row">
                <div class="col" v-for="n of 4">
                    <img :src="image" class="img-thumbnail">
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        btnLearn: function() {
            alert('Selamat Datang di Component');
        }
    }
});

//membuat component footer
Vue.component('footer-component', {
    template: `
    <footer class="bg-success mt-3 pt-3 p-1">
        <p class="text-white text-center">Created by rudyekoprasetya.wordpress.com @ 2021</p>
    </footer>
    `  
});

//instance objek vue
var app=new Vue({
    el: '#app',
    data: {
        judul: 'Belajar Component',
        pesan: 'Ini adalah contoh sistem templating dengan Vue JS',
        gambar: 'https://picsum.photos/150'
    }
});