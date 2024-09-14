


const Banner = () => {
    return (
        <div className=" mb-10  ">

            <div>
               
               <div className="">
                  <img className="  h-[600px] w-full" src="https://www.lawyersnjurists.com/wp-content/uploads/1-3.jpg" alt="" />
               </div>
               
               {/* -------------------------------------------------- */}
               
               <div className=" mt-10 ml-5 mr-5">
                 
                 <div className="">
                 <div className="  flex-col md:flex-row lg:flex-row bg-white    w-[450px] p-5 " >
                    <p className="  text-5xl font-mono">International Law Firm</p>
                    <p className=" font-thin">We understand your challenges. We strive to be accessible,<br></br> responsive and affordable. We know the importance of finding a <br></br>law firm you can trust and that's why <br></br>your trust is our top priority.</p>
                    <button className=" mt-5 btn  bg-[#2bddd4] text-white ">Book A Consultation</button>
                    <p className=" bg-black h-[1px] w-[400px] mt-5 "></p>
                 </div>

                 </div>
                 

                 
                 <div className="  flex-col md:flex-row lg:flex-row ml-5 mt-10 flex items-center gap-5">
                    
                    <div  className=" mb-10">
                        <p className="  font-mono text-5xl">Practice areas</p>
                        <p className=" bg-black h-[1px] w-[400px] mt-5 "></p>
                    </div>

                    <div className=" text-4xl font-mono">
                        <p>1. Family Law</p>
                        <p>2. Real Estate Law</p>
                        <p>3. Immigration Law </p>
                    </div>


                 </div>



               </div>

            </div>
            
        </div>
    );
};

export default Banner;