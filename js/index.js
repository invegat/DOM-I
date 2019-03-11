const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

window.onload = function () {
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])


  let els = document.querySelectorAll('a[href="#"]');
  for (var i = 0, l = els.length; i < l; i++) {
    els[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`]
  }
  let cta_text = document.getElementsByClassName('cta-text')[0]
  let dis = siteContent['cta']['h1'].split(' ')
  GetStarted = siteContent['cta']['button']
  cta_text.innerHTML = `<h1>${dis[0]}<br>${dis[1]}<br>${dis[2]}</h1><button>${GetStarted}</button>`
  let cta_logo = document.getElementById("cta-img");
  cta_logo.setAttribute('src', siteContent["cta"]["img-src"])

  let features = document.querySelector('.top-content > .text-content > h4')
  features.innerHTML = siteContent['main-content']['features-h4']
  let tp = document.querySelector('.top-content > .text-content > p')
  tp.innerHTML = siteContent['main-content']['features-content']
  logo = document.getElementById("middle-img");
  logo.setAttribute('src', siteContent["main-content"]["middle-img-src"])
  let tps = document.querySelectorAll('.top-content > .text-content')
  let about = tps[1].querySelector('h4')
  about.innerHTML = siteContent['main-content']['about-h4']
  tp = tps[1].querySelector('p')
  tp.innerHTML = siteContent['main-content']['about-content']
  let bottoms = document.querySelectorAll('.bottom-content > .text-content')
  let ids = ['services', 'product', 'vision']
  for (let i = 0; i < 3; i++) {
    b = bottoms[i]
    id = ids[i]
    b.querySelector('h4').innerHTML = siteContent['main-content'][`${id}-h4`]
    b.querySelector('p').innerHTML = siteContent['main-content'][`${id}-content`]
  }
  let ch4 = document.querySelector('.contact > h4')
  ch4.innerHTML = siteContent['contact']['contact-h4']
  let ps = document.querySelectorAll('.contact > p')
  let cv = siteContent['contact']['address']
  let cvi = cv.indexOf('Somewhere')
  ps[0].innerHTML = `<p>${cv.slice(0, cvi)}<br>${cv.slice(cvi)}</p>`
  ps[1].innerHTML = siteContent['contact']['phone']
  ps[2].innerHTML = siteContent['contact']['email']
  document.querySelector('footer').innerHTML = siteContent['footer']['copyright']

  ps = document.querySelectorAll('header > nav > a')
  for (let i = 0; i < ps.length; i++) {
    content = siteContent["nav"][`nav-item-${i + 1}`]
    ps[i].innerHTML = `<span style='color: green;'>${content}</span>`
  }
  ps = document.querySelector('header > nav')
  let node = document.createElement("A");
  node.setAttribute('href', '#')                
  let textnode = document.createTextNode("Append");
  span = document.createElement('SPAN')
  span.setAttribute('style', `color: blue;`)
  span.appendChild(textnode)
  node.appendChild(span)  
  ps.appendChild(node)
  node = document.createElement("A");
  node.setAttribute('href', '#')     
  span = document.createElement('SPAN')
  span.setAttribute('style', `color: red;`)
  textnode = document.createTextNode("Prepend"); 
  span.appendChild(textnode)
  node.appendChild(span)  
  ps.prepend(node)
}