function myFunction() {
    var x = document.getElementById("myTopnav2");
    if (x.className === "topnav2") {
      x.className += " responsive";
    } else {
      x.className = "topnav2";
    }
  }
  
  /* all articles */
  
  const addarticle = (article) => {
      const articles = document.getElementById("articles");
      console.log(articles)   
      const articlediv = document.createElement("div")
      articlediv.className = "article";
  
      articlediv.innerHTML = 
      `<img class = "allimg" src = "${article.image}"/>
                <br>
                <h3>${article.title}</h3>
              <a href = "${article.link}"> click to read </a>`  
          articles.appendChild(articlediv)
  }
  
  
  addarticle({
      title:"Roe v. Wade",
      image:"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      link : "main.html"
  })
  
  addarticle({
      title:"blah",
      image:"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      link : "index.html"
  })
  1
  addarticle({
      title:"blah",
     image:"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      link : "index.html"
  })
  
  addarticle({
      title:"alksdjfasdf",
     image:"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      link : "index.html"
  })

  function myFunction2() {
    document.getElementById("myDropdown").classList.toggle("show");
      document.getElementById("mydb2").classList.toggle("show2");
      document.getElementById("mydb").classList.toggle("hide");
  }
  
  function show() {
  document.getElementById("dropbutton2").classList.toggle("show");
      document.getElementById("dropdown2").classList.toggle("width");
      document.getElementById("myTovnav22").classList.toggle("show");
      document.getElementById("icon2").classList.toggle("hide");
  }
  
  function hide() {
      document.getElementById("multinav").classList.toggle("hide");
      document.getElementById("myTopnav21").classList.toggle("hide");
      document.getElementById("myDropdown").classList.toggle("hide");
  }
  
  function hidem(){
        var x = document.getElementById("dropdown-content2");
    if (x.className === "myDropdown") {
      x.className += "blah";
    } else {
      x.className += "hide";
    }
  }