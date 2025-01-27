const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve alignment issues in the navigation bar.",
        category: "UI Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-20",
      },
      {
        taskTitle: "Add Login Page",
        taskDescription: "Create a responsive login page with validation.",
        category: "Frontend Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-21",
      },
      {
        taskTitle: "Optimize Images",
        taskDescription:
          "Compress and optimize website images for faster loading.",
        category: "Performance Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2025-01-18",
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate third-party APIs for weather data.",
        category: "Backend Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDate: "2025-01-19",
      },
      {
        taskTitle: "Fix Footer Links",
        taskDescription: "Ensure all footer links redirect to correct pages.",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2025-01-18",
      },
    ],
  },
  {
    id: 3,
    firstName: "Rajesh",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Database Cleanup",
        taskDescription: "Remove duplicate entries in the database.",
        category: "Database Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-20",
      },
      {
        taskTitle: "Code Review",
        taskDescription:
          "Review the pull requests for the recent feature update.",
        category: "Code Quality",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2025-01-17",
      },
    ],
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Add Search Bar",
        taskDescription: "Implement a search functionality in the homepage.",
        category: "Frontend Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-21",
      },
      {
        taskTitle: "Resolve Loading Issue",
        taskDescription: "Fix slow loading time on the dashboard page.",
        category: "Performance Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2025-01-18",
      },
    ],
  },
  {
    id: 5,
    firstName: "Anjali",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        taskTitle: "Update Documentation",
        taskDescription: "Add recent updates to the project documentation.",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-22",
      },
      {
        taskTitle: "Test Payment Gateway",
        taskDescription: "Ensure the payment gateway works without errors.",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskDate: "2025-01-19",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
