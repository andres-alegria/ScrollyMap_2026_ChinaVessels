const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmktmslps004z01se8n68atf5',
 
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
 
  theme: 'mongabay',

  intro: {
    title: 'Deep sea mining',
    subtitle: "Tracking china vessels.",
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
  footer: 'Text by Elizabeth Alberts | Visualization by Andrés Alegría',
 

  chapters: [



 // chapter 1: The Xiang Yang Hang 01
{
  id: "chapter 1",
  alignment: 'left',
  title: 'June 2025',
  description: "The Xiang Yang Hang 01, a vast white vessel loaded with oceanographic equipment, cruised through the Northwest Pacific until it reached a section of the seafloor rich in polymetallic nodules — potato-shaped rocks that contain commercially valuable metals such as manganese, nickel, cobalt, and copper. The ship crisscrossed and zigzagged over the site, conducting research in the area miners would eventually exploit through deep-sea mining — a controversial industry that could be on the cusp of starting, and that experts warn could cause irreparable harm to the marine ecosystems.",
  location: { center: [150.0, 17.15], zoom: 3.25, pitch: 0, bearing: 0 },
  
  legend: [
        {
          title: 'Exploration Areas',
          color: '#e66d6d',
          border: '#f6bcb3',
        },
        {
          title: 'Reserve Areas',
          color: '#006a54',
        },
         ],
  
  onChapterEnter: [
    {
      callback: "trackAnimation.start",
      options: {
      vesselFile: "/data/tracks/Xiang_Yang_Hong01_track_June2025.geojson", 
      camera: "start",
      speed: 5,
     flyToStart: true
      }
    }
  ],
  onChapterExit: [
    { callback: "trackAnimation.resume" },
  ]
},


 // chapter 2: Vessel photos

 {
      id: 'Chapter 3',
      alignment: 'left',
      hidden: false,
      title: 'Vessel photos',
      description: "Will transform this into a slide show that scrolls horizontally - the map will be temporaly hidden.",
        
    
      location: {
        center: [150.377570, 19.163433],
        zoom: 4.5,
        pitch: 0,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },


 // chapter 3: The Shen Hai Yi Hao
{
  id: "chapter 3",
  alignment: 'left',
  title: 'Visiting other areas',
  description: "Some of these vessels have also spent time in ISA license areas contracted to non-Chinese companies and governments. For instance, in March and April 2024, the <b>Shen Hai Yi Hao</b>, vessel owned by COMRA, appeared to operate within three seabed areas respectively contracted to the Polish government, the Russian Federation, and France’s research institute IFREMER. And in November 2025, the same vessel similarly loitered in an ISA license area contracted to the Korean government.",
  location: { center: [0.0, 0.15], zoom: 1.5, pitch: 0, bearing: 0 },
  
  legend: [
        {
          title: 'Exploration Areas',
          color: '#e66d6d',
          border: '#f6bcb3',
        },
        {
          title: 'Reserve Areas',
          color: '#006a54',
        },
         ],
  
  onChapterEnter: [
    {
      callback: "trackAnimation.start",
      options: {
      vesselFile: "/data/tracks/Shen_Hai_Yi_Hao_track_Mar2024_to_Nov2025.geojson", 
      camera: "start",
      speed: 50,
     flyToStart: true
      }
    }
  ],
  onChapterExit: [
    { callback: "trackAnimation.resume" },
  ]
},


 // chapter 4: Atlantic

 {
      id: 'Chapter 4',
      alignment: 'left',
      hidden: false,
      title: 'Atalntic',
      description: "Placeholder.",
        
    
      location: {
        center: [-40.052505, 21.490049],
        zoom: 3.5,
        pitch: 0,
        bearing: 0,
      },
      
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      onChapterEnter: [    ],
      onChapterExit: [    ],
    },



  ],
};
