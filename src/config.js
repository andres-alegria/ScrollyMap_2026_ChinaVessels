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
  location: { center: [113.4, 23.08], zoom: 1.25, pitch: 0, bearing: 0 },
  onChapterEnter: [
    {
      callback: "trackAnimation.start",
      options: {
      vesselFile: "/data/tracks/Xiang_Yang_Hong01_track.geojson", 
      camera: "start",
      speed: 12,
     flyToStart: true
      }
    }
  ],
  onChapterExit: [
    { callback: "trackAnimation.pause" },
  ]
},

  ],
};
