// import social data
import { social } from "../data";

function Contact() {
  return (
    <div
      id="contact"
      className="bg-primary text-white min-h-[732px] div"
    >
      <div className="container mx-auto text-center">
        <h2 className="pt-16 text-5xl font-primary font-extrabold mb-4">Contact us</h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolor debitis non fugiat, praesentium rem
          doloremque illo aliquam id, dolorem, temporibus numquam. Commodi tenetur totam at, dolorem odit error nobis!
        </p>
        {/* form */}
        <form className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]">
          <input
            className="w-full p-3 text-black"
            placeholder="Full name"
            type="text"
          />
          <input
            className="w-full p-3 text-black"
            placeholder="Email address"
            type="email"
          />
          <textarea
            className="w-full p-3  h-[132px] text-black"
            placeholder="Message"
          ></textarea>
          <button className="w-full p-2 bg-accent hover:bg-accent-hover transition-all">Send message</button>
        </form>
        {/* social */}
        <div className=" flex items-center justify-between max-w-[205px] mx-auto">
          {social.map((item, index) => {
            return (
              <a
                href="#"
                key={index}
              >
                <img
                  src={item.icon}
                  alt=""
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
