import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SecretSphere Website',
        description: "Designed a secure web application where users can share their thoughts anonymously. \
        Implemented Google OAuth 2.0 for robust authentication and leveraged PostgreSQL for efficient and \
        secure user data storage, contributing to a seamless user experience.",
        tools: ['HTML', 'CSS', 'React', 'Express.js', 'PostgreSQL', 'Google OAuth 2.0'],
        role: '',
        code: 'https://github.com/Tirna29/SecretSphere-website',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Dynamic To-Do List Application',
        description: 'Developed a web application with custom list functionality using HTML, CSS, Express.js, and MongoDB, \
        achieving a 50% reduction in server response time and ensuring data persistence for user sessions. Implemented EJS templating \
        and custom date management, resulting in a 20% increase in user engagement.',
        tools: ['HTML', 'CSS', "Express.js", "MongoDB"],
        role: '',
        code: 'https://github.com/Tirna29/Dynamic-To-Do-List-Application',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'FinSight Dashboard',
        description: 'Developed a real-time analytics dashboard for financial markets leveraging Java and Spring Boot. Engineered RESTful services \
        and a GraphQL layer, resulting in 32% improved query efficiency and a React-driven frontend that enhanced live market data visualization. Leveraged \
        MongoDB for robust data management, achieving sub-second refresh rates for market trends.',
        tools: ['React', 'Java', 'Spring Boot', 'GraphQL', 'MongoDB'],
        code: '',
        role: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Netflix Recommendation System',
        description: "Utilized a Linux environment for the development of a content-based recommendation system. Achieved high content matching accuracy and a 10% improvement in movie \
        recommendations by leveraging a KNN classifier, MongoDB for data storage, and deriving actionable insights from data analysis.",
        tools: ['Linux', 'Python', 'Matplotlib', 'Scikit-learn', 'NumPy', 'Pandas', "MongoDB"],
        code: 'https://github.com/Tirna29/netflix-recommendation-system',
        demo: '',
        image: ayla,
        role: '',
    },
    {
        id: 5,
        name: 'Underwater Image Enhancement Model',
        description: "Developed within a Linux environment, this project utilized a Conditional GAN and a 90/10 training/validation split to enhance underwater images.\
        Leveraged PyTorch for model development, achieving 82% Structural Similarity and 28% Peak Signal-to-Noise Ratio. Introduced early stopping regularization in training to prevent overfitting and improve model efficiency.",
        tools: ['Linux', 'Python', 'PyTorch', 'Scipy', 'Numpy', 'Pillow'],
        code: 'https://github.com/Tirna29/enhancing-underwater-images-using-GAN',
        demo: '',
        image: ayla,
        role: '',
    },
    {
        id: 6,
        name: 'Generalizing Graph HyperNetworks',
        description: "Pioneered GHN-2 adaptation for unseen datasets using curriculum learning, eliminating retraining needs by using pre-trained GHN-2 weights for initializing the models. Optimized with \
        CIFAR-10, cut training time by 16%, achieving a breakthrough 84.85% accuracy on CNNs.",
        tools: ['Linux', 'Python', 'PyTorch', 'Matplotlib', 'Scikit-learn', 'NumPy', 'Pandas', 'CNN'],
        code: '',
        demo: '',
        image: ayla,
        role: '',
    }

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },