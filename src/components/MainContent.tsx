
import { Brain, Code, Database, Network, Calculator, Users, TrendingUp, BookOpen, FileText, Mail } from 'lucide-react';
import TopicCard from './TopicCard';
import ResumeTemplate from './ResumeTemplate';
import StatisticsSection from './StatisticsSection';

const MainContent = () => {
  const topics = [
    {
      id: 'aptitude',
      title: 'Aptitude',
      description: 'Master verbal, reasoning, and numerical abilities essential for placement tests.',
      topics: [
        'Word Completion', 'Sentence Completion', 'Error Identification', 'Reading Comprehension',
        'Arrangement', 'Word Pattern', 'Letter Series', 'Number Series', 'Seating Arrangements',
        'Coding-Decoding', 'Blood Relations', 'Directional Sense', 'Syllogism', 'Data Sufficiency',
        'Number System', 'LCM & HCF', 'Percentages', 'Ratios & Proportion', 'Work and Time',
        'Speed Time Distance', 'Profit and Loss', 'Probability', 'Statistics'
      ],
      resources: [
        { name: 'India BIX Aptitude Practice', url: 'https://www.indiabix.com/aptitude/questions-and-answers/', type: 'practice' as const },
        { name: 'OnlineStudy4u Channel', url: 'https://www.youtube.com/@OnlineStudy4u', type: 'video' as const },
        { name: 'Smartstudyforcareer', url: 'https://www.youtube.com/@Smartstudyforcareer', type: 'video' as const },
        { name: 'Career Ride Official', url: 'https://www.youtube.com/@CareerRideOfficial', type: 'video' as const },
        { name: 'Chandan Logics', url: 'https://www.youtube.com/@ChandanLogics', type: 'video' as const },
        { name: 'Past Year Papers', url: 'https://drive.google.com/drive/folders/1gFPwRS4JHpDSiOJd0Syyhh0AErn5XRfq', type: 'article' as const }
      ],
      color: 'purple',
      icon: <Calculator className="w-6 h-6 text-neon-purple" />
    },
    {
      id: 'cs-fundamentals',
      title: 'CS Fundamentals',
      description: 'Core computer science concepts including OOPS, DBMS, OS, and Computer Networks.',
      topics: [
        'Object Oriented Programming', 'Database Management Systems', 'Operating Systems',
        'Computer Networks', 'SQL Queries', 'Normalization', 'Indexing', 'Transactions',
        'Process Management', 'Memory Management', 'File Systems', 'TCP/IP', 'OSI Model',
        'Routing Protocols', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'
      ],
      resources: [
        { name: 'CodeHelp OOPS Playlist', url: 'https://youtu.be/i_5pvt7ag7E?si=bJJ3WSgRjqf8wcn2', type: 'video' as const },
        { name: 'OOPS Notes by Love Babbar', url: 'https://drive.google.com/file/d/1_j7guQZdReJ9GzMdFhqRscXq9rnquBya/view?usp=drive_link', type: 'article' as const },
        { name: 'DBMS Interview Questions', url: 'https://www.interviewbit.com/dbms-interview-questions/', type: 'practice' as const },
        { name: 'DBMS Notes', url: 'https://drive.google.com/file/d/1vmLWJSJStfXRdAwtMFz1Kpj2Nnj7b9hY/view?usp=drive_link', type: 'article' as const },
        { name: 'CodeHelp DBMS Playlist', url: 'https://youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU&si=nEIYPz5ph5DetCee', type: 'video' as const },
        { name: 'OOPS MCQ Questions', url: 'https://www.interviewbit.com/oops-mcq/', type: 'practice' as const }
      ],
      color: 'blue',
      icon: <Database className="w-6 h-6 text-neon-blue" />
    },
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      description: 'Master DSA concepts with comprehensive courses and practice problems.',
      topics: [
        'Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Hashing',
        'Sorting Algorithms', 'Searching Algorithms', 'Dynamic Programming', 'Greedy Algorithms',
        'Recursion', 'Backtracking', 'Binary Search', 'DFS', 'BFS', 'Dijkstra Algorithm',
        'Union Find', 'Segment Trees', 'Trie', 'Heap', 'Binary Trees', 'BST'
      ],
      resources: [
        { name: 'Striver A2Z Course', url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/', type: 'practice' as const },
        { name: 'CodeHelp DSA Course', url: 'https://www.youtube.com/@CodeHelp', type: 'video' as const },
        { name: 'Apna College DSA', url: 'https://www.youtube.com/@ApnaCollegeOfficial', type: 'video' as const },
        { name: 'Abdul Bari Algorithms', url: 'https://www.youtube.com/@abdul_bari', type: 'video' as const },
        { name: 'Aditya Verma DP', url: 'https://www.youtube.com/@AdityaVermaTheProgrammingLord', type: 'video' as const },
        { name: 'Pepcoding Java DSA', url: 'https://www.pepcoding.com/', type: 'practice' as const }
      ],
      color: 'green',
      icon: <Code className="w-6 h-6 text-neon-green" />
    },
    {
      id: 'sql',
      title: 'SQL & Database',
      description: 'Learn SQL queries, database design, and optimization techniques.',
      topics: [
        'SELECT Queries', 'JOINs', 'Subqueries', 'Aggregation Functions', 'Window Functions',
        'Stored Procedures', 'Triggers', 'Views', 'Indexes', 'Database Design', 'Normalization',
        'ACID Properties', 'Transactions', 'Concurrency Control', 'Query Optimization',
        'NoSQL Databases', 'MongoDB', 'Database Security'
      ],
      resources: [
        { name: 'Apna College SQL Lecture', url: 'https://www.youtube.com/watch?v=hlGoQC332VM&t=5477s', type: 'video' as const },
        { name: 'Riti Kumari SQL Interviews', url: 'https://www.youtube.com/@RitiKumari/videos', type: 'video' as const },
        { name: 'SQL Interview Questions', url: 'https://www.interviewbit.com/sql-interview-questions/', type: 'practice' as const },
        { name: 'SQL MCQ Questions', url: 'https://www.interviewbit.com/sql-mcq/', type: 'practice' as const },
        { name: 'GeeksforGeeks SQL', url: 'https://www.geeksforgeeks.org/sql-tutorial/', type: 'article' as const },
        { name: 'W3Schools SQL', url: 'https://www.w3schools.com/sql/', type: 'article' as const }
      ],
      color: 'orange',
      icon: <Database className="w-6 h-6 text-neon-orange" />
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Full-stack web development with modern frameworks and technologies.',
      topics: [
        'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB',
        'RESTful APIs', 'Authentication', 'State Management', 'Responsive Design',
        'Version Control (Git)', 'Deployment', 'Testing', 'Performance Optimization'
      ],
      resources: [
        { name: 'Colt Steele Web Bootcamp', url: 'https://www.udemy.com/course/the-web-developer-bootcamp/', type: 'video' as const },
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', type: 'article' as const },
        { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'practice' as const },
        { name: 'React Documentation', url: 'https://react.dev/', type: 'article' as const },
        { name: 'Node.js Tutorial', url: 'https://nodejs.org/en/learn', type: 'article' as const }
      ],
      color: 'pink',
      icon: <Network className="w-6 h-6 text-neon-pink" />
    },
    {
      id: 'interview-prep',
      title: 'Interview Preparation',
      description: 'HR questions, behavioral interviews, and placement interview strategies.',
      topics: [
        'HR Questions', 'Behavioral Interviews', 'Technical Interviews', 'System Design',
        'Problem Solving', 'Communication Skills', 'Resume Building', 'Mock Interviews',
        'Company Research', 'Salary Negotiation', 'Follow-up Strategies'
      ],
      resources: [
        { name: 'InterviewBit Questions', url: 'https://www.interviewbit.com/', type: 'practice' as const },
        { name: 'GeeksforGeeks Interview', url: 'https://www.geeksforgeeks.org/company-interview-corner/', type: 'article' as const },
        { name: 'LeetCode Interview', url: 'https://leetcode.com/interview/', type: 'practice' as const },
        { name: 'Pramp Mock Interviews', url: 'https://www.pramp.com/', type: 'practice' as const }
      ],
      color: 'blue',
      icon: <Users className="w-6 h-6 text-neon-blue" />
    }
  ];

  const resumeTemplates = [
    {
      title: 'Classic Professional Resume – Sans Serif Design',
      description: 'Clean and professional design perfect for all career levels and industries.',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      previewUrl: 'https://flowcv.com/resume-template/classic-sans-serif-professional',
      downloadUrl: '/lovable-uploads/b5613b8c-c0e0-41dc-8453-0a5c7b5024d1.png'
    },
    {
      title: 'Structured Academic Resume',
      description: 'Suitable for those blending research and tech industry experience.',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      previewUrl: 'https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs',
      downloadUrl: '/lovable-uploads/cd078c3a-c8e8-459b-8c39-3a9c75378ac9.png'
    },
    {
      title: 'Deedy Resume Reversed - 2 Column',
      description: 'Professional 2-column template with modern layout and clear sections.',
      imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      previewUrl: 'https://www.overleaf.com/latex/templates/deedy-resume-reversed/hqnwfgjbbddt',
      downloadUrl: '/lovable-uploads/695f9ebd-f408-43cc-90ef-6553480a6464.png'
    },
    {
      title: 'FAANGPath Simple Template',
      description: 'Clean and structured template optimized for tech industry applications.',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      previewUrl: 'https://www.overleaf.com/latex/templates/faangpath-simple-template/npsfpdqnxmbc',
      downloadUrl: '/lovable-uploads/637c8f0f-9014-45a8-b9c1-83f51c830fcf.png'
    },
    {
      title: 'Canva Resume Maker',
      description: 'Interactive online resume builder with modern templates and easy customization.',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      previewUrl: 'https://www.canva.com/design/DAGo5WdESE4/RfTVPYxoDq_j7-LcsqC5LA/edit?ui=eyJHIjp7IkQiOnsiRCI6eyJBPyI6IkUifX19fQ&referrer=resumes-landing-page',
      downloadUrl: '/lovable-uploads/86b0e7f8-1ff7-4196-9844-ac9811cc6ef8.png'
    },
    {
      title: 'Professional Experience Resume',
      description: 'Perfect template for professionals with substantial experience and projects.',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      previewUrl: 'https://www.overleaf.com/latex/templates/resume-template-by-anubhav/dhmkrwtksdgy',
      downloadUrl: 'https://www.overleaf.com/latex/templates/resume-template-by-anubhav/dhmkrwtksdgy'
    }
  ];

  return (
    <main className="py-20">
      {/* Resources Section */}
      <section id="resources" className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Comprehensive Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to crack your placements and internships, organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topics.map((topic) => (
              <div key={topic.id} id={topic.id}>
                <TopicCard {...topic} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Templates Section */}
      <section id="resume-templates" className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-12 h-12 text-neon-blue mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Resume Templates
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional resume templates to help you stand out in your job applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeTemplates.map((template, index) => (
              <ResumeTemplate key={index} {...template} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />
    </main>
  );
};

export default MainContent;
