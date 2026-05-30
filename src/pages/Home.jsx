import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaInstagram,FaDiscord, FaTwitter, FaGithub,FaSpotify ,FaPinterest} from "react-icons/fa";



function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "   17y/o with niche(performative) interests :3";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  useEffect(() => {
    let index = 0;
    setTypedText(""); 
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 75); 
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

 
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const sendEmail = (e) => {
  e.preventDefault();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs
    .send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: "Portfolio Contact Submission"
      },
      publicKey
    )
    .then(() => {
      alert("message sent :3");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <>
      

     <main>
  <div className="bg-[#F4E2DE] dark:bg-gray-600 h-[30rem] flex items-center px-6 lg:px-0">

    <div className="w-full max-w-4xl mx-0 lg:mx-auto text-left lg:text-center">
    
     <h1
  style={{ fontFamily: 'Gwendolyn, cursive' }}
  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-[10rem] text-[#9B5E85] dark:text-[#D291BC] mt-6 mb-4"
>
  Hey, I'm Aleeza
</h1>
 <p className="text-zinc-700 dark:text-gray-200 py-2 font-mono h-10 text-lg">
              {typedText}
              <span className="animate-pulse font-bold ml-0.5">|</span>
            </p>

      <div className="flex gap-3 mt-10 justify-start lg:justify-center">
        <a href="https://github.com/aleezazahra" target="_blank">
          <FaGithub className="text-zinc-600 dark:text-white hover:text-zinc-600" size={30} />
        </a>
        <a href="https://x.com/Aleezazahr74058" target="_blank">
          <FaTwitter className="text-zinc-600 dark:text-white hover:text-zinc-600" size={30} />
        </a>
       
        <a href="https://www.instagram.com/4leezaa_/" target="_blank">
          <FaInstagram className="text-zinc-600 dark:text-white hover:text-zinc-600" size={30} />
        </a>
        <a href="https://www.discord.com/aleezazahra" target="_blank">
          <FaDiscord className="text-zinc-600 dark:text-white hover:text-zinc-600" size={30} />
        </a>
        <a href="https://www.pinterest.com/aleezafr__/" target="_blank">
          <FaPinterest className="text-zinc-600 dark:text-white hover:text-zinc-600" size={30} />
        </a>
        <a href="https://open.spotify.com/user/312jd3v4eeyznekhqb3tskvsufja" target="_blank">
          <FaSpotify className="text-zinc-600 dark:text-white hover:text-zinc-600" size={30} />
        </a>
      </div>


     
    </div>
  </div>
</main>


      
<div className="bg-white dark:bg-gray-800 py-20 px-8">


  <section className=" py-20 px-6 sm:px-8">
  <div className="max-w-4xl mx-auto">
    
    <h2
  style={{ fontFamily: "Gwendolyn" }}
  className="text-5xl sm:text-6xl text-center text-zinc-600 -mt-20 dark:text-[#D291BC] mb-16"
>
  Education
</h2>
    <div className="relative border-l-2 border-[#B8709E] dark:border-[#D291BC] ml-4 sm:ml-8 space-y-14">

      
      <div className="relative pl-8 sm:pl-12">
        
        <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#B8709E] dark:bg-[#D291BC] border-4 border-[#F4E2DE] dark:border-gray-700"></div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition-all duration-300 ">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-2xl font-semibold text-[#9B5E85] dark:text-[#D291BC]">
              Secondary School Certificate (SSC)
            </h3>

            <span className="text-sm font-mono text-zinc-500 dark:text-gray-400">
              Completed
            </span>
          </div>

          <p className="mt-3 text-zinc-700 dark:text-gray-300 text-base">
            Army Public School FWO
          </p>

          <div className="mt-4 inline-block bg-[#F4E2DE] dark:bg-gray-700 px-4 py-2 rounded-full">
            <p className="text-sm font-medium text-[#9B5E85] dark:text-[#D291BC]">
              Grade: A1
            </p>
          </div>
        </div>
      </div>

      
      <div className="relative pl-8 sm:pl-12">
        
        <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#B8709E] dark:bg-[#D291BC] border-4 border-[#F4E2DE] dark:border-gray-700"></div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition-all duration-300 ">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-2xl font-semibold text-[#9B5E85] dark:text-[#D291BC]">
              Higher Secondary School Certificate (HSSC)
            </h3>

            <span className="text-sm font-mono text-zinc-500 dark:text-gray-400">
              Ongoing
            </span>
          </div>

          <p className="mt-3 text-zinc-700 dark:text-gray-300 text-base">
            Defence Public School and College
          </p>

          <div className="mt-4 inline-block bg-[#F4E2DE] dark:bg-gray-700 px-4 py-2 rounded-full">
            <p className="text-sm font-medium text-[#9B5E85] dark:text-[#D291BC]">
              not announced yet
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    

  </div>

 
</div>

<section id="contact" className="bg-white dark:bg-gray-800 py-20 px-8">
   <h2
  style={{ fontFamily: "Gwendolyn" }}
  className="text-5xl sm:text-6xl text-center text-zinc-600 -mt-20 dark:text-[#D291BC] mb-16"
>
  Contact Information 
</h2>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
 
    <div className="bg-[#F4E2DE] dark:bg-gray-700 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 text-[#9B5E85] dark:text-[#D291BC]">Contact Info</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Email:</strong> 
        <a 
          href="mailto:azahradum@gmail.com" 
          className="text-[#B8709E] dark:text-[#D291BC] ml-1 hover:underline"
        >
          azahradum@gmail.com
        </a>
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Location:</strong> Islamabad, Pakistan
      </p>
    </div>


    <form onSubmit={sendEmail} className="flex flex-col gap-4">
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name"
    className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8709E]"
  />

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Your Email"
    className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8709E]"
  />

  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B8709E] h-32 resize-none"
  ></textarea>

  <button
    type="submit"
    className="bg-[#B8709E] hover:bg-[#D291BC] mt-2 px-4 py-2 rounded text-white font-bold transition-all duration-200"
  >
    Send Message
  </button>
