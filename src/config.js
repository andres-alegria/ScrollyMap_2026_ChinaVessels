const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmktmslps004z01se8n68atf5',
  
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,

  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'China Vessels',
    subtitle:
      "Placeholder subheading.",
    date: 'February 2, 2026',
    social: [
      {
        name: 'X',
        src: 'x.svg',
        href: 'https://x.com/mongabay',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/mongabay/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: 'Produced by Latoya Abulu | Cartography by Andrés Alegría',
 
  chapters: [
    
    // chapter 01
    {
      id: 'chapter 01',
      alignment: 'fully',
      hidden: false,
      title: ' ',
      description: "<b>Uncontacted peoples</b> generally refers to Indigenous peoples who have remained largely isolated to the present day, maintaining their traditional lifestyles and functioning mostly independently from any political or governmental entities.<br><br><b>Peoples in initial contact</b> share the same characteristics but beginning to regularly communicate with and integrate into mainstream society.",
      location: {
        center: [29.715, 13.622],
        zoom: 2.1,
        pitch: 0,
        bearing: 0,
      },
      
       images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'Mashco Piro people - Peruvian Amazon',
        },
      ],
      mapAnimation: 'easeTo',
      onChapterEnter: [    ],
      onChapterExit: [  ],
    },

    // chapter 02
    {
      id: 'chapter 02',
      alignment: 'fully',
      hidden: false,
      title: ' ',
      description: "Uncontacted peoples choose to live detached from the rest of the world, and their mobility patterns allow them to engage in gathering and hunting, thereby preserving their cultures and languages. <br><br>These peoples have a strict dependency on their ecological environment. Any changes to their natural habitat can harm both the survival of individual members and the group as a whole.",
      
       images: [
        {
          src: 'photo2.jpg',
          position: 'top',
          title: 'Traditional house - Amazon',
        },
      ],
       
      location: {
        center: [29.715, 13.622],
        zoom: 2.1,
        pitch: 0,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [      ],
      onChapterExit: [      ],
    },

    // chapter 03
    {
      id: 'chapter 03',
      alignment: 'fully',
      hidden: false,
      title: ' ',
      description: "Legal protections make estimating the total number of uncontacted peoples challenging, but estimates point to between <b>100 and 200 uncontacted tribes</b> numbering up to <b>10,000 individuals total</b>. <br><br>Mongabay mapped legally recognized lands used by isolated Indigenous peoples worldwide and analyzed forest cover loss from 2010 to 2024. Boundaries of 84 lands were compiled and verified with Indigenous organizations, experts, and the international working group on Indigenous Peoples in Isolation and Initial Contact (GTI PIACI), using data from Global Forest Watch.<br><br><b>Below are the Top 10 lands with highest tree cover loss, all of these located throught South America.</b>",
       
      location: {
        center: [-56.542931, -10.519600],
        zoom: 2.25,
        pitch: 0,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [      ],
      onChapterExit: [      ],
    },

    // Top 10
    {
      id: 'Top 10',
      alignment: 'left',
      hidden: false,
      title: '#10 Awá',
      description: "Home to:<br><b>Isolated people of Mão de onça</b><br><br>• Country: Brazil<br>• Territory: 117,000 ha<br>• Forest loss: 15,000 ha<br>• Forest loss per ha of territory: 0.129 ha",
        
      legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],
       
      location: {
        center: [-46.55,-3.367],
        zoom: 9.25,
        pitch: 0,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },

    // Top 9
    {
      id: 'Top 9',
      alignment: 'right',
      hidden: false,
      title: '#9 Kayapó',
      description: "Home to:<br><b>Isolated people of Rio Fresco e Mebengôkre</b><br><br>• Country: Brazil<br>• Territory: 3,281,214 ha<br>• Forest loss: 455,000 ha<br>• Forest loss per ha of territory: 0.137 ha",       

     legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],

      location: {
        center: [-52.008004, -7.525144],
        zoom: 7.2,
        pitch: 29.50,
        bearing: -0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },

    // Top 8
    {
      id: 'Top 8',
      alignment: 'left',
      hidden: false,
      title: '#8 Ituna/Itatá',
      description: "Home to:<br><b>Isolated people of Igarapé Ipiaçava</b><br><br>• Country: Brazil<br>• Territory: 142,807 ha<br>• Forest loss: 20,000 ha<br>• Forest loss per ha of territory: 0.140 ha",       
  
       legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],
  
      location: {
        center: [-52.046494, -4.127180],
        zoom: 9.55,
        pitch: 0,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },

    // Top 7
    {
      id: 'Top 7',
      alignment: 'right',
      hidden: false,
      title: '#7 Otuquis National Park',
      description: "Home to:<br><b>The Ayoreo</b><br><br>• Country: Bolivia<br>• Territory: 902,168 ha<br>• Forest loss: 130,000 ha<br>• Forest loss per ha of territory: 0.144 ha",       
 
      legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],
 
      location: {
        center: [-58.929783, -19.625294],
        zoom: 8.48,
        pitch: 35,
        bearing: 58.40,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },
    
    // Top 6
    {
      id: 'Top 6',
      alignment: 'left',
      hidden: false,
      title: '#6 Araribóia',
      description: "Home to:<br><b>Isolated people of Awá</b><br><br>• Country: Brazil<br>• Territory: 413,548 ha<br>• Forest loss: 60,000 ha<br>• Forest loss per ha of territory: 0.145 ha",       
  
       legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],
  
      location: {
        center: [-46.426357, -5.097721],
        zoom: 9.0,
        pitch: 0,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },
    
    // Top 5
    {
      id: 'Top 5',
      alignment: 'right',
      hidden: false,
      title: '#5 Apiaká-Kayabi',
      description: "Home to:<br><b>Isolated people of Rio dos Peixes</b><br><br>• Country: Brazil<br>• Territory: 109,278 ha<br>• Forest loss: 16,000 ha<br>• Forest loss per ha of territory: 0.146 ha",     
 
      legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],
 
      location: {
        center: [-57.301323, -10.953149],
        zoom: 9.0,
        pitch: 0,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },

    // Top 4
    {
      id: 'Top 4',
      alignment: 'left',
      hidden: false,
      title: '#4 Chacobo-Pacahuara',
      description: "Home to:<br><b>The Pacahuara</b><br><br>• Country: Bolivia<br>• Territory: 517,307 ha<br>• Forest loss: 78,860 ha<br>• Forest loss per ha of territory: 0.152 ha",      

     legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],

      location: {
        center: [-65.945549, -12.015914],
        zoom: 8.5,
        pitch: 0,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },

    // Top 3
    {
      id: 'Top 3',
      alignment: 'right',
      hidden: false,
      title: "#3 T'simane Indigenous Territory",
      description: "Home to:<br><b>The T'simane</b><br><br>• Country: Bolivia<br>• Territory: 520,765  ha<br>• Forest loss: 100,000 ha<br>• Forest loss per ha of territory: 0.192 ha", 
  
       legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],
  
      location: {
        center: [-66.280377, -15.337741],
        zoom: 9.25,
        pitch: 33,
        bearing: -81.60,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },

    // Top 2
    {
      id: 'Top 2',
      alignment: 'left',
      hidden: false,
      title: '#2 Xikrin do Cateté',
      description: "Home to:<br><b>Isolated people of the TI Xikrin do Cateté</b><br><br>• Country: Brazil<br>• Territory: 436,507 ha<br>• Forest loss: 95,000 ha<br>• Forest loss per ha of territory: 0.218 ha",      
   
        legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],
   
      location: {
        center: [-50.931125, -6.328561],
        zoom: 9.25,
        pitch: 31.47,
        bearing: 44.80,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },

    // Top 1
    {
      id: 'Top 1',
      alignment: 'right',
      hidden: false,
      title: '#1 Ñembi guasu Conservation Area',
      description: "Home to:<br><b>The Ayoreo</b><br><br>• Country: Bolivia<br>• Territory: 1,134,788 ha<br>• Forest loss: 300,000 ha<br>• Forest loss per ha of territory: 0.264 ha",      

     legend: [
        {
          title: 'Indigenous Territories',
          color: '#bdeaaf',
          border: '#006a54',
        },
        {
          title: 'Forest cover loss (2010—2024)',
          color: '#e66d6d',
        },
         ],       

      location: {
        center: [-59.926808, -18.905330],
        zoom: 8.25,
        pitch: 60.07,
        bearing: -18.39,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },
  ],
};
