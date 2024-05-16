import React, { useState } from 'react';
import Navbar from './navbar'
import BG from './images/farm.jpg'
import slide1 from './images/bg.jpg'
import slide2 from './images/bg2.jpg'
import slide3 from './images/darkbg.jpg'
import choose from './images/smile.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import ig from './images/ig.png'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import grapes from './images/grapes.jpg'
import apples from './images/apples.jpg'
import bananas from './images/bananas.jpg'
import oranges from './images/oranges.jpg'
import strawberries from './images/strawberries.jpg'
import watermelons from './images/watermelon.jpg'
import explore from './images/market.jpg'
import corn from './images/girlsmile.jpg'
import ask from './images/wmarket.jpg'
import axios from 'axios'; // Import axios


const images = [slide1, slide2, slide3];

const Main = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);


  // const [formData, setFormData] = useState({
  //   company: '',
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  // const [successMessage, setSuccessMessage] = useState('');



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('https://af-industries.onrender.com/api/data', formData);
  //     console.log(response.data); // Log the response from the server
  //     setSuccessMessage('Form submitted successfully!'); // Set success message
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     // Handle error, show error message to the user, etc.
  //   }
  // };

  const sendForm = async () => {
    try {
      // const token = sessionStorage.getItem("accessToken");
      setLoading(true);
      const company = "Ailanthus Farm Products";

      // Create a FormData object to send the image file
      const newform = {
        company: company,
        name: name,
        email: email,
        message: message,
      };
      console.log(newform);
      // Make the API call
      const response = await fetch(
        "https://af-industries.onrender.com/api/data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newform),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to add event: ${errorMessage}`);
      }

      // Reset form fields and fetch updated events
      setTimeout(() => {
        setLoading(false);
        setFormSubmitted(true);
        // Reset form fields after submission
        setCompany("");
        setName("");
        setEmail("");
        setMessage("");
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 2000); 

    } catch (error) {
      console.error(error.message);
      alert("Failed to add event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const [showInfo, setShowInfo] = useState({
    generalFood: false,
    healthyDairy: false,
    restaurantService: false,
  });

  // Function to toggle the visibility of a section
  const toggleInfo = (section) => {
    setShowInfo((prevShowInfo) => ({
      ...prevShowInfo,
      [section]: !prevShowInfo[section],
    }));
  };

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    // Close dropdown after clicking a link
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // Number of slides to slide
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, // Number of slides to slide
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
      slidesToSlide: 1, // Number of slides to slide
    },
  }


  const scrollToContacts = () => {
    const aboutUsSection = document.getElementById("contacts");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=' overflow-x-hidden'>
      <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${BG})` }}>
        <Navbar />
        <div className='text-white text-center'>
          <p className='pt-60 m-auto lg:text-5xl font-extrabold'>PURE ORGANIC FARM PRODUCE</p>
          <p className=' py-5 '>
            We offer a wide range of pure organic farm produce, carefully grown and harvested to ensure freshness and quality.<br /> Our commitment to sustainable farming practices ensures that you get nutritious and delicious products every time.<br /> Try our organic fruits, vegetables, grains, and more for a healthy lifestyle.
          </p>
          <Link
            onClick={() => {
              handleLinkClick('contacts');
              scrollToContacts(); // Scroll to benefits section after clicking About Us
            }}>
            <button className='bg-[#013b0d] text-white px-2 w-32 py-3 rounded-lg font-semibold hover:bg-[#396b43] transition-colors duration-300'>
              Explore Now
            </button>
          </Link>
        </div>
        {/* <div className='flex justify-center gap-5 px-10 py-4 rounded-lg bg-[#D9D9D9] bg-opacity-20 w-fit lg:mx-32  '>
       
          <div className='bg-transparent'>
            <label htmlFor='location' className='block text-white font-bold'>Location</label>
            <select id='location' className='bg-transparent text-white rounded-md '>
              <option value='1'>New York</option>
              <option value='2'>Los Angeles</option>
              <option value='3'>London</option>
         
            </select>
          </div>
          <div className='hidden lg:flex  px-4 '>
            <div className='border  bg-center  border-white  w-1/4 h-16  rounded-lg'>
            </div>
          </div>

          <div className='bg-transparent'>

            <label htmlFor='houseType' className='block text-white font-bold'>House Type</label>
            <select id='houseType' className='bg-transparent  text-white rounded-md '>
              <option value='1'>Apartment</option>
              <option value='2'>House</option>
              <option value='3'>Villa</option>

            </select>

          </div>
          <div className='hidden lg:flex  px-4 '>
            <div className='border  bg-center pt-5 border-white  w-1/4 h-16  rounded-lg'>
            </div>
          </div>


          <div className=''>
            <label htmlFor='checkIn' className='block text-white font-bold'>Check-in</label>
            <input
              type='datetime-local'
              id='checkIn'
              value={checkIn}
              onChange={handleCheckInChange}
              className='bg-transparent  text-white '
            />
          </div>

   
          <div className=''>
            <label htmlFor='checkOut' className='block text-white font-bold'>Check-out</label>
            <input
              type='datetime-local'
              id='checkOut'
              value={checkOut}
              onChange={handleCheckOutChange}
              className='bg-transparent  text-white '
            />
          </div>
        </div> */}

      </div>




      {/* <div className='m-auto pt-20 text-center'>
        <h1 className='text-sm  mb-4'>
          AILANTHUS LUXURY HOMES
        </h1>
        <h1 className='text-3xl font-semibold mb-4'>
          YOUR LUXURY IS OUR DESIRE
        </h1>
        <hr className=' bg-[#5D4C31] h-2 w-20 mx-auto'></hr>
        <p className=' opacity-80 py-6 leading-relaxed'>
          Where opulence meets tranquility. Nestled amidst breathtaking landscapes, our residences redefine <br /> modern living with a blend of lavish amenities and serene surroundings. Designed with your utmost<br /> comfort in mind, each home exudes sophistication and elegance, promising an unparalleled living<br /> experience.
        </p>
      </div> */}

      <div className='h-1/6 gap-3'>
        <div>
          <h1 className=' text-center text-[#013b0d] m-auto py-6 lg:text-3xl font-extrabold '>WE PROVIDE GENERAL FARM PRODUCE</h1>
        </div>
        <div className=''>
          <Carousel
            responsive={responsive}
            swipeable={true} // Enable swipe navigation
            draggable={false} // Disable drag
            showDots={false} // Hide dots navigation
            infinite={true} // Enable infinite loop
            autoPlay={true} // Enable auto play
            autoPlaySpeed={2000} // Set auto play speed
            keyBoardControl={true} // Enable keyboard control
            customTransition='all .5s ease' // Set custom transition
            transitionDuration={500} // Set transition duration
            containerClass='carousel-container' // Custom container class
            deviceType={'desktop'} // Set initial device type
            dotListClass='custom-dot-list-style' // Custom dot list class
            itemClass='carousel-item' // Custom item class
            className=' gap-2 '
          >
            {images.map((image, index) => (
              <div key={index} className='carousel-item h-fit'>
                <img src={image} alt={`Slide ${index + 1}`} className='w-full  rounded-lg px-2 lg:px-16' />
              </div>
            ))}
          </Carousel>
        </div>
      </div>




      <div className='p-10 w-screen'>
        <h1 className=' text-center text-[#013b0d] m-auto py-6 lg:text-3xl font-extrabold '>THINGS WE PRODUCE</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* Slider 1 */}
          <div className='w-fit rounded-lg shadow-md'>
            <div className='w-fit h-fit'>
              <img src={grapes} alt='Grapes' className='rounded-t-lg lg:h-fit lg:w-fit' />
            </div>
            <div className='p-4'>
              <h1 className='text-lg font-semibold mb-2 text-center'>Grapes</h1>
              <p className='text-sm text-center'>Grapes are one of the most versatile and delicious fruits. They come in various colors, flavors, and sizes, making them a favorite among many people.</p>
              <Link
                onClick={() => {
                  handleLinkClick('contacts');
                  scrollToContacts(); // Scroll to benefits section after clicking About Us
                }}>
                <button className='block mx-auto mt-4 text-[#013b0d] border-[#013b0d] border hover:text-white hover:bg-[#013b0d] font-bold py-2 px-4 rounded'>Inquire</button>
              </Link>
            </div>
          </div>

          {/* Apples */}
          <div className='w-fit rounded-lg shadow-md'>
            <div className='w-fit h-fit'>
              <img src={apples} alt='Apples' className='rounded-t-lg lg:h-fit lg:w-fit' />
            </div>
            <div className='p-4'>
              <h1 className='text-lg font-semibold mb-2 text-center'>Apples</h1>
              <p className='text-sm text-center'>Apples are a popular fruit known for their crisp texture and sweet or tart flavors. They are rich in nutrients and antioxidants, making them a healthy snack choice.</p>
              <Link
                onClick={() => {
                  handleLinkClick('contacts');
                  scrollToContacts(); // Scroll to benefits section after clicking About Us
                }}>
                <button className='block mx-auto mt-4 text-[#013b0d] border-[#013b0d] border hover:text-white hover:bg-[#013b0d] font-bold py-2 px-4 rounded'>Inquire</button>
              </Link>            </div>
          </div>

          {/* Bananas */}
          <div className='w-fit rounded-lg shadow-md'>
            <div className='w-fit h-fit'>
              <img src={bananas} alt='Bananas' className='rounded-t-lg lg:h-fit lg:w-fit' />
            </div>
            <div className='p-4'>
              <h1 className='text-lg font-semibold mb-2 text-center'>Bananas</h1>
              <p className='text-sm text-center'>Bananas are a tropical fruit with a creamy texture and sweet flavor. They are a good source of potassium, vitamins, and dietary fiber, making them a nutritious addition to your diet.</p>
              <Link
                onClick={() => {
                  handleLinkClick('contacts');
                  scrollToContacts(); // Scroll to benefits section after clicking About Us
                }}>
                <button className='block mx-auto mt-4 text-[#013b0d] border-[#013b0d] border hover:text-white hover:bg-[#013b0d] font-bold py-2 px-4 rounded'>Inquire</button>
              </Link>            </div>

          </div>

          {/* Oranges */}
          <div className='w-fit rounded-lg shadow-md'>
            <div className='w-fit h-fit'>
              <img src={oranges} alt='Oranges' className='rounded-t-lg lg:h-fit lg:w-fit' />
            </div>
            <div className='p-4'>
              <h1 className='text-lg font-semibold mb-2 text-center'>Oranges</h1>
              <p className='text-sm text-center'>Oranges are citrus fruits known for their refreshing taste and high vitamin C content. They come in different varieties, each offering a unique flavor profile.</p>
              <Link
                onClick={() => {
                  handleLinkClick('contacts');
                  scrollToContacts(); // Scroll to benefits section after clicking About Us
                }}>
                <button className='block mx-auto mt-4 text-[#013b0d] border-[#013b0d] border hover:text-white hover:bg-[#013b0d] font-bold py-2 px-4 rounded'>Inquire</button>
              </Link>            </div>

          </div>

          {/* Strawberries */}
          <div className='w-fit rounded-lg shadow-md'>
            <div className='w-fit h-fit'>
              <img src={strawberries} alt='Strawberries' className='rounded-t-lglg:h-fit lg:w-fit' />
            </div>
            <div className='p-4'>
              <h1 className='text-lg font-semibold mb-2 text-center'>Strawberries</h1>
              <p className='text-sm text-center'>Strawberries are juicy and flavorful berries packed with antioxidants and vitamins. They are commonly used in desserts, salads, and smoothies for their delicious taste.</p>
              <Link
                onClick={() => {
                  handleLinkClick('contacts');
                  scrollToContacts(); // Scroll to benefits section after clicking About Us
                }}>
                <button className='block mx-auto mt-4 text-[#013b0d] border-[#013b0d] border hover:text-white hover:bg-[#013b0d] font-bold py-2 px-4 rounded'>Inquire</button>
              </Link>            </div>

          </div>
          <div className='w-fit rounded-lg shadow-md'>
            <div className='w-fit h-fit'>
              <img src={watermelons} alt='Watermelons' className='rounded-t-lg  lg:h-fit lg:w-fit' />
            </div>
            <div className='p-4'>
              <h1 className='text-lg font-semibold mb-2 text-center'>Watermelons</h1>
              <p className='text-sm text-center'>Watermelons are refreshing fruits known for their juicy and sweet flesh. They are a summertime favorite and are often enjoyed in salads, smoothies, and as a hydrating snack.</p>
              <Link
                onClick={() => {
                  handleLinkClick('contacts');
                  scrollToContacts(); // Scroll to benefits section after clicking About Us
                }}>
                <button className='block mx-auto mt-4 text-[#013b0d] border-[#013b0d] border hover:text-white hover:bg-[#013b0d] font-bold py-2 px-4 rounded'>Inquire</button>
              </Link>            </div>
          </div>
        </div>
      </div>

      <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${explore})` }}>
        <div className='px-5 gap-5'>
          <p className='text-white text-left   pt-60 pb-10 text-4xl font-extrabold'>Empowering market women general global<br /> supply of farm products</p>
          <Link
            onClick={() => {
              handleLinkClick('contacts');
              scrollToContacts(); // Scroll to benefits section after clicking About Us
            }}>
            <button className='bg-[#013b0d] text-white px-2 w-32 py-3 rounded-lg  font-semibold hover:bg-[#396b43] transition-colors duration-300'>Explore Now</button>
          </Link>
        </div>

      </div>

      <div className='py-10'>
        <h1 className='text-center text-[#013b0d] m-auto py-6 lg:text-3xl font-extrabold'>
          Why Choose Us
        </h1>
        <div className='lg:flex items-center'>
          {/* Image Section */}
          <div className='w-full h-full lg:w-3/6 px-4 mb-4 lg:mb-0'>
            <img src={choose} alt='Why Choose Us' className='rounded-2xl w-full' />
          </div>
          {/* Content Section */}
          <div className='w-full lg:w-3/5 px-4'>
            <div className='mb-6'>
              <h2 className='text-lg lg:text-3xl text-[#013b0d] font-bold mb-2'>
                Quality Organic Produce
                <span
                  className='cursor-pointer ml-2'
                  onClick={() => toggleInfo('generalFood')}
                >
                  {showInfo.generalFood ? '-' : '+'}
                </span>
              </h2>
              {showInfo.generalFood && (
                <p className='text-sm'>
                  We take pride in our commitment to providing fresh, organic produce that is
                  grown sustainably without the use of harmful chemicals. Your health and
                  well-being are our top priorities.
                </p>
              )}
            </div>
            <div className='mb-6'>
              <h2 className='text-lg lg:text-3xl text-[#013b0d] font-bold mb-2'>
                Nutritious Dairy Products
                <span
                  className='cursor-pointer ml-2'
                  onClick={() => toggleInfo('healthyDairy')}
                >
                  {showInfo.healthyDairy ? '-' : '+'}
                </span>
              </h2>
              {showInfo.healthyDairy && (
                <p className='text-sm'>
                  Our dairy products are sourced from healthy, well-cared-for animals, ensuring
                  the highest quality and nutritional value. From milk to cheese, taste the
                  difference with our wholesome offerings.
                </p>
              )}
            </div>
            <div>
              <h2 className='text-lg lg:text-3xl text-[#013b0d] font-bold mb-2'>
                Farm-to-Table Experience
                <span
                  className='cursor-pointer ml-2'
                  onClick={() => toggleInfo('restaurantService')}
                >
                  {showInfo.restaurantService ? '-' : '+'}
                </span>
              </h2>
              {showInfo.restaurantService && (
                <p className='text-sm'>
                  Join us for a unique farm-to-table dining experience where every ingredient
                  is freshly harvested from our fields. Taste the essence of nature in every
                  bite, prepared with love and care by our talented chefs.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='py-10' id='aboutus'>
        <h1 className='text-center text-[#013b0d] m-auto py-6 lg:text-3xl font-extrabold'>
          About Us
        </h1>
        <div className='lg:flex '>
          {/* Image Section */}

          {/* Content Section */}
          <div className='w-full lg:w-3/5 px-4'>
            <h1 className='text-3xl  font-bold mb-3 '>AILANTHUS FARM</h1>

            <p className='py-3'>
              Ailanthus Farm is dedicated to providing the highest quality organic produce to our community. With a focus on sustainable farming practices and a deep-rooted passion for agriculture, we strive to bring fresh, nutritious, and flavorful food to your table. Our commitment to environmental stewardship ensures that every product you receive is not only good for you but also good for the planet.
            </p>
            <p className=''>
              Our journey began decades ago when our founders, a group of visionary farmers, came together with a shared dream of creating a farm that would revolutionize the way we think about food. Today, that dream is a reality, and Ailanthus Farm stands as a testament to the power of dedication, hard work, and a love for nature.
            </p>
            <p className='lg:flex hidden py-3'>
              What sets us apart is our holistic approach to farming. We believe in working in harmony with nature, using sustainable methods that preserve and enhance the land for future generations. From organic soil management to water conservation practices, every aspect of our farm is designed to minimize environmental impact while maximizing yield and quality.
            </p>
            <p className='lg:flex hidden '>
              Our range of products includes a variety of fruits, vegetables, grains, and dairy items, all grown and produced with the utmost care and attention to detail. Whether you're looking for fresh greens for your salad, juicy fruits for a refreshing snack, or wholesome dairy products for your family, Ailanthus Farm has got you covered.
            </p>
            <p className='lg:flex hidden py-3'>
              But our commitment doesn't stop at the farm gate. We are actively involved in community outreach programs, educational initiatives, and environmental conservation efforts. By partnering with local schools, charities, and environmental organizations, we strive to create a positive impact beyond our fields, enriching the lives of people and the planet.
            </p>
            <p className='lg:flex hidden '>
              At Ailanthus Farm, we invite you to join us on this journey towards a healthier, more sustainable future. Experience the goodness of nature with every bite, and know that your choice supports a farm that cares deeply about people, planet, and prosperity.
            </p>         </div>

          <div className='w-full h-full lg:w-3/6 px-4 mb-4 lg:mb-0'>
            <img src={corn} alt='Why Choose Us' className='rounded-2xl w-full' />
          </div>
        </div>
      </div>



      <div className='p-10' id='contacts' >
        <h1 className="text-3xl font-bold mb-6 text-[#013b0d] text-center ">Make Enquiries</h1>
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="w-full lg:w-3/6 px-4 mb-4 lg:mb-0">
            <img src={ask} alt="Why Choose Us" className="rounded-2xl w-full" />
          </div>
          <div className="grid gap-4 w-full lg:w-1/2 p-5">
            <label htmlFor="company" className="text-lg font-semibold">Company</label>
            <p id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" >Ailanthus Farm Products</p>


            <label htmlFor="name" className="text-lg font-semibold">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />

            <label htmlFor="email" className="text-lg font-semibold">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />

            <label htmlFor="message" className="text-lg font-semibold">Message</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>

            <button onClick={sendForm} className="bg-[#013b0d] text-white px-6 w-24 py-3 rounded-lg  font-semibold hover:bg-[#396b43] transition-colors duration-300"disabled={loading}>{loading ? "Loading..." : "Send"}</button>
            {formSubmitted && (
            <div className="mt-4 text-center text-[#013b0d]">Form submitted successfully!</div>
          )} 
          </div>
        </div>
      </div>


      <footer id="contacts" className="bg-[#013b0d] text-white ">
        <div className="container mx-auto flex flex-col md:flex-row px-6 py-24 md:py-24">
          <div className=" mb-6 md:mb-0 md:mr-8">
            <Link className="text-2xl  flex pb-5 font-semibold">
              <h1 className="font-extrabold">AFProduce</h1>{" "}
            </Link>
            <p className="text-sm  mb-6 opacity-60">
              What sets us apart is our holistic approach to farming. We believe in working in harmony with nature, using sustainable methods that preserve and enhance the land for future generations. From organic soil management to water conservation practices, every aspect of our farm is designed to minimize environmental impact while maximizing yield and quality.
            </p>
            {/* <p className='flex gap-4'>
              <img
                src={twitter}
                alt="Group 8"
                className=" w-8 h-8"
              />
              <img
                src={facebook}
                alt="Group 8"
                className=" w-8 h-8"
              />
              <img
                src={ig}
                alt="Group 8"
                className=" w-8 h-8"
              />


            </p> */}
          </div>
          {/* <div className=' grid grid-cols-2 lg:flex gap-20'>
            <div className="md:w-1/4 ">
              <h1 className="text-xl font-light mb-4">COMPANY</h1>
              <ul className="text-sm">
                <li className="py-1 font-light  opacity-60">About</li>
                <li className="py-1 font-light  opacity-60">Features</li>
                <li className="py-1 font-light  opacity-60">Works</li>
                <li className="py-1 font-light  opacity-60">Career</li>

              </ul>
            </div>
            <div className="md:w-1/4 mx-auto">
              <h1 className="text-xl font-light mb-4">HELP</h1>
              <ul className="text-sm">
                <li className="py-1 font-light  opacity-60">Account</li>
                <li className="py-1 font-light opacity-60">Delivery Details</li>
                <li className="py-1 font-light  opacity-60">Terms & Conditions</li>
                <li className="py-1 font-light  opacity-60">Privacy Policy</li>

              </ul>
            </div>
            <div className="md:w-1/4">
              <h1 className="text-xl font-light mb-4">FAQ</h1>
              <ul className="text-sm">
                <li className="py-1 font-light  opacity-60">Account</li>
                <li className="py-1 font-light  opacity-60">Manage Deliveries</li>
                <li className="py-1 font-light  opacity-60">Orders</li>
                <li className="py-1 font-light  opacity-60">Payments</li>

              </ul>
            </div>
            <div className="md:w-1/4">
              <h1 className="text-xl font-light mb-4">RESOURCES</h1>
              <ul className="text-sm">
                <li className="py-1 font-light  opacity-60">Free eBooks</li>
                <li className="py-1 font-light  opacity-60">Development Tutorial</li>
                <li className="py-1 font-light  opacity-60">How to - Blog</li>
                <li className="py-1 font-light  opacity-60">Youtube Playlist</li>

              </ul>
            </div>
          </div> */}
        </div>
        <hr className=' bg-white   w-5/6 justify-center m-auto  '></hr>
        <div className='block lg:flex justify-center text-center mx-4 sm:mx-32 py-5'>
          <h1 className=' font-light text-center'>2024 © AFProduce Enterprise Ltd</h1>
        </div>


      </footer>

    </div>
  )
}

export default Main