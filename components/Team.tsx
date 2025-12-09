'use client';

import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Shray Vasudeva",
      position: "Founder & Director",
      expertise: "Investment Banking & Debt Markets",
      experience: "15+ years",
      description: "Expert in secondary bond market trading with deep relationships across institutional investors and market makers. Specialized in corporate bond structuring and underwriting.",
      education: "MBA Finance, IIM International",
      linkedin: "https://www.linkedin.com/in/shray-vasudeva-44275b36/",
      email: "Shray@binarycapital.in"
    },
    {
      name: "Rati Ravi Kant",
      position: "Director",
      expertise: "Credit Analysis & Risk Management",
      experience: "20+ years",
      description: "Extensive experience in credit rating advisory and risk assessment for corporate and government securities.",
      education: "CFA Charterholder, MBA Finance",
      linkedin: "https://www.linkedin.com/in/rati-kant-mba-cfe-660a7754/",
      email: "Rati@binarynext.in"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-[hsl(var(--navy))] dark:text-white mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Seasoned professionals with decades of combined experience in debt capital markets, credit analysis, and institutional sales.
          </p>
        </div>

        {/* Team Grid - Only 2 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              {/* Profile Image Placeholder with Initials */}
              <div className="relative h-64 bg-gradient-to-br from-[hsl(var(--golden-dark))] to-[hsl(var(--golden))] flex items-center justify-center">
                <div className="text-6xl font-black text-[hsl(var(--navy))] opacity-90">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white font-black text-2xl drop-shadow-lg">{member.name}</div>
                  <div className="text-white/95 text-base font-semibold drop-shadow-lg">{member.position}</div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Expertise Badge */}
                <div className="inline-block bg-[hsl(var(--golden))]/10 text-[hsl(var(--golden))] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {member.expertise}
                </div>

                {/* Experience */}
                <div className="text-base text-gray-700 dark:text-gray-300 mb-3 font-medium">
                  <span className="font-bold text-[hsl(var(--navy))] dark:text-white">Experience:</span> {member.experience}
                </div>

                {/* Description */}
                <p className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4 font-medium">
                  {member.description}
                </p>

                {/* Education */}
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 font-medium">
                  🎓 {member.education}
                </div>

                {/* Contact Icons with Real Links */}
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[hsl(var(--golden))]/10 hover:bg-[hsl(var(--golden))]/20 text-[hsl(var(--golden))] rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
