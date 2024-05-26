import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Object Detection in Adverse Weather Conditions',
        description: "Enhanced distorted, low-light images by leveraging the VOC 2007 dataset, developing a Differential Image Processing (DIP) module \
        and a CNN. Optimized the DIP filter parameters through model training and improved the \
        object detection capabilities of YOLOv3, achieving a mean average precision of 71%.",
        tools: ['Python', 'PyTorch', 'NumPy', 'OpenCV','Linux', 'CNN'],
        code: 'https://github.com/Tirna29/object-detection-in-adverse-weather-using-YOLOv3',
        demo: '',
        image: ayla,
        role: '',
    },
    {
        id: 2,
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
        id: 3,
        name: 'Generalizing Graph HyperNetworks',
        description: "Pioneered GHN-2 adaptation for unseen datasets using curriculum learning, eliminating retraining needs by using pre-trained GHN-2 weights for initializing DNN models such as \
        Resnet-50 and Resnet-50-2. Optimized with \
        CIFAR-10 and CIFAR-100, thereby reducing the training time by 16% and achieving a breakthrough 84.85% accuracy on DNNs.",
        tools: ['Linux', 'Python', 'PyTorch', 'Matplotlib', 'Scikit-learn', 'NumPy', 'Pandas', 'CNN'],
        code: '',
        demo: '',
        image: ayla,
        role: '',
    },
    {
        id: 4,
        name: 'Real Time Market Insights Dashboard',
        description: 'Developed a real-time analytics dashboard for financial markets, using open-source datasets and GraphQL for optimized data retrieval.\
        Employed React and the FusionCharts Suite XT JavaScript library for the frontend, crafting a responsive interface that enhances live market data visualization.',
        tools: ['React', 'GraphQL', 'JavaScript'],
        code: '',
        role: '',
        demo: '',
        image: realEstate,
        
    },
    {
        id: 5,
        name: 'Package Delivery Application',
        description: "Managed a team of 4 in creating a package delivery website, consisting of features such as package booking, dual login capabilities, \
        and accurate cost estimation. Implemented the backend using ASP.NET to create RESTful APIs in C#, complemented by \
        Entity Framework Core for data access and PostgreSQL for database management.",
        tools: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'C#', 'ASP.NET', 'Entity Framework Core'],
        role: '',
        code: '',
        demo: '',
        image: crefin,
        
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