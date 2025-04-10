
import { useState, useEffect } from 'react';

interface SkillProps {
  name: string;
  percentage: number;
  color: string;
  delay: number;
}

const SkillBar = ({ name, percentage, color, delay }: SkillProps) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-tech-light text-sm">{name}</span>
        <span className="font-mono text-tech-teal text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-tech-navy/50 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills: SkillProps[] = [
    { name: 'HTML & CSS', percentage: 90, color: '#E34F26', delay: 200 },
    { name: 'JavaScript', percentage: 85, color: '#F7DF1E', delay: 400 },
    { name: 'React', percentage: 75, color: '#61DAFB', delay: 600 },
    { name: 'Tailwind CSS', percentage: 80, color: '#06B6D4', delay: 800 },
  ];
  
  const networkingSkills: SkillProps[] = [
    { name: 'TCP/IP', percentage: 70, color: '#6C8EBF', delay: 300 },
    { name: 'Cisco Networking', percentage: 65, color: '#1BA0D7', delay: 500 },
    { name: 'Network Security', percentage: 60, color: '#4CAF50', delay: 700 },
    { name: 'Router Configuration', percentage: 75, color: '#FF9800', delay: 900 },
  ];
  
  const otherSkills: SkillProps[] = [
    { name: 'Git', percentage: 80, color: '#F05032', delay: 250 },
    { name: 'Python', percentage: 70, color: '#3776AB', delay: 450 },
    { name: 'UI/UX Design', percentage: 65, color: '#FF61F6', delay: 650 },
    { name: 'Problem Solving', percentage: 85, color: '#4285F4', delay: 850 },
  ];
  
  return (
    <section id="skills" className="py-24 bg-background relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-tech-navy/40 backdrop-blur-sm p-6 rounded-lg border border-tech-slate/10">
            <h3 className="font-mono text-xl text-tech-teal mb-6 flex items-center">
              <span className="w-4 h-4 bg-tech-teal mr-2 rounded"></span>
              Frontend Development
            </h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={skill.delay}
              />
            ))}
          </div>
          
          <div className="bg-tech-navy/40 backdrop-blur-sm p-6 rounded-lg border border-tech-slate/10">
            <h3 className="font-mono text-xl text-tech-teal mb-6 flex items-center">
              <span className="w-4 h-4 bg-tech-teal mr-2 rounded"></span>
              Networking
            </h3>
            {networkingSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={skill.delay}
              />
            ))}
          </div>
          
          <div className="bg-tech-navy/40 backdrop-blur-sm p-6 rounded-lg border border-tech-slate/10">
            <h3 className="font-mono text-xl text-tech-teal mb-6 flex items-center">
              <span className="w-4 h-4 bg-tech-teal mr-2 rounded"></span>
              Other Skills
            </h3>
            {otherSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-tech-light max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set. Currently focusing on improving my knowledge of
            advanced React patterns and exploring network automation technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
