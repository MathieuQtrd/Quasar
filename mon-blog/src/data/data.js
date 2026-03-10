import imgArticle1 from "../assets/images/audience.jpg"
import imgArticle2 from "../assets/images/concert.jpg"
import imgArticle3 from "../assets/images/audience2.jpg"
import imgArticle4 from "../assets/images/audience3.jpg"


const articles = [
  {
    id: 1,
    img: {
      src: imgArticle1,
      alt: "Image de concert ..."
    },
    title: "Festival Musique Paris",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla corrupti dolor, inventore laudantium, suscipit veniam modi, in quae magnam accusamus? Velit amet, odit aperiam quibusdam fugiat quae eaque dicta.
        Facilis, sed sint, vero dolor facere quibusdam, voluptate saepe porro omnis assumenda ratione quo odio aliquid nemo reprehenderit! Velit, excepturi! Perferendis quibusdam, quidem nobis doloribus assumenda quisquam fugiat rem nostrum?`,
    tags: [
          { id: 1, name: "Concert", slug: "concert"},
          { id: 2, name: "Festival", slug: "festival"},
          { id: 3, name: "Paris", slug: "paris"},
          { id: 4, name: "Musique", slug: "musique"}
        ]
  },
  {
    id: 2,
    img: {
      src: imgArticle2,
      alt: "Image de concert ..."
    },
    title: "Concert Montpellier",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla corrupti dolor, inventore laudantium, suscipit veniam modi, in quae magnam accusamus? Velit amet, odit aperiam quibusdam fugiat quae eaque dicta.
        Facilis, sed sint, vero dolor facere quibusdam, voluptate saepe porro omnis assumenda ratione quo odio aliquid nemo reprehenderit! Velit, excepturi! Perferendis quibusdam, quidem nobis doloribus assumenda quisquam fugiat rem nostrum?`,
    tags: [
          { id: 1, name: "Concert", slug: "concert"},
          { id: 2, name: "Montpellier", slug: "montpellier"},
          { id: 3, name: "Musique", slug: "musique"}
        ]
  },
  {
    id: 3,
    img: {
      src: imgArticle3,
      alt: "Image de concert ..."
    },
    title: "Festival Rock",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla corrupti dolor, inventore laudantium, suscipit veniam modi, in quae magnam accusamus? Velit amet, odit aperiam quibusdam fugiat quae eaque dicta.
        Facilis, sed sint, vero dolor facere quibusdam, voluptate saepe porro omnis assumenda ratione quo odio aliquid nemo reprehenderit! Velit, excepturi! Perferendis quibusdam, quidem nobis doloribus assumenda quisquam fugiat rem nostrum?`,
    tags: [
          { id: 1, name: "Concert", slug: "concert"},
          { id: 3, name: "Musique", slug: "musique"}
        ]
  },
  {
    id: 4,
    img: {
      src: imgArticle4,
      alt: "Image de concert ..."
    },
    title: "Festival Electro",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla corrupti dolor, inventore laudantium, suscipit veniam modi, in quae magnam accusamus? Velit amet, odit aperiam quibusdam fugiat quae eaque dicta.
        Facilis, sed sint, vero dolor facere quibusdam, voluptate saepe porro omnis assumenda ratione quo odio aliquid nemo reprehenderit! Velit, excepturi! Perferendis quibusdam, quidem nobis doloribus assumenda quisquam fugiat rem nostrum?`,
    tags: [
          { id: 1, name: "Montpellier", slug: "montpellier"},
          { id: 2, name: "Musique", slug: "musique"},
          { id: 3, name: "Electro", slug: "electro"}
        ]
  }
]

export default articles