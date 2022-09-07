
import fyp from '../../images/projections/fyp.gif'
import mobile from '../../images/projections/mobileApp.gif'
import food from '../../images/projections/FoodCollection.gif'
import ocp from '../../images/projections/OCP.png'
import BIA678 from '../../images/projections/BIA678.gif'
import BIA660 from '../../images/projections/BIA660.gif'


const portfolioData = [
    {
        image: fyp,
        link: 'https://github.com/RishiMSingh/Classification-of-ultrasound-images-using-CNN',
        desc:'Classification-of-ultrasound-images-using-CNN',
        summary:'Fetal ultrasound imaging is commonly used in correctly identifying fetal anatomical struc- tures. This is particularly important in the first-trimester to diagnose any possible fetal malformations. However, manual examination of fetal malformation is influenced by inter- observer variation that can lead to errors in dating pregnancies. Incorrect dating of preg- nancy can lead to delay in diagnosis of fetal growth disorders and cause intrauterine fetal demise. A Machine Learning based approach has been adopted to reduce inter-observer variation and help standardise accurate image acquisition for the measurement of Crown- to-Rump-Length (CRL) on 11 − 13+6 weeks fetal ultrasound scans hence providing an accurate dating of the gestational age of a pregnancy. This work describes the use of a Transfer Learning approach which implements a pre- trained ResNet50 Deep Convolutional Neural Network (CNN) model, in classifying 11 − 13+6 weeks CRL fetal ultrasound images into correct and incorrect categories.',
        tech:'Python | TensorFlow | Matlab | Pre-trained CNN Architectures'
    },

    {
        image: mobile,
        link: 'https://github.com/RishiMSingh/Mobile-Application',
        desc:' Nottingham County Showground Mobile Application',
        summary:'This is a group project which was created for the Nottingham County Showground 2020.',
        tech:'Flutter | Adobe XD | Laravel'
    },
    {
        image: food,
        link: 'https://github.com/RishiMSingh/NTUFoodMPA',
        desc: 'NTU Food Collection App',
        summary:'Due to the overwhelming increase in the coronavirus numbers, the food industry has been at a significant loss, with sales dropping 56.6% compared to the previous year. A Order & Collect mobile application for Nottingham Trent University, specifically the Clifton campus has been created. Clifton Campus has three main food outlets which include, Barista, The Point, and The Refectory. These three food outlets can see long queues of students, staff, and the general public during busy hours. Due to the coronavirus, people would like to minimise unnecessary contact with other individuals.',
        tech:'Andriod Studios | Java | Firebase'
    },
    {
        image: ocp,
        link: 'https://github.com/RishiMSingh/AAD-OCDPharmacy/tree/main/AAD_OSP/OSP_Implementation',
        desc: 'OSP Pharmacy',
        summary:'The purpose of this project is to develop a bid for an existing medication request system. As a result of COVID-19, there is now a greater need for prescribed medication from pharmacies. The system now requires the automation of medication requests from repeat prescriptions, blood test scheduling and the checking of blood tests against the schedule, whenever medication is requested for collection. Automating these processes will not only remove the risk of human error but will also not require patients to have to remember to request their medication from pharmacies. Therefore, the process of requesting and collecting medication will become a much quicker, safer and efficient process for patients and pharmacists.',
        tech:'Flask | SQLite'
    },
    {
        image: BIA660,
        link: 'https://github.com/RishiMSingh/Identification-of-the-sentiments-and-emotions-of-stressful-tweets-on-Twitter-during-the-COVID-19-pan',
        desc: 'Identification of the sentiments and emotions of stressful tweets on Twitter during the COVID-19 pandemic',
        summary:'Identification of the sentiments and emotions of stressful tweets on Twitter during the COVID-19 pandemic using Web Mining and Machine Learning techniques.',
        tech:'PySpark | Spark MLib | Amazon EMR'

    },
    {
        image: BIA678,
        link: 'https://github.com/RishiMSingh/Big-Data-Technologies',
        desc: 'Diabetes Prediction',
        summary:'After the emergence of the COVID-19 outbreak, health has become a priority for many individuals. Diabetes is one of the diseases that has been on the rise for the past 12-15 years. During the COVID-19 pandemic, it was also noted that diabetic people were particularly vulnerable. Because of its ease of onset and difficulties of complete eradication, diabetes is frequently addressed. We will use PySpark to understand the diabetes health indicator data set and conduct an elaborate Exploratory Data Analysis (EDA). We also aim to use three machine learning algorithms to construct a binary classification that can predict whether or not a person has diabetes. Finally, the outcomes are evaluated in terms of performance and scalability.',
        tech:'PySpark | Spark MLib | Amazon EMR'
    },
  ]
    
  export default portfolioData;