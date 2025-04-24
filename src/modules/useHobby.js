import { ref } from 'vue';
import BookOne from '../assets/books/book-1.jpg';
import BookTwo from '../assets/books/book-2.jpg';

export const useHobby = () => {
  const hobbies = ref([
    {
      id: 1,
      name: "Reading Books",
      description: "Reading is my hobby because it's fun and relaxing. I enjoy getting lost in stories, learning new things, and using my imagination. It makes me feel calm and happy. I primarily enjoy fictional novels and biographies of legendary football players. ",
      image: BookOne,
    },
    {
      id: 2,
      name: "Learning Foreign Languages",
      description: "Ever since I was a kid, I have been fascinated and curious about foreign languages. I love learning new languages because it helps me understand different cultures and communicate with people from around the world. It is a goal of mine to learn as many as I can in my life. I know 4 so far!",
      image: BookTwo,
    },
  ]);

  return { hobbies };
}