export interface Destination {
  place: string;
  title: string;
  title2: string;
  description: string;
  image: string;
}

export const travelData: Destination[] = [
  {
    place: 'Agra, Uttar Pradesh',
    title: 'TAJ',
    title2: 'MAHAL',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1920'
  },
  {
    place: 'Jaipur, Rajasthan',
    title: 'HAWA',
    title2: 'MAHAL',
    description: 'The Hawa Mahal is a palace in Jaipur, India. Constructed of red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the zenana, or women\'s chambers.',
    image: 'https://media.istockphoto.com/id/481277397/photo/hawa-mahal-jaipur-india.jpg?s=612x612&w=0&k=20&c=V90RdJBok0f2AbobqSAFEDstra0Uw-3xRchyzzvu9ow='
  },
  {
    place: 'Varanasi, Uttar Pradesh',
    title: 'GANGES',
    title2: 'GHATS',
    description: 'The Ghats in Varanasi are riverfront steps leading to the banks of the River Ganges. The city has 88 ghats. Most of the ghats are bathing and puja ceremony ghats, while two ghats are used exclusively as cremation sites.',
    image: 'https://media.istockphoto.com/id/537988165/photo/varanasi.jpg?b=1&s=612x612&w=0&k=20&c=LaU3hMPtVV7PL1NkGfEx1aTdeD7dRQdyhRxARMUdXsw='
  },
  {
    place: 'Alleppey, Kerala',
    title: 'KERALA',
    title2: 'BACKWATERS',
    description: 'The Kerala backwaters are a network of brackish lagoons and lakes lying parallel to the Arabian Sea coast of Kerala state in southern India. The network includes five large lakes linked by canals, both manmade and natural.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1920'
  },
  {
    place: 'Amritsar, Punjab',
    title: 'GOLDEN',
    title2: 'TEMPLE',
    description: 'The Golden Temple, also known as Harmandir Sahib, meaning "abode of God" or Darbar Sahib, meaning "exalted court", is a gurdwara located in the city of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism.',
    image: 'https://t3.ftcdn.net/jpg/03/11/74/00/360_F_311740081_PL7ftGHnZL7JMBQpigswigY2xFwSRHJg.jpg'
  },
  {
    place: 'Ladakh, J&K',
    title: 'PANGONG',
    title2: 'LAKE',
    description: 'Pangong Tso or Pangong Lake is an endorheic lake spanning eastern Ladakh and western Tibet. It is situated at an elevation of 4,225 m. It is 134 km long and divided into five sub-lakes.',
    image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=1920'
  },
  {
    place: 'Munnar, Kerala',
    title: 'TEA',
    title2: 'GARDENS',
    description: 'Munnar is a town and hill station located in the Idukki district of the southwestern Indian state of Kerala. Munnar is situated at around 1,600 metres above mean sea level, in the Western Ghats mountain range.',
    image: 'https://wallpapercave.com/wp/wp3784618.jpg'
  },
  {
    place: 'Udaipur, Rajasthan',
    title: 'LAKE',
    title2: 'PICHOLA',
    description: 'Lake Pichola, situated in Udaipur city in the Indian state of Rajasthan, is an artificial fresh water lake, created in the year 1362 AD, named after the nearby Picholi village.',
    image: 'https://media.istockphoto.com/id/629006734/photo/city-palace-and-pichola-lake-in-udaipur-india.jpg?s=612x612&w=0&k=20&c=qhP5o-dpZoWuRdCyrOVJfu6IHf7472QGovEJmytYzrI='
  },
  {
    place: 'Hampi, Karnataka',
    title: 'VIRUPAKSHA',
    title2: 'TEMPLE',
    description: 'Virupaksha Temple is located in Hampi in the Vijayanagara district of Karnataka, India. It is part of the Group of Monuments at Hampi, designated as a UNESCO World Heritage Site.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1920'
  },
  {
    place: 'Mysore, Karnataka',
    title: 'MYSORE',
    title2: 'PALACE',
    description: 'The Mysore Palace is a historical palace and a royal residence at Mysore in the Indian State of Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore.',
    image: 'https://images.unsplash.com/photo-1657856855186-7cf4909a4f78?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXlzb3JlJTIwcGFsYWNlfGVufDB8fDB8fHww'
  },
  {
    place: 'New Delhi',
    title: 'INDIA',
    title2: 'GATE',
    description: 'The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the "ceremonial axis" of New Delhi, formerly called Kingsway.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1920'
  },
  {
    place: 'Mumbai, Maharashtra',
    title: 'GATEWAY',
    title2: 'OF INDIA',
    description: 'The Gateway of India is an arch-monument built during the 20th century in Bombay, India. The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder.',
    image: 'https://wallpapercave.com/wp/wp5172757.jpg'
  },
  {
    place: 'Aurangabad, Maharashtra',
    title: 'AJANTA',
    title2: 'CAVES',
    description: 'The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 CE in Aurangabad district of Maharashtra state of India.',
    image: 'https://t4.ftcdn.net/jpg/02/28/13/25/360_F_228132543_UnVy7HkGlvTdFpbklHqi3TBdVtJilkv5.jpg'
  },
  {
    place: 'Khajuraho, Madhya Pradesh',
    title: 'KHAJURAHO',
    title2: 'TEMPLES',
    description: 'The Khajuraho Group of Monuments is a group of Hindu temples and Jain temples in Chhatarpur district, Madhya Pradesh, India, about 175 kilometres southeast of Jhansi.',
    image: 'https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U='
  },
  {
    place: 'Konark, Odisha',
    title: 'SUN',
    title2: 'TEMPLE',
    description: 'Konark Sun Temple is a 13th-century CE Sun temple at Konark about 35 kilometres northeast from Puri on the coastline of Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga Dynasty.',
    image: 'https://m.media-amazon.com/images/I/81Y+eh20z8L.jpg'
  },
  {
    place: 'Rishikesh, Uttarakhand',
    title: 'LAXMAN',
    title2: 'JHULA',
    description: 'Lakshman Jhula is a suspension bridge across the river Ganges, located 5 kilometres north-east of the city of Rishikesh in the Indian state of Uttarakhand.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1920'
  },
  {
    place: 'Darjeeling, West Bengal',
    title: 'TOY',
    title2: 'TRAIN',
    description: 'The Darjeeling Himalayan Railway, also known as the DHR or "Toy Train", is a 2 ft gauge railway that runs between New Jalpaiguri and Darjeeling in the Indian state of West Bengal.',
    image: 'https://t3.ftcdn.net/jpg/18/97/53/72/360_F_1897537229_jinqyrkBeMVBGUhwOkFpbFkLXgHFwSXv.jpg'
  },
  {
    place: 'Shimla, Himachal Pradesh',
    title: 'THE',
    title2: 'RIDGE',
    description: 'The Ridge road is a large open space, located in the center of Shimla, the capital city of Himachal Pradesh, India. The Ridge is the hub of all cultural activities of Shimla.',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&q=80&w=1920'
  },
  {
    place: 'Goa',
    title: 'PALOLEM',
    title2: 'BEACH',
    description: 'Palolem Beach is situated in Canacona in southern Goa, India. The beach attracts many international tourists, mainly during the winter season between November and March.',
    image: 'https://media.istockphoto.com/id/469852152/photo/arambol-beach-goa.jpg?s=612x612&w=0&k=20&c=PK7nClOmOvKi4JxDumL5-YI8lkX53b9vHF75nvExDX4='
  },
  {
    place: 'Ooty, Tamil Nadu',
    title: 'NILGIRI',
    title2: 'HILLS',
    description: 'Ooty, also known as Udhagamandalam, is a town and a municipality in the Nilgiris district of the Indian state of Tamil Nadu. It is located 86 km north of Coimbatore.',
    image: 'https://t4.ftcdn.net/jpg/07/13/28/45/360_F_713284580_0cariOQGYtqhNKNbyx09f3SVl4OtbmXH.jpg'
  },
  {
    place: 'Kanyakumari, Tamil Nadu',
    title: 'VIVEKANANDA',
    title2: 'ROCK',
    description: 'Vivekananda Rock Memorial is a popular tourist monument in Vavathurai, Kanyakumari, India. The memorial stands on one of two rocks located about 500 metres east of mainland of Vavathurai.',
    image: 'https://c1.wallpaperflare.com/preview/89/634/552/thiruvalluvar-statue-rock-sculpture-kanyakumari.jpg'
  }
];
