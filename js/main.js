$(document).ready(function(){
    //Slider
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true
      });
    }

      //Posts
      if(window.location.href.indexOf('index') > -1){
      var posts = [
        {
            title: 'Prueba de titulo',
            date: moment().format("MMMM Do YYYY" ),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed ullamcorper nulla, eget mollis velit. Quisque nec odio euismod, varius turpis eget, lobortis tortor. Fusce vel sem molestie, bibendum nunc nec, condimentum lectus. Sed congue ac dui non placerat. Vestibulum facilisis sagittis orci a porta. Morbi aliquet auctor ornare. Aliquam tincidunt ornare lacus non bibendum. Suspendisse auctor arcu et ipsum eleifend dictum. Cras ex neque, aliquet vitae erat eget, lacinia hendrerit dolor. Morbi vel consectetur lectus. Ut sed erat sagittis, varius lacus pellentesque, semper urna'
        },
        {
            title: 'Prueba de titulo 2',
            date: moment().format("MMMM Do YYYY" ),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed ullamcorper nulla, eget mollis velit. Quisque nec odio euismod, varius turpis eget, lobortis tortor. Fusce vel sem molestie, bibendum nunc nec, condimentum lectus. Sed congue ac dui non placerat. Vestibulum facilisis sagittis orci a porta. Morbi aliquet auctor ornare. Aliquam tincidunt ornare lacus non bibendum. Suspendisse auctor arcu et ipsum eleifend dictum. Cras ex neque, aliquet vitae erat eget, lacinia hendrerit dolor. Morbi vel consectetur lectus. Ut sed erat sagittis, varius lacus pellentesque, semper urna'
        },
        {
            title: 'Prueba de titulo 3',
            date: moment().format("MMMM Do YYYY" ),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed ullamcorper nulla, eget mollis velit. Quisque nec odio euismod, varius turpis eget, lobortis tortor. Fusce vel sem molestie, bibendum nunc nec, condimentum lectus. Sed congue ac dui non placerat. Vestibulum facilisis sagittis orci a porta. Morbi aliquet auctor ornare. Aliquam tincidunt ornare lacus non bibendum. Suspendisse auctor arcu et ipsum eleifend dictum. Cras ex neque, aliquet vitae erat eget, lacinia hendrerit dolor. Morbi vel consectetur lectus. Ut sed erat sagittis, varius lacus pellentesque, semper urna'
        },
        {
            title: 'Prueba de titulo 4',
            date: moment().format("MMMM Do YYYY" ),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed ullamcorper nulla, eget mollis velit. Quisque nec odio euismod, varius turpis eget, lobortis tortor. Fusce vel sem molestie, bibendum nunc nec, condimentum lectus. Sed congue ac dui non placerat. Vestibulum facilisis sagittis orci a porta. Morbi aliquet auctor ornare. Aliquam tincidunt ornare lacus non bibendum. Suspendisse auctor arcu et ipsum eleifend dictum. Cras ex neque, aliquet vitae erat eget, lacinia hendrerit dolor. Morbi vel consectetur lectus. Ut sed erat sagittis, varius lacus pellentesque, semper urna'
        }
      ]

      posts.forEach((item, index) => {
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">Leer mas</a>
        </article>
        `
        $("#posts").append(post)
      })
    }

      //Selector de temas
      var theme = $('#theme') 

      $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
      })

      $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
      })

      $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
      })

      //Scroll arriba de la web
      $(".subir").click(function(e){
        e.preventDefault()

        $('html, body').animate({
          scrollTop:0
        }, 500)

        return false
      })

      //Login falso

      $("#login form").submit(function(){
        var form_name = $("#form_name").val()
        localStorage.setItem("form_name", form_name)
      })

      var form_name= localStorage.getItem("form_name")

      if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("Bienvenido, " + form_name)
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide()
        
        $("#logout").click(function(){
          localStorage.clear()
          location.reload()
        })
      }
      if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion()
      }
    })