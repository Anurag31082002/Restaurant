// have students create the banner component themselves
// come back and get them to prop-ify it
const Banner = ({ title, subtitle, imageURL }) => (
 <section class="banner">
   <div class="content">
     <h1>{title}</h1>
     <span class="call-to-action">
       {subtitle} <i class="fas fa-long-arrow-alt-right"></i>
     </span>
   </div>
   <img src={imageURL} />
 </section>
);

export default Banner;
