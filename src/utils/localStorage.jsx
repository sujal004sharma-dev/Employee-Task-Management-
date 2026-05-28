const employee = [
  {
    id: 1,
    name: "Rahul",
    username: "rahul01",
    email: "e@e.com",
    password: "123",

    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        activeTask: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Dashboard",
        taskDescription: "Improve dashboard UI and fix alignment issues.",
        category: "Design",
        taskDate: "2026-05-15",
        priority: "Urgent"
      },
      {
        activeTask: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve incorrect password validation issue.",
        category: "Development",
        taskDate: "2026-05-12",
        priority: "Low"
      },
      {
        activeTask: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with payment gateway API.",
        category: "Backend",
        taskDate: "2026-05-10",
        priority: "High"
      }
    ]
  },

  {
    id: 2,
    name: "Priya",
    username: "priya02",
    email: "employee2@example.com",
    password: "123",

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        activeTask: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Build responsive landing page for product.",
        category: "Frontend",
        taskDate: "2026-05-14",
        priority: "High"
      },
      {
        activeTask: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Take weekly database backup.",
        category: "Database",
        taskDate: "2026-05-11",
        priority: "Low"
      },
      {
        activeTask: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize website images.",
        category: "Optimization",
        taskDate: "2026-05-16",
        priority: "Immediate"
      },
      {
        activeTask: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy latest build to production.",
        category: "Deployment",
        taskDate: "2026-05-13",
        priority: "Urgent"
      }
    ]
  },

  {
    id: 3,
    name: "Aman ",
    username: "aman03",
    email: "employee3@example.com",
    password: "123",

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        activeTask: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare API documentation for developers.",
        category: "Documentation",
        taskDate: "2026-05-15",
        priority:"Urgent"
      },
      {
        activeTask: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Correct mobile navbar responsiveness.",
        category: "UI Fix",
        taskDate: "2026-05-12",
        priority:"Urgent"
      },
      {
        activeTask: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from teammates.",
        category: "Review",
        taskDate: "2026-05-17",
        priority:"Urgent"
      }
    ]
  },

  {
    id: 4,
    name: "Sneha ",
    username: "sneha04",
    email: "employee4@example.com",
    password: "123",

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        activeTask: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Authentication",
        taskDescription: "Implement JWT authentication system.",
        category: "Security",
        taskDate: "2026-05-18",
        priority:"High"
      },
      {
        activeTask: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Testing",
        taskDescription: "Test application for UI bugs.",
        category: "Testing",
        taskDate: "2026-05-11",
        priority:"Low"
      },
      {
        activeTask: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Migration",
        taskDescription: "Migrate server to new hosting provider.",
        category: "DevOps",
        taskDate: "2026-05-09",
        priority:"Immediate"
      },
      {
        activeTask: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement dark mode feature in app.",
        category: "Frontend",
        taskDate: "2026-05-19",
        priority:"Urgent"
      }
    ]
  },

  {
    id: 5,
    name: "Vikram ",
    username: "vikram05",
    email: "employee5@example.com",
    password: "123",

    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        activeTask: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve SEO score of website.",
        category: "Marketing",
        taskDate: "2026-05-20",
        priority:"Immediate"
      },
      {
        activeTask: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Generate monthly analytics reports.",
        category: "Analytics",
        taskDate: "2026-05-10",
        priority:"Urgent"
      },
      {
        activeTask: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Testing",
        taskDescription: "Test app performance under heavy load.",
        category: "Testing",
        taskDate: "2026-05-21",
        priority:"Low"
      },
      {
        activeTask: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Integration",
        taskDescription: "Integrate email notification service.",
        category: "Backend",
        taskDate: "2026-05-13",
        priority:"Urgent"
      },
      {
        activeTask: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Refactor Code",
        taskDescription: "Clean and optimize old codebase.",
        category: "Development",
        taskDate: "2026-05-22",
        priority:"High"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Admin ",
    username: "admin01",
    email: "admin@me.com",
    password: "123"
  }
];

// localStorage.clear()



export const setLocalStorage = () => {
    localStorage.setItem('employee', JSON.stringify(employee))
    localStorage.setItem('admin', JSON.stringify(admin))
    // console.log(admin)
}

export const getLocalStorage = () => {
  let employee = null
  let admin = null
  try {
    const empStr = localStorage.getItem('employee')
    const admStr = localStorage.getItem('admin')
    if (empStr) employee = JSON.parse(empStr)
    if (admStr) admin = JSON.parse(admStr)
  } catch (err) {
    console.error('Failed to parse localStorage keys', err)
  }

  return { employee, admin }
}