"use client"

import ParticlesBackground from "@/components/particles-background"
import { useState, useRef, useCallback } from "react"

function InteractiveWhoAreWeSection() {
  const [networkPosition, setNetworkPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const networkRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - networkPosition.x,
      y: e.clientY - networkPosition.y
    })
  }, [networkPosition])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return
    
    setNetworkPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }, [isDragging, dragStart])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  return (
    <section id="who-are-we" className="w-full min-h-screen bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-16 text-center">
            Who are we
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Half - Description */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We are a vibrant community of ambitious high school students, university students, fresh graduates, and passionate builders who share an unwavering love for Web3 and blockchain technology.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                United by our vision to shape the decentralized future, we collaborate, innovate, and push the boundaries of what's possible in the Web3 space. From smart contracts to DApps, we're building the next generation of digital experiences.
              </p>
              <div className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Active builders
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Global community
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Web3 focused
                </span>
              </div>
            </div>

            {/* Right Half - Interactive Network */}
            <div 
              className="relative h-96 lg:h-[500px] cursor-grab active:cursor-grabbing"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div 
                ref={networkRef}
                className="relative w-full h-full transition-transform duration-75"
                style={{ 
                  transform: `translate(${networkPosition.x}px, ${networkPosition.y}px)`,
                  zIndex: 1
                }}
              >
                {/* Network Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* Line to Card 1 - Top Left */}
                  <line 
                    x1="50%" y1="50%" 
                    x2="22%" y2="28%" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-zinc-300 dark:text-zinc-600"
                    strokeDasharray="6 6"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      values="0;12" 
                      dur="2s" 
                      repeatCount="indefinite"
                    />
                  </line>
                  
                  {/* Line to Card 2 - Top Right */}
                  <line 
                    x1="50%" y1="50%" 
                    x2="80%" y2="24%" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-zinc-300 dark:text-zinc-600"
                    strokeDasharray="6 6"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      values="0;12" 
                      dur="2.5s" 
                      repeatCount="indefinite"
                    />
                  </line>
                  
                  {/* Line to Card 4 - Lower Left */}
                  <line 
                    x1="50%" y1="50%" 
                    x2="20%" y2="78%" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-zinc-300 dark:text-zinc-600"
                    strokeDasharray="6 6"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      values="0;12" 
                      dur="1.8s" 
                      repeatCount="indefinite"
                    />
                  </line>
                  
                  {/* Line to Card 5 - Bottom Right */}
                  <line 
                    x1="50%" y1="50%" 
                    x2="76%" y2="85%" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-zinc-300 dark:text-zinc-600"
                    strokeDasharray="6 6"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      values="0;12" 
                      dur="2.2s" 
                      repeatCount="indefinite"
                    />
                  </line>
                  
                  {/* Line to Card 6 - Middle Right */}
                  <line 
                    x1="50%" y1="50%" 
                    x2="85%" y2="50%" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-zinc-300 dark:text-zinc-600"
                    strokeDasharray="6 6"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      values="0;12" 
                      dur="2.8s" 
                      repeatCount="indefinite"
                    />
                  </line>
                  
                  {/* Pulsing dots at connection points */}
                  <circle cx="50%" cy="50%" r="4" className="fill-blue-500 dark:fill-blue-400">
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                
                {/* Floating logo cards */}
                
                {/* Card 1 - Top Left */}
                <div 
                  className="absolute top-0 left-0 w-44 h-28 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    zIndex: 2,
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: '0s'
                  }}
                >
                  <img src="https://dongphucgiadinh.com/wp-content/uploads/2022/09/logo-dai-hoc-bach-khoa.png" alt="" className="max-w-full max-h-full object-contain p-3" />
                </div>
                
                {/* Card 2 - Top Right */}
                <div 
                  className="absolute top-12 right-4 w-40 h-24 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    zIndex: 2,
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: '0.5s'
                  }}
                >
                  <img src="https://static.wixstatic.com/media/9d8ed5_336615d52be3476585eed2e7bbdd3224~mv2.png/v1/fill/w_980,h_388,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/9d8ed5_336615d52be3476585eed2e7bbdd3224~mv2.png" alt="" className="max-w-full max-h-full object-contain p-3" />
                </div>
                
                {/* Center Text - Builder Base */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black dark:text-white shadow-lg cursor-grab active:cursor-grabbing rounded-full p-0.5"
                  style={{ 
                    zIndex: 3,
                    background: 'linear-gradient(45deg, #2563eb, #9333ea)',
                  }}
                  onMouseDown={handleMouseDown}
                >
                  <div 
                    className="bg-white dark:bg-black px-10 py-5 rounded-full"
                  >
                    <h3 className="text-2xl font-bold whitespace-nowrap text-black dark:text-white">Builder Base</h3>
                  </div>
                </div>
                
                {/* Card 4 - Lower Left */}
                <div 
                  className="absolute top-72 left-8 w-44 h-28 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    zIndex: 2,
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: '1s'
                  }}
                >
                  <img src="https://inkythuatso.com/uploads/images/2021/12/logo-dai-hoc-giao-thong-van-tai-inkythuatso-01-23-15-59-45.jpg" alt="" className="max-w-full max-h-full object-contain p-3" />
                </div>
                
                {/* Card 5 - Bottom Right */}
                <div 
                  className="absolute bottom-4 right-8 w-48 h-28 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    zIndex: 2,
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: '1.5s'
                  }}
                >
                  <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/452928823_916337223855126_8701319332979974698_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=8Z3soIwuf88Q7kNvwGMnxTu&_nc_oc=Adm_shR3f7sUdRQvusxLC_vwnL-mh67PYpUpFJrCeGxYOrJjkJoR8MB3wEPK2l8AIh0&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=vHbu3ZTtLI4xfip1QrKWJg&oh=00_AfTG3mkuk2qd19SqWqDA-hYtYthpB00DUKDno_wJRCTPMA&oe=68816EAC" alt="" className="max-w-full max-h-full object-contain p-3" />
                </div>
                
                {/* Card 6 - And Expanding Text */}
                <div 
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 w-36 h-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    zIndex: 2,
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: '2s'
                  }}
                >
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 text-center">and expanding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rain {
          0% { 
            transform: translateY(-100vh); 
            opacity: 0;
          }
          10% { 
            opacity: 0.1;
          }
          90% { 
            opacity: 0.1;
          }
          100% { 
            transform: translateY(100vh); 
            opacity: 0;
          }
        }
        
        .rain-drop {
          position: absolute;
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.1), transparent);
          animation: rain 3s infinite linear;
          top: -100px;
        }
      `}</style>
    </section>
  )
}

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Who can join Builder Base?",
      answer: "We welcome ambitious high school students, university students, fresh graduates, and working professionals who are passionate about Web3 and blockchain technology. No prior Web3 experience is required - we support beginners and help them grow!"
    },
    {
      question: "Do I need to be based in Hanoi to join?",
      answer: "While our main community is based in Hanoi, Vietnam, we also welcome members from other cities. Most of our activities are hybrid (both online and offline), so you can participate remotely. However, being in Hanoi gives you access to our in-person meetups, workshops, and networking events."
    },
    {
      question: "What programming skills do I need?",
      answer: "Basic programming knowledge is helpful but not mandatory. We accept beginners and provide learning resources. If you know JavaScript, Python, Solidity, or other programming languages, that's great! If not, we'll help you learn as part of your Web3 journey."
    },
    {
      question: "Is there a membership fee?",
      answer: "No, Builder Base membership is completely free! We believe in making Web3 education and opportunities accessible to everyone. Our goal is to support and grow the Vietnamese Web3 ecosystem together."
    },
    {
      question: "How much time commitment is required?",
      answer: "We're flexible! You can participate as much or as little as your schedule allows. Most members spend 2-5 hours per week on community activities, projects, or learning. During hackathons or special projects, involvement may increase temporarily."
    },
    {
      question: "What language do you use for communication?",
      answer: "We primarily communicate in Vietnamese since most of our members are Vietnamese. However, we also use English for technical discussions, international collaborations, and when working with global Web3 projects."
    },
    {
      question: "How are paid opportunities distributed?",
      answer: "When our team receives client projects that exceed our capacity, we distribute tasks to qualified community members based on their skills, availability, and past contributions. Payment is always fair and prompt. It's a great way to gain real-world experience while earning income."
    },
    {
      question: "What happens after I apply?",
      answer: "After submitting your application, our team reviews it within 2-3 business days. If selected, you'll receive an email with next steps, which may include a brief interview or technical assessment. We'll then welcome you to our community Discord and introduce you to other members."
    }
  ];

  return (
    <div className="space-y-6">
      {faqData.map((item, index) => (
        <div key={index} className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-all duration-300">
          {/* Rain Animation */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <div className="rain-drop" style={{ left: `${20 + (index * 10) % 60}%`, animationDelay: `${index * 0.3}s` }}></div>
            <div className="rain-drop" style={{ left: `${80 - (index * 15) % 60}%`, animationDelay: `${(index * 0.5) + 1}s` }}></div>
          </div>
          
          {/* Question (clickable) */}
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 text-left relative hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
            style={{ zIndex: 1 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-black dark:text-white pr-4">
                {item.question}
              </h3>
              <div className={`transform transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
          
          {/* Answer (collapsible) */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 relative" style={{ zIndex: 1 }}>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <>
      <ParticlesBackground 
        cursorInfluence={1000}
        cursorRadius={600}
      />
      
      {/* Who Are We Section */}
      <InteractiveWhoAreWeSection />

      <section id="what-we-build" className="w-full min-h-screen bg-white dark:bg-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-16 text-center">
              What we build
            </h2>
            
            {/* Asymmetrical rectangular layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              {/* Trading Automation */}
              <div className="relative md:col-span-2 bg-white dark:bg-zinc-900 p-6 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                {/* Rain Animation */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="rain-drop" style={{ left: '10%', animationDelay: '0s' }}></div>
                  <div className="rain-drop" style={{ left: '25%', animationDelay: '0.5s' }}></div>
                  <div className="rain-drop" style={{ left: '40%', animationDelay: '1s' }}></div>
                  <div className="rain-drop" style={{ left: '55%', animationDelay: '1.5s' }}></div>
                  <div className="rain-drop" style={{ left: '70%', animationDelay: '2s' }}></div>
                  <div className="rain-drop" style={{ left: '85%', animationDelay: '2.5s' }}></div>
                </div>
                <div className="relative" style={{ zIndex: 1 }}>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    Trading Automation
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                    Advanced algorithms that execute trades 24/7, optimizing your investment strategy with real-time market analysis.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                    <div>✓ Portfolio: +24.7% (30d)</div>
                    <div>→ Active trades: 12</div>
                    <div className="text-zinc-500 dark:text-zinc-400">⚡ Latency: 0.2ms</div>
                  </div>
                </div>
              </div>

              {/* DApps */}
              <div className="relative md:col-span-2 bg-white dark:bg-zinc-900 p-5 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                {/* Rain Animation */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="rain-drop" style={{ left: '15%', animationDelay: '0.3s' }}></div>
                  <div className="rain-drop" style={{ left: '30%', animationDelay: '0.8s' }}></div>
                  <div className="rain-drop" style={{ left: '45%', animationDelay: '1.3s' }}></div>
                  <div className="rain-drop" style={{ left: '60%', animationDelay: '1.8s' }}></div>
                  <div className="rain-drop" style={{ left: '75%', animationDelay: '2.3s' }}></div>
                  <div className="rain-drop" style={{ left: '90%', animationDelay: '2.8s' }}></div>
                </div>
                <div className="relative" style={{ zIndex: 1 }}>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    DApps
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                    Decentralized applications built on blockchain technology for transparency and security.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-2">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Smart Contract</div>
                      <div className="text-xs font-mono text-zinc-800 dark:text-zinc-200 truncate">0x1a2b...c3d4</div>
                    </div>
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-2">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Gas Used</div>
                      <div className="text-xs font-mono text-zinc-800 dark:text-zinc-200">21,000</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Apps */}
              <div className="md:col-span-1 bg-white dark:bg-zinc-900 p-5 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                    Web Apps
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs">
                    Modern, responsive web applications with cutting-edge UI/UX design.
                  </p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-2 mt-3">
                  <div className="flex items-center space-x-1 mb-1">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">{'<App />'}</div>
                </div>
              </div>

              {/* Smart Contracts */}
              <div className="md:col-span-2 bg-white dark:bg-zinc-900 p-5 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  Smart Contracts
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  Self-executing contracts with terms directly written into code, ensuring trustless transactions.
                </p>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-3 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                  <span className="text-zinc-500 dark:text-zinc-400">contract</span> TokenSale {'{...}'}
                </div>
              </div>

              {/* Penetration Testing */}
              <div className="md:col-span-1 bg-white dark:bg-zinc-900 p-5 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                    Penetration Testing
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs">
                    Ethical security testing to identify and fix vulnerabilities.
                  </p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-2 mt-3 text-[10px] font-mono text-zinc-800 dark:text-zinc-200">
                  <div>{'> nmap -sV target.com'}</div>
                  <div>{'✓ Vulnerabilities found'}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What do you get as a member Section */}
      <section id="member-benefits" className="w-full min-h-screen bg-white dark:bg-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-16 text-center">
              What do you get as a member
            </h2>
            
            {/* Symmetric 2x2 grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* Guidance & Support */}
              <div className="relative bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                {/* Rain Animation */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="rain-drop" style={{ left: '15%', animationDelay: '0s' }}></div>
                  <div className="rain-drop" style={{ left: '40%', animationDelay: '1s' }}></div>
                  <div className="rain-drop" style={{ left: '65%', animationDelay: '2s' }}></div>
                  <div className="rain-drop" style={{ left: '85%', animationDelay: '3s' }}></div>
                </div>
                <div className="relative" style={{ zIndex: 1 }}>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                    Guidance & Support
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Get mentorship and support from experienced community members who've walked the Web3 journey before you.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded border">
                    <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2">
                      // 24/7 community support
                    </div>
                    <div className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
                      mentorship.connect()
                    </div>
                  </div>
                </div>
              </div>

              {/* Gigs & Income */}
              <div className="relative bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                {/* Rain Animation */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="rain-drop" style={{ left: '20%', animationDelay: '0.5s' }}></div>
                  <div className="rain-drop" style={{ left: '45%', animationDelay: '1.5s' }}></div>
                  <div className="rain-drop" style={{ left: '70%', animationDelay: '2.5s' }}></div>
                </div>
                <div className="relative" style={{ zIndex: 1 }}>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                    Gigs & Income
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Earn income through project opportunities when our team distributes workload to community members.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded border">
                    <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2">
                      // Weekly paid opportunities
                    </div>
                    <div className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
                      income.generate()
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Event Tickets */}
              <div className="relative bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                {/* Rain Animation */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="rain-drop" style={{ left: '25%', animationDelay: '0.2s' }}></div>
                  <div className="rain-drop" style={{ left: '55%', animationDelay: '1.2s' }}></div>
                  <div className="rain-drop" style={{ left: '80%', animationDelay: '2.2s' }}></div>
                </div>
                <div className="relative" style={{ zIndex: 1 }}>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                    Free Event Tickets
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Access exclusive Web3 events, conferences, and workshops with complimentary tickets for members.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded border">
                    <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2">
                      // Exclusive event access
                    </div>
                    <div className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
                      events.getTickets()
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience & Growth */}
              <div className="relative bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                {/* Rain Animation */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="rain-drop" style={{ left: '30%', animationDelay: '0.7s' }}></div>
                  <div className="rain-drop" style={{ left: '60%', animationDelay: '1.7s' }}></div>
                </div>
                <div className="relative" style={{ zIndex: 1 }}>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                    Experience & Growth
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Gain hands-on experience through real projects and accelerate your Web3 development journey.
                  </p>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded border">
                    <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2">
                      // Real project experience
                    </div>
                    <div className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
                      skills.levelUp()
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Call to Action Banner */}
            <div className="relative bg-zinc-50 dark:bg-zinc-900 p-12 border border-zinc-200 dark:border-zinc-800 text-center overflow-hidden">
              {/* Rain Animation */}
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                <div className="rain-drop" style={{ left: '10%', animationDelay: '0s' }}></div>
                <div className="rain-drop" style={{ left: '25%', animationDelay: '0.8s' }}></div>
                <div className="rain-drop" style={{ left: '40%', animationDelay: '1.6s' }}></div>
                <div className="rain-drop" style={{ left: '55%', animationDelay: '2.4s' }}></div>
                <div className="rain-drop" style={{ left: '70%', animationDelay: '3.2s' }}></div>
                <div className="rain-drop" style={{ left: '85%', animationDelay: '4s' }}></div>
              </div>
              <div className="relative" style={{ zIndex: 1 }}>
                <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
                  Ready to join Builder Base?
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Start your Web3 journey with our community of ambitious builders and unlock all these benefits today.
                </p>
                <a 
                  href="#apply"
                  className="inline-block bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-8 py-4 border border-zinc-300 dark:border-zinc-600 transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
                    {'> apply_now()'}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    // Join the builder community
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our founding team Section */}
      <section id="team" className="w-full min-h-screen bg-white dark:bg-black py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-16 text-center">
              Our founding team
            </h2>
            
            {/* Founding Team */}
            <div className="bg-zinc-50 dark:bg-zinc-950 p-8 border border-zinc-200 dark:border-zinc-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              {/* Vinh Dinh */}
              <div className="relative bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                {/* Rain Animation */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="rain-drop" style={{ left: '20%', animationDelay: '0s' }}></div>
                  <div className="rain-drop" style={{ left: '60%', animationDelay: '1.5s' }}></div>
                  <div className="rain-drop" style={{ left: '80%', animationDelay: '3s' }}></div>
                </div>
                <div className="relative flex flex-col flex-grow" style={{ zIndex: 1 }}>
                  {/* Profile Image */}
                  <div className="w-20 h-20 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="/assets/Vinh.png" 
                      alt="Vinh Dinh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    Vinh Dinh
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                    Vinschool The Harmony
                  </p>
                  <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300 mb-6 flex-grow">
                    <div>• Winner of Cardano Blockchain Vietnam 2025</div>
                    <div>• International Computing Olympiads medals</div>
                    <div>• Web3 agency co-founder</div>
                  </div>
                  
                  {/* Contact Button */}
                  <button className="w-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 py-2 px-4 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-200 mt-auto">
                  <a href="https://x.com/Vingdev">Contact</a>
                  </button>
                </div>
              </div>

              {/* Minh Dinh */}
              <div className="relative bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                {/* Rain Animation */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="rain-drop" style={{ left: '25%', animationDelay: '0.5s' }}></div>
                  <div className="rain-drop" style={{ left: '65%', animationDelay: '2s' }}></div>
                </div>
                <div className="relative flex flex-col flex-grow" style={{ zIndex: 1 }}>
                  {/* Profile Image */}
                  <div className="w-20 h-20 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="/assets/Minh.jpg" 
                      alt="Minh Dinh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    Minh Dinh
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                    University of Transportation and Communication
                  </p>
                  <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300 mb-6 flex-grow">
                  <div>• Co-founder of Texblabs.com</div>
                    <div>• VP of Blockchain Student Pioneer Club</div>
                    <div>• Raised 100k ADA through Project Catalyst</div>
                  </div>
                  
                  {/* Contact Button */}
                  <button className="w-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 py-2 px-4 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-200 mt-auto">
                    <a href="https://x.com/minh_tex">Contact</a>
                  </button>
                </div>
              </div>

              {/* Huynh Tran */}
              <div className="relative bg-white dark:bg-zinc-900 p-8 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col h-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                {/* Rain Animation */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                  <div className="rain-drop" style={{ left: '30%', animationDelay: '1s' }}></div>
                  <div className="rain-drop" style={{ left: '70%', animationDelay: '2.5s' }}></div>
                </div>
                <div className="relative flex flex-col flex-grow" style={{ zIndex: 1 }}>
                  {/* Profile Image */}
                  <div className="w-20 h-20 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="/assets/Huynh.jpg" 
                      alt="Huynh Tran" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    Huynh Tran
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                    Foreign Trade University
                  </p>
                  <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300 mb-6 flex-grow">
                    <div>• Founder of Tarn Labs, Web3 agency</div>
                    <div>• Web3 since 2018</div>
                  </div>
                  
                  {/* Contact Button */}
                  <button className="w-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 py-2 px-4 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-200 mt-auto">
                  <a href="https://x.com/huynhtarn">Contact</a>
                  </button>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-16 text-center">
              Frequently Asked Questions
            </h2>
            
            <FAQSection />
          </div>
        </div>
      </section>

      {/* Apply to Join Section */}
      <section id="apply" className="w-full min-h-screen bg-white dark:bg-black">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-16 text-center">
              Apply to join
            </h2>
            
            <div className="relative bg-zinc-50 dark:bg-zinc-900 p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              {/* Rain Animation */}
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                <div className="rain-drop" style={{ left: '10%', animationDelay: '0s' }}></div>
                <div className="rain-drop" style={{ left: '25%', animationDelay: '0.8s' }}></div>
                <div className="rain-drop" style={{ left: '40%', animationDelay: '1.6s' }}></div>
                <div className="rain-drop" style={{ left: '55%', animationDelay: '2.4s' }}></div>
                <div className="rain-drop" style={{ left: '70%', animationDelay: '3.2s' }}></div>
                <div className="rain-drop" style={{ left: '85%', animationDelay: '4s' }}></div>
              </div>
              
              <div className="relative" style={{ zIndex: 1 }}>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-center">
                  Join our community of ambitious builders and start your Web3 journey with us.
                </p>
                
                <form 
                  action="https://formspree.io/f/xpwagqko" 
                  method="POST"
                  className="space-y-6"
                >
                  {/* Hidden field to specify recipient */}
                  <input type="hidden" name="_to" value="dqv12908@gmail.com" />
                  <input type="hidden" name="_subject" value="New Builder Base Application" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* University/School */}
                    <div>
                      <label htmlFor="school" className="block text-sm font-medium text-black dark:text-white mb-2">
                        University/School *
                      </label>
                      <input
                        type="text"
                        id="school"
                        name="school"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-transparent"
                        placeholder="Your current school or university"
                      />
                    </div>
                    
                    {/* Year of Study */}
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Year of Study
                      </label>
                      <select
                        id="year"
                        name="year"
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-transparent"
                      >
                        <option value="">Select your level</option>
                        <option value="high-school">High School</option>
                        <option value="year-1">University Year 1</option>
                        <option value="year-2">University Year 2</option>
                        <option value="year-3">University Year 3</option>
                        <option value="year-4">University Year 4+</option>
                        <option value="graduate">Recent Graduate</option>
                        <option value="working">Working Professional</option>
                      </select>
                    </div>
                  </div>

                  {/* Technical Background */}
                  <div>
                    <label htmlFor="background" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Technical Background *
                    </label>
                    <textarea
                      id="background"
                      name="background"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your programming experience, technologies you know, projects you've worked on..."
                    ></textarea>
                  </div>

                  {/* Why Join */}
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Why do you want to join Builder Base? *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-transparent resize-none"
                      placeholder="What interests you about Web3? What do you hope to achieve by joining our community?"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* GitHub */}
                    <div>
                      <label htmlFor="github" className="block text-sm font-medium text-black dark:text-white mb-2">
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        id="github"
                        name="github"
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-transparent"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                    
                    {/* Portfolio */}
                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-medium text-black dark:text-white mb-2">
                        Portfolio/Website
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-transparent"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  {/* Web3 Experience */}
                  <div>
                    <label htmlFor="web3-experience" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Web3/Blockchain Experience
                    </label>
                    <textarea
                      id="web3-experience"
                      name="web3-experience"
                      rows={3}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:border-transparent resize-none"
                      placeholder="Any experience with blockchain, smart contracts, DeFi, NFTs, etc. (Optional - we welcome beginners!)"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-black dark:bg-white text-white dark:text-black py-4 px-8 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500"
                    >
                      Submit Application
                    </button>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 text-center">
                      We'll review your application and get back to you within 2-3 business days.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-zinc-900 dark:bg-zinc-950 border-t border-zinc-800 dark:border-zinc-700">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              
              {/* Brand Section */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Builder Base</h3>
                <p className="text-zinc-400 mb-6 max-w-md">
                  A Web3 community in Hanoi, Vietnam, connecting ambitious students and professionals 
                  to build the future of blockchain technology together.
                </p>
                <div className="flex items-center text-zinc-400 mb-2">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Hanoi, Vietnam
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => document.querySelector('#who-are-we')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      Who are we
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => document.querySelector('#what-we-build')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      What we build
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => document.querySelector('#member-benefits')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      Member benefits
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      Our team
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      Apply to join
                    </button>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="mailto:dqv12908@gmail.com" 
                      className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      Email us
                    </a>
                  </li>

                  <li>
                    <a 
                      href="#" 
                      className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                      Twitter
                    </a>
                  </li>

                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-zinc-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-zinc-400 text-sm mb-4 md:mb-0">
                  © 2024 Builder Base. All rights reserved.
                </div>
                <div className="flex items-center text-zinc-400 text-sm">
                  <span>Made with</span>
                  <svg className="w-4 h-4 mx-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span>in Hanoi, Vietnam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}