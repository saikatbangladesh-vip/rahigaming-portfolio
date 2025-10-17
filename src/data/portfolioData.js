// Portfolio data
export const personalInfo = {
  name: "Rahi Gaming",
  title: "Gaming Content Creator",
  tagline: "Creating epic gaming content and building communities",
  email: "rahi.gaming@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "Passionate gaming content creator with 5+ years of experience in streaming, video production, and community building. I create engaging gaming content, build amazing communities, and help gamers level up their skills across multiple platforms.",
  profileImage: "/api/placeholder/300/300", // Placeholder image
  resume: "/resume.pdf"
};

export const socialLinks = [
  {
    name: "Twitch",
    url: "https://twitch.tv/rahigaming",
    icon: "FiTv"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@rahigaming",
    icon: "FiPlay"
  },
  {
    name: "Discord",
    url: "https://discord.gg/rahigaming",
    icon: "FiMessageSquare"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rahigaming",
    icon: "FiTwitter"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/rahigaming",
    icon: "FiInstagram"
  },
  {
    name: "Email",
    url: "mailto:rahi.gaming@example.com",
    icon: "FiMail"
  }
];

export const skills = [
  {
    category: "Content Creation",
    technologies: [
      { name: "Video Editing", level: 95, icon: "FiVideo" },
      { name: "OBS Studio", level: 90, icon: "SiObs" },
      { name: "Adobe Premiere", level: 85, icon: "SiAdobe" },
      { name: "After Effects", level: 80, icon: "SiAdobeaftereffects" },
      { name: "Photoshop", level: 90, icon: "SiAdobephotoshop" },
      { name: "Thumbnail Design", level: 95, icon: "FiImage" },
      { name: "Stream Overlays", level: 85, icon: "FiLayers" },
      { name: "Audio Editing", level: 80, icon: "FiMic" }
    ]
  },
  {
    category: "Gaming Platforms",
    technologies: [
      { name: "PC Gaming", level: 95, icon: "FiMonitor" },
      { name: "PlayStation", level: 90, icon: "SiPlaystation" },
      { name: "Xbox", level: 85, icon: "SiXbox" },
      { name: "Nintendo Switch", level: 80, icon: "SiNintendoswitch" },
      { name: "Mobile Gaming", level: 75, icon: "FiSmartphone" },
      { name: "Retro Gaming", level: 70, icon: "FiGamepad2" },
      { name: "VR Gaming", level: 65, icon: "FiEye" }
    ]
  },
  {
    category: "Streaming & Tools",
    technologies: [
      { name: "Twitch Streaming", level: 95, icon: "SiTwitch" },
      { name: "Discord Bots", level: 80, icon: "SiDiscord" },
      { name: "StreamLabs", level: 90, icon: "FiTv" },
      { name: "Social Media", level: 85, icon: "FiShare2" },
      { name: "Community Mgmt", level: 90, icon: "FiUsers" },
      { name: "Analytics", level: 75, icon: "FiBarChart" },
      { name: "SEO/Growth", level: 80, icon: "FiTrendingUp" },
      { name: "Sponsorship Mgmt", level: 70, icon: "FiDollarSign" }
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "Rahi Gaming (Self-Employed)",
    position: "Full-Time Content Creator & Streamer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Building and managing a gaming content empire across multiple platforms. Creating engaging content, streaming live gameplay, and fostering vibrant gaming communities.",
    achievements: [
      "Grew YouTube channel to 250K+ subscribers",
      "Built active Discord community of 15K+ members",
      "Achieved Twitch Partner status with 5K+ followers",
      "Secured brand partnerships worth $50K+ annually"
    ],
    technologies: ["OBS Studio", "Adobe Premiere", "Streamlabs", "Discord Bots", "Analytics"]
  },
  {
    id: 2,
    company: "GameStream Network",
    position: "Content Creator & Community Manager",
    duration: "2020 - 2022",
    location: "Remote",
    description: "Created gaming content for a multi-channel network, managed community engagement, and collaborated with other creators on projects.",
    achievements: [
      "Produced 200+ gaming videos with 1M+ total views",
      "Managed communities across 5 different games",
      "Increased network engagement by 150%",
      "Mentored 10+ new content creators"
    ],
    technologies: ["Video Editing", "Photoshop", "Social Media", "Community Management"]
  },
  {
    id: 3,
    company: "Gaming Cafe Plus",
    position: "Gaming Specialist & Event Coordinator",
    duration: "2019 - 2020",
    location: "Los Angeles, CA",
    description: "Organized gaming tournaments, managed gaming setups, and created content to promote gaming events and new releases.",
    achievements: [
      "Organized 25+ successful gaming tournaments",
      "Increased cafe revenue by 30% through events",
      "Built local gaming community of 500+ members",
      "Created promotional content for 50+ events"
    ],
    technologies: ["Event Management", "Tournament Organization", "Live Streaming", "Content Creation"]
  }
];

export const education = [
  {
    id: 1,
    institution: "University of California",
    degree: "Bachelor of Science in Computer Science",
    duration: "2015 - 2019",
    location: "Berkeley, CA",
    gpa: "3.8/4.0",
    relevant: ["Data Structures", "Algorithms", "Web Development", "Database Systems"]
  }
];

import projectImage from '../assets/images/image.jpg';

export const projects = [
  {
    id: 1,
    title: "Epic Gaming Montages",
    description: "High-energy gaming montages featuring epic plays, clutch moments, and incredible highlights from various games. Each video is carefully edited with custom effects and music.",
    image: projectImage,
    technologies: ["Adobe Premiere Pro", "After Effects", "Photoshop", "OBS Studio"],
    features: [
      "Custom visual effects and transitions",
      "Synchronized music and gameplay",
      "Multi-game highlight compilation",
      "Professional color grading",
      "Dynamic thumbnail designs",
      "YouTube optimization and SEO"
    ],
    githubUrl: null,
    liveUrl: "https://youtube.com/@rahigaming/montages",
    category: "Video Content"
  },
  {
    id: 2,
    title: "Live Gaming Streams",
    description: "Interactive live streaming experience with custom overlays, chat integration, and real-time viewer engagement across multiple gaming titles.",
    image: projectImage,
    technologies: ["OBS Studio", "Streamlabs", "Discord Bots", "Stream Deck"],
    features: [
      "Custom stream overlays and alerts",
      "Interactive chat commands",
      "Multi-platform streaming (Twitch/YouTube)",
      "Real-time donation tracking",
      "Game-specific scene transitions",
      "Community challenges and events"
    ],
    githubUrl: null,
    liveUrl: "https://twitch.tv/rahigaming",
    category: "Live Streaming"
  },
  {
    id: 3,
    title: "Gaming Tutorials & Guides",
    description: "Comprehensive gaming tutorials covering strategies, tips, tricks, and complete walkthroughs for popular games, helping viewers improve their gameplay.",
    image: projectImage,
    technologies: ["Screen Recording", "Video Editing", "Graphic Design", "Content Planning"],
    features: [
      "Step-by-step gameplay guides",
      "Pro tips and strategies",
      "Beginner-friendly tutorials",
      "Custom graphics and annotations",
      "Multi-part series organization",
      "Community feedback integration"
    ],
    githubUrl: null,
    liveUrl: "https://youtube.com/@rahigaming/tutorials",
    category: "Gaming Content"
  },
  {
    id: 4,
    title: "Gaming Community Discord",
    description: "A thriving Discord community with custom bots, gaming events, tournaments, and active moderation fostering positive gaming culture.",
    image: projectImage,
    technologies: ["Discord.js", "Node.js", "Database Management", "Community Tools"],
    features: [
      "Custom Discord bots and commands",
      "Tournament organization system",
      "Gaming role management",
      "Event scheduling and notifications",
      "Leveling and reward systems",
      "Multi-game LFG (Looking for Group) channels"
    ],
    githubUrl: null,
    liveUrl: "https://discord.gg/rahigaming",
    category: "Community"
  },
  {
    id: 5,
    title: "Game Reviews & First Impressions",
    description: "Honest and detailed game reviews covering gameplay mechanics, graphics, story, and overall experience to help viewers make informed gaming decisions.",
    image: projectImage,
    technologies: ["Game Capture", "Review Framework", "Rating System", "Comparative Analysis"],
    features: [
      "Comprehensive scoring system",
      "Gameplay footage showcases",
      "Pros and cons breakdown",
      "Comparison with similar games",
      "Community poll integration",
      "Recommendation algorithms"
    ],
    githubUrl: null,
    liveUrl: "https://youtube.com/@rahigaming/reviews",
    category: "Gaming Content"
  },
  {
    id: 6,
    title: "Gaming Podcast Series",
    description: "Weekly gaming podcast discussing industry news, game releases, interviews with developers, and community discussions about gaming culture.",
    image: projectImage,
    technologies: ["Audio Recording", "Podcast Editing", "Multi-platform Distribution", "Guest Management"],
    features: [
      "Weekly episode releases",
      "Industry expert interviews",
      "Gaming news and analysis",
      "Community Q&A segments",
      "Multi-platform distribution",
      "Interactive listener feedback"
    ],
    githubUrl: null,
    liveUrl: "https://anchor.fm/rahigaming",
    category: "Podcast"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Alex StreamKing",
    position: "Fellow Content Creator",
    company: "Gaming Community",
    content: "Rahi Gaming creates some of the most entertaining and high-quality gaming content I've ever seen. His editing skills and gameplay commentary are top-notch!",
    avatar: "/api/placeholder/100/100",
    rating: 5
  },
  {
    id: 2,
    name: "Jessica Martinez",
    position: "Community Manager",
    company: "GameHub Network",
    content: "Working with Rahi Gaming has been incredible. He knows how to engage his audience and build genuine connections with his community. A true professional!",
    avatar: "/api/placeholder/100/100",
    rating: 5
  },
  {
    id: 3,
    name: "Chris GamerPro",
    position: "Esports Commentator",
    company: "Pro Gaming League",
    content: "Rahi Gaming has an amazing talent for breaking down complex gameplay mechanics and making them accessible to viewers of all skill levels. Highly recommended!",
    avatar: "/api/placeholder/100/100",
    rating: 5
  }
];
