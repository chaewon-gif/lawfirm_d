function Appointment() {
  return (
    <div className="bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto">
      <h3 className="text-white text-[28px] font-bold tracking-[0.3px] text-center">Get an appointment</h3>
      <div className="w-[52px] h-[3px] bg-white my-6 mx-auto"></div>
      {/* input group */}
      <div className="space-y-[24px]">
        <input
          className="form-control w-full p-3"
          placeholder="Full name"
          type="text"
        />
        <input
          className="form-control w-full p-3"
          placeholder="Phone number"
          type="text"
        />
        <input
          className="form-control w-full p-3"
          placeholder="Email address"
          type="email"
        />
        <textarea
          className="resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary"
          placeholder="Your message"
        ></textarea>
        <button className="text-white w-full p-3 bg-primary hover:bg-primary-hover transition-all">Send message</button>
      </div>
    </div>
  );
}

export default Appointment;
