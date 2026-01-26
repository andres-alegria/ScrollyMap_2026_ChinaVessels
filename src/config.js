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



 // chapter 00
{
  id: "chapter 00",
  alignment: 'left',
  title: 'June 2025',
  description: "The Xiang Yang Hang 01, a vast white vessel loaded with oceanographic equipment, cruised through the Northwest Pacific until it reached a section of the seafloor rich in polymetallic nodules — potato-shaped rocks that contain commercially valuable metals such as manganese, nickel, cobalt, and copper. The ship crisscrossed and zigzagged over the site, conducting research in the area miners would eventually exploit through deep-sea mining — a controversial industry that could be on the cusp of starting, and that experts warn could cause irreparable harm to the marine ecosystems.",
  location: { center: [100, 23.08], zoom: 2, pitch: 0, bearing: 0 },
  
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
      vesselFile: "/data/tracks/Xiang_Yang_Hong01_track.geojson", 
      camera: "start",
      speed: 25,
     flyToStart: true
      }
    }
  ],
  onChapterExit: [
    { callback: "trackAnimation.pause" },
  ]
},


 // chapter 01

{
  id: "combo-stage",
  type: "stage",
  stage: "GalleryHorizontalScroll",
  alignment: "fully" // doesn’t matter now, stage forces full width
},


 // chapter 01a

{
  id: "combo-stage",
  type: "stage",
  stage: "GalleryFilter",
  alignment: "fully" // doesn’t matter now, stage forces full width
},


 // chapter 02

 {
      id: 'Placeholder',
      alignment: 'left',
      hidden: false,
      title: 'Placeholder',
      description: "Placeholder text",
        
    
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



 // chapter 01

{
  id: "plain text",
  type: "stage",
  stage: "PlainText",
  alignment: "fully" // doesn’t matter now, stage forces full width
},


 // chapter 01a



  ],
};
