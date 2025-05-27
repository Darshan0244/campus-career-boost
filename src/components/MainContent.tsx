
import { Brain, Code, Database, Network, Calculator, Users, TrendingUp, BookOpen } from 'lucide-react';
import TopicCard from './TopicCard';

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
        { name: 'India BIX Aptitude Practice', url: 'https://www.indiabix.com/aptitude/questions-and-answers/', type: 'practice' },
        { name: 'OnlineStudy4u Channel', url: 'https://www.youtube.com/@OnlineStudy4u', type: 'video' },
        { name: 'Smartstudyforcareer', url: 'https://www.youtube.com/@Smartstudyforcareer', type: 'video' },
        { name: 'Career Ride Official', url: 'https://www.youtube.com/@CareerRideOfficial', type: 'video' },
        { name: 'Chandan Logics', url: 'https://www.youtube.com/@ChandanLogics', type: 'video' },
        { name: 'Past Year Papers', url: 'https://drive.google.com/drive/folders/1gFPwRS4JHpDSiOJd0Syyhh0AErn5XRfq', type: 'article' }
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
        { name: 'CodeHelp OOPS Playlist', url: 'https://youtu.be/i_5pvt7ag7E?si=bJJ3WSgRjqf8wcn2', type: 'video' },
        { name: 'OOPS Notes by Love Babbar', url: 'https://drive.google.com/file/d/1_j7guQZdReJ9GzMdFhqRscXq9rnquBya/view?usp=drive_link', type: 'article' },
        { name: 'DBMS Interview Questions', url: 'https://www.interviewbit.com/dbms-interview-questions/', type: 'practice' },
        { name: 'DBMS Notes', url: 'https://drive.google.com/file/d/1vmLWJSJStfXRdAwtMFz1Kpj2Nnj7b9hY/view?usp=drive_link', type: 'article' },
        { name: 'CodeHelp DBMS Playlist', url: 'https://youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU&si=nEIYPz5ph5DetCee', type: 'video' },
        { name: 'OOPS MCQ Questions', url: 'https://www.interviewbit.com/oops-mcq/', type: 'practice' }
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
        { name: 'Striver A2Z Course', url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/', type: 'practice' },
        { name: 'CodeHelp DSA Course', url: 'https://www.youtube.com/@CodeHelp', type: 'video' },
        { name: 'Apna College DSA', url: 'https://www.youtube.com/@ApnaCollegeOfficial', type: 'video' },
        { name: 'Abdul Bari Algorithms', url: 'https://www.youtube.com/@abdul_bari', type: 'video' },
        { name: 'Aditya Verma DP', url: 'https://www.youtube.com/@AdityaVermaTheProgrammingLord', type: 'video' },
        { name: 'Pepcoding Java DSA', url: 'https://www.pepcoding.com/', type: 'practice' }
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
        { name: 'Apna College SQL Lecture', url: 'https://www.youtube.com/watch?v=hlGoQC332VM&t=5477s', type: 'video' },
        { name: 'Riti Kumari SQL Interviews', url: 'https://www.youtube.com/@RitiKumari/videos', type: 'video' },
        { name: 'SQL Interview Questions', url: 'https://www.interviewbit.com/sql-interview-questions/', type: 'practice' },
        { name: 'SQL MCQ Questions', url: 'https://www.interviewbit.com/sql-mcq/', type: 'practice' },
        { name: 'GeeksforGeeks SQL', url: 'https://www.geeksforgeeks.org/sql-tutorial/', type: 'article' },
        { name: 'W3Schools SQL', url: 'https://www.w3schools.com/sql/', type: 'article' }
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
        { name: 'Colt Steele Web Bootcamp', url: 'https://www.udemy.com/course/the-web-developer-bootcamp/', type: 'video' },
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', type: 'article' },
        { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'practice' },
        { name: 'React Documentation', url: 'https://react.dev/', type: 'article' },
        { name: 'Node.js Tutorial', url: 'https://nodejs.org/en/learn', type: 'article' }
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
        { name: 'InterviewBit Questions', url: 'https://www.interviewbit.com/', type: 'practice' },
        { name: 'GeeksforGeeks Interview', url: 'https://www.geeksforgeeks.org/company-interview-corner/', type: 'article' },
        { name: 'LeetCode Interview', url: 'https://leetcode.com/interview/', type: 'practice' },
        { name: 'Pramp Mock Interviews', url: 'https://www.pramp.com/', type: 'practice' }
      ],
      color: 'blue',
      icon: <Users className="w-6 h-6 text-neon-blue" />
    }
  ];

  return (
    <main className="py-20">
      {/* Resources Section */}
      <section id="resources" className="mb-20">
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

      {/* Quick Stats */}
      <section className="py-16 glass-light border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-neon-blue mb-2">500+</div>
              <div className="text-gray-400">Practice Questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-green mb-2">50+</div>
              <div className="text-gray-400">Video Lectures</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-purple mb-2">100+</div>
              <div className="text-gray-400">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-orange mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