</form>
  </div>
</section>

      <div className="bg-white dark:bg-gray-800 py-20 px-8">
   <h2
  style={{ fontFamily: "Gwendolyn" }}
  className="text-5xl sm:text-6xl text-center text-zinc-600 -mt-20 dark:text-[#D291BC] mb-16"
>
  Featured Project
</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


    <div 
      className="relative rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 "
      style={{ backgroundImage: `url('/path-to-your-image-1.jpg')` }}
    >
      <div className="bg-black/40 dark:bg-gray-900/50 p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Hyprland Ricing</h3>
          <p className="text-white text-sm mb-4">
           Hyprland | Bash | Scripting
          </p>
        </div>
        <a 
          href="https://github.com/aleezazahra/hyprland-fedora" 
          target="_blank" 
          className="bg-[#B8709E] hover:bg-[#D291BC] text-white px-4 py-2 rounded font-bold text-center w-full"
        >
          GitHub
        </a>
      </div>
    </div>

 
    <div 
      className="relative rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300"
      style={{ backgroundImage: `url('/path-to-your-image-2.jpg')` }}
    >
      <div className="bg-black/40 dark:bg-gray-900/50 p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Pomodoro app</h3>
          <p className="text-white text-sm mb-4">
            typescript | ReactJS | ReactCharts
          </p>
        </div>
        <a 
          href="https://pomofocus-app1.vercel.app/" 
          target="_blank" 
          className="bg-[#B8709E] hover:bg-[#D291BC] text-white px-4 py-2 rounded font-bold text-center w-full"
        >
        Demo
        </a>
      </div>
    </div>

  </div>
  <div className="flex justify-center mt-10">
    <Link to="/projects">
      <button className="bg-[#B8709E] hover:bg-[#D291BC] px-6 py-3 rounded text-white font-bold">
        View All Projects
      </button>
    </Link>
  </div>
</div>


  
    </>
  );
}
export default Home;
