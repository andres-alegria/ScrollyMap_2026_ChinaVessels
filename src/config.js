const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmktmslps004z01se8n68atf5',
  
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,

  theme: 'mongabay',

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
  stage: "comboHorizFilter",
  alignment: "fully" // doesn’t matter now, stage forces full width
},

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





  ],
};
