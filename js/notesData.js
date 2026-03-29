const notesData = [

    // Basic Electronics Engineering
    {
        subject: "Basic Electronics Engineering",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "1st",
            "B.Tech CSE-AI": "2nd",
            "B.Tech CSE-CCML": "2nd",
            "B.Tech CSE-AIBC": "1st"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1: Diodes",
                files: "BEE Module 1.pdf"
            },
            {
                moduleName: "Module 2: Transistors",
                files: "BEE Module 2.pdf"
            },
            {
                moduleName: "Module 3: Operational Amplifiers & Digital Electronics",
                files: ""
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Engineering Physics
    {
        subject: "Engineering Physics",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "1st",
            "B.Tech CSE-AI": "2nd",
            "B.Tech CSE-CCML": "2nd",
            "B.Tech CSE-AIBC": "1st"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1: Wave Optics",
                chapters: [
                    { name: "Interference", file: "EP Module 1 Ch 1.pdf" },
                    { name: "Diffraction", file: "EP Module 1 Ch 2.pdf" },
                    { name: "Polarization", file: "EP Module 1 Ch 3.pdf" }
                ]
            },
            {
                moduleName: "Module 2: Quantum Mechanics & X-ray Diffraction",
                chapters: [
                    { name: "Quantum Mechanics", file: "EP Module 2 Ch 1.pdf" },
                    { name: "Diffraction of X-rays", file: "EP Module 2 Ch 2.pdf" }
                ]
            },
            {
                moduleName: "Module 3: Electromagnetic Theory & Fibre Optics",
                chapters: [
                    { name: "Electromagnetic Theory", file: "EP Module 3 Ch 1.pdf" },
                    { name: "Fibre Optics", file: "EP Module 3 Ch 2.pdf" }
                ]
            },
            {
                moduleName: "Module 4: Relativistic Mechanics",
                files: ""
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Engineering Mechanics
    {
        subject: "Engineering Mechanics",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "1st",
            "B.Tech CSE-AI": "2nd",
            "B.Tech CSE-CCML": "2nd",
            "B.Tech CSE-AIBC": "1st"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1",
                chapters: [
                    { name: "Two Dimensional Concurrent Force Systems", file: "EM Module 1 Ch 1.pdf" },
                    { name: "Two Dimensional Non-Concurrent Force Systems", file: "EM Module 1 Ch 2.pdf" }
                ]
            },
            {
                moduleName: "Module 2",
                chapters: [
                    { name: "Beams", file: "EM Module 2 Ch 1.pdf" },
                    { name: "Friction", file: "EM Module 2 Ch 2.pdf" }
                ]
            },
            {
                moduleName: "Module 3",
                chapters: [
                    { name: "Trusses", file: "EM Module 3 Ch 1.pdf" },
                    { name: "Centroid & Moment of Inertia", file: "EM Module 3 Ch 2.pdf" }
                ]
            },
            {
                moduleName: "Module 4",
                chapters: [
                    { name: "Kinematics & Kinetics", file: "" },
                    { name: "Simple Stress & Strain", file: "" }
                ]

            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Programming Concepts with Python
    {
        subject: "Programming Concepts with Python",
        branch: ["B.Tech CSE", "B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "2nd"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1: Introduction & Conditional Statements",
                files: "PCP Module 1.pdf"
            },
            {
                moduleName: "Module 2: Loop, Function & Strings",
                files: "PCP Module 2.pdf"
            },
            {
                moduleName: "Module 3: Sieve of Eratosthenes & File I/O",
                files: "PCP Module 3.pdf"
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Differential Equations & Fourier Analysis
    {
        subject: "Differential Equations & Fourier Analysis",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "2nd",
            "B.Tech CSE-CCML": "2nd",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1: Differential Equations",
                files: ""
            },
            {
                moduleName: "Module 2: Series Solution & Special Functions",
                files: ""
            },
            {
                moduleName: "Module 3: Fourier Series",
                files: ""
            },
            {
                moduleName: "Module 4: Partial Differential Equations & Its Applications",
                files: ""
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Environment & Ecological Sustainability
    {
        subject: "Environment & Ecological Sustainability",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "1st",
            "B.Tech CSE-AI": "2nd",
            "B.Tech CSE-CCML": "2nd",
            "B.Tech CSE-AIBC": "1st"
        },
        type: "Notes",
        available: "no",
        modules: [
            {
                moduleName: "Module 1: Environment & Ecology",
                files: ""
            },
            {
                moduleName: "Module 2: Natural Resource & Its Sustainable Uses",
                files: ""
            },
            {
                moduleName: "Module 3: Environmental Pollution & Protection",
                files: ""
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Computer Concepts & Programming in C
    {
        subject: "Computer Concepts & Programming in C",
        branch: ["B.Tech CSE", "B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE": "1st",
            "B.Tech CSE-AI": "1st"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1",
                files: ""
            },
            {
                moduleName: "Module 2",
                files: ""
            },
            {
                moduleName: "Module 3",
                files: ""
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Matrices & Calculus
    {
        subject: "Matrices & Calculus",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "1st",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "1st"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1: Matrices",
                files: ""
            },
            {
                moduleName: "Module 2: Differential Calculus",
                files: ""
            },
            {
                moduleName: "Module 3: Multiple Integrals",
                files: ""
            },
            {
                moduleName: "Module 4: Vector Calculus",
                files: ""
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Engineering Chemistry
    {
        subject: "Engineering Chemistry",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1",
                chapters: [
                    { name: "Atomic Structure & Chemical Bonding", file: "" },
                    { name: "Reactions Kinetics", file: "" },
                    { name: "Electrochemistry", file: "" },
                    { name: "Allotropes of Carbon", file: "" },
                    { name: "Nanomaterials", file: "" },
                    { name: "Solid State", file: "" },
                    { name: "Liquid Crystals", file: "" }
                ]
            },
            {
                moduleName: "Module 2",
                chapters: [
                    { name: "Stereochemistry", file: "" },
                    { name: "Green Chemistry", file: "" }
                ]
            },
            {
                moduleName: "Module 3",
                chapters: [
                    { name: "Principles of Polymer Chemistry", file: "" }
                ]
            }, 
            {
                moduleName: "Module 4",
                chapters: [
                    { name: "Analytical Techniques", file: "" },
                    { name: "Water Technology", file: "" },
                    { name: "BIS (Bureau of Indian Standards)", file: "" },
                    { name: "Biofuels", file: "" }
                ]
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Basic Electrical Engineering
    {
        subject: "Basic Electrical Engineering",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1: Electric Circuit & Basic Theorems",
                files: ""
            },
            {
                moduleName: "Module 2: A.C. Circuits",
                files: ""
            },
            {
                moduleName: "Module 3: Measuring Instruments , Electromagnetic and Transformer",
                files: ""
            },
            {
                moduleName: "Module 4: Electrical Machines",
                files: ""
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Communicative English
    {
        subject: "Communicative English",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1: Fundamentals of Communication",
                files: ""
            },
            {
                moduleName: "Module 2: Vocabulary & Composition",
                files: ""
            },
            {
                moduleName: "Module 3: Elements of Writing & Oral Communication",
                files: ""
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Basics of Artificial Intelligence
    {
        subject: "Basics of Artificial Intelligence",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "Notes",
        available: "yes",
        modules: [
            {
                moduleName: "Module 1: Introduction to Artificial Intelligence",
                files: ""
            },
            {
                moduleName: "Module 2: AI Terminologies & Basic Concepts",
                files: ""
            },
            {
                moduleName: "Module 3: Knowledge Representation & Reasoning",
                files: ""
            },
            {
                moduleName: "Module 4: Applications & Future of Artificial Intelligence",
                files: ""
            }
        ],
        pyqs: [
            { year: "2025-26", term: "Odd", file: "" },
            { year: "2024-25", term: "Even", file: "" }
        ]
    },

    // Complex Analysis and Integral Transforms
    {
        subject: "Complex Analysis and Integral Transforms",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "3rd",
            "B.Tech CSE-AI": "3rd",
            "B.Tech CSE-CCML": "3rd",
            "B.Tech CSE-AIBC": "3rd"
        },
        type: "Notes",
        available: "no"
    },

    // Discrete Mathematics
    {
        subject: "Discrete Mathematics",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE": "3rd",
            "B.Tech CSE-AI": "3rd",
            "B.Tech CSE-CCML": "3rd",
            "B.Tech CSE-AIBC": "3rd"
        },
        type: "Notes",
        available: "no"
    },

    // Data Structure Using C
    {
        subject: "Data Structure Using C",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE": "3rd",
            "B.Tech CSE-AI": "3rd",
            "B.Tech CSE-CCML": "4th",
            "B.Tech CSE-AIBC": "4th"
        },
        type: "Notes",
        available: "no"
    },

    // Computer Organization and Architecture
    {
        subject: "Computer Organization and Architecture",
        branch: ["B.Tech CSE", "B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE": "3rd",
            "B.Tech CSE-AI": "3rd"
        },
        type: "Notes",
        available: "no"
    },

    // Database Management Systems
    {
        subject: "Database Management Systems",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE": "4th",
            "B.Tech CSE-AI": "4th",
            "B.Tech CSE-CCML": "4th"
        },
        type: "Notes",
        available: "no"
    },

    // Operating Systems
    {
        subject: "Operating Systems",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE": "4th",
            "B.Tech CSE-AI": "4th",
            "B.Tech CSE-CCML": "4th"
        },
        type: "Notes",
        available: "no"
    },

    // Microprocessor and Interfacing
    {
        subject: "Microprocessor and Interfacing",
        branch: ["B.Tech CSE", "B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE": "4th",
            "B.Tech CSE-AI": "4th"
        },
        type: "Notes",
        available: "no"
    },

    // Computer Networks
    {
        subject: "Computer Networks",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE": "5th",
            "B.Tech CSE-AI": "5th",
            "B.Tech CSE-CCML": "5th"
        },
        type: "Notes",
        available: "no"
    },

    // Software Engineering
    {
        subject: "Software Engineering",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE": "5th",
            "B.Tech CSE-AI": "5th",
            "B.Tech CSE-CCML": "5th"
        },
        type: "Notes",
        available: "no"
    },

    // Machine Learning
    {
        subject: "Machine Learning",
        branch: ["B.Tech CSE-AI", "B.Tech CSE-CCML", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE-AI": "5th",
            "B.Tech CSE-CCML": "5th",
            "B.Tech CSE-AIBC": "5th"
        },
        type: "Notes",
        available: "no"
    },

    // Deep Learning
    {
        subject: "Deep Learning",
        branch: ["B.Tech CSE-AI", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE-AI": "6th",
            "B.Tech CSE-AIBC": "6th"
        },
        type: "Notes",
        available: "no"
    },

    // Cloud Computing
    {
        subject: "Cloud Computing",
        branch: ["B.Tech CSE", "B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE": "5th",
            "B.Tech CSE-CCML": "5th"
        },
        type: "Notes",
        available: "no"
    },

    // DevOps
    {
        subject: "DevOps",
        branch: ["B.Tech CSE"],
        semester: {
            "B.Tech CSE": "6th"
        },
        type: "Notes",
        available: "no"
    },

    // Big Data Analytics and Architecture
    {
        subject: "Big Data Analytics and Architecture",
        branch: ["B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE-CCML": "6th"
        },
        type: "Notes",
        available: "no"
    },

    // Blockchain Technology
    {
        subject: "Blockchain Technology",
        branch: ["B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE-AIBC": "6th"
        },
        type: "Notes",
        available: "no"
    },

    // Algorithms
    {
        subject: "Algorithms",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE": "4th",
            "B.Tech CSE-AI": "4th",
            "B.Tech CSE-CCML": "4th"
        },
        type: "Notes",
        available: "no"
    },

    // Design and Analysis of Algorithms
    {
        subject: "Design and Analysis of Algorithms",
        branch: ["B.Tech CSE", "B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE": "5th",
            "B.Tech CSE-AI": "5th"
        },
        type: "Notes",
        available: "no"
    },

    // Automata Theory
    {
        subject: "Automata Theory",
        branch: ["B.Tech CSE", "B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE": "4th",
            "B.Tech CSE-AI": "4th"
        },
        type: "Notes",
        available: "no"
    },

    // Digital Logic Design
    {
        subject: "Digital Logic Design",
        branch: ["B.Tech CSE", "B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE": "3rd",
            "B.Tech CSE-AI": "3rd"
        },
        type: "Notes",
        available: "no"
    },

    // Compiler Design
    {
        subject: "Compiler Design",
        branch: ["B.Tech CSE"],
        semester: {
            "B.Tech CSE": "6th"
        },
        type: "Notes",
        available: "no"
    },

    // Data Compression
    {
        subject: "Data Compression",
        branch: ["B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE-CCML": "5th"
        },
        type: "Notes",
        available: "no"
    },

    // Data Science with Python
    {
        subject: "Data Science with Python",
        branch: ["B.Tech CSE-CCML", "B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE-CCML": "5th",
            "B.Tech CSE-AI": "5th"
        },
        type: "Notes",
        available: "no"
    },

    // Artificial Neural Networks
    {
        subject: "Artificial Neural Networks",
        branch: ["B.Tech CSE-AI", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE-AI": "6th",
            "B.Tech CSE-AIBC": "6th"
        },
        type: "Notes",
        available: "no"
    },

    // Concepts of Machine Learning
    {
        subject: "Concepts of Machine Learning",
        branch: ["B.Tech CSE-AI", "B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE-AI": "4th",
            "B.Tech CSE-CCML": "4th"
        },
        type: "Notes",
        available: "no"
    },

    // Concepts of Data Science
    {
        subject: "Concepts of Data Science",
        branch: ["B.Tech CSE-AI", "B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE-AI": "3rd",
            "B.Tech CSE-CCML": "3rd"
        },
        type: "Notes",
        available: "no"
    },

    // Organizational Behavior
    {
        subject: "Organizational Behavior",
        branch: ["B.Tech CSE"],
        semester: {
            "B.Tech CSE": "5th"
        },
        type: "Notes",
        available: "no"
    },

    // Essence of Indian Knowledge System
    {
        subject: "Essence of Indian Knowledge System",
        branch: ["All"],
        semester: {
            "B.Tech CSE": "3rd",
            "B.Tech CSE-AI": "3rd",
            "B.Tech CSE-CCML": "3rd",
            "B.Tech CSE-AIBC": "3rd"
        },
        type: "Notes",
        available: "no"
    },

    // Natural Language Processing
    {
        subject: "Natural Language Processing",
        branch: ["B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE-AI": "7th"
        },
        type: "Notes",
        available: "no"
    },

    // Fuzzy Logic
    {
        subject: "Fuzzy Logic",
        branch: ["B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE-AI": "7th"
        },
        type: "Notes",
        available: "no"
    },

    // Concepts of Deep Learning
    {
        subject: "Concepts of Deep Learning",
        branch: ["B.Tech CSE-AI"],
        semester: {
            "B.Tech CSE-AI": "8th"
        },
        type: "Notes",
        available: "no"
    },

    // Essentials of Machine Learning
    {
        subject: "Essentials of Machine Learning",
        branch: ["B.Tech CSE"],
        semester: {
            "B.Tech CSE": "8th"
        },
        type: "Notes",
        available: "no"
    },

    // Soft Computing
    {
        subject: "Soft Computing",
        branch: ["B.Tech CSE"],
        semester: {
            "B.Tech CSE": "7th"
        },
        type: "Notes",
        available: "no"
    },

    // Distributed Systems
    {
        subject: "Distributed Systems",
        branch: ["B.Tech CSE"],
        semester: {
            "B.Tech CSE": "7th"
        },
        type: "Notes",
        available: "no"
    },

    // Digital Image Processing
    {
        subject: "Digital Image Processing",
        branch: ["B.Tech CSE-CCML"],
        semester: {
            "B.Tech CSE-CCML": "8th"
        },
        type: "Notes",
        available: "no"
    },

    // Cybersecurity
    {
        subject: "Cybersecurity",
        branch: ["B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE-AIBC": "8th"
        },
        type: "Notes",
        available: "no"
    },

    // Solidity and Smart Contract
    {
        subject: "Solidity and Smart Contract",
        branch: ["B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE-AIBC": "7th"
        },
        type: "Notes",
        available: "no"
    },

    // Basics of Artificial Intelligence PYQ
    {
        subject: "Basics of Artificial Intelligence 2025-26 Odd Semester",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "PYQ",
        available: "no"
    },

    // Basics Electrical Engineering PYQ
    {
        subject: "Basics Electrical Engineering 2025-26 Odd Semester",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "PYQ",
        available: "no"
    },

    // Computer Concepts & Programming in C PYQ
    {
        subject: "Computer Concepts & Programming in C 2025-26 Odd Semester",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "PYQ",
        available: "no"
    },

    // Communicative English PYQ
    {
        subject: "Communicative English 2025-26 Odd Semester",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "PYQ",
        available: "no"
    },

    // Engineering Chemistry PYQ
    {
        subject: "Engineering Chemistry 2025-26 Odd Semester",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "PYQ",
        available: "no"
    },

    // Matrices & Calculus PYQ
    {
        subject: "Matrices & Calculus 2025-26 Odd Semester",
        branch: ["B.Tech CSE", "B.Tech CSE-AI", "B.Tech CSE-CCML", "B.Tech CSE-AIBC"],
        semester: {
            "B.Tech CSE": "2nd",
            "B.Tech CSE-AI": "1st",
            "B.Tech CSE-CCML": "1st",
            "B.Tech CSE-AIBC": "2nd"
        },
        type: "PYQ",
        available: "no"
    },
];

window.notesData = notesData;