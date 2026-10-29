// Categories in the order the dropdown lists them. To add a category, add
// { id, label } here.
export const CATEGORIES = [
  { id: 'registrations', label: 'Registrations' },
  { id: 'compliances', label: 'Compliances' },
  { id: 'farming', label: 'Farming' },
  { id: 'value-addition', label: 'Value addition' },
  { id: 'loans-finance', label: 'Loans & Finance' },
  { id: 'exports', label: 'Exports' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'e-commerce', label: 'E-commerce (B2B & B2C)' },
  { id: 'commodity-market', label: 'Commodity market' },
  { id: 'education', label: 'Education' },
  { id: 'tools-services', label: 'Tools & Services' },
  { id: 'schemes', label: 'Schemes' },
  { id: 'branding-marketing', label: 'Branding & Digital marketing' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'storage', label: 'Storage' },
]

// To add a video, append an entry here: its title, any YouTube link
// (youtu.be/…, watch?v=…, shorts/… or embed/…), the length shown on YouTube,
// and the id of its category from CATEGORIES. The thumbnail and the dropdown
// counts follow automatically, and the grid adds rows as needed.
const LIBRARY = [
  {
    title: 'FPO Business plan',
    url: 'https://youtu.be/9HbmdaAHHJc?si=AhqA5BB1a0gqwBSd',
    duration: '01:59',
    category: 'registrations',
  },
  {
    title: 'Why FPOs are needed',
    url: 'https://youtu.be/HTzKyVVEH6s?si=bu-UkdZlgcmK-uYd',
    duration: '03:00',
    category: 'registrations',
  },
  {
    title: 'How to register a FPO',
    url: 'https://www.youtube.com/watch?v=yGlqWrR7G1U',
    duration: '04:21',
    category: 'registrations',
  },
  {
    title: 'Why GST is required',
    url: 'https://youtu.be/aLGd-Fe3TH4?si=IT0XzkdOIQhjlL2F',
    duration: '10:33',
    category: 'registrations',
  },
  {
    title: 'How to register GST',
    url: 'https://youtu.be/jybkiiOxEls?si=iavlxfBlXWQCKe4l',
    duration: '05:03',
    category: 'registrations',
  },
  {
    title: 'Importance of IEC code',
    url: 'https://www.youtube.com/shorts/r0jBsLeBe4E',
    duration: '00:50',
    category: 'registrations',
  },
  {
    title: 'Easy Steps for Updating the IEC',
    url: 'https://youtu.be/B5zrx5k8QC4?si=yfz_aqWBbCXivQZ6',
    duration: '05:03',
    category: 'registrations',
  },
  {
    title: 'MSME registration',
    url: 'https://www.youtube.com/watch?v=RR60sP4Ml-8',
    duration: '06:54',
    category: 'registrations',
  },
  {
    title: 'PAN registration',
    url: 'https://www.youtube.com/watch?v=QBLx14rm2xA',
    duration: '05:23',
    category: 'registrations',
  },
  {
    title: 'FSSAI registration',
    url: 'https://www.youtube.com/watch?v=GW8i_P6tK94',
    duration: '03:06',
    category: 'registrations',
  },
  {
    title: 'Monthly GST returns',
    url: 'https://www.youtube.com/watch?v=QIem41Tk-hI',
    duration: '07:05',
    category: 'registrations',
  },
  {
    title: 'TDS filing',
    url: 'https://www.youtube.com/watch?v=lcKCha4BZWw',
    duration: '04:05',
    category: 'registrations',
  },
  {
    title: 'IT returns',
    url: 'https://www.youtube.com/watch?v=PpGzRELaj_Y',
    duration: '14:52',
    category: 'registrations',
  },
  {
    title: 'GST annual returns',
    url: 'https://www.youtube.com/watch?v=v_mh6Q9iUZA',
    duration: '24:24',
    category: 'registrations',
  },
  {
    title: 'AGM & Board meetings',
    url: 'https://www.youtube.com/watch?v=FrXwr4ALjjY',
    duration: '16:56',
    category: 'registrations',
  },
  {
    title: 'Resolutions & sending Notices',
    url: 'https://www.youtube.com/watch?v=lZXEtNThf8U',
    duration: '10:01',
    category: 'registrations',
  },
]

// Pulls the video id out of the common YouTube link formats; the id is used
// for the thumbnail.
function youTubeId(url) {
  const { hostname, pathname, searchParams } = new URL(url)
  if (hostname === 'youtu.be') return pathname.slice(1)
  const [, kind, id] = pathname.split('/')
  if (kind === 'shorts' || kind === 'embed' || kind === 'live') return id
  return searchParams.get('v')
}

export const VIDEOS = LIBRARY.map((video, index) => ({
  ...video,
  number: index + 1,
  id: youTubeId(video.url),
}))
