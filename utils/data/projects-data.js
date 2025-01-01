import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Improving DNN Initialization with Curriculum Learning',
        description: "Enhanced the efficiency of deep neural network (DNN) training by initializing models with GHN-2 weights using transfer learning and \
            curriculum learning to dynamically adapt the model to new datasets. Boosted ResNet-50 performance on the CIFAR-100 dataset by achieving a 25% accuracy \
            improvement and reducing training epochs by 50% compared to training the model from scratch.",
        tools: ['Linux', 'Python', 'PyTorch', 'Matplotlib', 'Scikit-learn', 'NumPy', 'Pandas', 'CNN'],
        code: '',
        demo: '',
        image: ayla,
        role: '',
    },
    {
        id: 2,
        name: 'Object Detection in Adverse Weather Conditions',
        description: "Created an object detection system using an Image processing module, a custom CNN, and YOLOv3 using PyTorch, NumPy, Matplotlib, and OpenCV, \
            resulting in adaptive object detection in adverse weather conditions. Optimized filter parameters of the image processing module by tuning the CNN based \
            on YOLOv3 output, achieving a 71% mean average precision in foggy and low-light images.",
        tools: ['Python', 'PyTorch', 'NumPy', 'OpenCV','Linux', 'CNN'],
        code: 'https://github.com/Tirna29/object-detection-in-adverse-weather-using-YOLOv3',
        demo: '',
        image: ayla,
        role: '',
    },
    {
        id: 3,
        name: 'Underwater Image Enhancement Model',
        description: "Built a conditional GAN-based model using PyTorch, NumPy, and SciPy, employing a perceptual loss function to optimize color, texture, and \
            style for improved underwater image quality. Achieved 82% Structural Similarity and 28% Peak Signal-to-Noise Ratio through model training on the EUVP \
            image dataset, outperforming state-of-the-art models in qualitative and quantitative evaluations.",
        tools: ['Linux', 'Python', 'PyTorch', 'Scipy', 'Numpy', 'Pillow'],
        code: 'https://github.com/Tirna29/enhancing-underwater-images-using-GAN',
        demo: '',
        image: ayla,
        role: '',
    },
    
    {
        id: 4,
        name: 'Netflix Recommendation System',
        description: 'Developed a content-based movie recommendation system using Python, Matplotlib, Scikit-learn, NumPy, PyCharm, and Pandas. Achieved high content matching \
            accuracy and a 10% improvement in recommendations by leveraging a KNN classifier. Utilized MongoDB for data storage and derived actionable insights from data \
            analysis. Applied data visualization techniques such as Word Clouds to gain insights and enhance recommendation accuracy.',
        tools: ['Python', 'MongoDB', 'Data Analysis', 'Machine Learning', 'NumPy'],
        code: 'https://github.com/Tirna29/netflix-recommendation-system',
        role: '',
        demo: '',
        image: realEstate,
        
    },
    {
       id: 5,
        name: 'Real Time Market Insights Dashboard',
        description: 'Developed a real-time analytics dashboard for financial markets, using open-source datasets and GraphQL for optimized data retrieval.\
        Employed React and the FusionCharts Suite XT JavaScript library for the frontend, crafting a responsive interface that enhances live market data visualization.',
        tools: ['React', 'GraphQL', 'JavaScript'],
        code: '',
        role: '',
        demo: '',
        image: realEstate,
        
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
