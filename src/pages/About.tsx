import stackSvg from '../assets/icons/circleIcons/stack.svg'
import booksSvg from '../assets/icons/circleIcons/books.svg'
import checkmarkSvg from '../assets/icons/circleIcons/checkmark.svg'
import speedometerSvg from '../assets/icons/circleIcons/speedometer.svg'
import toolsSvg from '../assets/icons/circleIcons/tools.svg'
import monitorSvg from '../assets/icons/circleIcons/monitor.svg'
import linkedinSvg from '../assets/icons/linkedin.svg'

const aboutData = [
  {
    image: stackSvg,
    title: 'Full Stack Development',
    subtitle: 'Building versatile applications from front to back',
  },
  {
    image: monitorSvg,
    title: 'Developer Experience',
    subtitle: 'Empowering productive devs through efficient tooling and clear documentation',
  },
  {
    image: checkmarkSvg,
    title: 'Software Testing',
    subtitle: 'Ensuring software quality with unit, integration, and E2E tests',
  },
  {
    image: speedometerSvg,
    title: 'Agile Methodologies',
    subtitle: 'Implementing Kanban and Scrum for efficient and transparent project management',
  },
  {
    image: booksSvg,
    title: 'Mentoring',
    subtitle: 'Fostering professional growth and knowledge sharing',
  },
  {
    image: toolsSvg,
    title: 'Continuous Integration & Deployment',
    subtitle: 'Automating software delivery',
  },
]

export const About = () => {
  return (
    <div className="mx-14 text-center">
      <p className="pt-6 font-body leading-relaxed text-grey-20">
        <br /> I am based in Saint Louis.
        <br /> My specialty is full-stack Javascript development, but I have experience with a wide
        variety of languages and frameworks.
        <br /> I am passionate about building high-quality software and fostering a collaborative
        and inclusive work environment. <br />
      </p>
      <ConnectWithMe />
      <div>
        <h2 className="m-5 text-4xl font-bold">What I offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-20">
          {aboutData.map((item, index) => (
            <div key={index} className="flex flex-col items-center border-gray-500 m-5 p-5">
              <img src={item.image} className="align-middle" />
              <h2 className="text-lg md:text-3xl mt-2">{item.title}</h2>
              <h3 className="text-sm md:text-lg italic mt-3">{item.subtitle}</h3>
            </div>
          ))}
        </div>
        <div className="mb-20">
          <h1 className="text-4xl font-bold text-center my-8">About this site</h1>
          <div className="flex flex-col md:flex-row justify-center align-middle items-center">
            <h2>
              View the source code for this website and the tools used to build it &nbsp; &nbsp;
            </h2>
            <a href="https://github.com/devcjohn/codebycharlie">
              <img src="/img/github-mark.svg" className="h-15 w-15" title="Link to Github Repo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ConnectWithMe = () => {
  return (
    <div className="flex flex-col justify-center pt-20 pb-20 md:flex-row">
      <div className="flex items-center justify-center">
        <p className="font-body text-lg font-semibold uppercase text-grey-20">
          Connect with me &nbsp;
        </p>
        <div className="hidden sm:block">
          <i className="bx bx-chevron-right text-2xl text-primary"></i>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://www.linkedin.com/in/devcjohn">
          <img src={linkedinSvg} className="h-10 w-10" />
        </a>
      </div>
    </div>
  )
}
