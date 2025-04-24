import { ref } from 'vue';
import endPlastic from '../assets/endplastic/endplastic-poster.jpg';
import cinemaPoster from '../assets/cinema/project-event-esbjerg-logo-landscape.jpg';
import chargeFinder from '../assets/chargefinder/chargefinder-poster.jpg';
import shortMovieShot from '../assets/shortmovie/short-movie-shot.png';
import artwork from '../assets/artworks/persona-3.png';



export const useProjects = () => {
    const projects = ref([
        {
        id: 1,
        nameProjects: "Esbjerg Cinema and Stars",
        imageProjects: cinemaPoster,
        descriptionShort: "Outdoor Cinema Event for Esbjerg",
        descriptionLong: "Esbjerg Cinema and Stars is a project we worked on to get more Danish interested in visiting Esbjerg. We decided to make the first outdoor cinema in Esbjerg, targetted for young people mostly but also for every other age group. The main thing we relied on when preparing the project was using the power of social medias, such as Instagram and Facebook, to make a strong advertising campaign and make more people interested in the event.", 
        teamMembers: "Ivan Kirev, Nadine Mrosewski, Emilia Scortanu, Paulina Stiuj and Alexandar Terziyski",
        usedSoftware: "Adobe Photoshop, Illustrator, Indesign, After Effects, Premiere Pro and Figma",
        projectFull: "https://assets.adobe.com/id/urn:aaid:sc:US:c2c67571-e939-4d45-bbc9-6f5182721ea4?view=published",
        },
        {
        id: 2,
        nameProjects: "EndPlastic Campaign",
        imageProjects: endPlastic,   
        descriptionShort: "Campaign raising awareness about plastic pollution",
        descriptionLong: "EndPlastic is a collaboration project with Greenpeace, which's main objective is to make people sign the Global Plastic Treaty and raise awareness in the fight against microplastics and plastic pollutions. We relied on making a website promoting the treaty, giving live examples, user stories and a promotional video.",
        teamMembers: "Ivan Kirev and Alexandar Terziyski",
        usedSoftware: "Adobe Photoshop, Illustrator, Indesign, Visual Studio Code, Premiere Pro and Figma",
        projectFull: "https://assets.adobe.com/id/urn:aaid:sc:US:410485a1-8d91-4a8d-8fce-0579f7e7bd95?view=published",
        },
        {
        id: 3,
        nameProjects: "ChargeFinder App",
        imageProjects: chargeFinder,
        descriptionShort: "Application locating the EV charging stations around Denmark",
        descriptionLong: "Since Denmark is a country, who relies on sustainability and keeping the environment clean and healthy, hence why we decided to make an app showing the location for charging stations EXCLUSIVELY for Denmark. This app is perfect for Danish Electric Vehicle and people recently emigrating from a fuel to an electric car.", 
        teamMembers: "Ivan Kirev and Alexandar Terziyski", 
        usedSoftware: "Adobe Illustrator, Indesign, Figma and Figjam",     
        projectFull: "https://assets.adobe.com/id/urn:aaid:sc:US:a803e93e-1f0a-4ca8-93a2-cfff856f49fe?view=published", 
        },
        {
        id: 4,
        nameProjects: "The Butterfly",
        imageProjects: shortMovieShot,
        descriptionShort: "Short Movie Project",
        descriptionLong: "The Butterfly is a short movie we made for our Video Production class. When making this movie we combined our filming and editing skills with our unique and interesting storytelling ideas.",
        teamMembers: "Ivan Kirev, Nadine Mrosewski, Emilia Scortanu, Paulina Stiuj and Alexandar Terziyski",  
        usedSoftware: "Adobe Premiere Pro, After Effects, Photoshop and Illustrator",    
        projectFull: "https://assets.adobe.com/id/urn:aaid:sc:US:1450a142-2d88-4952-838d-791c2e501b11?view=published", 
        },
        {
        id: 5,
        nameProjects: "Graphic Design Artworks",
        imageProjects: artwork,
        descriptionShort: "Artoworks I have created",
        descriptionLong: "This here is one of the artworks I created, with the sole reason of just having fun. Most of them are related to my interests, such as video games, travel and computers.",       
        teamMembers: "Ivan Kirev",
        usedSoftware: "Adobe Photoshop and Illustrator",
        projectFull: "https://assets.adobe.com/id/urn:aaid:sc:US:492d43c8-55da-4264-add7-221c749250af?view=published", 
        },
        
    ]);
    
    return { projects };
}