import Header from "components/header";
import Footer from "components/footer";
import Contact from "components/contact";
import Image from "next/image";
import { useState, createContext, useEffect } from "react";
import ProjectButton from "components/projectButton";
import { Link } from 'react-scroll';

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
  ]

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

  return (
    <>
    <dropDownMenuContext.Provider value={[[isDropDownMenu, setIsDropDownMenu]]}>
      <Header></Header>
    </dropDownMenuContext.Provider>
      <main className='w-full normal:w-[1349px] h-fit flex flex-col items-center'>
        <section className='normal:w-screen w-full h-fit flex justify-center relative'> 
          <div className="max-w-[950px] minLaptop:px-0 minTablet:px-[100px] smartPhone:px-[70px] px-[50px] min-h-full h-fit flex pt-[120px] minTablet:pb-[200px] phone:pb-[150px] pb-[85px]">
            <div className="z-20 flex flex-col w-full h-fit font-poppins">
              <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center">
                <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">Hey there</p>
                <span className="text-[20px] ml-[5px]">&#x1F44B;</span>
              </div>
              <h1 className="text-[70px] font-[700] text-[#E6F1FF]">my name is okoli akachukwu</h1>
              <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6]">I specialize in crafting captivating and interactive user interfaces using cutting-edge technologies like React and Next.js. My passion lies in transforming creative visions into seamless, visually appealing web experiences that engage and delight users.</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#131862] opacity-[0.2]"></div>
          </div>
        </section>
        <section id="projects" className="max-w-[950px] minLaptop:px-0 minTablet:px-[100px] smartPhone:px-[70px] px-[50px] h-fit min-h-screen pt-[150px] flex flex-col font-poppins">
          <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center z-20">
            <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">Few things i have built</p>
            <span className="text-[20px] ml-[5px]">&#128104;&#8205;&#128187;</span>
          </div>
          <h2 className="text-[70px] font-[700] w-full text-[#E6F1FF] z-20">my projects</h2>
          <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6] z-20">My portfolio showcases a wide range of dynamic and responsive websites, interactive applications, and seamless user interfaces that I have crafted as a skilled web developer. With a strong focus on delivering high-quality and visually appealing web solutions, I take pride in my commitment to ensuring an exceptional user experience.</p>
          <div className="z-20 flex flex-col w-full h-fit mt-[30px]">
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
        </section>
        <section id="workexperience" className="max-w-[950px] minLaptop:px-0 px-[100px] h-fit min-h-screen pt-[150px] flex flex-col font-poppins">
          <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center z-20">
            <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">My Professional Experience with Companies</p>
            <span className="text-[20px] ml-[10px]">💼</span>
          </div>
          <h2 className="text-[70px] font-[700] w-full text-[#E6F1FF] z-20">work experience</h2>
          <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6] z-20">My professional journey has allowed me to work with dedicated teams, collaborate on exciting projects, and stay at the forefront of web development technologies. Below is a glimpse of my valuable experiences and contributions in the realm of frontend web development.</p>
          <div className="mt-[50px] flex flex-col w-full h-fit z-20">
            <h3 className="text-[20px] text-[#E6F1FF]">Neulogics Solutions</h3>
            <div className="flex minLaptop:flex-row flex-col justify-between text-[#64ffd9] text-[15px] mt-[10px] ml-[10px]">
              <p>Frontend Web Developer (Student Intern)</p>
              <p className="mt-[10px] minLaptop:mt-0">January 2022 - November 2022</p>
            </div>
            <ul className="ml-[30px] mt-[20px] list-none bullet w-full h-fit">
              <li className="text-[#E6F1FFE6] text-[15px]">I acquired the fundamental knowledge of front-end web development, encompassing key languages such as CSS, HTML, and JavaScript.</li>
              <li className="text-[#E6F1FFE6] text-[15px] mt-[10px]">With guided learning and self-study, I gained proficiency in several front-end frameworks, including React, Bootstrap, and TailwindCSS.</li>
              <li className="text-[#E6F1FFE6] text-[15px] mt-[10px]">Through user testing during its development phase, I provided feedback constantly to one of the company's crucial mobile applications.</li>            
              <li className="text-[#E6F1FFE6] text-[15px] mt-[10px]">Partook in collaborative tasks with other employees of the company by editing various files and uploading them to Github through Git.</li>
            </ul>
          </div>
        </section>
        <section id="skills" className="max-w-[950px] minLaptop:px-0 px-[100px] h-fit min-h-screen pt-[150px] flex flex-col font-poppins">
          <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center z-20">
            <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">My Tools and Skills</p>
            <span className="text-[20px] ml-[10px]">🛠️</span>
          </div>
          <h2 className="text-[70px] font-[700] w-full text-[#E6F1FF] z-20">skillset</h2>
          <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6] z-20">I harness various programming languages and frameworks to create intuitive and interactive websites, and applications with a focus on user-centric design.</p>
          <div className="flex flex-col mt-[50px] phone:items-end items-center z-20">
            <h3 className="text-[#E6F1FF] text-[20px]">Frameworks and Libraries</h3>
            <div className="flex flex-row mt-[30px]">
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/react.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-soft relative"/>
                <p>React</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/next.js.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softt delay-700 relative"/>
                <p>Next.js</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/tailwind.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softtt delay-700 relative"/>
                <p>Tailwind <br/>CSS</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/flutter.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softt delay-700 relative"/>
                <p>Flutter</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/bootstrap.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softttt delay-700 relative"/>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[50px] phone:items-start items-center z-20">
            <h3 className="text-[#E6F1FF] text-[20px]">Languages</h3>
            <div className="flex flex-row mt-[30px]">
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/html.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softt relative"/>
                <p>HTML</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/css.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-soft delay-700 relative"/>
                <p>CSS</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/dart.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softtt delay-700 relative"/>
                <p>Dart</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/javascript.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softttt delay-700 relative"/>
                <p>Javascript</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[50px] phone:items-end items-center z-20">
            <h3 className="text-[#E6F1FF] text-[20px]">Tools and Technologies</h3>
            <div className="flex flex-row mt-[30px]">
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/firebase.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softtt relative"/>
                <p>Firebase</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/git.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softttt relative"/>
                <p>Git</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF] mr-[40px]">
                <Image src='/skills/framermotion.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-softt delay-700 relative"/>
                <p>Framer<br/>motion</p>
              </div>
              <div className="flex flex-col items-center text-center w-fit h-fit text-[#E6F1FF]">
                <Image src='/skills/node.js.png' width={50} height={50} alt="illustration of a skill" className="object-cover h-full animate-soft delay-700 relative"/>
                <p>Node.js</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="max-w-[950px] minLaptop:px-0 px-[100px] h-fit min-h-screen pt-[150px] pb-[100px] flex flex-col font-poppins">
          <div className="w-full max-w-[200px] border-b-[1px] pb-[10px] flex flex-row items-center z-20">
            <p className="uppercase text-[14px] font-[600] text-[#E6F1FF]">Contact</p>
            <span className="text-[20px] ml-[10px]">📞</span>
          </div>
          <h2 className="text-[70px] font-[700] w-full text-[#E6F1FF] z-20">talk to me</h2>
          <p className="text-[18px] mt-[25px] font-[400] text-[#E6F1FFE6] z-20">Feel free to reach out if you have any inquiries, collaboration opportunities, or just want to say hello. I'm always excited to connect with fellow developers and enthusiasts. Looking forward to hearing from you!</p>
          <notificationContext.Provider value={[setNotificationIcon, setErrorTitle, setErrorMessage, setShowNotification]}>
            <Contact></Contact>
          </notificationContext.Provider> 
        </section>
      </main>
      {/* <section className="w-full h-screen fixed top-0 z-10"> 
        <div className="absolute bottom-[150px] right-[-100px] flex flex-row items-center h-fit w-fit rotate-90">
          <Link className="relative left-0 hover:left-[-10px] mr-[30px] transition-[left] duration-[400ms]" href='mailto:okoli555aka@gmail.com'><p className="text-[#e6f1ff] font-poppins text-[14px]">okoli555aka@gmail.com</p></Link>
          <div className="w-[120px] h-[1px] bg-white"></div>
        </div>
        <div className="absolute bottom-[0px] left-[50px] flex flex-col items-center h-fit w-fit">
          <div className="flex flex-col w-fit h-fit mb-[30px]">
            <div className="transition-[top] duration-[400ms] relative top-0 hover:top-[-2px] w-fit h-fit">
              <Link className="w-fit text-[#E6F1FFE6] hover:text-[#64ffd9]" href='https://www.linkedin.com/in/okoli-akachukwu-6b321b178/'><i className="fa-brands fa-github"></i></Link>
            </div>
            <div className="transition-[top] duration-[400ms] mt-[20px] relative top-0 hover:top-[-2px] w-fit h-fit">
              <Link className="w-fit text-[#E6F1FFE6] hover:text-[#64ffd9]" href='https://www.linkedin.com/in/okoli-akachukwu-6b321b178/'><i className="fa-brands fa-linkedin-in"></i></Link>
            </div>
          </div>
          <div className="h-[120px] w-[1px] bg-white"></div>
        </div>
      </section> */}
      <section style={{display : (isDropDownMenu) ? 'flex': 'none'}} className="h-full fixed right-0 top-0 hidden w-[300px] bg-[#09132e] font-robotoMono justify-center z-50 flex-col"> 
        <button className='flex absolute top-[50px] right-[50px]' onClick={() => {setIsDropDownMenu(false)}}><Image src='/close.png' width={30} height={30} alt="illustration of a hamburger menu"/></button>
        <nav className='flex-col h-fit w-full items-center flex'>
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
      <section className="notification fixed justify-center w-full h-screen z-30 top-0" style={{display : (showNotification) ? 'flex' : 'none'}}>
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
            <button className="w-fit flex justify-center items-center" onClick={() => {setShowNotification(false)}}>
                <i className="fa-solid fa-xmark" id="close-error"></i>
            </button>
        </div>
        <div className="bg-black opacity-[0.6] absolute w-full h-full top-0"></div>
      </section>
      <Footer></Footer>
    </>
  )
}
