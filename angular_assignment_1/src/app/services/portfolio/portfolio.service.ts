import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioObject = {
    title: "Portfolio",
    portfolioFilters: {
      id: 'portfolio-flters',
      list: [
        {
          dataFilter: '*',
          class: 'filter-active',
          text: 'All'
        },
        {
          dataFilter: 'web-des',
          text: 'Design'
        },
        {
          dataFilter: 'web-dev',
          text: 'Development'
        },
        {
          dataFilter: 'dig-mar',
          text: 'Marketing'
        },
      ]
    },
    portfolioItem:[
      {
        class: 'web-des',
        img: { src: '../../../assets/img/portfolio-1.jpg', class: 'img-fluid', alt: "" },
        a: [
          { href: '../../../assets/img/portfolio-1.jpg', 
          class: 'link-preview', 
          lightbox: 'portfolio', 
          dataTitle: '"Project Name', 
          title: 'Preview',
          iClass: 'fa fa-eye'
        },
        { href: '#', 
          class: 'link-details',                 
          title: 'More Details',
          iClass: 'fa fa-link'
        },
        { href: '#', 
        class: 'portfolio-title',                 
        text: 'Project Name',
        spanText: 'Web Design'
      },
      ]
    },

    {
      class: 'web-des',
      img: { src: '../../../assets/img/portfolio-2.jpg', class: 'img-fluid', alt: "" },
      a: [
        { href: '../../../assets/img/portfolio-2.jpg', 
        class: 'link-preview', 
        lightbox: 'portfolio', 
        dataTitle: '"Project Name', 
        title: 'Preview',
        iClass: 'fa fa-eye'
      },
      { href: '#', 
        class: 'link-details',                 
        title: 'More Details',
        iClass: 'fa fa-link'
      },
      { href: '#', 
      class: 'portfolio-title',                 
      text: 'Project Name',
      spanText: 'Web Design'
    },
    ]
  },

  {
    class: 'web-dev',
    img: { src: '../../../assets/img/portfolio-3.jpg', class: 'img-fluid', alt: "" },
    a: [
      { href: '../../../assets/img/portfolio-3.jpg', 
      class: 'link-preview', 
      lightbox: 'portfolio', 
      dataTitle: '"Project Name', 
      title: 'Preview',
      iClass: 'fa fa-eye'
    },
    { href: '#', 
      class: 'link-details',                 
      title: 'More Details',
      iClass: 'fa fa-link'
    },
    { href: '#', 
    class: 'portfolio-title',                 
    text: 'Project Name',
    spanText: 'Web Development'
  },
  ]
},
{
  class: 'web-dev',
  img: { src: '../../../assets/img/portfolio-4.jpg', class: 'img-fluid', alt: "" },
  a: [
    { href: '../../../assets/img/portfolio-4.jpg', 
    class: 'link-preview', 
    lightbox: 'portfolio', 
    dataTitle: '"Project Name', 
    title: 'Preview',
    iClass: 'fa fa-eye'
  },
  { href: '#', 
    class: 'link-details',                 
    title: 'More Details',
    iClass: 'fa fa-link'
  },
  { href: '#', 
  class: 'portfolio-title',                 
  text: 'Project Name',
  spanText: 'Web Development'
},
]
},

{
class: 'dig-mar',
img: { src: '../../../assets/img/portfolio-5.jpg', class: 'img-fluid', alt: "" },
a: [
  { href: '../../../assets/img/portfolio-5.jpg', 
  class: 'link-preview', 
  lightbox: 'portfolio', 
  dataTitle: '"Project Name', 
  title: 'Preview',
  iClass: 'fa fa-eye'
},
{ href: '#', 
  class: 'link-details',                 
  title: 'More Details',
  iClass: 'fa fa-link'
},
{ href: '#', 
class: 'portfolio-title',                 
text: 'Project Name',
spanText: 'Digital Marketing'
},
]
},

{
class: 'dig-mar',
img: { src: '../../../assets/img/portfolio-6.jpg', class: 'img-fluid', alt: "" },
a: [
  { href: '../../../assets/img/portfolio-6.jpg', 
  class: 'link-preview', 
  lightbox: 'portfolio', 
  dataTitle: '"Project Name', 
  title: 'Preview',
  iClass: 'fa fa-eye'
},
{ href: '#', 
  class: 'link-details',                 
  title: 'More Details',
  iClass: 'fa fa-link'
},
{ href: '#', 
class: 'portfolio-title',                 
text: 'Project Name',
spanText: 'Digital Marketing'
},
]
}     
]
  };
  get PortfolioObject() {
    return this.portfolioObject;
  }
}
