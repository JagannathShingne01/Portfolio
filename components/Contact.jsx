import React, { useContext, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { FaPaperPlane } from 'react-icons/fa';
import {useInView} from 'react-intersection-observer'
import { ActiveSectionContex } from '@/context/active-context';



const Contact = () => {

  const { ref, inView } = useInView();
  const { setActiveSection } = useContext(ActiveSectionContex)

  useEffect(()=>{
      if (inView) {
          setActiveSection("Contact")
      }
  },[inView, setActiveSection]);


    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
      });
    
      const form = useRef(null);
      function handleSubmit(e){
        e.preventDefault();
        if (typeof form !== null) {
            if (
              !contactData.name ||
              !contactData.email ||
               contactData.phone ||
              !contactData.message ||
              !contactData.service
            ){
                    toast.error("Please provide all the details!")
                    return;
            }
            if (
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  contactData.email.toString()
                )
              ) {
                toast.error("Please provide a valid email id.");
                return;
              }
              try{
                fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactData),
                  });
                toast.success(
                    "Your enquiry has been submitted successfully. We'll get back to you at our earliest.",
                    { duration: 3000 }
                );
              }catch(e){
                toast.error("Something went Wrong. please try again later.")
              }
            }
            setContactData({
                name: "",
                email: "",
                phone: "",
                message: "",
                service: "",
            });
        }
        return(
            <div id='contact' ref={ref} className=' scroll-mt-28 mb-6'>
                <section  className='text-gray-700 dark:text-white/80'>
                    <h1 className=' text-5xl flex justify-center items-center'>Contact Me</h1>
                    <p className='mt-2 md:mt-3 mb-10 text-sm md:flex items-center justify-center mx-3 text-center'>
                        Please Contact me directly at  &nbsp;  <a className='underline' href="mailto:jagannathshingne01@gmail.com">jagannathshingne01@gmail.com</a> &nbsp;  or through this form.
                    </p>
                </section>
                <form className="text-gray-700 dark:text-white/50 flex items-center justify-center">
                    <div className='w-[40rem]'>
                            <div>
                                <label className='mx-2' htmlFor="name">
                                    Name*
                                </label>
                                <div>
                                    <input type="text"
                                            name='name'
                                            value={contactData.name}
                                            onChange={(e)=>setContactData((prev)=>({
                                                ...prev,
                                                name:e.target.value,
                                            }))}
                                            id='name'
                                            autoComplete='family-name'
                                            placeholder='Enter Full Name'
                                            className='border border-black/10 h-10 rounded-lg p-4 w-full my-2'
                                    />
                                </div>
                            </div>
                            <div>
                                <label className='mx-2' htmlFor="email">
                                    Email*
                                </label>
                                <div>
                                    <input type="email" 
                                        name="email" 
                                        id="email" 
                                        value={contactData.email}
                                        onChange={(e)=> setContactData((prev)=>({
                                            ...prev,
                                            email:e.target.value,
                                        }))}
                                        autoComplete='email'
                                        placeholder='Enter Your Email'
                                        className='border border-black/10 h-10 rounded-lg p-4 w-full my-2'
                                        />
                                </div>
                            </div>
                            {/* <div>
                                <label htmlFor="phone">
                                    phone number* 
                                </label>
                                <PhoneInput
                                    onChange={(v,c,e, phone)=>{
                                        setContactData({
                                            ...contactData,
                                            phone: phone,
                                        });
                                    }}
                                    inputProps={{
                                        name:"phone",
                                    }}
                                    value={contactData.phone}
                                    country={"in"}
                                    inputClass='!w-full py-6 !text-white text-black'
                                    
                                />
                            </div> */}
                            <div>
                                <label className='mx-2' htmlFor="service">
                                    Reason for Contact*
                                </label>
                                <input type="text"
                                        id='service'
                                        name='service'
                                        value={contactData.service}
                                        placeholder="Enter Your Reason"
                                        className='border border-black/10 h-10 rounded-lg p-4 w-full my-2'
                                        onChange={(e)=>
                                        setContactData((prev)=>({
                                            ...prev,
                                            service:e.target.value,
                                        }))
                                        }
                                        required
                                />
                            </div>
                            <div>
                                <label className='mx-2' htmlFor="message">
                                    Message*
                                </label>
                                <div>
                                    <textarea name="message"
                                            id="message"
                                            value={contactData.message}
                                            className='border border-black/10 h-50 rounded-lg p-4 w-full my-2 '
                                            onChange={(e)=>
                                                setContactData((prev)=>({
                                                    ...prev,
                                                    message: e.target.value,
                                                }))} 
                                            aria-describedby="message-max"
                                            autoComplete="radom text"
                                            placeholder="Your Message"    
                                            rows={3}/>
                                </div>
                            </div>
                            <div>
                                <button 
                                    type='submit'
                                    onClick={handleSubmit}
                                    className='mx-2 flex gap-2 items-center justify-center text-sm md:text-lg h-[2rem] w-[10rem] md:h-[3rem] md:w-[12rem] text-white rounded-full bg-gray-900 dark:bg-gray-800 transition-all outline-none group hover:scale-105'
                                >
                                Send Message 
                                <FaPaperPlane className= 'group-hover:translate-x-1 group-hover:-translate-y-1'/>
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        )
    
}

export default Contact