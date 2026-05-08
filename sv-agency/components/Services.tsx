"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "How does a professional landing page grow my local business?",
    target: "Best for restaurants, salons, and retail shops with 10–200 customers per day who want to build a high-end online presence and capture leads without hiring a tech team.",
    description: "A professional landing page captures customer details online and drives local traffic to your business with clear calls to action and mobile optimization.",
    steps: [
      { title: "Ask Domain Questions", desc: "We ask targeted questions to align the design with your specific business goals." },
      { title: "Curate Online Ideas", desc: "We gather high-performing references to build instant trust with your audience." },
      { title: "Build the Page", desc: "We develop a fast, mobile-ready page designed to convert visitors into leads." },
      { title: "2 Rounds of Revision", desc: "We provide two revision cycles to ensure every detail perfectly matches your brand." }
    ]
  },
  {
    title: "Can a WhatsApp chatbot handle my customer orders automatically?",
    target: "Ideal for cafes, bakeries, and retail stores that receive many routine questions and orders over WhatsApp and want to automate them 24/7.",
    description: "An AI WhatsApp chatbot instantly answers customer questions, takes orders, and sends automated follow-ups 24/7 without requiring your staff's manual intervention.",
    steps: [
      { title: "Map Customer Chats", desc: "We analyze your common queries to identify exactly what the bot must handle." },
      { title: "Design the Chat Flow", desc: "We script natural conversation paths so the bot sounds helpful and human." },
      { title: "Build the AI Bot", desc: "We program the AI to instantly answer questions and take orders 24/7." },
      { title: "2 Rounds of Revision", desc: "We test the bot with you and refine its answers before it goes live." },
      { title: "Add to Daily Workflow", desc: "We connect the bot to your number and train your staff to monitor it." }
    ]
  },
  {
    title: "How do I get my business to show up on top of Google Maps?",
    target: "Perfect for local service businesses like gyms, clinics, and salons that want to appear first when customers search for services 'near me'.",
    description: "We optimize your Google Business Profile to ensure your business appears at the top of local search results when nearby customers are looking for your services.",
    steps: [
      { title: "Audit Your Profile", desc: "We identify missing details on your profile that are blocking local search traffic." },
      { title: "Curate Keywords", desc: "We research what local customers are typing to find services just like yours." },
      { title: "Optimize & Handover", desc: "We update your profile with targeted keywords and set up an easy posting routine." }
    ]
  },
  {
    title: "Will an AI voice agent really answer my business calls 24/7?",
    target: "Best for busy restaurants and dental/medical clinics that miss calls during peak hours or after-hours and want to book appointments automatically.",
    description: "An AI voice agent answers your customer calls 24/7, books appointments, handles FAQs, and follows up with missed callers so your staff focuses on in-person service instead of phones.",
    steps: [
      { title: "Analyze Call Volume", desc: "We review your call logs to determine which routine questions the AI should intercept." },
      { title: "Curate the Voice", desc: "We select a voice and write scripts that perfectly match your brand's tone." },
      { title: "Build the Voice Agent", desc: "We deploy the AI to book appointments and answer FAQs around the clock." },
      { title: "2 Rounds of Revision", desc: "We run practice calls to ensure the AI listens and responds naturally." },
      { title: "Add to Daily Workflow", desc: "We connect the agent to your phone line to keep your daily operations smooth." }
    ]
  },
  {
    title: "How do I get 3x more Google reviews from my current customers?",
    target: "Great for any retail or service business that provides a high-quality experience but struggles to get customers to actually leave a review.",
    description: "We set up automated WhatsApp and SMS follow-ups that ask happy customers to leave a Google review within 2 hours of their visit. Most clients see a 3x review increase in the first month.",
    steps: [
      { title: "Find the Happy Moment", desc: "We pinpoint the exact moment your customer is happiest to ask for a review." },
      { title: "Curate Message Templates", desc: "We write simple SMS messages that encourage 5-star Google ratings." },
      { title: "Build the Automation", desc: "We automate the system to send requests 2 hours after a customer's visit." },
      { title: "Add to Daily Workflow", desc: "We connect this to your billing system so reviews are requested automatically." }
    ]
  },
  {
    title: "How can automated loyalty messages bring customers back to my store?",
    target: "Ideal for retail shops and salons with a database of past customers who haven't visited in 30-60 days and need a reason to return.",
    description: "Automated personalized retention campaigns send targeted offers and updates to your existing customers to keep them engaged and coming back to your store.",
    steps: [
      { title: "Group Your Customers", desc: "We categorize your sales data to identify who is ready to buy again." },
      { title: "Curate Custom Offers", desc: "We design specific discount codes that give past customers a reason to return." },
      { title: "Build the Campaigns", desc: "We automate personalized messages for birthdays and long-time absences." },
      { title: "2 Rounds of Revision", desc: "We review the templates with you to ensure all offers fit your budget." },
      { title: "Add to Daily Workflow", desc: "We set up a simple dashboard for your staff to trigger campaigns easily." }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-visible">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container for Header & Cards - constrained sticky scope */}
        <div className="relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sticky top-24 md:top-32 z-0 text-center mb-24 md:mb-32"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Complete Customer System
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to attract, engage, and retain customers. Fully automated
            </p>
          </motion.div>

          {/* Sticky Service Cards */}
          <div className="flex flex-col gap-12 sm:gap-24 pt-[15vh] md:pt-[40vh]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="sticky top-32 md:top-[52dvh] md:-translate-y-1/2 w-full p-5 md:p-8 bg-background border border-accent/50 shadow-2xl rounded-3xl"
                style={{ zIndex: index + 10 }}
              >
                {/* Top Section: Title & Description */}
                <div className="mb-4">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-base">
                      {index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl max-w-4xl leading-tight font-medium">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
                    <div>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="p-4 bg-secondary/30 rounded-2xl border border-accent/20">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-1.5">Who is this for?</h4>
                        <p className="text-sm sm:text-base text-foreground leading-relaxed italic">
                          {service.target}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Horizontal Roadmap */}
                <div className="border-t border-accent/30 pt-4 mt-4">
                  <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                    How it works
                  </h4>
                  <div className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-2 pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {service.steps.map((step, stepIndex) => (
                      <div 
                        key={step.title}
                        className="relative flex-none w-[85%] sm:w-[60%] md:w-auto md:flex-1 snap-center bg-secondary/20 p-3 rounded-xl border border-accent/20"
                      >
                        {/* Connecting Line */}
                        {stepIndex < service.steps.length - 1 && (
                          <motion.div 
                            animate={{ opacity: [0.1, 0.1, 0.5, 0.5, 0.1] }}
                            transition={{ 
                              duration: 4, 
                              times: [0, 0.2, 0.45, 0.7, 1],
                              repeat: Infinity, 
                              ease: "easeInOut", 
                              delay: stepIndex * 1.2
                            }}
                            className="absolute top-[28px] left-[28px] w-[calc(100%+8px)] h-[2px] bg-primary z-0 -translate-y-1/2 hidden sm:block" 
                          />
                        )}
                        
                        {/* Roadmap Node */}
                        <motion.div 
                          animate={{ 
                            boxShadow: [
                              "0 0 0px 0px rgba(255,255,255,0)", 
                              "0 0 0px 0px rgba(255,255,255,0)", 
                              "0 0 8px 2px rgba(255,255,255,0.3)", 
                              "0 0 8px 2px rgba(255,255,255,0.3)", 
                              "0 0 0px 0px rgba(255,255,255,0)"
                            ]
                          }}
                          transition={{ 
                            duration: 4, 
                            times: [0, 0.2, 0.45, 0.7, 1],
                            repeat: Infinity, 
                            ease: "easeInOut", 
                            delay: stepIndex * 1.2
                          }}
                          className="relative z-10 w-8 h-8 rounded-full bg-background border border-primary/40 text-primary flex items-center justify-center text-sm font-bold mb-3"
                        >
                          {stepIndex + 1}
                        </motion.div>
                        
                        <h5 className="text-base font-medium mb-1.5 leading-tight">{step.title}</h5>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other AI Consulting Box - acting as a mask for the sticky title */}
          <div className="relative z-40 bg-background pt-12 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full p-8 md:p-12 bg-gradient-to-br from-secondary to-background shadow-xl border border-accent/50 hover:border-primary/30 transition-all rounded-3xl text-center"
            >
              <h4 className="text-2xl mb-4">Other AI Consulting</h4>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We offer specialized AI consulting for other business operations, custom automation workflows, and tailored artificial intelligence solutions to meet your unique tasks and needs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
