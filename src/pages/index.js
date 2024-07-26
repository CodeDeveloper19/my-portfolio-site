import Header from "components/header";
import Footer from "components/footer";
import Contact from "components/contact";
import Image from "next/image";
import { useState, createContext, useEffect } from "react";
import ProjectButton from "components/projectButton";
import { Link } from 'react-scroll';
import Projects from "components/projects";

export const notificationContext = createContext();
export const buttonContext = createContext();
export const dropDownMenuContext = createContext();

export default function Home() {

  const [showNotification, setShowNotification] = useState(false);
  const [notificationIcon, setNotificationIcon] = useState('/contact/done.gif');
  const [errorTitle, setErrorTitle] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentProjectType, setCurrentProjectType] = useState('Featured');
  const [isDropDownMenu, setIsDropDownMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [projectData, setProjectData] = useState([]);

  const buttonDetails = [
     {
      name: 'Featured',
      url: '/projects/star.png'
     },
     {
      name: 'Challenges',
      url: '/projects/challenge.png'
     },
     {
      name: 'Web Development',
      url: '/projects/web_development.png'
     },
     {
      name: 'Mobile Development',
      url: '/projects/mobile_development.png'
     },
  ];

  const featuredProjectData = [
    {
      title: 'FoodZero Restaurant Website',
      images: [
        { src: '1.png', urlHead: '/projects/foodzero/' },
        { src: '2.png', urlHead: '/projects/foodzero/' },
        { src: '3.png', urlHead: '/projects/foodzero/' },
      ],
      tags: [
        'Framer Motion',
        'TailwindCSS',
        'React',
        'Firebase'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/FoodZero-Restuarant-and-Food-Website',
      live: 'https://foodzero-restuarant.netlify.app/'
    },
    {
      title: 'Home Affairs',
      images: [
        { src: '1.png', urlHead: '/projects/homeaffairs/' },
        { src: '2.png', urlHead: '/projects/homeaffairs/' },
        { src: '3.png', urlHead: '/projects/homeaffairs/' },
      ],
      tags: [
        'TailwindCSS',
        'React',
        'Timbu API',
        'NextJs',
        'React'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/hng_shopping_site',
      live: 'https://hng-shopping-website.netlify.app/'
    },
    {
      title: 'Link Sharing App',
      images: [
        { src: '1.png', urlHead: '/projects/linksharingapp/' },
        { src: '2.png', urlHead: '/projects/linksharingapp/' },
        { src: '3.png', urlHead: '/projects/linksharingapp/' },
      ],
      tags: [
        'Typescript',
        'Tailwind',
        'Firebase',
        'Frontend Mentor',
        'NextJs',
        'React'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/link_sharing_app',
      live: 'https://oa-link-sharing-app.netlify.app/'
    },
    {
      title: 'Election Alert Mobile App',
      images: [
        { src: '1.jpg', urlHead: '/projects/electionalert/' },
        { src: '2.jpg', urlHead: '/projects/electionalert/' },
        { src: '3.jpg', urlHead: '/projects/electionalert/' },
      ],
      tags: [
        'Flutter',
        'Dart',
        'Firebase',
        'Mobile App Design',
        'NodeJs'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/Portfolio-App',
      live: ''
    },
  ];

  const challengesProjectData = [
    {
      title: 'Rock, Paper, Scissors Challenge',
      images: [
        { src: '1.png', urlHead: '/projects/rockpaperscissors/' },
        { src: '2.png', urlHead: '/projects/rockpaperscissors/' },
        { src: '3.png', urlHead: '/projects/rockpaperscissors/' },
      ],
      tags: [
        'React',
        'CSS',
        'Frontend Elementor'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/rock-paper-scissors',
      live: 'https://rock-paper-scissors-oa.netlify.app/'
    },
    {
      title: 'Room Homepage Challenge',
      images: [
        { src: '1.png', urlHead: '/projects/roomhomepage/' },
        { src: '2.png', urlHead: '/projects/roomhomepage/' },
        { src: '3.png', urlHead: '/projects/roomhomepage/' },
      ],
      tags: [
        'React',
        'CSS',
        'Frontend Elementor'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/Room-HomePage-Challenge-Hub-',
      live: 'https://room-homepager.netlify.app/'
    },
    {
      title: 'Home Affairs',
      images: [
        { src: '1.png', urlHead: '/projects/homeaffairs/' },
        { src: '2.png', urlHead: '/projects/homeaffairs/' },
        { src: '3.png', urlHead: '/projects/homeaffairs/' },
      ],
      tags: [
        'TailwindCSS',
        'React',
        'Timbu API',
        'NextJs',
        'React'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/hng_shopping_site',
      live: 'https://hng-shopping-website.netlify.app/'
    },
    {
      title: 'Link Sharing App',
      images: [
        { src: '1.png', urlHead: '/projects/linksharingapp/' },
        { src: '2.png', urlHead: '/projects/linksharingapp/' },
        { src: '3.png', urlHead: '/projects/linksharingapp/' },
      ],
      tags: [
        'Typescript',
        'Tailwind',
        'Firebase',
        'Frontend Mentor',
        'NextJs',
        'React'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/link_sharing_app',
      live: 'https://oa-link-sharing-app.netlify.app/'
    },
  ];

  const webDevelopmentProjectData = [
    {
      title: 'Home Affairs',
      images: [
        { src: '1.png', urlHead: '/projects/homeaffairs/' },
        { src: '2.png', urlHead: '/projects/homeaffairs/' },
        { src: '3.png', urlHead: '/projects/homeaffairs/' },
      ],
      tags: [
        'TailwindCSS',
        'React',
        'Timbu API',
        'NextJs'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/hng_shopping_site',
      live: 'https://hng-shopping-website.netlify.app/'
    },
    {
      title: 'FoodZero Restaurant Website',
      images: [
        { src: '1.png', urlHead: '/projects/foodzero/' },
        { src: '2.png', urlHead: '/projects/foodzero/' },
        { src: '3.png', urlHead: '/projects/foodzero/' },
      ],
      tags: [
        'Framer Motion',
        'TailwindCSS',
        'React',
        'Firebase'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/FoodZero-Restuarant-and-Food-Website',
      live: 'https://foodzero-restuarant.netlify.app/'
    },
    {
      title: 'Link Sharing App',
      images: [
        { src: '1.png', urlHead: '/projects/linksharingapp/' },
        { src: '2.png', urlHead: '/projects/linksharingapp/' },
        { src: '3.png', urlHead: '/projects/linksharingapp/' },
      ],
      tags: [
        'Typescript',
        'Tailwind',
        'Firebase',
        'Frontend Mentor',
        'NextJs'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/link_sharing_app',
      live: 'https://oa-link-sharing-app.netlify.app/'
    },
    {
      title: 'myPortfolio Login/Signup Page',
      images: [
        { src: '1.png', urlHead: '/projects/myportfolio/' },
        { src: '2.png', urlHead: '/projects/myportfolio/' },
        { src: '3.png', urlHead: '/projects/myportfolio/' },
      ],
      tags: [
        'HTML',
        'CSS',
        'Firebase'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/Portfolio-App',
      live: 'https://myypportfolio.netlify.app/'
    },
  ];

  const mobileDevelopmentProjectData = [
    {
      title: 'Election Alert Mobile App',
      images: [
        { src: '1.jpg', urlHead: '/projects/electionalert/' },
        { src: '2.jpg', urlHead: '/projects/electionalert/' },
        { src: '3.jpg', urlHead: '/projects/electionalert/' },
      ],
      tags: [
        'Flutter',
        'Dart',
        'Firebase',
        'Mobile App Design',
        'NodeJs'
      ],
      gitHub: 'https://github.com/CodeDeveloper19/Portfolio-App',
      live: ''
    },
  ];

  useEffect((() => {
    console.log(screenWidth);
    if (screenWidth >= 500) {
      setIsDropDownMenu(false);
    }
  }), [screenWidth]);

  useEffect(() => {
    // Function to update the screenWidth state
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener to the window resize event
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial screen width
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(currentProjectType);
    switch(currentProjectType) {
      case 'Featured':
        setProjectData(featuredProjectData);
        break;
      case 'Challenges':
        setProjectData(challengesProjectData);
        break;
      case 'Web Development':
        setProjectData(webDevelopmentProjectData);
        break;
      case 'Mobile Development':
        setProjectData(mobileDevelopmentProjectData);
        break;
    }
  }, [currentProjectType])

  return (
    <>
    <dropDownMenuContext.Provider value={[[isDropDownMenu, setIsDropDownMenu]]}>
      <Header></Header>
    </dropDownMenuContext.Provider>
      <main className='w-full normal:w-[1349px] h-fit flex flex-col items-center z-20'>
        <section className='relative flex justify-center w-full normal:w-screen h-fit'> 
          <div className="max-w-[950px] minLaptop:px-0 minTablet px-[50px]:minTablet:px-[100px] px-[50px] min-h-full h-fit flex pt-[120px] minTablet:pb-[200px] phone:pb-[150px] pb-[85px]">
            <div className="z-20 flex flex-col w-full h-full font-poppins">
              <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center">
                <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">Hey there</p>
                <span className="text-[20px] ml-[5px]">&#x1F44B;</span>
              </div>
              <h1 className="text-[37px] smartPhone:text-[40px] phone:text-[70px] font-[700] text-[#E6F1FF]">my name is okoli akachukwu</h1>
              <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6]">I specialize in crafting captivating and interactive user interfaces using cutting-edge technologies like React and Next.js. My passion lies in transforming creative visions into seamless, visually appealing web experiences that engage and delight users.</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#131862] opacity-[0.2]"></div>
          </div>
        </section>
        <section id="projects" className="max-w-[950px] minLaptop:px-0 minTablet px-[50px] minTablet:px-[100px] h-fit pt-[150px] flex flex-col font-poppins">
          <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center z-20">
            <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">Few things i have built</p>
            <span className="text-[20px] ml-[5px]">&#128104;&#8205;&#128187;</span>
          </div>
          <h2 className="text-[37px] smartPhone:text-[40px] phone:text-[70px] font-[700] w-full text-[#E6F1FF] z-20">my projects</h2>
          <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6] z-20">My portfolio showcases a wide range of dynamic and responsive websites, interactive applications, and seamless user interfaces that I have crafted as a skilled web developer. With a strong focus on delivering high-quality and visually appealing web solutions, I take pride in my commitment to ensuring an exceptional user experience.</p>
          <div className="z-20 flex flex-col w-full h-fit mt-[30px] mb-[100px]">
            <div className="flex flex-col w-fit laptop:flex-row text-[#E6F1FFE6] ml-[10px]">
              <buttonContext.Provider value={[[currentProjectType, setCurrentProjectType]]}>
                {
                  buttonDetails.map((data) => {
                    return <ProjectButton key={data.name} {...data}/>
                  })
                }
              </buttonContext.Provider>
            </div>
          </div>
          <div className="flex flex-col w-full h-fit text-[#E6F1FF]">
            {
              projectData.map((data) => {
                return <Projects key={data.title} {...data}/>
              })
            }
          </div>
        </section>
        <section id="workexperience" className="max-w-[950px] minLaptop:px-0 px-[50px] minTablet:px-[100px] h-fit pt-[70px] flex flex-col font-poppins">
          <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center z-20">
            <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">My Professional Experience with Companies</p>
            <span className="text-[20px] ml-[10px]">💼</span>
          </div>
          <h2 className="text-[37px] smartPhone:text-[40px] phone:text-[70px] font-[700] w-full text-[#E6F1FF] z-20">work experience</h2>
          <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6] z-20">My professional journey has allowed me to work with dedicated teams, collaborate on exciting projects, and stay at the forefront of web development technologies. Below is a glimpse of my valuable experiences and contributions in the field of frontend web development.</p>
          <div className="mt-[50px] flex flex-col w-full h-fit z-20">
            <h3 className="text-[20px] text-[#E6F1FF]">Neulogics Solutions</h3>
            <div className="flex minLaptop:flex-row flex-col justify-between text-[#64ffd9] text-[15px] mt-[10px] ml-[10px]">
              <p>Frontend Web Developer (Student Intern)</p>
              <p className="mt-[10px] minLaptop:mt-0">January 2022 - November 2022</p>
            </div>
            <ul className="ml-0 minTablet:ml-[30px] mt-[20px] list-none bullet w-full h-fit">
              <li className="text-[#E6F1FFE6] text-[15px]">I acquired the fundamental knowledge of front-end web development, encompassing key languages such as CSS, HTML, and JavaScript.</li>
              <li className="text-[#E6F1FFE6] text-[15px] mt-[10px]">With guided learning and self-study, I gained proficiency in several front-end frameworks, including React, Bootstrap, and TailwindCSS.</li>
              <li className="text-[#E6F1FFE6] text-[15px] mt-[10px]">Through user testing during its development phase, I provided feedback constantly to one of the company's crucial mobile applications.</li>            
              <li className="text-[#E6F1FFE6] text-[15px] mt-[10px]">Partook in collaborative tasks with other employees of the company by editing various files and uploading them to Github through Git.</li>
            </ul>
          </div>
        </section>
        <section id="skills" className="max-w-[950px] minLaptop:px-0 px-[50px] minTablet:px-[100px] h-fit pt-[150px] flex flex-col font-poppins">
          <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center z-20">
            <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">My Tools and Skills</p>
            <span className="text-[20px] ml-[10px]">🛠️</span>
          </div>
          <h2 className="text-[37px] smartPhone:text-[40px] phone:text-[70px] font-[700] w-full text-[#E6F1FF] z-20">skillset</h2>
          <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6] z-20">I harness various programming languages and frameworks to create intuitive and interactive websites, and applications with a focus on user-centric design.</p>
          <div className="flex flex-col mt-[50px] minTablet:items-end items-center z-20 gap-[30px]">
            <h3 className="text-[#E6F1FF] text-[20px] text-center">Frameworks and Libraries</h3>
            <div className="flex flex-col minTablet:flex-row gap-[40px] items-center">
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/react.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full animate-soft"/>
                <p>React</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/next.js.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full delay-700 animate-softt"/>
                <p>Next.js</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/tailwind.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full delay-700 animate-softtt"/>
                <p>Tailwind <br/>CSS</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/flutter.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full delay-700 animate-softt"/>
                <p>Flutter</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/bootstrap.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full delay-700 animate-softttt"/>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[50px] minTablet:items-start items-center z-20 gap-[30px]">
            <h3 className="text-[#E6F1FF] text-[20px] text-center">Languages</h3>
            <div className="flex flex-col minTablet:flex-row gap-[40px] items-center">
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/html.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full animate-softt"/>
                <p>HTML</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/css.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full delay-700 animate-soft"/>
                <p>CSS</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/dart.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full delay-700 animate-softtt"/>
                <p>Dart</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/javascript.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full delay-700 animate-softttt"/>
                <p>Javascript</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[50px] minTablet:items-end items-center z-20 gap-[30px]">
            <h3 className="text-[#E6F1FF] text-[20px] text-center">Tools and Technologies</h3>
            <div className="flex flex-col minTablet:flex-row gap-[40px] items-center">
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/firebase.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full animate-softtt"/>
                <p>Firebase</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/git.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full animate-softttt"/>
                <p>Git</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/framermotion.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full delay-700 animate-softt"/>
                <p>Framer<br/>motion</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/node.js.png' width={50} height={50} alt="illustration of a skill" className="relative object-cover h-full delay-700 animate-soft"/>
                <p>Node.js</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="max-w-[950px] minLaptop:px-0 px-[50px] minTablet:px-[100px] h-fit pt-[150px] pb-[100px] flex flex-col font-poppins">
          <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center z-20">
            <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">Contact</p>
            <span className="text-[20px] ml-[10px]">📞</span>
          </div>
          <h2 className="text-[37px] smartPhone:text-[40px] phone:text-[70px] font-[700] w-full text-[#E6F1FF] z-20">talk to me</h2>
          <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6] z-20">Feel free to reach out if you have any inquiries, collaboration opportunities, or just want to say hello. I'm always excited to connect with fellow developers and enthusiasts. Looking forward to hearing from you!</p>
          <notificationContext.Provider value={[setNotificationIcon, setErrorTitle, setErrorMessage, setShowNotification]}>
            <Contact></Contact>
          </notificationContext.Provider> 
        </section>
      </main>
      <section className="fixed top-0 hidden w-full h-screen laptop:block"> 
        <div className="absolute bottom-[150px] right-[-100px] flex flex-row items-center h-fit w-fit rotate-90">
          <a target="_blank" rel="noopener noreferrer" className="relative left-0 hover:left-[-10px] mr-[30px] transition-[left] duration-[400ms]" href='mailto:okoli555aka@gmail.com'><p className="text-[#e6f1ff] font-poppins text-[14px]">okoli555aka@gmail.com</p></a>
          <div className="w-[120px] h-[1px] bg-white"></div>
        </div>
        <div className="absolute bottom-[0px] left-[50px] flex flex-col items-center h-fit w-fit">
          <div className="flex flex-col w-fit h-fit mb-[30px]">
            <div className="transition-[top] duration-[400ms] relative top-0 hover:top-[-2px] w-fit h-fit">
              <a target="_blank" rel="noopener noreferrer" className="w-fit text-[#E6F1FFE6] hover:text-[#64ffd9]" href='https://github.com/CodeDeveloper19'><i className="fa-brands fa-github"></i></a>
            </div>
            <div className="transition-[top] duration-[400ms] mt-[20px] relative top-0 hover:top-[-2px] w-fit h-fit">
              <a target="_blank" rel="noopener noreferrer" className="w-fit text-[#E6F1FFE6] hover:text-[#64ffd9]" href='https://www.linkedin.com/in/okoli-akachukwu-6b321b178/'><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="h-[120px] w-[1px] bg-white"></div>
        </div>
      </section>
      <section style={{display : (isDropDownMenu) ? 'flex': 'none'}} className="h-full fixed right-0 top-0 hidden w-[300px] bg-[#09132e] font-robotoMono justify-center z-50 flex-col"> 
        <button className='flex absolute top-[50px] right-[50px]' onClick={() => {setIsDropDownMenu(false)}}><Image src='/close.png' width={30} height={30} alt="illustration of a hamburger menu"/></button>
        <nav className='flex flex-col items-center w-full h-fit'>
            <Link to='projects' smooth={true} duration={500} className='flex flex-col group hover:cursor-pointer mb-[30px]'>
              <p className='text-white'>Projects</p>
            </Link>
            <Link to='workexperience' smooth={true} duration={500} className='flex flex-col group hover:cursor-pointer mb-[30px]'>
              <p className='text-white'>Work Experience</p>                    
            </Link>
            <Link to='skills' smooth={true} duration={500} className='flex flex-col group hover:cursor-pointer mb-[30px]'>
             <p className='text-white'>Skills</p>                    
            </Link>
            <Link to='contact' smooth={true} duration={500} className='flex flex-col group hover:cursor-pointer mb-[30px]'>
              <p className='text-white'>Contact</p>                    
            </Link>
        </nav>
      </section>
      <section className="fixed top-0 z-30 justify-center w-full h-screen notification" style={{display : (showNotification) ? 'flex' : 'none'}}>
        <div className="relative top-[50px] h-fit min-h-[80px] w-full max-w-[420px] border-[1px] border-white/[.3] rounded-[20px] flex flex-row z-10" style={{backgroundColor: (errorTitle === 'Success!' ? 'rgb(152, 251, 152)' : 'rgb(251, 206, 177)')}}>
            <div className="w-[20%] h-[80px] flex items-center justify-center">
                <div className="w-[40px] h-[40px] relative">
                    <Image fill className="object-cover" alt="notification_icon" src={notificationIcon}/>
                </div>
            </div>
            <div className="flex flex-col w-[70%] h-fit pt-[15px] text-[#191970]">
                <h3 id="error-title" className="text-[18px] font-[700]">{errorTitle}</h3>
                <h5 id="error-message" className="text-[13px] font-[400]">{errorMessage}</h5>
            </div>
            <button className="flex items-center justify-center w-fit" onClick={() => {setShowNotification(false)}}>
                <i className="fa-solid fa-xmark" id="close-error"></i>
            </button>
        </div>
        <div className="bg-black opacity-[0.6] absolute w-full h-full top-0"></div>
      </section>
      <Footer></Footer>
    </>
  )
}
