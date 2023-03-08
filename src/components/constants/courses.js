/*
export const courses = [
  {
    "School":"Schnieder Electric",
    "courses": [
      "Fundamentals of Power",
      "Efficiency of AC and DC Power Distribution in Data Centers",
      "Energy Efficiency Fundamentals",
      "Energy Efficiency Solutions Book",
      "Energy Efficiency with Building Automation Systems I",
      "Energy Efficiency with Building Automation Systems II",
      "Going Green: Energy Efficiency in the Data Center",
      "Unlocking Energy Efficiency: Management and Control is the Key (WHITEPAPER)",
      "Electric Vehicles: Plugging into Smarter Energy Management",
      "Efficient Motor Control With Power Drives Systems",
      "Determining Data Center User Requirements",
      "Data Center Temperature Rise During A Cooling System Outage",
      "Measuring Data Center Electrical Efficiency",
      "Optimising Data Center Environmental Monitoring",
      "US Energy Codes and Standards",
      "A Comparison of AC and DC Power Distribution in the Data Center",
      "An Overview of Data Center Physical Infrastructure",
      "A Four-Step Path to a Comprehensive Energy Management Action Plan",
      "Active Energy Efficiency Using Speed Control",
      "Alternative Power Generation Technologies",
      "Analysing Reliability in the Data Center",
      "Battery Technology for Data Centers and Network Rooms",
      "Better Data Centers Through Reference Designs",
      "Building Controls I: An Introduction to Building Controls",
      "Building Controls II: Control Sensors",
      "Building Controls III: Introduction to Control Loops",
      "Building Controls IV: Two Position and Floating Responses",
      "Building Controls V: Proportional and PID Responses",
      "Building Controls VI: When to Use Each Response",
      "Building Controls VII: Interactive Illustration of PID Response",
      "Building Controls VIII: Controllers and Controlled Devices",
      "Commissioning For Energy Efficiency",
      "Components of a Health Care Electrical Distribution System",
      "Compressed Air Systems I: An Introduction",
      "Compressed Air Systems II: Compressor Types",
      "Compressed Air Systems III: Controlled Methods",
      "Compressed Air Systems IV: Supply Side Components",
      "Compressed Air V: Efficient Management and Utilization",
      "Compressed Air VI: Seven Steps to Better Efficiency",
      "Cooling Strategies for IT Wiring Closets and Small Rooms",
      "Data Center Efficiency: Reducing Electrical Power Consumption",
      "Data Center Planning: Standardized Process",
      "Data Center System Planning",
      "Fundamental Principles of Network Security",
      "Fundamentals of Availability",
      "Fundamentals of Cabling Strategies for Data Centers",
      "Living with Finite Resources Strategies for Sustainable Resource Utilization",
      "Inter-System Ground Noise Impact on Data Center Availability",
      "ISO 50001: Maximizing Your Energy Efficiency Through Proven Standards",
      "Power Redundancy in the Data Center",
      "Rack Fundamentals",
      "Specifications of Data Center Power Density",
      "Strategic Energy Planning",
      "Strategies for Implementing Energy Efficient Data Centers",
      "Energy Procurement I: Options in Regulated and Deregulated Markets",
      "Energy Procurement II: Introduction to Hedging in Deregulated Markets",
      "An Introduction to Medical Gas and Vacuum Systems",
      "Success Story Series: Boston Scientific Corporation",
      "Success Story Series: China Unicom Cloud Data Co., Ltd",
      "Proven Strategies for Saving Energy in a Retail Environment",
      "Battery Safety and Environmental Concerns",
      "Battery Technology: Site Planning and Ventilation",
      "Best Practices for Building a New Data Center",
      "Energy Procurement III: Balanced Hedging Strategies",
      "Energy Rate Structures I: Concepts and Unit Pricing",
      "Boiler Types and Opportunities for Energy Efficiency",
      "European Codes and Standards: New Horizons for Buildings",
      "Pumping Systems I: Pump Types and Performance",
      "Establishing Benchmarks for Data Center Efficiency Measurements",
      "Establishing An Optimal Physical Environment In A Health Care Setting",
      "Energy Rate Structures II: Understanding and Reducing Your Bill",
      "Enhancing Large UPS Efficiency",
      "Essential Elements of Data Center Facility Operations",
      "Pumping Systems II: Efficient Flow Control",
      "Building Envelope Metric Version",
      "Building Envelope-US Version",
      "Calculating Space and Power Density Requirements for Data Centers",
      "Calculating Total Cooling Requirements",
      "Pumping Systems III: Improving System Efficiency",
      "Examining Fire Protection Methods in the Data Center",
      "Fan Systems I: Introduction to Fan Performance",
      "Success Stories In Healthcare: Retro-commissioning Done Right!",
      "Demand Response and the Smart Grid",
      "Deploying High-Density Pods in a Low Density Data Center",
      "Deploying IT Equipment in Small Server Rooms and Branch Offices",
      "Designing and Building Telecom Networks: A Case Study",
      "Energy Efficiency Drivers in Europe",
      "Re-examining Raised Floor Applications",
      "Retro-Commissioning: Energy Savings Solutions for Healthcare",
      "Calculating Total Power Requirements",
      "Chilled Water Piping for your Data Center",
      "Choosing Between Room, Row, & Rack Based Cooling For Data Centers I",
      "Choosing Between Room, Row, & Rack Based Cooling For Data Centers II",
      "Combined Heat and Power",
      "Combustion Processes",
      "Retro-Commissioning: Process and Implementation in Healthcare Facilities I",
      "Retro-Commissioning: Process and Implementation in Healthcare Facilities II",
      "Room Ventilation & Airborne Disease Transmission In A Healthcare Setting",
      "Security Management: Is the Cloud a Viable Option?",
      "Services for the Next Generation Data Centers",
      "Site Selection and Planning for Mission Critical Facilities",
      "Standardization in the Data Center",
      "Steam Systems I: Advantages and Basics of Steam",
      "Steam Systems II: Impact of Boiler Sizing, Pressure, and Velocity",
      "Fundamentals of Cooling Architecture I: Heat Removal Methods",
      "Fundamentals of Cooling Architecture II",
      "Fundamentals of Cooling Architecture III",
      "Fundamentals of Cooling I",
      "Commissioning For Energy Efficiency",
      "Fundamentals of Cooling II: Humidity in the Data Center",
      "Fundamentals of Health Care Facility Electrical Power Systems",
      "Components of a Health Care Electrical Distribution System",
      "Fundamentals of Physical Security",
      "Fundamentals of Power",
      "Compressed Air Systems I: An Introduction",
      "Generator Fundamentals",
      "Going Green with Leadership in Energy and Environmental Design",
      "Compressed Air Systems II: Compressor Types",
      "Going Green: Energy Efficiency in the Data Center",
      "Growing a Green Corporation",
      "Compressed Air Systems III: Controlled Methods",
      "Guidance for Calculation of Efficiency in the Data Center",
      "Guidelines for Building a Small to Medium Data Center",
      "Compressed Air Systems IV: Supply Side Components",
      "Compressed Air Systems IV: Supply Side Components",
      "Compressed Air V: Efficient Management and Utilization",
      "Steam Systems III: Distribution, Control & Regulation of Steam",
      "Steam Systems IV: Condensate Removal—Prevent your energy from going down the drain",
      "Steam Systems V: Condensate Removal - Maximizing Your Recovery",
      "High Efficiency Economizer-based Cooling Modules for Large Data Centers",
      "Steam Systems VI: Recovering Energy from Flash Steam",
      "Compressed Air VI: Seven Steps to Better Efficiency",
      "Controlling the Impact of Power Factor and Harmonics on Energy Efficiency",
      "Cooling Strategies for IT Wiring Closets and Small Rooms",
      "How DCIM Software Improves Planning and Cuts Operational Costs",
      "How to use Schneider Electric University Site",
      "HVAC and Characteristics of Air-SI Version",
      "HVAC and Characteristics of Air-US Version",
      "HVAC and Psychrometric Charts-SI Version",
      "Data Center Back-up Batteries: Options and Lifecycle Costs",
      "HVAC and Psychrometric Charts-US Version HVAC and Psychrometric Charts-US Version",
      "Data Center Efficiency: Reducing Electrical Power Consumption",
      "Data Center Planning: Standardized Process",
      "HVAC Efficiency and Equipment Optimization-SI Version",
      "HVAC Efficiency and Equipment Optimization-US Version",
      "HVAC Geothermal Heat Pumps",
      "Data Center Project Management Model",
      "Data Center Project Planning: Establishing a Floor Plan",
      "Data Center Projects: Commissioning",
      "Data Center Projects: Forecasting and Accommodating Data Center Growth",
      "Data Center Site Selection and Planning",
      "Data Center System Planning",
      "HVAC Source Equipment for Cooling I",
      "HVAC Source Equipment for Cooling II",
      "HVAC Systems I: Introduction to HVAC Systems",
      "HVAC Systems II: All-Air Systems and Temperature Control",
      "Determining Data Center User Requirements",
      "Digital Grid Unleashed: A Value Chain Facing Disruption",
      "HVAC Systems III: Air-and-Water and All-Water Systems",
      "Digital Grid Unleashed: An Introduction",
      "HVAC Thermodynamic States",
      "Identifying Opportunities to Reduce Consumption of Energy Across Mining and Processing Plants",
      "Distributed Generation",
      "Economizer Modes of Data Center Cooling Systems",
      "Implementing Hot and Cold Air Containment in Existing Data Centers",
      "Increasing Data Center Efficiency Through High Density Power Distribution",
      "Electrical Concepts",
      "Emergency Power Generators For Healthcare Facilities",
      'Emergency Power Off: Don"t Get Caught in the Dark',
      "Industrial Insulation I: Materials and Systems",
      "Enacting an Energy Management Lifecycle Approach in Federal Facilities",
      "Industrial Insulation II: Design Data Calculations",
      "Energy Audits",
      "Industrial Insulation III: Inspection and Maintenance",
      "Energy Audits Instrumentation I: Electrical, Lighting, Temperature and Humidity",
      "Inter System Ground Noise Impact on Data Center Availability",
      "Energy Audits Instrumentation II",
      "Power and Cooling Guidelines for Deploying IT in Colocation Data Centers",
      "Power and Cooling for the New Digital Hospital",
      "Power and Cooling Facility Modules for Data Centers",
      "Power and Cooling Capacity Management for Data Centers",
      "Physical Infrastructure Management Basics",
      "Physical Infrastructure for VoIP",
      "Optimizing Cooling Layouts for the Data Center",
      "Motors: Losses, Loads and Operating Costs-SI Version",
      "Motors: Loads, Losses and Operating Costs-US Version",
      "Motors: A Performance Opportunity Roadmap",
      "Modular Data Center Architecture II",
      "Modular Data Center Architecture I",
      "Medical Gas and Vacuum Systems Design and Installation",
      "Measuring and Benchmarking Energy Performance",
      "Measurement and Verification Including IPMVP",
      "Managing The Physical Health Care Environment",
      "Making Permanent Savings through Active Energy Efficiency",
      "Maintenance Best Practices for Energy Efficient Facilities",
      "Waste Heat Recovery",
      "Virtualization: The Engine Behind Cloud Computing",
      "Understanding Preventive Maintenance for Data Centers",
      "Types of Prefabricated Modular Data Centers",
      "Types of Electrical Meters in Data Centers",
      "Three Dimensions of Energy Opportunity that Can Boost Profits and Asset Value",
      "Thermal Energy Storage",
      "The Internet of Things: Optimizing The Healthcare Field",
      "The Future of Medium Voltage Switchgear",
      "The Business Case for Healthcare Retro-Commissioning",
      "Testing Emergency Power In Health Care Facilities",
      "Success Story Series: Wide Bay Water Corporation Australia",
      "Success Story Series: Vitens, The Netherlands",
      "Success Story Series: Sumner Regional Medical Center Wellington, Kansas, USA",
      "Success Story Series: Schneider Electric Boston One Campus",
      "Success Story Series: Hilton Garden Inn Dubai Mall of the Emirates",
      "Success Story Series: F12.net Edmonton, Alberta, Canada",
      "Success Story Series: Edwards Air Force Base",
      "Power Distribution I",
      "Power Distribution II",
      "Power Distribution III",
      "Power Factor and Harmonics",
      'Power Over Ethernet"s Effect on Wiring Closets',
      "Lighting I: Lighting Your Way",
      "Lighting II: Defining Light",
      "Lighting III: Lamp Families: Incandescent and Low Pressure Discharge",
      "Lighting IV: Basic Lamp Families: High-Intensity Discharge and LED",
      "Lighting V: Economics",
      "Lighting VI: Calculating Required Lamps with the Lumen Method-SI",
      "Lighting VI: Calculating Required Lamps with the Lumen Method-US Units",
      "Living by Principles Business resiliency through increased circularity",
      "Living in a World of Data Digitization as a Sustainability Enabler",
      "Living with Finite Resources Strategies for Sustainable Resource Utilization",
      "Living with Integrity Sustainability as an integral part of business risk mitigation",
      "Fan Systems I: Introduction to Fan Performance",
      "Fan Systems II: Fan Types",
      "Fan Systems III: Improving System Efficiency",
      "Fan Systems IV: Improving System Efficiency",
      "Financial Analysis of Energy Efficiency Projects I",
      "Financial Analysis of Energy Efficiency Projects II",
      "Financial Planning for Physical Infrastructure Assets in US Data Centers",
      "Financing and Performance Contracting for Energy Efficiency Projects",
      "Fuels I: Energy Sources and Trends",
      "Fuels II: Energy Value Analysis-SI Version",
      "Fuels II: Energy Value Analysis-US Version",
      "Fundamental Principles of Network Security",
      "Fundamentals of Availability",
      "Fundamentals of Cabling Strategies for Data Centers",
    ],
  },
  {  
    "School":"Oracle",
    "courses": [
      "Administration",
      "High Availability",
      "New Features",
      "Development",
      "Data Warehouse",
      "Security",
      "MySQL Database Administration",
      "MySQL Developer",
      "Java EE and Web Services",
      "Java SE",
      "Helidon",
      "Oracle Big Data Appliance",
      "Oracle Exadata",
      "ZFS Storage Appliance",
      "Oracle Private Cloud Appliance",
      "Oracle Database Appliance",
      "Zero Data Loss Recovery Appliance",
      "Oracle ZFS Storage Appliance",
      "Oracle DIVA",
      "Service Order Management",
      "Analytics",
      "Application Framework",
      "Customer Care and Billing",
      "Customer Self Service",
      "Energy Information Platform",
      "Enterprise Asset Management",
      "Meter Data Management",
      "Mobile Workforce Management",
      "Network Management System",
      "Smart Grid Gateway",
      "Work and Asset Management",
      "Customer Cloud Service Training and Certification",
      "Session Delivery Network (Acme Packet)",
      "Billing and Revenue Management",
      "Business Support Systems - Network Charging and ControlNetwork Charging and Control",
      "Application Integration Architecture (AIA) Communications",
      "Design Studio",
      "Inventory Management",
      "MetaSolv Solution",
      "Order and Service Management",
      "Service Activation",
      "Tekelec (Diameter and SIP Signaling)",
      "Tekelec (Policy Management)",
      "Tekelec (SS7 Signaling)",
      "Unified Communications Suite",
      "SD WAN",
      "BI Enterprise Edition (BI EE)",
      "Essbase",
      "BI Publisher",
      "BI Applications",
      "Identity Manager",
      "Access Manager",
      "Directory Servers",
      "Identity Analytics",
      "Adaptive Access Manager",
      "Entitlements Server",
      "Enterprise Gateway",
      "Identity Federation",
      "Data Integrator (ODI)",
      "GoldenGate",
      "Enterprise Data Quality",
      "Application Development Framework (ADF)",
      "Mobile Application Framework",
      "Forms and Reports"
    ]
  }
];
*/

/*
export const courses = [
  "Fundamentals of Power",
      "Efficiency of AC and DC Power Distribution in Data Centers",
      "Energy Efficiency Fundamentals",
      "Energy Efficiency Solutions Book",
      "Energy Efficiency with Building Automation Systems I",
      "Energy Efficiency with Building Automation Systems II",
      "Going Green: Energy Efficiency in the Data Center",
      "Unlocking Energy Efficiency: Management and Control is the Key (WHITEPAPER)",
      "Electric Vehicles: Plugging into Smarter Energy Management",
      "Efficient Motor Control With Power Drives Systems",
      "Determining Data Center User Requirements",
      "Data Center Temperature Rise During A Cooling System Outage",
      "Measuring Data Center Electrical Efficiency",
      "Optimising Data Center Environmental Monitoring",
      "US Energy Codes and Standards",
      "A Comparison of AC and DC Power Distribution in the Data Center",
      "An Overview of Data Center Physical Infrastructure",
      "A Four-Step Path to a Comprehensive Energy Management Action Plan",
      "Active Energy Efficiency Using Speed Control",
      "Alternative Power Generation Technologies",
      "Analysing Reliability in the Data Center",
      "Battery Technology for Data Centers and Network Rooms",
      "Better Data Centers Through Reference Designs",
      "Building Controls I: An Introduction to Building Controls",
      "Building Controls II: Control Sensors",
      "Building Controls III: Introduction to Control Loops",
      "Building Controls IV: Two Position and Floating Responses",
      "Building Controls V: Proportional and PID Responses",
      "Building Controls VI: When to Use Each Response",
      "Building Controls VII: Interactive Illustration of PID Response",
      "Building Controls VIII: Controllers and Controlled Devices",
      "Commissioning For Energy Efficiency",
      "Components of a Health Care Electrical Distribution System",
      "Compressed Air Systems I: An Introduction",
      "Compressed Air Systems II: Compressor Types",
      "Compressed Air Systems III: Controlled Methods",
      "Compressed Air Systems IV: Supply Side Components",
      "Compressed Air V: Efficient Management and Utilization",
      "Compressed Air VI: Seven Steps to Better Efficiency",
      "Cooling Strategies for IT Wiring Closets and Small Rooms",
      "Data Center Efficiency: Reducing Electrical Power Consumption",
      "Data Center Planning: Standardized Process",
      "Data Center System Planning",
      "Fundamental Principles of Network Security",
      "Fundamentals of Availability",
      "Fundamentals of Cabling Strategies for Data Centers",
      "Living with Finite Resources Strategies for Sustainable Resource Utilization",
      "Inter-System Ground Noise Impact on Data Center Availability",
      "ISO 50001: Maximizing Your Energy Efficiency Through Proven Standards",
      "Power Redundancy in the Data Center",
      "Rack Fundamentals",
      "Specifications of Data Center Power Density",
      "Strategic Energy Planning",
      "Strategies for Implementing Energy Efficient Data Centers",
      "Energy Procurement I: Options in Regulated and Deregulated Markets",
      "Energy Procurement II: Introduction to Hedging in Deregulated Markets",
      "An Introduction to Medical Gas and Vacuum Systems",
      "Success Story Series: Boston Scientific Corporation",
      "Success Story Series: China Unicom Cloud Data Co., Ltd",
      "Proven Strategies for Saving Energy in a Retail Environment",
      "Battery Safety and Environmental Concerns",
      "Battery Technology: Site Planning and Ventilation",
      "Best Practices for Building a New Data Center",
      "Energy Procurement III: Balanced Hedging Strategies",
      "Energy Rate Structures I: Concepts and Unit Pricing",
      "Boiler Types and Opportunities for Energy Efficiency",
      "European Codes and Standards: New Horizons for Buildings",
      "Pumping Systems I: Pump Types and Performance",
      "Establishing Benchmarks for Data Center Efficiency Measurements",
      "Establishing An Optimal Physical Environment In A Health Care Setting",
      "Energy Rate Structures II: Understanding and Reducing Your Bill",
      "Enhancing Large UPS Efficiency",
      "Essential Elements of Data Center Facility Operations",
      "Pumping Systems II: Efficient Flow Control",
      "Building Envelope Metric Version",
      "Building Envelope-US Version",
      "Calculating Space and Power Density Requirements for Data Centers",
      "Calculating Total Cooling Requirements",
      "Pumping Systems III: Improving System Efficiency",
      "Examining Fire Protection Methods in the Data Center",
      "Fan Systems I: Introduction to Fan Performance",
      "Success Stories In Healthcare: Retro-commissioning Done Right!",
      "Demand Response and the Smart Grid",
      "Deploying High-Density Pods in a Low Density Data Center",
      "Deploying IT Equipment in Small Server Rooms and Branch Offices",
      "Designing and Building Telecom Networks: A Case Study",
      "Energy Efficiency Drivers in Europe",
      "Re-examining Raised Floor Applications",
      "Retro-Commissioning: Energy Savings Solutions for Healthcare",
      "Calculating Total Power Requirements",
      "Chilled Water Piping for your Data Center",
      "Choosing Between Room, Row, & Rack Based Cooling For Data Centers I",
      "Choosing Between Room, Row, & Rack Based Cooling For Data Centers II",
      "Combined Heat and Power",
      "Combustion Processes",
      "Retro-Commissioning: Process and Implementation in Healthcare Facilities I",
      "Retro-Commissioning: Process and Implementation in Healthcare Facilities II",
      "Room Ventilation & Airborne Disease Transmission In A Healthcare Setting",
      "Security Management: Is the Cloud a Viable Option?",
      "Services for the Next Generation Data Centers",
      "Site Selection and Planning for Mission Critical Facilities",
      "Standardization in the Data Center",
      "Steam Systems I: Advantages and Basics of Steam",
      "Steam Systems II: Impact of Boiler Sizing, Pressure, and Velocity",
      "Fundamentals of Cooling Architecture I: Heat Removal Methods",
      "Fundamentals of Cooling Architecture II",
      "Fundamentals of Cooling Architecture III",
      "Fundamentals of Cooling I",
      "Commissioning For Energy Efficiency",
      "Fundamentals of Cooling II: Humidity in the Data Center",
      "Fundamentals of Health Care Facility Electrical Power Systems",
      "Components of a Health Care Electrical Distribution System",
      "Fundamentals of Physical Security",
      "Fundamentals of Power",
      "Compressed Air Systems I: An Introduction",
      "Generator Fundamentals",
      "Going Green with Leadership in Energy and Environmental Design",
      "Compressed Air Systems II: Compressor Types",
      "Going Green: Energy Efficiency in the Data Center",
      "Growing a Green Corporation",
      "Compressed Air Systems III: Controlled Methods",
      "Guidance for Calculation of Efficiency in the Data Center",
      "Guidelines for Building a Small to Medium Data Center",
      "Compressed Air Systems IV: Supply Side Components",
      "Compressed Air Systems IV: Supply Side Components",
      "Compressed Air V: Efficient Management and Utilization",
      "Steam Systems III: Distribution, Control & Regulation of Steam",
      "Steam Systems IV: Condensate Removal—Prevent your energy from going down the drain",
      "Steam Systems V: Condensate Removal - Maximizing Your Recovery",
      "High Efficiency Economizer-based Cooling Modules for Large Data Centers",
      "Steam Systems VI: Recovering Energy from Flash Steam",
      "Compressed Air VI: Seven Steps to Better Efficiency",
      "Controlling the Impact of Power Factor and Harmonics on Energy Efficiency",
      "Cooling Strategies for IT Wiring Closets and Small Rooms",
      "How DCIM Software Improves Planning and Cuts Operational Costs",
      "How to use Schneider Electric University Site",
      "HVAC and Characteristics of Air-SI Version",
      "HVAC and Characteristics of Air-US Version",
      "HVAC and Psychrometric Charts-SI Version",
      "Data Center Back-up Batteries: Options and Lifecycle Costs",
      "HVAC and Psychrometric Charts-US Version HVAC and Psychrometric Charts-US Version",
      "Data Center Efficiency: Reducing Electrical Power Consumption",
      "Data Center Planning: Standardized Process",
      "HVAC Efficiency and Equipment Optimization-SI Version",
      "HVAC Efficiency and Equipment Optimization-US Version",
      "HVAC Geothermal Heat Pumps",
      "Data Center Project Management Model",
      "Data Center Project Planning: Establishing a Floor Plan",
      "Data Center Projects: Commissioning",
      "Data Center Projects: Forecasting and Accommodating Data Center Growth",
      "Data Center Site Selection and Planning",
      "Data Center System Planning",
      "HVAC Source Equipment for Cooling I",
      "HVAC Source Equipment for Cooling II",
      "HVAC Systems I: Introduction to HVAC Systems",
      "HVAC Systems II: All-Air Systems and Temperature Control",
      "Determining Data Center User Requirements",
      "Digital Grid Unleashed: A Value Chain Facing Disruption",
      "HVAC Systems III: Air-and-Water and All-Water Systems",
      "Digital Grid Unleashed: An Introduction",
      "HVAC Thermodynamic States",
      "Identifying Opportunities to Reduce Consumption of Energy Across Mining and Processing Plants",
      "Distributed Generation",
      "Economizer Modes of Data Center Cooling Systems",
      "Implementing Hot and Cold Air Containment in Existing Data Centers",
      "Increasing Data Center Efficiency Through High Density Power Distribution",
      "Electrical Concepts",
      "Emergency Power Generators For Healthcare Facilities",
      'Emergency Power Off: Don"t Get Caught in the Dark',
      "Industrial Insulation I: Materials and Systems",
      "Enacting an Energy Management Lifecycle Approach in Federal Facilities",
      "Industrial Insulation II: Design Data Calculations",
      "Energy Audits",
      "Industrial Insulation III: Inspection and Maintenance",
      "Energy Audits Instrumentation I: Electrical, Lighting, Temperature and Humidity",
      "Inter System Ground Noise Impact on Data Center Availability",
      "Energy Audits Instrumentation II",
      "Power and Cooling Guidelines for Deploying IT in Colocation Data Centers",
      "Power and Cooling for the New Digital Hospital",
      "Power and Cooling Facility Modules for Data Centers",
      "Power and Cooling Capacity Management for Data Centers",
      "Physical Infrastructure Management Basics",
      "Physical Infrastructure for VoIP",
      "Optimizing Cooling Layouts for the Data Center",
      "Motors: Losses, Loads and Operating Costs-SI Version",
      "Motors: Loads, Losses and Operating Costs-US Version",
      "Motors: A Performance Opportunity Roadmap",
      "Modular Data Center Architecture II",
      "Modular Data Center Architecture I",
      "Medical Gas and Vacuum Systems Design and Installation",
      "Measuring and Benchmarking Energy Performance",
      "Measurement and Verification Including IPMVP",
      "Managing The Physical Health Care Environment",
      "Making Permanent Savings through Active Energy Efficiency",
      "Maintenance Best Practices for Energy Efficient Facilities",
      "Waste Heat Recovery",
      "Virtualization: The Engine Behind Cloud Computing",
      "Understanding Preventive Maintenance for Data Centers",
      "Types of Prefabricated Modular Data Centers",
      "Types of Electrical Meters in Data Centers",
      "Three Dimensions of Energy Opportunity that Can Boost Profits and Asset Value",
      "Thermal Energy Storage",
      "The Internet of Things: Optimizing The Healthcare Field",
      "The Future of Medium Voltage Switchgear",
      "The Business Case for Healthcare Retro-Commissioning",
      "Testing Emergency Power In Health Care Facilities",
      "Success Story Series: Wide Bay Water Corporation Australia",
      "Success Story Series: Vitens, The Netherlands",
      "Success Story Series: Sumner Regional Medical Center Wellington, Kansas, USA",
      "Success Story Series: Schneider Electric Boston One Campus",
      "Success Story Series: Hilton Garden Inn Dubai Mall of the Emirates",
      "Success Story Series: F12.net Edmonton, Alberta, Canada",
      "Success Story Series: Edwards Air Force Base",
      "Power Distribution I",
      "Power Distribution II",
      "Power Distribution III",
      "Power Factor and Harmonics",
      'Power Over Ethernet"s Effect on Wiring Closets',
      "Lighting I: Lighting Your Way",
      "Lighting II: Defining Light",
      "Lighting III: Lamp Families: Incandescent and Low Pressure Discharge",
      "Lighting IV: Basic Lamp Families: High-Intensity Discharge and LED",
      "Lighting V: Economics",
      "Lighting VI: Calculating Required Lamps with the Lumen Method-SI",
      "Lighting VI: Calculating Required Lamps with the Lumen Method-US Units",
      "Living by Principles Business resiliency through increased circularity",
      "Living in a World of Data Digitization as a Sustainability Enabler",
      "Living with Finite Resources Strategies for Sustainable Resource Utilization",
      "Living with Integrity Sustainability as an integral part of business risk mitigation",
      "Fan Systems I: Introduction to Fan Performance",
      "Fan Systems II: Fan Types",
      "Fan Systems III: Improving System Efficiency",
      "Fan Systems IV: Improving System Efficiency",
      "Financial Analysis of Energy Efficiency Projects I",
      "Financial Analysis of Energy Efficiency Projects II",
      "Financial Planning for Physical Infrastructure Assets in US Data Centers",
      "Financing and Performance Contracting for Energy Efficiency Projects",
      "Fuels I: Energy Sources and Trends",
      "Fuels II: Energy Value Analysis-SI Version",
      "Fuels II: Energy Value Analysis-US Version",
      "Fundamental Principles of Network Security",
      "Fundamentals of Availability",
      "Fundamentals of Cabling Strategies for Data Centers",
      "Administration",
      "High Availability",
      "New Features",
      "Development",
      "Data Warehouse",
      "Security",
      "MySQL Database Administration",
      "MySQL Developer",
      "Java EE and Web Services",
      "Java SE",
      "Helidon",
      "Oracle Big Data Appliance",
      "Oracle Exadata",
      "ZFS Storage Appliance",
      "Oracle Private Cloud Appliance",
      "Oracle Database Appliance",
      "Zero Data Loss Recovery Appliance",
      "Oracle ZFS Storage Appliance",
      "Oracle DIVA",
      "Service Order Management",
      "Analytics",
      "Application Framework",
      "Customer Care and Billing",
      "Customer Self Service",
      "Energy Information Platform",
      "Enterprise Asset Management",
      "Meter Data Management",
      "Mobile Workforce Management",
      "Network Management System",
      "Smart Grid Gateway",
      "Work and Asset Management",
      "Customer Cloud Service Training and Certification",
      "Session Delivery Network (Acme Packet)",
      "Billing and Revenue Management",
      "Business Support Systems - Network Charging and ControlNetwork Charging and Control",
      "Application Integration Architecture (AIA) Communications",
      "Design Studio",
      "Inventory Management",
      "MetaSolv Solution",
      "Order and Service Management",
      "Service Activation",
      "Tekelec (Diameter and SIP Signaling)",
      "Tekelec (Policy Management)",
      "Tekelec (SS7 Signaling)",
      "Unified Communications Suite",
      "SD WAN",
      "BI Enterprise Edition (BI EE)",
      "Essbase",
      "BI Publisher",
      "BI Applications",
      "Identity Manager",
      "Access Manager",
      "Directory Servers",
      "Identity Analytics",
      "Adaptive Access Manager",
      "Entitlements Server",
      "Enterprise Gateway",
      "Identity Federation",
      "Data Integrator (ODI)",
      "GoldenGate",
      "Enterprise Data Quality",
      "Application Development Framework (ADF)",
      "Mobile Application Framework",
      "Forms and Reports"
];

*/


export const courses = [
  {
    "school":"Schnieder Electric",
    "courses":[
      {
        title: "Fundamentals of Power",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/89/title/Fundamentals%20of%20Power",
        description:
          "This course explains these power elements and some of today's power problems.",
        mode: "Project based",
      },
      {
        title: "Efficiency of AC and DC Power Distribution in Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/504/title/Efficiency%20of%20AC%20and%20DC%20Power%20Distribution%20in%20Data%20Centers",
        description:
          "This course presents a detailed quantitative efficiency comparison between the most efficient DC and AC power distribution methods, including an analysis of the effects of power distribution efficiency on the cooling power requirement and on total electrical consumption. The latest high-efficiency AC and DC power distribution architectures are shown to have virtually the same efficiency, suggesting that a move to a DC-based architecture is unwarranted on the basis of efficiency",
        mode: "Project based",
      },

      {
        title: " Energy Efficiency Fundamentals",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/156/title/Energy%20Efficiency%20Fundamentals        ",
        description:
          "Energy consumption and energy costs have been on the rise during the last 25 years. Emerging markets like China and India will soon be consuming more energy than developed nations such as the US and Western Europe. This pressure will increase prices and create threats to the security of supply. At minimum, energy consumption, including electricity and other sources, will double over the next 40 years. At the same time, climate specialists tell us we should divide emissions by 2 to avoid serious climatic changes. We can’t allow energy demand to continue to rise unchecked – the impact on our security, costs and planet don’t allow that.  Simultaneously we can’t just cut all our activity in half. Countries will not agree to that impact on their economies and standards of living.  This course will provide an understanding of building energy use and energy efficiency measures that customers can implement to save energy and reduce costs in their facilities          ",
        mode: "Project based",
      },
      {
        title: " Energy Efficiency Solutions Book",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/157/title/Energy%20Efficiency%20with%20Building%20Automation%20Systems%20I        ",
        description:
          "This Energy Handbook will show you ways that we've helped users achieve efficiency in their operations by outlining the challenges, providing customer examples, and offering solutions.",
        mode: "Project based",
      },
      {
        title: "Energy Efficiency with Building Automation Systems I",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/89/title/Fundamentals%20of%20Power",
        description:
          "The focus of this course is on what a building automation system (BAS) is as well as some of the commonly used terminologies. We will also look at some of the HVAC strategies used in building automation systems",
        mode: "Project based",
      },
      {
        title: "Energy Efficiency with Building Automation Systems II",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/158/title/Energy%20Efficiency%20with%20Building%20Automation%20Systems%20II        ",
        description:
          "The focus is on the energy conservation measures that can be used with building automation systems.          ",
        mode: "Project based",
      },
      {
        title: " Going Green: Energy Efficiency in the Data Center        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/91/title/Going%20Green:%20Energy%20Efficiency%20in%20the%20Data%20Center",
        description:
          "This course demonstrates that data centres will need to adopt a new strategy in order to be cost and energy efficient, as well as dependable. Some obvious strategies exist to maintain an acceptable degree of dependability while maintaining the efficiency required by an ecologically friendly data centre.          ",
        mode: "Project based",
      },
      {
        title:
          "Unlocking Energy Efficiency: Management and Control is the Key (WHITEPAPER)        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/116/title/Unlocking%20Energy%20Efficiency:%20Management%20and%20Control%20is%20the%20Key        ",
        description:
          " This white paper demonstrates that energy consumption can be lowered by effective control and that such measures can significantly reduce carbon emissions and make a major contribution towards meeting Kyoto targets          ",
        mode: "Project based",
      },
      {
        title:
          " Electric Vehicles: Plugging into Smarter Energy Management        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/149/title/Electric%20Vehicles:%20Plugging%20into%20Smarter%20Energy%20Management        ",
        description:
          "This class discusses the technological, economic, and safety aspects involved in linking massive numbers of plug-in electric vehicles to the grid and what it all means to consumers, facility and vehicle fleet managers, and electric utilities          ",
        mode: "Project based",
      },
      {
        title: "Efficient Motor Control With Power Drives Systems        ",
        link: " https://schneider.efrontlearning.com/catalog/view/course/id/148/title/Efficient%20Motor%20Control%20With%20Power%20Drives%20Systems        ",
        description:
          " This course will provide an overview of power drive systems and motors along with an insight into efficiency. This course will also cover, gear - types, efficiency and maintenance",
        mode: "Project based",
      },
      {
        title: " Determining Data Center User Requirements        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/218/title/Determining%20Data%20Center%20User%20Requirements",
        description:
          " The purpose of this course is to analyze the process of gathering data centre physical infrastructure user requirements          ",
        mode: "Project based",
      },
      {
        title:
          " Data Center Temperature Rise During A Cooling System Outage        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/571/title/Data%20Center%20Temperature%20Rise%20During%20A%20Cooling%20System%20Outage        ",
        description:
          "This course discusses the primary factors that affect transient temperature rise and provides practical strategies to manage cooling during power outages. Recognise the primary factors that affect transient temperature rise in data centres Implement practical strategies to manage cooling during power outages          ",
        mode: "Project based",
      },
      {
        title: "Measuring Data Center Electrical Efficiency        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/98/title/Measuring%20Data%20Center%20Electrical%20Efficiency",
        description:
          "This course shows how to measure, analyze, and model data centre efficiency; we'll also compare the advantages of periodic evaluation vs. continuous monitoring.          ",
        mode: "Project based",
      },
      {
        title: "Optimising Data Center Environmental Monitoring        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/102/title/Optimizing%20Data%20Center%20Environmental%20Monitoring        ",
        description:
          "This course describes this class of threats, suggests approaches to deploying monitoring devices, and provides best practices in leveraging the collected data to reduce downtime.          ",
        mode: "Project based",
      },
      {
        title: " US Energy Codes and Standards",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/215/title/US%20Energy%20Codes%20and%20Standards        ",
        description:
          "This course will discuss the codes and standards that influence and mandate energy usage in the United States. This course seeks to define the difference between an energy code and an energy standard and explores specific codes and standards for lighting, ventilation and other relevant areas while identifying the laws and international codes that govern them.          ",
        mode: "Project based",
      },
      {
        title:
          " A Comparison of AC and DC Power Distribution in the Data Center        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/24/title/A%20Comparison%20of%20AC%20and%20DC%20Power%20Distribution%20in%20the%20Data%20Center        ",
        description:
          " The quest for improved efficiency of data centers has encouraged a climate of innovation in data center power and cooling technologies. In the early 1990s, manufacturers and engineers have suggested a conversion of the data center power architecture to DC from the existing AC. Despite a predicted a widespread adoption of a DC standard for data center power and evidence that a change to DC distribution is advantageous, the usage of DC relative to AC has declined. Recently, new proposals have been made based on high voltage DC distribution. These methods overcome some of the earlier problems with DC power. However, The latest high efficiency AC and DC power distribution architectures are shown to have virtually the same efficiency, suggesting that a move to a DC-based architecture is unwarranted on the basis of efficiency.          ",
        mode: "Project based",
      },
      {
        title: " An Overview of Data Center Physical Infrastructure",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/48/title/An%20Overview%20of%20Data%20Center%20Physical%20Infrastructure        ",
        description:
          "The physical infrastructure in the data center is the base of the pyramid upon which all computing, network and storage resources rest, and upon which all business critical applications rely. If the physical infrastructure is not ready to handle server consolidation, for example, this could create serious problems. It would be like trying to redo the foundation after the house is built. Building the right physical infrastructure is not a one-time undertaking and it means building something that is flexible and can adapt as the business requirements change, and as the application mix changes. Those dynamics are constantly changing. Whether it's a multi-megawatt data centre, a small LAN room, or even a small wiring closet with a VoIP switch deployment, equipment has to operate successfully and depends on the power, cooling, and physical infrastructure that supports it. That is what is meant by Network-Critical Physical Infrastructure (NCPI). It is the foundation one layer below the physical IT equipment like the servers, or switches.          ",
        mode: "Project based",
      },
      {
        title: "A Four-Step Path to a Comprehensive Energy Management Action Plan",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/43/title/A%20Four-Step%20Path%20to%20a%20Comprehensive%20Energy%20Management%20Action%20Plan        ",
        description:
          "The building footprint of the U.S. federal government is enormous. According to the 2007 Federal Real Property Report published by the U.S. General Services Administration (GSA), federal government agencies owned, leased and otherwise managed nearly 450,000 diverse buildings that year, totaling more than 3.3 billion gross square feet. Energy is vital to the mission of each of those agencies as evidenced by the 600 trillion BTUs of energy used, at a cost of $6.2 billion, to power those buildings.          ",
        mode: "Project based",
      },
      {
        title: "Active Energy Efficiency Using Speed Control",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/40/title/Active%20Energy%20Efficiency%20Using%20Speed%20Control        ",
        description:
          " Many motors only have two settings: on and off. They operate at constant speed. If a motor turning at constant speed is driving a device or process that requires less output, adjustments are required to achieve the desired output level. This adjustment is often achieved by letting the motor run at full speed, while using downstream devices to block part of the output. This is like driving your car by having one foot fully depressing the accelerator pedal, and the other on the brake to constantly control the speed. It sounds absurd, but this is still one of the most common control methods. An estimated 60% of motors are not speed controlled. The focus of this course is to explore the different ways we can control motor speed efficiently and with minimal physical stress on equipment. In addition, we'll discuss other advantages such as controlled starting and regulated torque.          ",
        mode: "Project based",
      },
      {
        title: "Alternative Power Generation Technologies",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/47/title/Alternative%20Power%20Generation%20Technologies        ",
        description:
          "In this course, fuel cells and microturbines are discussed as possible alternatives for data centre and network room power generation. The alternative power generation approach is compared to traditional standby power generation options. Both benefits and drawbacks of the multiple power generation approaches are highlighted.          ",
        mode: "Project based",
      },
      {
        title: " Analysing Reliability in the Data Center        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/49/title/Analyzing%20Reliability%20in%20the%20Data%20Center        ",
        description:
          "The growing reliance on information systems that operate 24 hours per day, 7 days per week, has spawned a rapidly growing and developing industry that supplies products and services on-demand. The need for these types of information services now reaches into every business office in the world. Unfortunately, events of all kinds including hardware failure, human error, environmental changes, structural failure and external events, can lead to the possibility of unanticipated systems downtime. Modern data centers do not tolerate planned downtime and strive for no outages in a 10-year mission. Data center operations staffs are faced with the dilemma of either downtime as a result of insufficient physical infrastructure, or incurring extensive costs by designing in more redundancies than is necessary. Targeted reliability solutions allow businesses to meet individual requirements of the data center, while minimizing the total cost of ownership. In fact, very high reliability is difficult to attain and redundant hardware is only part of the answer. This course will demonstrate some important performance success factors and overviews best practices for analyzing and optimizing reliability.          ",
        mode: "Project based",
      },
      {
        title: "Battery Technology for Data Centers and Network Rooms        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/51/title/Battery%20Technology%20for%20Data%20Centers%20and%20Network%20Rooms        ",
        description:
          "This course provides an overview of Battery Technology for data centers and network rooms. The different types of batteries, The Planning of installations, and The analysis of lifecycle costs will be addressed.          ",
        mode: "Project based",
      },
      {
        title: "Better Data Centers Through Reference Designs        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/57/title/Better%20Data%20Centers%20Through%20Reference%20Designs        ",
        description:
          " It is no longer practical or cost-effective to completely engineer all aspects of a unique data center. Re-use of proven, documented subsystems or complete designs is a best practice for both new data centers and for upgrades to existing data centers. Adopting a well-conceived reference design can have a positive impact on both the project itself, as well as on the operation of the data center over its lifetime. Reference designs simplify and shorten the planning and implementation process and reduce downtime risks once up and running. In this course, reference designs are defined and their benefits are explained.          ",
        mode: "Project based",
      },
      {
        title: "Building Controls I: An Introduction to Building Controls        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/126/title/Building%20Controls%20I:%20An%20Introduction%20to%20Building%20Controls        ",
        description:
          " Have you ever been in a meeting in a conference room where the room was just too hot?  Or too cold?  Did you find it uncomfortable and hard to concentrate? Have you ever considered how much money is wasted when things like that are not addressed? What’s the solution? The control system within a building is very important to the energy efficiency of the building, and also to the comfort of the building’s occupants. In this class, we will learn a simple definition of a control system, learn the components of a control system, and describe some fundamental types of control and control loops.          ",
        mode: "Project based",
      },
      {
        title: "Building Controls II: Control Sensors        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/127/title/Building%20Controls%20II:%20Control%20Sensors        ",
        description:
          "Building control systems are important facets in any building’s energy management plan. They help avoid waste and save money. A vital component of a control system is the sensors that are incorporated into the system. We must measure what we wish to control.  We need to have a way to make measurements accurately and repeatedly.  Sensors measure the data that the controller uses to make decisions based on its set of programmed standards and set points. Sensors are the first step of control.  This course provides an overview of the various sensors integrated in a building control system, and looks at the variety of designs and need for correct placement.          ",
        mode: "Project based",
      },
      {
        title: "Building Controls III: Introduction to Control Loops",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/128/title/Building%20Controls%20III:%20Introduction%20to%20Control%20Loops        ",
        description:
          "The purpose of this course is to provide you with an overview of basic building control technology used in buildings, so that you will understand how building controls can contribute to energy efficiency.  We will examine the five controller loop responses and review the terms associated with controller loop responses.          ",
        mode: "Project based",
      },
      {
        title: "Building Controls IV: Two Position and Floating Responses        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/129/title/Building%20Controls%20IV:%20Two%20Position%20and%20Floating%20Responses        ",
        description:
          "The purpose of this course is to examine the two-position response and the floating response. We'll also spend some time working in an interactive example whereby you can simulate how changing a VAV box will affect static pressure and temperature in the environment",
        mode: "Project based",
      },
      {
        title: "Building Controls V: Proportional and PID Responses        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/131/title/Building%20Controls%20V:%20Proportional%20and%20PID%20Responses        ",
        description:
          "The purpose of this course is to define proportional control responses along with investigating how integral and derivatives affect proportional control responses. We’ll also spend some time explaining the appropriate use of each control response.",
        mode: "Project based",
      },
      {
        title: "Building Controls VI: When to Use Each Response        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/132/title/Building%20Controls%20VI:%20When%20to%20Use%20Each%20Response        ",
        description:
          " The purpose of this course is to define proportional control responses along with investigating how integral and derivatives affect proportional control responses. We’ll also spend some time explaining the appropriate use of each control response.          ",
        mode: "Project based",
      },
      {
        title: "Building Controls VII: Interactive Illustration of PID Response        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/133/title/Building%20Controls%20VII:%20Interactive%20Illustration%20of%20PID%20Response        ",
        description:
          "The purpose of this course is to see how proportional control may oscillate and stabilize at a point above the setpoint and how an integral term helps a control loop to achieve a result closer to the setpoint. We’ll also spend some time explaining how derivatives help to prevent overshoots.          ",
        mode: "Project based",
      },
      {
        title: "Building Controls VIII: Controllers and Controlled Devices        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/134/title/Building%20Controls%20VIII:%20Controllers%20and%20Controlled%20Devices        ",
        description:
          " If we can control an environmental system we can tell equipment when to turn on and off, how slow or fast to run, and how cool or hot the temperature of air or water needs to be.  For an environmental control, or building automation system to work effectively, three things must take place: Measured data must be input into the system. That data must be compared with a set of standards or instructions. Lastly, an action to change or maintain current environmental conditions must be made. In the previous class in this series we looked at how controllers respond to the inputs they receive.  We will now look at the different classifications of controllers.  We’ll also see how the control loop is completed by controlled devices, which take the actions that maintain or change current environmental conditions.",
        mode: "Project based",
      },
      {
        title: "Commissioning For Energy Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/139/title/Commissioning%20For%20Energy%20Efficiency        ",
        description:
          "Studies of commissioning projects in existing buildings show median paybacks of 1.1 years and savings of up to 30%, sometimes more.  Commissioning is a process to ensure building performance problems are understood and corrected.  Deficiencies such as design flaws, construction defects, malfunctioning equipment, and deferred maintenance have a multitude of consequences, ranging from equipment failure, to poor indoor air quality and comfort, to unnecessarily high energy use or under-performance of energy efficiency strategies. Fortunately, an emerging form of quality assurance, known as building commissioning, can identify and cure most deficiencies.  This course will explain the purpose of a commissioning process, and discuss the impact of the commissioning process on energy efficiency.          ",
        mode: "Project based",
      },
      {
        title: "Components of a Health Care Electrical Distribution System        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/625/title/Components%20of%20a%20Health%20Care%20Electrical%20Distribution%20System",
        description:
          "The electrical distribution and control equipment used in healthcare facilities must offer the highest possible levels of reliability, safety and yet be flexible and robust enough to cope with the rapidly changing needs of the healthcare industry. Healthcare facilities need innovative, cost effective solutions that reduce costs throughout the lifecycle of the facility. It’s important to understand the key requirements of the healthcare facility and to strive for continuous development, carefully focused on satisfying industry guidelines and standards, while sustaining the comprehensive interactions between the various components in the electrical distribution system. This course offers an introduction to the components of the electrical distribution system. Recognize the fundamental components of an Essential Electrical System Identify contributing factors in determining the number of utility electric feeds to a building or campus Describe the difference between an open-transition and a closed-transition transfer switch.          ",
        mode: "Project based",
      },
      {
        title: "Compressed Air Systems I: An Introduction        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/140/title/Compressed%20Air%20Systems%20I:%20An%20Introduction",
        description:
          " Compressed air is widely used throughout industry.  It is sometimes called the “fourth utility”, after electricity, gas and water.  From mining, lumber and paper mills, petroleum, chemical, textile and glass production to small manufacturing plants and hotels, compressed air provides critical services and can often represent the majority of the facility energy costs. Since many facilities cannot function without compressed air, reliability is paramount, but given that sound operating practices can reduce energy consumption by 20% to 50%, efficiency is high on the agenda. This is the first in a series of compressed air system courses offered by EnergyUniversity. In this course, we will look at the relative inefficiency of compressed air and examine the components of a compressed air system.",
        mode: "Project based",
      },
      {
        title: "Compressed Air Systems II: Compressor Types        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/141/title/Compressed%20Air%20Systems%20II:%20Compressor%20Types        ",
        description:
          " Compressed air is one of the most expensive utilities. There are many different types and designs of air compressors. Each is suited for different applications in buildings and industry. In this course, we will explore the main types of compressors and identify their differences, compare the capacity and efficiency of different types of compressors and we will identify appropriate compressor types for an application. This is the second in a series of compressed air system courses offered by Energy University. If you have not already done so, it is recommended that you participate in Compressed Air Systems I: An Introduction before taking this course.          .",
        mode: "Project based",
      },
      {
        title: " Compressed Air Systems III: Controlled Methods        ",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/142/title/Compressed%20Air%20Systems%20III:%20Controlled%20Methods        ",
        description:
          "Compressed air is an extremely expensive utility. Therefore, efficient control methods can have a big impact on the energy costs of the system. The purpose of this course is to identify the various methods to control air compressor capacity, including methods that control the flow of air into the compressor and ways of controlling the loading of the compressor itself.          ",
        mode: "Project based",
      },
      {
        title: "Compressed Air Systems IV: Supply Side Components",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/143/title/Compressed%20Air%20Systems%20IV:%20Supply%20Side%20Components",
        description:
          "Compressed air system components can usually identified by major function that they provide whether the function is related to compression, conditioning, filtration, distribution, and some nature of end use. Most systems have a supply-side and a demand-side. This course will explore the supply-side, which is normally where ambient air is processed into a pressurized, dry, clean form that can be used for many useful tasks.",
        mode: "Project based",
      },
      {
        title: "Compressed Air V: Efficient Management and Utilization",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/144/title/Compressed%20Air%20V:%20Efficient%20Management%20and%20Utilization",
        description:
          "In this class, the demand side of the compressed air system is explored. The demand side includes components after the primary receiver, and the pressure / flow controller including the distribution and storage components, and end use equipment. A properly managed demand-side minimizes wasted air and uses compressed air for appropriate applications. This course addresses how to deal with the inefficiencies that can be present in the demand side of the system, thereby leading to energy and cost savings.",
        mode: "Project based",
      },
      {
        title: "Compressed Air VI: Seven Steps to Better Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/145/title/Compressed%20Air%20VI:%20Seven%20Steps%20to%20Better%20Efficiency",
        description:
          "Compressed air is commonly referred to as the fourth utility. Utilities play a major role in the modern world – without them, today’s technologically advanced society could not function. While compressed air systems are widespread, they can also be extremely inefficient. Compressed air systems typically consume more energy and cost more to operate than anything else in industrial environments. All of that can change by utilizing an action plan that will help reduce inefficiencies, thereby saving valuable assets. In this class, we will explore a seven step action plan designed to improve the efficiency of any compressed air system.",
        mode: "Project based",
      },
      {
        title: " Cooling Strategies for IT Wiring Closets and Small Rooms",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/62/title/Cooling%20Strategies%20for%20IT%20Wiring%20Closets%20and%20Small%20Rooms",
        description:
          "The focus for this course will be on understanding the importance of cooling for wiring closets and reviewing options for cooling a wiring closet. Cooling for IT wiring closets is rarely planned and typically only implemented after failures or overheating occur. Historically, no clear standard exists for specifying sufficient cooling to achieve predictable behavior within wiring closets. An appropriate specification for cooling IT wiring closets should assure compatibility with anticipated loads, provide unambiguous instruction for design and installation of cooling equipment, prevent over sizing, maximize electrical efficiency, and be flexible enough to work in various shapes and types of closets.",
        mode: "Project based",
      },
      {
        title: "Data Center Efficiency: Reducing Electrical Power Consumption",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/64/title/Data%20Center%20Efficiency:%20Reducing%20Electrical%20Power%20Consumption",
        description:
          "Conventional models for estimating electrical efficiency of data centers are grossly inaccurate for real-world installations. Electricity usage costs have become an increasing fraction of the total cost of ownership (TCO) for data centers. It is possible to dramatically reduce the electrical consumption of typical data centers through appropriate design of the physical infrastructure and IT architecture. This course explains how to quantify the electricity savings and provides examples of methods that can greatly reduce electrical power consumption.",
        mode: "Project based",
      },
      {
        title: "Data Center Planning: Standardized Process",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/65/title/Data%20Center%20Planning:%20Standardized%20Process",
        description:
          " As the design and deployment of data center physical infrastructure moves away from art and more toward Science, The benefits of a standardized, predictable process are becoming compelling. Beyond The ordering, delivery, and installation of hardware, any build or upgrade project depends critically upon a well-defined process as insurance against surprises, cost overruns, delays, and frustration. this course presents an overview of a standardized, step-by-step process methodology that can be adapted and configured to suit individual requirements.",
        mode: "Project based",
      },
      {
        title: "Data Center System Planning",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/74/title/Data%20Center%20System%20Planning",
        description:
          "System planning is the Achilles' heel of a data center physical infrastructure project. Planning mistakes can magnify and propagate through later deployment phases, resulting in delays, cost overruns, wasted time, and ultimately a compromised system. Much of the trouble can be eliminated by viewing system planning as a data flow model, with an orderly sequence of tasks that progressively transform and refine information from initial concept to final design.",
        mode: "Project based",
      },
      {
        title: " Fundamental Principles of Network Security",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/83/title/Fundamental%20Principles%20of%20Network%20Security",
        description:
          "Security incidents are rising at an alarming rate every year. As the complexity of threats increase, so Security incidents are rising at an alarming rate every year. As the complexity of threats increase, so do the security measures required to protect networks. Data center operators, network administrators, and other data center professionals need to comprehend the basics of security in order to safely deploy and manage the networks of today. This course will address the fundamentals of secure networking systems, including firewalls, network topology and secure protocols. We will also take a look at best practices and will introduce some of the more critical aspects of securing a network. do the security measures required to protect networks. Data center operators, network administrators, and other data center professionals need to comprehend the basics of security in order to safely deploy and manage the networks of today. This course will address the fundamentals of secure networking systems, including firewalls, network topology and secure protocols. We will also take a look at best practices and will introduce some of the more critical aspects of securing a network.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Availability",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/84/title/Fundamentals%20of%20Availability",
        description:
          "In our rapidly changing business world, highly available systems and processes are of critical importance and are the foundation upon which successful businesses rely. Having a sound understanding of the factors that lead to high availability, threats to availability, and ways to measure availability is imperative -- regardless of your business sector. The purpose of this course is to provide you with a solid understanding of availability along with the ability to calculate the cost of downtime.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Cabling Strategies for Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/85/title/Fundamentals%20of%20Cabling%20Strategies%20for%20Data%20Centers",
        description:
          " From a cost perspective, building and operating a data center represents a significant piece of any Information Technology (IT) budget. The key to the success of any data center is the proper design and implementation of core critical infrastructure components. Cabling infrastructure, in particular, is an important area to consider when designing and managing any data center. The cabling infrastructure encompasses all data cables that are part of the data center, as well as all of the power cables necessary to ensure power to all of the loads. It is important to note that cable trays and cable management devices are critical to the support of IT infrastructure as they help to reduce the likelihood of downtime due to human error and overheating. This course will address the basics of cabling infrastructure and will discuss cabling installation practices, cable management strategies and cable maintenance practices. We will take an in-depth look at both data cabling and power cabling.",
        mode: "Project based",
      },
      {
        title: " Living with Finite Resources Strategies for Sustainable Resource Utilization",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/709/title/Living%20with%20Finite%20Resources%20Strategies%20for%20Sustainable%20Resource%20Utilization",
        description:
          "he Earth’s resources are finite, making the importance of developing sustainable ways to operate increasingly urgent. Worldwide, industry is the largest consumer of energy, and therefore also the largest polluter. This course explores the concept of corporate carbon accountability. It explains how leading companies are using solutions like utility-scale renewable energy, clean technologies and efficiency to set and meet aggressive carbon reduction targets in line with leading climate science. It also describes how progressive companies are addressing other natural resource constraints, such as water scarcity. Discuss responsible resource management in terms of the impact of environmental footprint and resource availability Explore the business value of sustainability Identify how energy solutions such as renewables and efficiency drive resource reductions.",
        mode: "Project based",
      },
      {
        title: "Inter-System Ground Noise Impact on Data Center Availability",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/97/title/Inter%20System%20Ground%20Noise%20Impact%20on%20Data%20Center%20Availability",
        description:
          "The most successful, prosperous companies implement policies and follow procedures that enable them to remain consistently active and available 24 hours per day, seven days per week. They understand that they need to be able to react immediately to the needs of the consumer, and that the cost of just one major episode of downtime can disable and undermine the strength of a business. According to the National Archives and Records Administration in Washington, D.C., 93% of businesses that have lost availability in their data center for 10 days or more have filed for bankruptcy within one year. The significance of maintaining a consistently available network circulates throughout a business, and drives down to the data center itself. Now, more than ever, it is critical for data center professionals to have a solid comprehension of the threats to availability, such as the power related issues associated with inter-system ground noise. A significant number of power-related problems are the result of inter-system ground noise, which cannot be corrected using typical AC-only power protection equipment. This course will explore the cause, effect and resolution of inter-system ground noise and wiring issues, and outline best practices to ensure availability.",
        mode: "Project based",
      },
      {
        title: "ISO 50001: Maximizing Your Energy Efficiency Through Proven Standards",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/591/title/ISO%2050001:%20Maximizing%20Your%20Energy%20Efficiency%20Through%20Proven%20Standards",
        description:
          " Early trends indicate that the ISO 50001 Energy Management standard is poised for tremendous growth in US adoption rate. Multinational manufacturers recognize that the standard gives credibility and structure to an Energy Management initiative within an industrial process facility and saves energy cost, reduces downtime, improves energy reliability, and contributes to environmental sustainability objectives. The International Organization for Standardization (ISO) is the world’s largest developer of voluntary International Standards. Since 1947, their highly practical and credible standards have been making industry more efficient and effective, by establishing market expectations for quality (ISO9001), environmental management systems (ISO14001), and other business drivers.",
        mode: "Project based",
      },
      {
        title: "Power Redundancy in the Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/117/title/Power%20Redundancy%20in%20the%20Data%20Center",
        description:
          "Power may be the most critical element of the Physical Data Center today, impacting availability, performance and budgets. This foundational course explores common commercial AC voltage types, transformers and turns ratios, K-rating and Delta-Wye configuration. It also discusses voltage distribution, current ratings and electric fuses. Different types of circuit breakers, their sizing, and grounding requirements are also explained.",
        mode: "Project based",
      },
      {
        title: "Rack Fundamentals",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/118/title/Rack%20Fundamentals",
        description:
          "2-post, 4-post, U's, cable entry, seismic ratings, placement, service access, power and cooling integration. When did Racks become so complicated and how have they evolved to meet the changing needs of Data Centers? This course covers rack standards, rack types, and rack enclosures. It discusses best practices for rack system selection and explores the physical considerations for rack layout.",
        mode: "Project based",
      },
      {
        title: "Specifications of Data Center Power Density",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/535/title/Specifications%20of%20Data%20Center%20Power%20Density",
        description:
          "Conventional methods for specifying data center density can be ambiguous and misleading. Describing data center density using watts per square foot or watts per square meter is no longer sufficient. To determine power or cooling compatibility with high density computing loads like blade servers, new measurement criteria is needed. Historically, no standard method of specifying data centers to achieve predictable behavior with high density loads has existed. When specifying data center density, factors such as compatibility, over-sizing, and maximization of electrical efficiency should be considered. This course will explore an improved method of specifying power density.",
        mode: "Project based",
      },
      {
        title: "Strategic Energy Planning",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/213/title/Strategic%20Energy%20Planning",
        description:
          "Strategic energy planning is the development of an overall energy resource plan to ensure that necessary energy resources are available, and to make the most cost effective energy decisions. It provides for orderly growth in energy consumption and transition to new fuels or suppliers when required. A strategic energy plan will address short and long term actions to improve and sustain the energy efficiency of the facility, define procurement strategy, and provide contingencies for outages, expansion, or reduction in production and occupancy. This class provides an overview of the important pre-requisites for planning and the components of an effective plan.",
        mode: "Project based",
      },
      {
        title: "Strategies for Implementing Energy Efficient Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/123/title/Strategies%20for%20Implementing%20Energy%20Efficient%20Data%20Centers",
        description:
          "Electricity usage costs have become an increasing fraction of the total cost of ownership (TCO) for data centers. It is possible to dramatically reduce the electrical consumption of typical data centers through appropriate design of the data center physical infrastructure and through the design of the IT architecture. This course explains how to quantify the electricity savings and provides examples of methods that can greatly reduce electrical power consumption.",
        mode: "Project based",
      },
      {
        title: "Energy Procurement I: Options in Regulated and Deregulated Markets",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/159/title/Energy%20Procurement%20I:%20Options%20in%20Regulated%20and%20Deregulated%20Markets",
        description:
          "The procurement of energy (electricity, natural gas, fuel oil, etc.) is becoming a major part of the energy manager’s job. Cost effective energy procurement requires understanding of the market, regulatory limitations and opportunities, and contingency planning. The purpose of this course is to raise awareness of the available options for energy procurement.",
        mode: "Project based",
      },
      {
        title: "Energy Procurement II: Introduction to Hedging in Deregulated Markets",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/160/title/Energy%20Procurement%20II:%20Introduction%20to%20Hedging%20in%20Deregulated%20Markets",
        description:
          " Unprecedented volatility in today’s energy markets has wreaked havoc on the profit margins and bottom lines of many industrial companies.  In order to successfully manage costs in this market, it is critical to apply commodity-based market purchasing strategies—or as it is commonly known in the industry: “hedging”.  Energy price risk management and hedging programs quantify exposure to adverse events and mitigate the impact of those events on financial results. An on-going Energy Risk Management program can provide for more predictable budgeting and insulate future earnings from the unpredictable effects of volatile energy prices. The purpose of this course is to address the hedging process. We will also cover the spot and forward markets as well as fixed and index linked contracts.",
        mode: "Project based",
      },
      {
        title: "An Introduction to Medical Gas and Vacuum Systems",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/788/title/An%20Introduction%20to%20Medical%20Gas%20and%20Vacuum%20Systems",
        description:
          "This course introduces plumbing and medical gas systems for medical treatment facilities. We will discuss the various types of medical gas and vacuum systems used in health care facilities. The chief purpose of these systems is to provide safe and reliable support to the medical mission. Codes and standards are also discussed.",
        mode: "Project based",
      },
      {
        title: "Success Story Series: Boston Scientific Corporation",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/691/title/Success%20Story%20Series:%20Boston%20Scientific%20Corporation",
        description:
          "Welcome to Energy University’s Success Story Series! Today, we will take a look at Boston Scientific, a worldwide developer, manufacturer, and marketer of medical devices. When they opened a new corporate headquarters, they integrated Schneider Electric™ Building Analytics as part of a strategic initiative to reduce energy waste and work toward creating a more sustainable corporate campus.",
        mode: "Project based",
      },
      {
        title: "Success Story Series: China Unicom Cloud Data Co., Ltd",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/692/title/Success%20Story%20Series:%20China%20Unicom%20Cloud%20Data%20Co.,%20Ltd",
        description:
          "Welcome to Energy University’s Success Story Series! Today we will look the telco giant, China Unicom, and how they partnered with Schneider Electric to expand their business capabilities with Hyperscale cloud data centers across China!",
        mode: "Project based",
      },
      {
        title: "Proven Strategies for Saving Energy in a Retail Environment",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/203/title/Proven%20Strategies%20for%20Saving%20Energy%20in%20a%20Retail%20Environment",
        description:
          "Identify ten energy saving strategies for a retail environment * Describe the benefits of saving energy in a retail environment. Globally retail companies spend billions of dollars and euros on energy each year. Those costs can account for 25 percent to 40 percent of ongoing building expenses. In many countries, energy costs continue to rise - for example in the US those costs rose 31 percent from 2003 to 2005, according to U.S. federal figures. There is no indication that these costs will fall in the future. In fact, the U.S. Department of Energy projects a 30 percent sustained increase in the cost of electricity. This course will identify ten strategies for saving energy and reducing cost in the retail environment, as well as describe the benefits provided by implementing energy efficient practices.",
        mode: "Project based",
      },
      {
        title: "Battery Safety and Environmental Concerns",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/50/title/Battery%20Safety%20and%20Environmental%20Concerns",
        description:
          "Battery systems and Battery rooms are regulated by a number of fire safety and environmental standards and codes. Proper interpretation of these codes is essential In The design and implementation of data centers and network rooms.It is important for data center designers to have a clear understanding of The fire safety and environmental regulations as they apply to UPS Battery installations. While most commercial Battery back-up systems fall below government-required reporting levels, very large UPS and DC plant batteries may have to comply. Failure to comply can result In costly penalties. environmental compliance focuses on The amount of sulfuric acid and lead at a particular location. power ratings for VRLA batteries and modular Battery cartridges (MBC) are much higher than for flooded batteries at The same reporting threshold. this course offers a high level summary of The regulations and provides guidance for locating sources of regulatory information.",
        mode: "Project based",
      },
      {
        title: "Battery Technology: Site Planning and Ventilation",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/55/title/Battery%20Technology:%20Site%20Planning%20and%20Ventilation",
        description:
          "Most data centers rely on lead acid batteries as their primary source of short term backup power. Battery plant design and Battery deployment decisions will impact The configuration of The data center site. Proper ventilation of The area that houses The batteries will play a key role In addressing site health and safety considerations. We will discuss how Battery technologies impact site requirements. We will also summarize some of The factors and codes to consider when Selecting and sizing a ventilation system for a facility In which stationary lead acid batteries are installed.",
        mode: "Project based",
      },
      {
        title: "Best Practices for Building a New Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/56/title/Best%20Practices%20for%20Building%20a%20New%20Data%20Center",
        description:
          "This course is based upon an actual case study involving a data center that was built and commissioned at the University of Texas Health Science Center (UTHSC) in Houston, Texas. It will examine the best practices for building a new 7,000 square foot (2,134 square meter) data center. The goal of this case study is to demonstrate the project process for deploying a rack based infrastructure data center design. The case study also highlights how proper design can facilitate operational process standardization and can provide efficient power and cooling to support higher density data center loads.",
        mode: "Project based",
      },
      {
        title: "Energy Procurement III: Balanced Hedging Strategies",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/161/title/Energy%20Procurement%20III:%20Balanced%20Hedging%20Strategies",
        description:
          "Managing energy costs is the key to a successful profit margin and bottom line for many industrial companies.  In order to successfully manage costs in this market, it is helpful to apply a balanced hedging strategy.  A balanced hedging approach will quantify exposure to adverse events and mitigate the impact of those events on financial results. The purpose of this course is to describe a variety of hedging strategies, and identify the main drivers of energy prices. We will also cover how the commodity market functions to support energy trading.",
        mode: "Project based",
      },
      {
        title: "Energy Rate Structures I: Concepts and Unit Pricing",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/162/title/Energy%20Rate%20Structures%20I:%20Concepts%20and%20Unit%20Pricing",
        description:
          "Understanding the forms of energy used at a facility, and the rate structure for each, is key to understanding energy costs and implementing an energy efficiency program. By understanding what you are paying for energy, and how the rate structure controls your bill, you can adopt different strategies for reducing your energy costs. You may even be able to move to a different rate structure that is more cost effective for you. In this course, we will focus primarily on gas and electricity concepts and unit pricing.",
        mode: "Project based",
      },
      {
        title: " Boiler Types and Opportunities for Energy Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/125/title/Boiler%20Types%20and%20Opportunities%20for%20Energy%20Efficiency",
        description:
          "Steam and hot water provide a means of transporting controllable amounts of energy from a central boiler house, where it can be efficiently and economically generated, to the point of use. Steam and hot water are popular throughout industry for a broad range of tasks from mechanical power production to space heating and process applications. The boiler room is a place where there are many opportunities for energy efficiency, as described in this class.",
        mode: "Project based",
      },
      {
        title: " European Codes and Standards: New Horizons for Buildings",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/164/title/European%20Codes%20and%20Standards:%20New%20Horizons%20for%20Buildings",
        description:
          " Greenhouse gases, including CO2, have been identified as the culprits of global warming and the vast majority of industrialised countries have agreed to cut emissions drastically over the coming decades. Buildings account for nearly 40% of the energy used in most countries. They are responsible for a similar level of global CO2 emissions. Therefore, energy efficiency in buildings is one of the keys to reducing greenhouse emissions. The main driving force to achieve the ambitious goals that have been set for the reduction of greenhouse gases will come from energy efficiency regulations, building codes, standards, labels, certifications, obligations, and incentives, all of which have been multiplying steadily over recent decades. This course focuses on those main driving forces.",
        mode: "Project based",
      },
      {
        title: "Pumping Systems I: Pump Types and Performance",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/204/title/Pumping%20Systems%20I:%20Pump%20Types%20and%20Performance",
        description:
          "List the components of a pumping system * Identify different types of pumps * List the factors that should be considered when pumps are selected * Interpret a pump performance curve and explain the best efficiency point. Pumps are essential to the daily operation of many facilities. This tends to promote the practice of sizing pumps conservatively to ensure that the needs of the system will be met under all conditions. Intent on ensuring that the pumps are large enough to meet system needs, engineers often overlook the cost of oversizing pumps and err on the side of safety by adding more pump capacity. Unfortunately, this practice results in higher-than-necessary system operating costs. In addition, oversized pumps typically require more frequent maintenance than properly sized pumps. Excess flow energy increases the for graduates of the RPA, FMA, and/or SMA designation programs by BOMI International, the Independent Institute for Property and Facility Management Education. This course has been approved by the US Green Building Council (USGBC) for the following continuing education.",
        mode: "Project based",
      },
      {
        title: "Establishing Benchmarks for Data Center Efficiency Measurements",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/80/title/Establishing%20Benchmarks%20for%20Data%20Center%20Efficiency%20Measurements",
        description:
          "Discuss adaptive power management techniques • Identify automated data center management tools • Review how automation was applied for analysis of root causes within the data center • Describe ways to better design, manage, and operate data centers. The Parallel Data Lab (PDL), housed at Carnegie Mellon University, is a multi-disciplinary academic research organization with strong ties to industry partners. The PDL undertakes a number of research projects. The Data Center Observatory (DCO) is one of the lab's most ambitious projects. The DCO was conceived to serve as both a fully operational data center and a research facility devoted to developing strategies for reducing the operational costs of data centers. The purpose of this course is to review the results documented via the creation and operation of this unique functional laboratory.",
        mode: "Project based",
      },
      {
        title: "Establishing An Optimal Physical Environment In A Health Care Setting",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/595/title/Establishing%20An%20Optimal%20Physical%20Environment%20In%20A%20Health%20Care%20Setting",
        description:
          "Each person who is involved in creating, managing and maintaining the physical health care environment plays a significant role in providing care for those who come to health facilities. The structures, systems and equipment should work together to provide an environment that is comfortable, accommodating and safe. It is this environment that contributes to the health and healing process. This course brings to light the importance of a secure, safe, clean physical environment in a health care setting and reveals tactics and techniques for creating an optimal health care physical environment. Explain how environmental variables can contribute to positive patient outcomes Identify the key attributes to creating the best physical healthcare environment Describe how governing regulatory bodies affect the physical healthcare environment",
        mode: "Project based",
      },
      {
        title: "Energy Rate Structures II: Understanding and Reducing Your Bill",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/163/title/Energy%20Rate%20Structures%20II:%20Understanding%20and%20Reducing%20Your%20Bill",
        description:
          "Understanding the forms of energy used at a facility, and the rate structure for each, is key to understanding energy costs and implementing an energy efficiency program. By understanding what you are paying for energy, and how the rate structure controls your bill, you can adopt different strategies for reducing your energy costs. In this course, we will focus primarily on gas and electricity pricing and rate calculations along with ways to shift your energy load in order to reduce your electricity costs.",
        mode: "Project based",
      },
      
     
      {
        title: "Enhancing Large UPS Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/79/title/Enhancing%20Large%20UPS%20Efficiency",
        description:
          "As energy resources become scarce and expensive, electrical efficiency is becoming a more important performance factor in the specification and selection of large UPS systems. There are three subtle but significant factors that can materially affect a company's cost of operating a UPS system, and particularly the electrical bill. Unfortunately, the people who specify systems often fail to recognize these factors, which leads to increased costs to the owner because operational efficiencies are not correctly considered. This course addresses the common errors and misunderstandings in evaluating UPS efficiency. UPS efficiency curves are explained, compared, and their cost implications quantified.",
        mode: "Project based",
      },
      {
        title: "Essential Elements of Data Center Facility Operations",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/596/title/Essential%20Elements%20of%20Data%20Center%20Facility%20Operations",
        description:
          "70% of data center outages are directly attributable to human error according to the Uptime Institute’s analysis of their “abnormal incident” reporting (AIR) database. This figure highlights the critical importance of having an effective operations and maintenance (O&M) program. This course describes unique management principles and provides a comprehensive, high-level overview of the necessary program elements for operating a mission critical facility efficiently and reliably throughout its life cycle. Practical management tips and advice are also given. Establish a balanced critical facility management program and mindset using twelve essential program elements Describe the key components of an effective data center Operations & Maintenance (O&M) program",
        mode: "Project based",
      },
      {
        title: "Pumping Systems II: Efficient Flow Control",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/205/title/Pumping%20Systems%20II:%20Efficient%20Flow%20Control",
        description:
          "The purpose of this course is to examine the chief factors that impact the efficiency of pumping systems. Pumping systems commonly have a wide range of flow needs. Since flow may have to be increased or decreased depending on demand, flow control is essential to system performance. This class will examine the various flow control methods generally found in pumping systems today. We also cover the effects of impeller trimming, piping configurations, and oversized pumps.",
        mode: "Project based",
      },
      {
        title: "Building Envelope Metric Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/135/title/Building%20Envelope%20Metric%20Version",
        description:
          "The building envelope is a critical component of any facility since it protects the building occupants and plays a major role in regulating the indoor environment. Consisting of the building's foundation, walls, roof, windows, and doors, the envelope controls the flow of energy between the interior and exterior of the building. A well designed envelope allows the building to provide comfort for the occupants and respond efficiently to heating, cooling, ventilating, and natural lighting needs. Today we will examine the elements of the building envelope (floors, walls, windows and ceiling) and how those elements participate in heat transfer. We will discuss heat loss or gain due to transmission, infiltration and ventilation. This course contains many equations used to determine heat loss and gain through the building envelope, and we will supply a sample case study of a building throughout the course to help explain each topic.",
        mode: "Project based",
      },
      {
        title: "Building Envelope-US Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/136/title/Building%20Envelope-US%20Version",
        description:
          "The building envelope is a critical component of any facility since it protects the building occupants and plays a major role in regulating the indoor environment. Consisting of the building's foundation, walls, roof, windows, and doors, the envelope controls the flow of energy between the interior and exterior of the building. A well designed envelope allows the building to provide comfort for the occupants and respond efficiently to heating, cooling, ventilating, and natural lighting needs. Today we will examine the elements of the building envelope (floors, walls, windows and ceiling) and how those elements participate in heat transfer. We will discuss heat loss or gain due to transmission, infiltration and ventilation. This course contains many equations used to determine heat loss and gain through the building envelope, and we will supply a sample case study of a building throughout the course to help explain each topic.",
        mode: "Project based",
      },
      {
        title: " Calculating Space and Power Density Requirements for Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/581/title/Calculating%20Space%20and%20Power%20Density%20Requirements%20for%20Data%20Centers",
        description:
          "The historic method of specifying data center power density using a single number of watts per square foot (or watts per square meter) is an unfortunate practice that has caused needless confusion as well as waste of energy and money. This course demonstrates how the typical methods used to select and specify power density are flawed, and provides an improved approach for establishing space requirements, including recommended density specifications for typical situations. Describe why the legacy approach is no longer sufficient for calculating space and power density requirements for data centers Explain an improved approach for establishing space requirements, including recommended density specifications for typical situations Define a density specification, utilizing typical design values that have been provided in this course",
        mode: "Project based",
      },
      {
        title: "Calculating Total Cooling Requirements",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/59/title/Calculating%20Total%20Cooling%20Requirements",
        description:
          "Accurately identifying cooling requirements are a critical factor data center design and maintenance. This course describes how to estimate the heat output for purposes of sizing data center air conditioning systems. In addition, a number of heat and cooling measurement conversion options will be explored.",
        mode: "Project based",
      },
      {
        title: "Pumping Systems III: Improving System Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/206/title/Pumping%20Systems%20III:%20Improving%20System%20Efficiency",
        description:
          " Pumping systems support essential processes in buildings, manufacturing and water treatment. A pump does not function in isolation: it is part of a system of supply and demand. The use of a ‘systems approach’ will typically yield a quieter, more efficient, and more reliable system. This course will explore how fine-tuning a pump’s performance helps to render it more suitable for the system, while appropriate design of piping configurations helps to reduce energy losses. We’ll also recap how you can detect oversized pumps in your pumping system.",
        mode: "Project based",
      },
      {
        title: " Examining Fire Protection Methods in the Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/81/title/Examining%20Fire%20Protection%20Methods%20in%20the%20Data%20Center",
        description:
          "Explain the importance of fire protection for data centers • Identify the main goals of a data center fire protection system • Explain the basic theory of fire suppression • Differentiate the classes of fire and the stages of combustion • Recognize the different methods of fire detection, fire communication and fire suppression • Identify the different types of fire suppression agents and devices appropriate for data center. Fire In any area of a business can result In millions of dollars of losses and even business failure. However, fire In The data center represents one of The greatest risks to any company or institution. this is a foundational course which will introduce The basic theory, prevention, detection and suppression of fire specific to data centers. at The completion of this course you will have a better understanding of The safeguarding methods that are used to protect a data centers hottest commodity, information.",
        mode: "Project based",
      },
      {
        title: " Fan Systems I: Introduction to Fan Performance",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/165/title/Fan%20Systems%20I:%20Introduction%20to%20Fan%20Performance",
        description:
          "Fans are machines for moving air and air-borne materials, and are widely used in industrial and commercial applications.  Fans use billions of kilowatt-hours of energy each year.  Fan reliability can be critical – for example, in material handling operations fan failure will often force a process stoppage.  The importance of reliability may cause system designers to compensate for uncertainties by adding capacity to fans.  Unfortunately, fans that are oversized for their service requirements do not operate at their best efficiency points.  Paradoxically oversizing fan systems creates problems that can increase system operating costs while decreasing fan reliability. In this course, we provide a basic introduction to fans to equip an energy manager to understand the principal characteristics of this equipment.",
        mode: "Project based",
      },
      {
        title: "Success Stories In Healthcare: Retro-commissioning Done Right!",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/671/title/Success%20Stories%20In%20Healthcare:%20Retro-commissioning%20Done%20Right!",
        description:
          "Retro-commissioning (RCx) is a systematic process that identifies low-cost operational and maintenance improvements in an existing building that has not previously been commissioned. As problems are identified, corrective measures are provided, and a plan put in place, such as training for operations staff so that the systems can continue to operate effectively and efficiently. Retro-commissioning efforts strive for continuous progress towards optimum performance. Nowhere is this more crucial than in the world of healthcare. This case study course will discuss the successful impact that retro-commissioning had on the energy efficiency of one healthcare facility, Midland Memorial Hospital. Describe the impactful energy savings improvements that can be made by investing in a retro-commissioning project Explain the role a retro-commissioning project can play in achieving the energy efficiency goals of healthcare facilities",
        mode: "Project based",
      },
      {
        title: "Demand Response and the Smart Grid",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/146/title/Demand%20Response%20and%20the%20Smart%20Grid",
        description:
          "Investment in electrical infrastructure has struggled to keep up with increased demand.  We have seen demand become so strong that it has triggered large network failures.  Demand response programs provide a simple way for facility managers to get paid for reducing consumption and relieving load on the power grid when it is stressed.  In effect they are returning capacity to the grid and being paid for that asset. This course will look at the issues involved, how Demand Response works, why it is beneficial, and what the Smart Grid is.",
        mode: "Project based",
      },
      {
        title: "Deploying High-Density Pods in a Low Density Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/75/title/Deploying%20High-Density%20Pods%20in%20a%20Low%20Density%20Data%20Center",
        description:
          "New breakthroughs in power and cooling technology allow for a simple and rapid deployment of self-contained high-density pods within an existing or new low-density data center. The independence of these high-density pods allows for predictable and reliable operation of highdensity equipment without a negative impact on the performance of existing low-density power and cooling infrastructure. A side benefit is that these high-density pods operate at much higher electrical efficiency than conventional designs. Guidance on planning, design, implementation, and predictable operation of high-density pods is provided.",
        mode: "Project based",
      },
      {
        title: "Deploying IT Equipment in Small Server Rooms and Branch Offices",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/383/title/Deploying%20IT%20Equipment%20in%20Small%20Server%20Rooms%20and%20Branch%20Offices",
        description:
          "Small server rooms and branch offices are typically unorganized, unsecure, hot, unmonitored, and space constrained. These conditions can lead to system downtime or, at the very least, lead to “close calls” that get management’s attention. Practical experience with these problems reveals a short list of effective methods to improve the availability of IT operations within small server rooms and branch offices. This course discusses making realistic improvements to power, cooling, racks, physical security, monitoring, and lighting. The focus of this course is on small server rooms and branch offices with up to 10kW of IT load.",
        mode: "Project based",
      },
      {
        title: " Designing and Building Telecom Networks: A Case Study",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/76/title/Designing%20and%20Building%20Telecom%20Networks:%20A%20Case%20Study",
        description:
          "In order to demonstrate the execution of a standardized wiring closet design/build methodology, this course is based upon a hypothetical case study. In this case, the company we will focus on is called the ACME Classic Auto company. Illustrations of best practices from multiple networking room design/build projects will be presented. The course focuses on the physical infrastructure aspects of the networking/telecom/server room; that is the foundational cooling, power, rack and security layers that support the IT and network systems residing inside the physical space. During this course, both user requirements gathering and standard specification generation will be discussed and reviewed.",
        mode: "Project based",
      },
      {
        title: "Energy Efficiency Drivers in Europe",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/71/title/Energy%20Efficiency%20Drivers%20in%20Europe",
        description:
          "As a leader in Energy Management, Schneider Electric has an important role to play in meeting the critical energy efficiency challenge facing our society. To succeed, we must be fully aware of existing and future energy efficiency drivers in order to develop and market compliant solutions that will help achieve the goals that have been set. This White Paper provides an overview of present energy efficiency drivers, their implications and perspectives for the future.",
        mode: "Project based",
      },
      {
        title: "Re-examining Raised Floor Applications",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/119/title/Re-examining%20Raised%20Floor%20Applications",
        description:
          "The raised floor is a ubiquitous feature of data centers. However, many of the reasons for utilizing the raised floor no longer exist, and the problems associated with raised floors suggest that their widespread use is no longer justified or desirable for many applications. This course examines the original circumstances that gave rise to the development and use of the raised floor in the data center environment; barriers to eliminating the raised floor; and recently introduced solutions that solve technical barriers to eliminating the raised floor concept.",
        mode: "Project based",
      },
      {
        title: "Retro-Commissioning: Energy Savings Solutions for Healthcare",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/592/title/Retro-Commissioning:%20Energy%20Savings%20Solutions%20for%20Healthcare",
        description:
          "In today’s economy, keeping a hospital financially healthy without risking the environment of care is a daunting task. Administrators have traditionally looked to high-cost areas, such as staffing, services, and equipment budgets, to cut expenses. Unfortunately, these types of cost-cutting methods come with risks that could potentially affect patient care, safety, and satisfaction. At the same time, energy use and costs are rising dramatically, lowering hospital margins and consuming financial resources that could otherwise be reinvested to help hospital growth and support patient-centric projects. Directors of Healthcare Facilities, Maintenance and Operations are looking for an easier way to improve their hospital’s financial health — by increasing energy efficiency. Real, long-term savings can be found by integrating energy management and monitoring into hospital buildings. Energy saving solutions can be implemented through the process of building retro-commissioning. This course will introduce the concept of retro-commissioning in the healthcare field, and discuss the impact that retro-commissioning can have on energy efficiency for healthcare facilities. Identify the value of retro-commissioning in healthcare facilities Explain the role retro-commissioning can play in achieving the energy efficiency goals of healthcare facilities Describe the energy savings benefits that retro-commissioning can provide",
        mode: "Project based",
      },
      {
        title: "Calculating Total Power Requirements",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/60/title/Calculating%20Total%20Power%20Requirements",
        description:
          "Part of data center planning and design is the process of aligning power requirements of the IT equipment with the capacity of the infrastructure. This course presents methods for calculating power requirements and provides guidelines for determining total electrical power capacity needed to support the data center.",
        mode: "Project based",
      },
      {
        title: "Chilled Water Piping for your Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/61/title/Chilled%20Water%20Piping%20for%20your%20Data%20Center",
        description:
          "Discuss the deployment of both traditional hard piping as well as newer, flexible piping * Identify the various failure modes of hard piping and flexible piping installations * Review considerations for deploying both under-floor and overhead hard piping installations * Compare the benefits of both hard piping and flexible piping for chilled water systems In data centers, The traditional approach to piping distribution has been to use hard copper or carbon steel piping with welded, brazed or threaded fittings for routing and branching of The piping to The computer room air conditioners. with The current trend of increased densities In It equipment and more frequent moves, additions, and changes, computer room air conditioners must occasionally be added to The traditional lay-outs where The use of hard piping becomes problematic.",
        mode: "Project based",
      },
      {
        title: "Choosing Between Room, Row, & Rack Based Cooling For Data Centers I",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/542/title/Choosing%20Between%20Room,%20Row,%20&%20Rack%20Based%20Cooling%20For%20Data%20Centers%20I",
        description:
          "The conventional approach to data center cooling using uncontained room-based cooling has technical and practical limitations in next generation data centers. The need of next generation data centers to adapt to changing requirements, to reliably support high and variable power density, and to reduce electrical power consumption and other operating costs have directly led to the development of containment strategies for room, row, and rack-based cooling. This course describes these improved cooling methods.",
        mode: "Project based",
      },
      {
        title: "Choosing Between Room, Row, & Rack Based Cooling For Data Centers II",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/543/title/Choosing%20Between%20Room,%20Row,%20&%20Rack%20Based%20Cooling%20For%20Data%20Centers%20II",
        description:
          "Contained room-based, row-based, and rack-based cooling provide the flexibility, predictability, scalability, reduced electrical power consumption, reduced TCO, and optimum availability that next-generations data centers require.  Rack-based cooling will find application in situations where extreme densities, high granularity of deployment, or unstructured layout are the key drivers.  For most users with newer high density server technologies, contained room-based and row-based cooling will provide the best balance of high predictability, high power density, and adaptability, at the best overall TCO.",
        mode: "Project based",
      },
      {
        title: "Combined Heat and Power",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/137/title/Combined%20Heat%20and%20Power",
        description:
          "Cogeneration today is widely used throughout the world for efficient production of heat and power. Cogeneration is the simultaneous production of heat and power in a single thermodynamic process. The purpose of this course is to review the different approaches for applying technologies to the function of cogeneration.",
        mode: "Project based",
      },
      {
        title: "Combustion Processes",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/138/title/Combustion%20Processes",
        description:
          "Combustion is an almost universal process in energy use, and it usually offers opportunities for modest but worthwhile energy savings through good management. Conversely, it carries a significant risk of avoidable energy waste. In this course, you will learn the basics of combustion chemistry, how avoidable losses arise, and how they are measured. Particular attention will be paid to burners fitted in heating boilers but the basic principles are applicable to any kind of combustion plant.",
        mode: "Project based",
      },
      {
        title: "Retro-Commissioning: Process and Implementation in Healthcare Facilities I",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/603/title/Retro-Commissioning:%20Process%20and%20Implementation%20in%20Healthcare%20Facilities%20I",
        description:
          "A well organized retro-commissioning project will follow a well defined process. Planning is essential because it will ensure that roles and responsibilities are clear within the team, that the right people are involved soon enough, and stay with the project long enough. The retro-commissioning planning process also provides the opportunity to gather support and gain commitment, coordinate different functions and resources, bring about cultural change, and communicate objectives and strategies to team members. This course is the first in a two-part series on the implementation of a retro-commissioning plan. This course will explain the process of retro-commissioning and the importance of establishing the scope, structure and schedule of retro-commissioning activities. This course will also identify retro-commissioning specifications, which establish process requirements for the healthcare environment. Recognize the significance of planning for retro-commissioning in healthcare facilities Review the process of obtaining data and establishing benchmarks for the healthcare retro-commissioning plan Discuss the development of the retro-commissioning plan, process and procedure.",
        mode: "Project based",
      },
      {
        title: "Retro-Commissioning: Process and Implementation in Healthcare Facilities II",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/621/title/Retro-Commissioning:%20Process%20and%20Implementation%20in%20Healthcare%20Facilities%20II",
        description:
          "A well organized retro-commissioning project will follow a well defined process. Planning is essential because it will ensure that roles and responsibilities are clear within the team, that the right people are involved soon enough, and stay with the project long enough. The retro-commissioning planning process also provides the opportunity to gather support and gain commitment, coordinate different functions and resources, bring about cultural change, and communicate objectives and strategies to team members. This course is the second in a two-part series on the implementation of a retro-commissioning plan. This course will discuss the execution of the retro-commissioning plan, process and procedure. A definition of measurement and verification techniques for ongoing monitoring is also provided. Discuss the execution of the retro-commissioning plan, process and procedure Define measurement and verification techniques for ongoing monitoring",
        mode: "Project based",
      },
      {
        title: "Room Ventilation & Airborne Disease Transmission In A Healthcare Setting",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/643/title/Room%20Ventilation%20&%20Airborne%20Disease%20Transmission%20In%20A%20Healthcare%20Setting",
        description:
          "Ventilation is used extensively in healthcare facilities for primary patient treatment in operating rooms, intensive care units and isolation rooms. It is also installed to ensure compliance with quality assurance of manufactured items in pharmacy and sterile supply departments and to protect staff from harmful organisms and toxic substances, for example in laboratories.  In general, proper ventilation is there to help ensure the comfort of the occupants of buildings. Specialized ventilation in a healthcare setting will also provide comfort but its prime function will be to closely control the environment and air movement of the space that it serves in order to contain, control and reduce hazards to patients and staff from airborne contaminants. This course explores the affect that proper room ventilation can have on airborne disease transmission.",
        mode: "Project based",
      },
      {
        title: "Security Management: Is the Cloud a Viable Option?",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/670/title/Security%20Management:%20Is%20the%20Cloud%20a%20Viable%20Option?",
        description:
          "Many building owners, facilities managers, and security personnel are considering moving their enterprise security management systems to the cloud. With other enterprise applications already in the cloud, they want to achieve similar benefits while ensuring the best and most secure solution for their company. This course presents practicable considerations for moving to the cloud, with recommendations on how to evaluate cloud-based security management solutions. Examine security management market trends as well as recent research on what other companies are doing today with their security operations Provide insight and guidance on why organizations move their security to the cloud, and Describe the value of such a move",
        mode: "Project based",
      },
      {
        title: "Services for the Next Generation Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/121/title/Services%20for%20the%20Next%20Generation%20Data%20Centers",
        description:
          "Business organizations today rely on the ability of their data centers to support the critical business functions though highly available systems. Data centers, in turn, have become highly dependent on the capabilities of 3rd party service organizations to support the critical components within the data center. Exposure to service-related failures is on the rise as technologies become more complex and as NCPI vendors roll out unique components that lack standardization in design. The lack of standardization minimizes learning and leads to a greater level of customization in the service support requirements. This course discusses the traditional models of data center service, and new trends for next generation data center services.",
        mode: "Project based",
      },
      {
        title: "Site Selection and Planning for Mission Critical Facilities",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/651/title/Site%20Selection%20and%20Planning%20for%20Mission%20Critical%20Facilities",
        description:
          "On a hill or in the valley? On the perimeter or in the center of the building? Distance to utilities and emergency services? One of the first steps in building a new Data Center, or moving an existing Data Center, is finding the right location. This course explores different considerations that should be explored in Site Selection & Planning related to NCPI, including: geography, building types, power, emergency services, shared facility issues, and economic challenges. List both natural and man made hazards that you should consider when building your data center Identify risk management strategies for site selection and planning Identify key considerations for building or retrofitting a data center in an existing facility List space planning criteria for the data center Summarize economic risk considerations",
        mode: "Project based",
      },
      {
        title: "Standardization in the Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/122/title/Standardization%20in%20the%20Data%20Center",
        description:
          "Standardization is a powerful concept that has established itself as a critical ally in managing process. In recent decades, the long-standing idea of standardization has gained new stature in many different industries as a creative and compelling strategic enterprise philosophy. Similar success can be achieved by applying standardization to the design, deployment, and operation of Network-Critical Physical Infrastructure (NCPI). Together, we will discover that there is indeed a catalyst for moving towards implementing a process of standardization in the data center: Data center managers’ desire to eliminate the significant business cost of unnecessary downtime, lost opportunity, and expense caused by human error, lack of agility, and data center oversizing. This course will discuss how implementing a plan to standardize the data center will help to increase efficiency levels, reduce downtime, support better business agility, and lower costs.",
        mode: "Project based",
      },
      {
        title: " Steam Systems I: Advantages and Basics of Steam",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/207/title/Steam%20Systems%20I:%20Advantages%20and%20Basics%20of%20Steam",
        description:
          "Steam has come a long way from its traditional associations with locomotives and the Industrial Revolution. Today, it serves as an integral and essential part of modern technology. This course will introduce the benefits of utilizing steam in numerous processes and discuss t selecting the appropriate pressures for each of these different processes.",
        mode: "Project based",
      },
      {
        title: "Steam Systems II: Impact of Boiler Sizing, Pressure, and Velocity",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/208/title/Steam%20Systems%20II:%20Impact%20of%20Boiler%20Sizing,%20Pressure,%20and%20Velocity",
        description:
          "Steam has come a long way from its traditional associations with locomotives and the Industrial Revolution. Today, it serves as an integral and essential part of modern technology. This course will introduce a measure of boiler efficiency and discuss the impact of correct boiler sizing as well as how working pressure affects efficiency. We will also look at choosing the correct steam velocity for a given system. Finally, we will talk about how air and non-condensable gases can impact a steam system.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Cooling Architecture I: Heat Removal Methods",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/86/title/Fundamentals%20of%20Cooling%20Architecture%20I:%20Heat%20Removal%20Methods",
        description:
          "Data center heat removal is one of the most essential yet least understood of all critical IT environment processes. As the latest computing equipment becomes smaller and uses the same or even more electricity than the equipment it replaced, more heat is being generated in data centers. Precision cooling and heat rejection equipment is used to collect and transport this unwanted heat energy to the outside atmosphere. There are thirteen basic heat removal methods to cool IT equipment and to transport unwanted heat to the outdoor environment. This course describes these fundamental cooling technologies using basic terms and diagrams.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Cooling Architecture II",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/503/title/Fundamentals%20of%20Cooling%20Architecture%20II",
        description:
          "Selecting the appropriate cooling architecture is one of the key components in data center design. Matching the right architecture to your data center requirements will be foundational to the long term success of your data center. This course is a continuation of Fundamentals of Cooling Architecture I Heat Removal Methods and will continue to explore the various approaches to cooling the data center, along with the appropriate application, for each of the architectures discussed.",
        mode: "Project based",
      },
      {
        title: " Fundamentals of Cooling Architecture III",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/527/title/Fundamentals%20of%20Cooling%20Architecture%20III",
        description:
          "Data center cooling is one of the most critical, yet least understood of all IT environmental issues. This course expands upon the principles learned in Fundamentals of Cooling Architecture I & II. Topics include identifying cooling locations, comparing cooling methods, and choosing a cooling method for your data center.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Cooling I",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/217/title/Fundamentals%20of%20Cooling%20I",
        description:
          "In every data center excess heat has the potential to create downtime. In addition, the performance and lifespan of IT equipment is directly related to the efficiency of cooling equipment. If you’re involved with the operation of computing equipment it’s critical that you understand the importance of cooling in the data center environment. This foundational course explains the fundamentals of air conditioning systems, covering such topics as the refrigeration cycle, ideal gas law, condensation, convection and radiation, heat generation and transfer, and precision vs. comfort cooling.",
        mode: "Project based",
      },
      {
        title: "Commissioning For Energy Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/139/title/Commissioning%20For%20Energy%20Efficiency",
        description:
          "Studies of commissioning projects in existing buildings show median paybacks of 1.1 years and savings of up to 30%, sometimes more.  Commissioning is a process to ensure building performance problems are understood and corrected.  Deficiencies such as design flaws, construction defects, malfunctioning equipment, and deferred maintenance have a multitude of consequences, ranging from equipment failure, to poor indoor air quality and comfort, to unnecessarily high energy use or under-performance of energy efficiency strategies.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Cooling II: Humidity in the Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/87/title/Fundamentals%20of%20Cooling%20II:%20Humidity%20in%20the%20Data%20Center",
        description:
          "Data center cooling is one of the most critical yet least understood of all IT environmental issues. A thorough understanding of the fundamental principles of cooling is essential in order to achieve peak performance of your mission-critical systems. This course expands upon the principles learned in Fundamentals of Cooling, Part 1. Topics include humidity, temperature measurement and control, humidification strategies and systems, demand fighting, and methods used to prevent it, and appropriate operating thresholds for maximum efficiency and cost savings.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Health Care Facility Electrical Power Systems",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/620/title/Fundamentals%20of%20Health%20Care%20Facility%20Electrical%20Power%20Systems",
        description:
          "With daunting aspects such as ever-changing codes and standards, increasing medical complexity, and dwindling capital budgets, hospitals and health care facilities are among the most challenging building projects. Health care facility electrical systems are complex, difficult to design, expensive to build and subject to a plethora of codes and standards as well as intensely regulated by authorities having jurisdiction over their design and construction. With new medical technologies continuing to arrive on the scene, healthcare facility electrical systems are ever changing. This course provides an introduction to the topic of healthcare facility electrical systems.",
        mode: "Project based",
      },
      {
        title: "Components of a Health Care Electrical Distribution System",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/625/title/Components%20of%20a%20Health%20Care%20Electrical%20Distribution%20System",
        description:
          "The electrical distribution and control equipment used in healthcare facilities must offer the highest possible levels of reliability, safety and yet be flexible and robust enough to cope with the rapidly changing needs of the healthcare industry. Healthcare facilities need innovative, cost effective solutions that reduce costs throughout the lifecycle of the facility. It’s important to understand the key requirements of the healthcare facility and to strive for continuous development, carefully focused on satisfying industry guidelines and standards, while sustaining the comprehensive interactions between the various components in the electrical distribution system. This course offers an introduction to the components of the electrical distribution system.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Physical Security",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/88/title/Fundamentals%20of%20Physical%20Security",
        description:
          "Today's Data Centers must consider not only network security, but also physical security. This course defines what physical security means for mission critical facilities and identifies what assets it needs to protect. Also discussed are the different means to control facility access, common physical security methods, security devices, and budget considerations related to physical security.",
        mode: "Project based",
      },
      
      {
        title: "Fundamentals of Power",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/89/title/Fundamentals%20of%20Power",
        description:
          "Before you can understand the power needs of the Data Center, you must first understand the basic concepts and terms related to power measurement, electric power forms, and its generation. This elementary level course explains these power elements and some of today's power problems.",
        mode: "Project based",
      },
      {
        title: "Compressed Air Systems I: An Introduction",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/625/title/Components%20of%20a%20Health%20Care%20Electrical%20Distribution%20System",
        description:
          "Compressed air is widely used throughout industry.  It is sometimes called the “fourth utility”, after electricity, gas and water.  From mining, lumber and paper mills, petroleum, chemical, textile and glass production to small manufacturing plants and hotels, compressed air provides critical services and can often represent the majority of the facility energy costs. Since many facilities cannot function without compressed air, reliability is paramount, but given that sound operating practices can reduce energy consumption by 20% to 50%, efficiency is high on the agenda.",
        mode: "Project based",
      },
      {
        title: " Generator Fundamentals",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/90/title/Generator%20Fundamentals",
        description:
          "Consider these statistics. According to Contingency Planning Research power related events such as blackouts and surges account for 31% of computer downtime episodes lasting more than 12 hours, power failure and surges account for 45.3% of data loss, and according to IDC power disturbances account for about one third of all server failures. A standby generator is one critical equipment components that will keep you from becoming one of these statistics. Understanding the basic functions and concepts of standby generator systems helps provide a solid foundation allowing IT professionals to successfully specify, install, and operate critical facilities. This course is an introduction to standby generators and the subsystems that power a facility’s critical electrical loads when the utility cannot.",
        mode: "Project based",
      },
      {
        title: "Going Green with Leadership in Energy and Environmental Design",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/174/title/Going%20Green%20with%20Leadership%20in%20Energy%20and%20Environmental%20Design",
        description:
          "This course defines green buildings, explains the mission of the US Green Building Council and the requirements of the Leadership in Energy and Environmental Design rating system. Schneider Electric solutions for meeting the LEED requirements will also be explained.",
        mode: "Project based",
      },
      {
        title: "Compressed Air Systems II: Compressor Types",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/141/title/Compressed%20Air%20Systems%20II:%20Compressor%20Types",
        description:
          "Compressed air is one of the most expensive utilities. There are many different types and designs of air compressors. Each is suited for different applications in buildings and industry. In this course, we will explore the main types of compressors and identify their differences, compare the capacity and efficiency of different types of compressors and we will identify appropriate compressor types for an application. This is the second in a series of compressed air system courses offered by Energy University. If you have not already done so, it is recommended that you participate in Compressed Air Systems I: An Introduction before taking this course.",
        mode: "Project based",
      },
      {
        title: "Going Green: Energy Efficiency in the Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/91/title/Going%20Green:%20Energy%20Efficiency%20in%20the%20Data%20Center",
        description:
          "Tax breaks, lower electric bills, impressed customers - Companies are finding plenty of benefits in greening up their buildings. As the overall cost of supplying power, energy, and resources increases, data centers will need to take a new approach and examine where they can be cost and energy efficient, as well as reliable. As this course will demonstrate, one is not mutually exclusive of the other. There are some clear ways to remain at an acceptable level of reliability without sacrificing the efficiency that the environmentally responsible data center requires.",
        mode: "Project based",
      },
      {
        title: "Growing a Green Corporation",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/73/title/Growing%20a%20Green%20Corporation",
        description:
          "Since the Industrial Revolution our society has been driven by an increasing pace of change in business and technology. Every decade or two we have faced a new and disruptive event that challenges business and creates opportunities—the locomotive, the electric light, the automobile, the airplane, the television and the computer, to name a few.",
        mode: "Project based",
      },
      {
        title: "Compressed Air Systems III: Controlled Methods",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/142/title/Compressed%20Air%20Systems%20III:%20Controlled%20Methods",
        description:
          " Identify methods to control air compressor capacity * Compare the efficiency of the various methods on a simple chart * Evaluate the various control options and select methods to meet your system air demand efficiently. Compressed air is an extremely expensive utility. Therefore, efficient control methods can have a big impact on the energy costs of the system. The purpose of this course is to identify the various methods to control air compressor capacity, including methods that control the flow of air into the compressor and ways of controlling the loading of the compressor itself.",
        mode: "Project based",
      },
      {
        title: "Guidance for Calculation of Efficiency in the Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/650/title/Guidance%20for%20Calculation%20of%20Efficiency%20in%20the%20Data%20Center",
        description:
          "Before data center infrastructure efficiency can be benchmarked using PUE or other metrics, there must be agreement on exactly what power consumptions constitute IT loads, what consumptions constitute physical infrastructure, and what loads should not be counted. Unfortunately, commonly published efficiency data is not computed using a standard methodology, and the same data center will have different efficiency ratings when different methodologies are applied. This course explains why confusion exists and describes a standardized method for classifying data center loads for efficiency calculations.",
        mode: "Project based",
      },
      {
        title: "Guidelines for Building a Small to Medium Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/92/title/Guidelines%20for%20Building%20a%20Small%20to%20Medium%20Data%20Center",
        description:
          "As the design and deployment of data center physical infrastructure moves away from art and more toward science, the benefits of a standardized and predictable process are becoming not only compelling, but necessary to maximize availability and reliability as well as reduce total cost of ownership in today’s data centers. The purpose of this course is to present an overview of a standardized, step-by-step process methodology for designing and building small to medium sized data center.",
        mode: "Project based",
      },
      {
        title: "Compressed Air Systems IV: Supply Side Components",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/143/title/Compressed%20Air%20Systems%20IV:%20Supply%20Side%20Components",
        description:
          "Compressed air system components can usually identified by major function that they provide whether the function is related to compression, conditioning, filtration, distribution, and some nature of end use. Most systems have a supply-side and a demand-side. This course will explore the supply-side, which is normally where ambient air is processed into a pressurized, dry, clean form that can be used for many useful tasks.",
        mode: "Project based",
      },
      {
        title: " High Density Planning for Integrating Blade Servers into Existing Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/93/title/High%20Density%20Planning%20for%20Integrating%20Blade%20Servers%20into%20Existing%20Data%20Centers",
        description:
          " Are you planning to incorporate Blade Servers into your data center? Blade deployment requires careful planning as using blades can pose many challenges to your Network Critical Physical Infrastructure (NCPI). Installing blade servers in your existing data center will stress existing power and cooling systems and create a mind-boggling set of challenges and options. This course is designed to ensure successful and predictable blade deployment by helping you to identify and compare your options and select the best power and cooling techniques.",
        mode: "Project based",
      },
      {
        title: "Compressed Air V: Efficient Management and Utilization",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/144/title/Compressed%20Air%20V:%20Efficient%20Management%20and%20Utilization",
        description:
          "In this class, the demand side of the compressed air system is explored. The demand side includes components after the primary receiver, and the pressure / flow controller including the distribution and storage components, and end use equipment. A properly managed demand-side minimizes wasted air and uses compressed air for appropriate applications. This course addresses how to deal with the inefficiencies that can be present in the demand side of the system, thereby leading to energy and cost savings.",
        mode: "Project based",
      },
      {
        title: "Steam Systems III: Distribution, Control & Regulation of Steam",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/209/title/Steam%20Systems%20III:%20Distribution,%20Control%20&%20Regulation%20of%20Steam",
        description:
          " Steam is one of the oldest and most widely used forms of energy in industry. Difficulties in energy management of steam arise from the fact that it is often a totally unmeasured service. The distribution, control and regulation of steam is crucial because inefficiency translates into additional operating costs. The savings potential is enormous: Not only from a fiscal standpoint, but also from an environmental standpoint. This course will review the basics of steam systems and list the benefits associated with measuring steam. We will discuss steam piping design, metering, and steam manifolds. Also addressed are two typical applications of tracing as well as the components involved when controlling and regulating steam.",
        mode: "Project based",
      },
      {
        title: "Steam Systems IV: Condensate Removal—Prevent your energy from going down the drain",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/210/title/Steam%20Systems%20IV:%20Condensate%20Removal%E2%80%94Prevent%20your%20energy%20from%20going%20down%20the%20drain",
        description:
          " In the previous courses, we saw that steam condenses in the distribution pipes, and has to be removed to avoid water hammer. The financial value of condensate has been neglected in the past, but has a distinct monetary value which must be recaptured. This course will explore why it is far too valuable to merely discard condensate to the ground or a drain. It will help you to calculate the value of the condensate, and explain the different types of steam traps available for separating steam from condensate.",
        mode: "Project based",
      },
      {
        title: "Steam Systems V: Condensate Removal - Maximizing Your Recovery",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/211/title/Steam%20Systems%20V:%20Condensate%20Removal%20-%20Maximizing%20Your%20Recovery",
        description:
          "In Steam Systems part one, we discussed the overall advantages and basics of steam as source of energy. In part two, we looked at the impact of boiler sizing, pressure and velocity on overall system efficiency. During part three, we reviewed the distribution, control and regulation of steam, and in part four we learned how to prevent energy from going down the drain by implementing proper condensate removal strategies. Now we will further explore condensate removal and show you how to maximize your recovery with considerations for choosing traps, proper testing and sizing of traps and options for how to lift the condensate. To ensure your steam system enjoys a long and full life cycle, we’ll summarize a preventative maintenance program. The downfalls of by-passes, and impact of waterlogging will also be discussed.",
        mode: "Project based",
      },
      {
        title: "High Efficiency Economizer-based Cooling Modules for Large Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/94/title/High%20Efficiency%20Economizer-based%20Cooling%20Modules%20for%20Large%20Data%20Centers",
        description:
          "When a cooling plant operates in economizer mode, high energy-consuming mechanical systems can be turned off. A standardized, modular cooling plant designed to operate primarily in economizer mode not only reduces costs but also improves predictability and flexibility. This paper shows a new approach to data center cooling that uses approximately half the energy of traditional methods and at the same time provides greater scalability, availability, and ease of maintenance.",
        mode: "Project based",
      },
      {
        title: " Steam Systems VI: Recovering Energy from Flash Steam",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/212/title/Steam%20Systems%20VI:%20Recovering%20Energy%20from%20Flash%20Steam",
        description:
          "In this series of courses on steam systems we have reviewed a number of key success factors for efficient operation of steam systems, including correct boiler sizing, selection of working pressure and pipe sizing, metering of steam, and removal of condensate. Flash steam is another essential topic for the efficient management of steam. This course will discuss how flash steam recovery contributes to energy efficiency, how to identify how much flash steam is available and discuss ways to recover that steam.",
        mode: "Project based",
      },
      {
        title: "Compressed Air VI: Seven Steps to Better Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/145/title/Compressed%20Air%20VI:%20Seven%20Steps%20to%20Better%20Efficiency",
        description:
          "Compressed air is commonly referred to as the fourth utility. Utilities play a major role in the modern world – without them, today’s technologically advanced society could not function. While compressed air systems are widespread, they can also be extremely inefficient. Compressed air systems typically consume more energy and cost more to operate than anything else in industrial environments. All of that can change by utilizing an action plan that will help reduce inefficiencies, thereby saving valuable assets. In this class, we will explore a seven step action plan designed to improve the efficiency of any compressed air system.",
        mode: "Project based",
      },
      {
        title: "Controlling the Impact of Power Factor and Harmonics on Energy Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/53/title/Controlling%20the%20Impact%20of%20Power%20Factor%20and%20Harmonics%20on%20Energy%20Efficiency",
        description:
          "A Power Factor Correction (PFC) and harmonics mitigation plan will always improve the energy efficiency of electrical installations. Much like bumps and holes in a road impede the progress of an automobile, distorted voltage in AC distribution systems negatively impacts operations and drives up expenses. This paper analyzes PFC and harmonics problem areas and offers practical approaches for improvements.",
        mode: "Project based",
      },
      {
        title: "Cooling Strategies for IT Wiring Closets and Small Rooms",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/62/title/Cooling%20Strategies%20for%20IT%20Wiring%20Closets%20and%20Small%20Rooms",
        description:
          "The focus for this course will be on understanding the importance of cooling for wiring closets and reviewing options for cooling a wiring closet. Cooling for IT wiring closets is rarely planned and typically only implemented after failures or overheating occur. Historically, no clear standard exists for specifying sufficient cooling to achieve predictable behavior within wiring closets. An appropriate specification for cooling IT wiring closets should assure compatibility with anticipated loads, provide unambiguous instruction for design and installation of cooling equipment, prevent over sizing, maximize electrical efficiency, and be flexible enough to work in various shapes and types of closets.",
        mode: "Project based",
      },
      {
        title: "How DCIM Software Improves Planning and Cuts Operational Costs",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/95/title/How%20DCIM%20Software%20Improves%20Planning%20and%20Cuts%20Operational%20Costs",
        description:
          "Business executives are challenging their IT staffs to convert data centers from cost centers into producers of business value.  Data centers can make a significant impact to the bottom line by enabling the business to respond more quickly to market demands.  This course demonstrates, through a series of examples, how data center infrastructure management (DCIM) software tools can simplify operational processes, cut costs, and speed up information delivery.",
        mode: "Project based",
      },
      {
        title: " How to use Schneider Electric University Site",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/480/title/How%20to%20use%20Schneider%20Electric%20University%20Site",
        description:
          "There is no description for this course",
        mode: "Project based",
      },
      {
        title: "HVAC and Characteristics of Air-SI Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/175/title/HVAC%20and%20Characteristics%20of%20Air-SI%20Version",
        description:
          "Define sensible and latent heat, and enthalpy * Calculate the heat flow in an HVAC system given input parameters * Define wet-bulb and dry-bulb temperature, and dew point, and understand their relevance to management of humidity in HVAC systems. HVAC & Characteristics of Air introduces some basic HVAC terms that are useful when looking at the efficiency of an HVAC system. This course discusses how an HVAC system manipulates the properties of the air in the conditioned space to regulate a desirable rate of heat transfer. Calculations for Sensible Heat Transfer and Total Heat Transfer are also explained.",
        mode: "Project based",
      },
      {
        title: "HVAC and Characteristics of Air-US Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/176/title/HVAC%20and%20Characteristics%20of%20Air-US%20Version",
        description:
          "This course discusses how an HVAC system manipulates the properties of the air in the conditioned space to regulate a desirable rate of heat transfer. Calculations for Sensible Heat Transfer and Total Heat Transfer are also explained.",
        mode: "Project based",
      },
      {
        title: " HVAC and Psychrometric Charts-SI Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/177/title/HVAC%20and%20Psychrometric%20Charts-SI%20Version",
        description:
          "Psychrometrics is the study of the thermodynamic properties of moist air and its effect on materials and human comfort. Psychrometrics applies the well understood relationships between humidity and temperature in the air to practical problems. HVAC system designers use these factors to model the HVAC requirements depending on the location of the building and the needs of the occupants or processes within it. This course explores how those factors are used to ensure an effective HVAC system",
        mode: "Project based",
      },
      {
        title: "Data Center Back-up Batteries: Options and Lifecycle Costs",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/63/title/Data%20Center%20Back-up%20Batteries:%20Options%20and%20Lifecycle%20Costs",
        description:
          " Define Flooded (also known as vented or wet cell) batteries, Valve Regulated Lead Acid (VRLA), and Modular Battery Cartridge (MBC) systems * Explain the differences between Flooded, Valve Regulated Lead Acid (VRLA), and Modular Battery Cartridge (MBC) systems * Compare the installation, life expectancy, and failure modes of each battery type * Differentiate the costs associated with the purchase, maintenance and infrastructure adaptability of UPS Battery Technology",
        mode: "Project based",
      },
      {
        title: "HVAC and Psychrometric Charts-US Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/178/title/HVAC%20and%20Psychrometric%20Charts-US%20Version",
        description:
          "Psychrometrics is the study of the thermodynamic properties of moist air and its effect on materials and human comfort. Psychrometrics applies the well understood relationships between humidity and temperature in the air to practical problems. HVAC system designers use these factors to model the HVAC requirements depending on the location of the building and the needs of the occupants or processes within it. This course explores how those factors are used to ensure an effective HVAC system, while discussing how Psychrometric Charts are utilized to drive HVAC sizing and evaluation.",
        mode: "Project based",
      },
      {
        title: "Data Center Efficiency: Reducing Electrical Power Consumption",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/64/title/Data%20Center%20Efficiency:%20Reducing%20Electrical%20Power%20Consumption",
        description:
          "Conventional models for estimating electrical efficiency of data centers are grossly inaccurate for real-world installations. Electricity usage costs have become an increasing fraction of the total cost of ownership (TCO) for data centers. It is possible to dramatically reduce the electrical consumption of typical data centers through appropriate design of the physical infrastructure and IT architecture. This course explains how to quantify the electricity savings and provides examples of methods that can greatly reduce electrical power consumption.",
        mode: "Project based",
      },
      {
        title: "Data Center Planning: Standardized Process",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/65/title/Data%20Center%20Planning:%20Standardized%20Process",
        description:
          "Define what constitutes a project within the context of the data center lifecycle * Discuss the importance of standardizing a process * Describe the basic structure of the standardized project process * Identify the steps involved a standardized process * Review project management techniques * Adopt a method for tracking responsibilities * Deliberate the benefits of leveraging services to execute process steps, and you will be able to * Explain ways to obtain additional learning opportunities in data center design",
        mode: "Project based",
      },
      {
        title: "HVAC Efficiency and Equipment Optimization-SI Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/221/title/HVAC%20Efficiency%20and%20Equipment%20Optimization-SI%20Version",
        description:
          "HVAC is often a major component of the energy costs in a building. The efficiency of HVAC is dependent on both the efficiency of the equipment and the efficiency of the system – how it is designed and operated. Choosing the lowest cost system will often be a mistake when lifecycle costs are taken into account. However even high-efficiency equipment can underperform if not operated optimally. This course looks at a variety of key success factors to optimize the efficiency of an HVAC system. It also explains how the efficiency of HVAC units is measured, and how the overall capacity of a system can be expressed.",
        mode: "Project based",
      },
      {
        title: "HVAC Efficiency and Equipment Optimization-US Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/219/title/HVAC%20Efficiency%20and%20Equipment%20Optimization-US%20Version",
        description:
          "HVAC is often a major component of the energy costs in a building. The efficiency of HVAC is dependent on both the efficiency of the equipment and the efficiency of the system – how it is designed and operated. Choosing the lowest cost system will often be a mistake when lifecycle costs are taken into account. However even high-efficiency equipment can underperform if not operated optimally. This course looks at a variety of key success factors to optimize the efficiency of an HVAC system. It also explains how the efficiency of HVAC units is measured, and how the overall capacity of a system can be expressed.",
        mode: "Project based",
      },
      {
        title: "HVAC Geothermal Heat Pumps",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/179/title/HVAC%20Geothermal%20Heat%20Pumps",
        description:
          "Geothermal heat pumps are fast becoming the leading technology for heating and cooling in energy efficient buildings. When using a geothermal heat pump for heating efficiencies are 50% to 70% higher than other heating systems and cooling efficiencies are 20% to 40% higher than conventional air conditioners. Better yet, these savings do not require complicated or difficult to operate systems. Geothermal heat pumps rely on off-the-shelf components that are familiar in conventional air conditioning. The underground components typically have a 50 year warranty. (Source: International Ground Source Heat Pump Association) In this course, we will explore all aspects of the geothermal heat pump, including the various installation types, and discuss the benefits and drawbacks of each type.",
        mode: "Project based",
      },
      {
        title: " Data Center Project Management Model",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/66/title/Data%20Center%20Project%20Management%20Model",
        description:
          " In data center design/build projects, flaws In project Management and coordination are a common but unnecessary cause of delays, expense, and frustration. The solution is for project Management activities to be structured and standardized like interlocking Building blocks, so all parties can communicate with a common language, avoid responsibility gaps and duplication of effort, and achieve an efficient process with a predictable outcome. this course presents a framework for project Management roles and relationships In data center projects.",
        mode: "Project based",
      },
      {
        title: " Data Center Project Planning: Establishing a Floor Plan",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/67/title/Data%20Center%20Project%20Planning:%20Establishing%20a%20Floor%20Plan",
        description:
          "Define a data center floor plan * Discuss floor planning concepts; including structural room and equipment layouts * Describe the effects of the floor plan on data center performance * Review basic principles of both equipment layouts and structural room layouts * Identify the floor planning sequence * Avoid common errors in equipment layout. A floor plan strongly affects The power density capability and electrical efficiency of a data center.",
        mode: "Project based",
      },
      {
        title: "Data Center Projects: Commissioning",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/68/title/Data%20Center%20Projects:%20Commissioning",
        description:
          "This course describes the commissioning process for data center physical infrastructure equipment and reviews commissioning critical success factors. The commissioning process inputs and outputs are also placed in context with other key data center project process phases and steps. Discuss integrated commissioning of all data center physical infrastructure components Identify standard inputs and desired outputs of the commissioning step in a data center project Evaluate the commissioning process flow and Examine critical success factors",
        mode: "Project based",
      },
      {
        title: "Data Center Projects: Forecasting and Accommodating Data Center Growth",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/69/title/Data%20Center%20Projects:%20Forecasting%20and%20Accommodating%20Data%20Center%20Growth",
        description:
          "Long term data center or network room capacity planning may seem impossible in the face of evolving IT technology and business requirements. Nevertheless, data center facilities have a lifetime that may span many generations of IT equipment, so planning – or lack of planning – can have a large impact on the effectiveness of investments. Many unnecessary costs can be avoided with simple planning strategies, and even uncertainty itself can be incorporated into a plan. This course shows a simple and effective way to develop a capacity plan for a data center or network room.",
        mode: "Project based",
      },
      {
        title: "Data Center Site Selection and Planning",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/70/title/Data%20Center%20Site%20Selection%20and%20Planning",
        description:
          "On a hill or in the valley? On the perimeter or in the center of the building? Distance to utilities and emergency services? One of the first steps in building a new Data Center, or moving an existing Data Center, is finding the right location. This course explores different considerations that should be explored in Site Selection & Planning related to NCPI, including: geography, building types, power, emergency services, shared facility issues, and economic challenges.",
        mode: "Project based",
      },
      {
        title: "Data Center System Planning",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/74/title/Data%20Center%20System%20Planning",
        description:
          "System planning is the Achilles' heel of a data center physical infrastructure project. Planning mistakes can magnify and propagate through later deployment phases, resulting in delays, cost overruns, wasted time, and ultimately a compromised system. Much of the trouble can be eliminated by viewing system planning as a data flow model, with an orderly sequence of tasks that progressively transform and refine information from initial concept to final design.",
        mode: "Project based",
      },
      {
        title: "HVAC Source Equipment for Cooling I",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/180/title/HVAC%20Source%20Equipment%20for%20Cooling%20I",
        description:
          "This course will introduce you to the five refrigeration processes; Vapor-compression, Air cycle Absorption, Thermoelectric, Evaporative cooling. You will learn about the operation of the vapor compression cycle including the four basic components. Finally, you will learn about the impact of energy consumption when adjusting a thermal lift.",
        mode: "Project based",
      },
      {
        title: "HVAC Source Equipment for Cooling II",
        link: "HVAC Source Equipment for .. | Course catalog | My Courses | Schneider Electric University (efrontlearning.com)",
        description:
          "As a continuation of HVAC Source Equipment for Cooling II, this course will explain the use of aircycle and thermoelectric systems as well as the operation of the absorption refrigerator and evaporative cooling. This course will also provide an overview of various types of heat exchange equipment.",
        mode: "Project based",
      },
      {
        title: "HVAC Systems I: Introduction to HVAC Systems",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/182/title/HVAC%20Systems%20I:%20Introduction%20to%20HVAC%20Systems",
        description:
          "Heating, ventilation and air conditioning systems are critical in maintaining a comfortable and productive environment. The first course in a series of three, this course will review the processes in HVAC and examine a simple type of an all air-system.",
        mode: "Project based",
      },
      {
        title: "HVAC Systems II: All-Air Systems and Temperature Control",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/183/title/HVAC%20Systems%20II:%20All-Air%20Systems%20and%20Temperature%20Control",
        description:
          "Explain the impact of constant volume, variable air volume (VAV), and reheat on the energy efficiency of all-air systems. * Describe methods for implementing zones in single-duct systems. * Explain the purpose of independent perimeter systems. * Describe an economizer cycle and its benefits. * Describe a simple dual-duct all-air system and its impact on energy efficiency. * Describe a simple multizone all-air system and its impact on energy efficiency.",
        mode: "Project based",
      },
      {
        title: "Determining Data Center User Requirements",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/218/title/Determining%20Data%20Center%20User%20Requirements",
        description:
          "Based upon a hypothetical case study which illustrates best practices from multiple data center design/build projects; this course will focus on the physical infrastructure aspects of the data center—that is the foundational cooling, power, racks and security layers that support the IT systems. The purpose of this course is to analyze the process of gathering data center physical infrastructure user requirements.",
        mode: "Project based",
      },
      {
        title: "Digital Grid Unleashed: A Value Chain Facing Disruption",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/778/title/Digital%20Grid%20Unleashed:%20A%20Value%20Chain%20Facing%20Disruption",
        description:
          "By the year 2040, annual global electricity consumption will be 70% higher than in 2015, according to International Energy Association (IEA) estimates. This staggering increase has left electric utilities around the globe seeking answers to some very difficult power questions. How can almost twice as much electricity be consumed while still reducing fossil fuel emissions? And how must today’s power distribution systems evolve to meet this growing demand? This is the second in a series of courses which sets out to offer recommendations for addressing the electrical distribution needs of a growing worldwide population while simultaneously tackling today’s priority of decarbonizing global energy markets.",
        mode: "Project based",
      },
      {
        title: "HVAC Systems III: Air-and-Water and All-Water Systems",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/184/title/HVAC%20Systems%20III:%20Air-and-Water%20and%20All-Water%20Systems",
        description:
          "Air-and-water systems are used primarily for perimeter building spaces with high sensible loads. All-water systems use water as the medium for providing heating and cooling throughout a building. The third course in a series of three, this course will explain the functions of air-and-water systems as well as an all-water system.",
        mode: "Project based",
      },
      {
        title: "Digital Grid Unleashed: An Introduction",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/751/title/Digital%20Grid%20Unleashed:%20An%20Introduction",
        description:
          "By the year 2040, annual global electricity consumption will be 70% higher than in 2015, according to International Energy Association (IEA) estimates. This staggering increase has left electric utilities around the globe seeking answers to some very difficult power questions. How can almost twice as much electricity be consumed while still reducing fossil fuel emissions? And how must today’s power distribution systems evolve to meet this growing demand? This is the first in a series of courses which sets out to offer recommendations for addressing the electrical distribution needs of a growing worldwide population while simultaneously tackling today’s priority of decarbonizing global energy markets.",
        mode: "Project based",
      },
      {
        title: " HVAC Thermodynamic States",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/185/title/HVAC%20Thermodynamic%20States",
        description:
          "All refrigeration systems involve the movement or transport of heat from a cold region to a warm region. The subject of thermodynamics describes how these heat transports may occur. Thermodynamics is a branch of physical science that deals with the relations between heat and other forms of energy (such as mechanical, electrical, or chemical energy), and, by extension, of the relationships and interconvertibility of all forms of energy. “Thermo” means heat, and “dynamic” refers to energy and change. In cooling applications, we are interested in managing heat, energy, and change, and so a knowledge of basic thermodynamics helps us to grasp the processes that are taking place, for example, in an air-conditioner.",
        mode: "Project based",
      },
      {
        title: " Identifying Opportunities to Reduce Consumption of Energy Across Mining and Processing Plants",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/110/title/Identifying%20Opportunities%20to%20Reduce%20Consumption%20of%20Energy%20Across%20Mining%20and%20Processing%20Plants",
        description:
          "In addition to meeting Government Policy on Energy Efficiency Opportunities (EEOs), mining and mineral processing companies are increasing energy efficiency to reduce costs in the current financial conditions. One of the major issues with EEOs is the lack of data available on energy use, and more importantly the energy use linked to production data, that identify energy reduction opportunities.",
        mode: "Project based",
      },
      {
        title: "Distributed Generation",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/147/title/Distributed%20Generation",
        description:
          "Due recent electricity market liberalization and on-going concerns regarding the cost of electricity as well as efforts towards environmentalism; distributed generation is experiencing a renewed interest throughout the world. Distributed generation, is generally defined as small-scale electricity generation and is used to provide an alternative to or an enhancement of the traditional electric power system. The purpose of this course is to discuss the various small-scale generation technologies that exist today and then move on with a discussion of the major benefits and issues of distributed generation.",
        mode: "Project based",
      },
      {
        title: "Economizer Modes of Data Center Cooling Systems",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/77/title/Economizer%20Modes%20of%20Data%20Center%20Cooling%20Systems",
        description:
          " In certain climates, some cooling systems can save over 70% in annual cooling energy costs by operating in economizer mode, corresponding to over 15% reduction in annualized PUE. However, there are at least 17 different types of economizer modes with imprecise industry definitions making it difficult to compare, select, or specify them. This course provides terminology and definitions for the various types of economizer modes and compares their performance against key data center attributes.",
        mode: "Project based",
      },
      {
        title: "Implementing Hot and Cold Air Containment in Existing Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/580/title/Implementing%20Hot%20and%20Cold%20Air%20Containment%20in%20Existing%20Data%20Centers",
        description:
          "Containment solutions can eliminate hot spots and provide energy savings over traditional uncontained data center designs. The best containment solution for an existing facility will depend on the constraints of the facility. While ducted hot aisle containment is preferred for highest efficiency, cold aisle containment tends to be easier and more cost effective for facilities with existing raised floor air distribution. This course investigates the constraints, reviews all available containment methods, and provides recommendations for determining the best containment approach.",
        mode: "Project based",
      },
      {
        title: "Increasing Data Center Efficiency Through High Density Power Distribution",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/96/title/Increasing%20Data%20Center%20Efficiency%20Through%20High%20Density%20Power%20Distribution",
        description:
          "Market forces dictate changes to existing processes and existing systems. In the realm of data center management, the pressure is on to streamline operations through enhanced efficiency and to cut capital costs. An analysis of traditional data centers in North America reveals an existing entitlement in the area of power distribution. Upon inspection, the existing 120/208 Volt distribution system is found to be somewhat lacking from a cost and efficiency perspective.",
        mode: "Project based",
      },
      {
        title: "Electrical Concepts",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/152/title/Electrical%20Concepts",
        description:
          "This course explores the fundamentals of energy units and electricity. With energy demand rising and greenhouse gas emissions in sharp focus around the world, the time has come for everyone to take action to economize on energy use by the intelligent application of technology to bring about energy efficiency. Understanding these units and concepts is the foundation to managing and controlling energy – and the key to reducing both consumption and emissions.",
        mode: "Project based",
      },
      {
        title: "Emergency Power Generators For Healthcare Facilities",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/626/title/Emergency%20Power%20Generators%20For%20Healthcare%20Facilities",
        description:
          "Hospitals require extraordinary reliability from their power systems. Life-support systems, as well as critical ancillary infrastructure systems such as HVAC, communications, records management, and security ideally should remain online during a power disruption. Within the healthcare market, hospitals often are called upon to provide emergency services during disaster situations. Meeting these demands requires power systems that are designed to support highly critical operations for extended durations under often difficult circumstances. This course discusses the importance of reliable emergency generators in health care facilities and describes the various types of generators used in the healthcare environment and their application. Discuss importance of reliable emergency generators in health care facilities Describe the various types of generators used in the healthcare environment and their application Explain the purpose of a Hazard Vulnerability Analysis (HVA)",
        mode: "Project based",
      },
      {
        title: "Emergency Power Off: Don't Get Caught in the Dark",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/78/title/Emergency%20Power%20Off:%20Don't%20Get%20Caught%20in%20the%20Dark",
        description:
          "Emergency power Off (EPO) is a safety mechanism intended to power down a single piece of electrical equipment or an entire room of equipment In an Emergency, In order to protect personnel and facilities. some of The situations requiring EPO activation include fire, flood, equipment overheating, and personnel electrocution. In an Emergency, a single means to rapidly disconnect power to an entire room might be The preferred approach. In The case of complex Information Technology (It) environments various options need to be closely analyzed. this course will provide a comprehensive review of The purpose, functionality, requirements and standards, and Best practices for The utilization EPO switches for protecting data centers and small It equipment rooms containing UPS systems.",
        mode: "Project based",
      },
      {
        title: "Industrial Insulation I: Materials and Systems",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/186/title/Industrial%20Insulation%20I:%20Materials%20and%20Systems",
        description:
          "Most engineers, architects, and end users are familiar with the use of insulation to reduce heating and cooling loads and control noise in building envelopes. Insulations used for pipes, ducts, tanks, and equipment are not as familiar. The installed cost of these materials is usually a small part of the total cost of a project. As a result, mechanical insulation is often overlooked, undervalued, or improperly specified and maintained in commercial and industrial construction projects. The purpose of this course is to review the different types of industrial insulation applications for a given application.",
        mode: "Project based",
      },
      {
        title: "Enacting an Energy Management Lifecycle Approach in Federal Facilities",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/58/title/Enacting%20an%20Energy%20Management%20Lifecycle%20Approach%20in%20Federal%20Facilities",
        description:
          "Through legislation and executive orders that have imposed stringent energy-efficiency mandates, Congress and the president have called on federal agencies to reduce the environmental impact of these buildings, curtail energy costs and help lead the nation towards energy independence and security. Government leaders recognize that a more efficient facility contributes to the sufficiency, surety and sustainability of energy supplies, and therefore, have embraced these mandates and, in many cases, established more aggressive goals. The most effective way to address these challenges and meet mandates is a lifecycle approach to energy management. Leveraging low consumption devices, automation, control and power monitoring solutions can help ensure mandates are met and energy efficiency levels are not just maintained but continuously improved. Such a lifecycle approach can be framed through a comprehensive energy management action plan that provides a detailed roadmap for energy efficiency improvement to manage costs, enhance energy security and reduce environmental impact over the life of the facility’s infrastructure.",
        mode: "Project based",
      },
      {
        title: "Industrial Insulation II: Design Data Calculations",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/187/title/Industrial%20Insulation%20II:%20Design%20Data%20Calculations",
        description:
          "The pipes and installations in industrial plants often carry materials that need to be kept at a certain temperature for an optimal production process. Unless the pipes and installations are properly insulated, the proper temperature may not be maintained. And while placing the actual insulation onto the mechanics—such as a pipe, tank or vessel—is fairly easy; determining what type of insulation to use and how much—is not so easy. The focus of Industrial Insulation II will be on the process of performing calculations in order to determine the requirements/impact of industrial insulation. Please participate in Industrial Insulation I, prior to taking this course.",
        mode: "Project based",
      },
      {
        title: " Energy Audits",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/153/title/Energy%20Audits",
        description:
          "Energy audits are comprehensive evaluations of the actual performance of a facility’s energy—using systems and equipment—compared against the designed performance level or the industry best practice. The purpose of this course is to review the different types of energy audits; the overall auditing process—as well as auditing methodology, in order to successfully prepare and participate in the energy audit process.",
        mode: "Project based",
      },
      {
        title: "Industrial Insulation III: Inspection and Maintenance",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/188/title/Industrial%20Insulation%20III:%20Inspection%20and%20Maintenance",
        description:
          "Insulation systems, like all mechanical systems, require a schedule of regular inspection and maintenance. Despite the well known fact that inspection and maintenance are the responsibility of the owner, the reality is that most insulation systems are frequently ignored. Over time, insulation systems can also become damaged due to a variety of reasons—and if not repaired or replaced—can be rendered useless. The purpose of this course is to discuss the proper process of inspection and maintenance for industrial insulation.",
        mode: "Project based",
      },
      {
        title: "Energy Audits Instrumentation I: Electrical, Lighting, Temperature and Humidity",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/154/title/Energy%20Audits%20Instrumentation%20I:%20Electrical,%20Lighting,%20Temperature%20and%20Humidity",
        description:
          " Energy audits are comprehensive evaluations of the actual performance of a plant’s energy using systems and equipment compared against the designed performance level or the industry best practice. The difference between observed performance and “best practice” is the potential for energy and cost savings. The purpose of this course is to review electrical, lighting, temperature and humidity measurement instruments used in energy audits in order to select and employ the appropriate instrument for your auditing needs.",
        mode: "Project based",
      },
      {
        title: " Inter System Ground Noise Impact on Data Center Availability",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/97/title/Inter%20System%20Ground%20Noise%20Impact%20on%20Data%20Center%20Availability",
        description:
          "The most successful, prosperous companies implement policies and follow procedures that enable them to remain consistently active and available 24 hours per day, seven days per week. They understand that they need to be able to react immediately to the needs of the consumer, and that the cost of just one major episode of downtime can disable and undermine the strength of a business. According to the National Archives and Records Administration in Washington, D.C., 93% of businesses that have lost availability in their data center for 10 days or more have filed for bankruptcy within one year. The significance of maintaining a consistently available network circulates throughout a business, and drives down to the data center itself.",
        mode: "Project based",
      },
      {
        title: " Energy Audits Instrumentation II",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/155/title/Energy%20Audits%20Instrumentation%20II",
        description:
          "Energy audits are comprehensive evaluations of the actual performance of a plant’s energy using systems and equipment compared against the designed performance level or the industry best practice. The difference between observed performance and “best practice” is the potential for energy and cost savings. The purpose of this course is to the measurement instruments used in energy audits in order to select and employ the appropriate instrument for your auditing needs. This is a continuation of Energy Audits Instrumentation I.  (Please take Energy Audits Instrumentation I prior to proceeding with this course.)",
        mode: "Project based",
      },
      {
        title: " Power and Cooling Guidelines for Deploying IT in Colocation Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/593/title/Power%20and%20Cooling%20Guidelines%20for%20Deploying%20IT%20in%20Colocation%20Data%20Centers",
        description:
          "Some prospective colocation data center tenants view power and cooling best practices as constraining. However, an effective acceptable use policy can reduce downtime due to thermal shutdown and human error, reduce stranded capacity, and extend the life of the initial leased space, avoiding the cost of oversized reserved space. This course explains some of the causes of stranded power, cooling, and space capacity in colocation data centers and explains how high-density rack power distribution, air containment, and other practices improve availability and efficiency. Examples of acceptable use policies that address these issues are provided. Identify causes of stranded power, cooling, and space capacity in colocation data centers Explain best practices that can improve availability and efficiency in colocation data centers Describe the attributes of an effective Acceptable Use Policy.",
        mode: "Project based",
      },
      {
        title: "Power and Cooling for the New Digital Hospital",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/107/title/Power%20and%20Cooling%20for%20the%20New%20Digital%20Hospital",
        description:
          "Medical Imaging and Diagnostic Equipment (MIDE) is increasingly being networked to Picture Archiving and Communications Systems (PACS), Radiology Information Systems (RIS), and Hospital Information Systems (HIS). Information is connected to the hospital intranet as well as the Internet. Failing to implement the necessary Network-Critical Physical Infrastructure (NCPI) can result in unexpected downtime, and safety and compliance issues, which translates into lost revenue and exposure to litigation, negatively affecting the bottom line and reputation of the healthcare provider. This course explains how to plan for NCPI when deploying medical imaging and diagnostic equipment, with an emphasis on power and cooling.",
        mode: "Project based",
      },
      {
        title: "Power and Cooling Facility Modules for Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/106/title/Power%20and%20Cooling%20Facility%20Modules%20for%20Data%20Centers",
        description:
          "When data center stakeholders are faced with the challenge of deploying new data center power and cooling infrastructure (i.e., chillers, pumps, CRACS, CRAHS, UPS, PDUs, switchgear, transformers etc.), is it better for them to convert an existing room within the building (if this is at all an option) or to construct an extension to house additional power and cooling equipment? Or is it more cost effective and technically feasible to source the power and cooling from a series of facility modules? The purpose of this course is to provide data center professionals with the information needed to justify a business case for data center facility power and cooling modules.",
        mode: "Project based",
      },
      {
        title: "Power and Cooling Capacity Management for Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/105/title/Power%20and%20Cooling%20Capacity%20Management%20for%20Data%20Centers",
        description:
          "Identify the four ways to quantify power and cooling supply demand. Define the four types of excess capacity. Determine the correct way to manage capacity. Identify the advantages of monitoring power and cooling for IT devices. Capacity management is an essential part of the efficient planning and operation of data centers. The need for capacity management grows with the density, size, and complexity of the data center. This course describes a specific methodology for efficient and effective capacity management, and details how capacity management can provide critical information about the state of the data center which is not provided by traditional monitoring systems.",
        mode: "Project based",
      },
      {
        title: "Physical Infrastructure Management Basics",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/104/title/Physical%20Infrastructure%20Management%20Basics",
        description:
          "While considerable effort is focused around maintaining and managing the software and hardware aspects of a Data Center, managing the physical infrastructure is often overlooked. This foundational module identifies the physical infrastructure challenges for incident, availability, capacity, and change management. It also explains basic information and strategies concerning: Physical Infrastructure Enterprise Management Systems, Building Management Systems, Element Managers, and an Physical Infrastructure Element Manager.",
        mode: "Project based",
      },
      {
        title: "Physical Infrastructure for VoIP",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/103/title/Physical%20Infrastructure%20for%20VoIP",
        description:
          "VoIP is having a major impact on the way in which Data Centers are designed, built and operated today. This course compares the different elements and challenges of traditional telephone systems and VoIP systems, and explores the emerging NCPI best practices for VoIP installations in Data Centers. It explains basic VoIP system sections (layers), VoIP devices, and installation issues. It also identifies NCPI solutions for Intermediate Distribution Frame (IDF) and Main Distribution Frame (MDF).",
        mode: "Project based",
      },
      {
        title: "Optimizing Cooling Layouts for the Data Center",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/101/title/Optimizing%20Cooling%20Layouts%20for%20the%20Data%20Center",
        description:
          "A challenging predicament for facility managers is striking a balance between the complicated and drastic heat output of IT equipment and preventing that heat from damaging the very equipment that creates it. Further, humidity and temperature levels outside the recommended range can detrimentally alter computer components making them vulnerable to future failures. Although obtaining proper cooling equipment is important, equally important is the distribution and layout of that equipment. This course discusses various types of cooling equipment, and deployment methods for optimal system performance and improved data center efficiency.",
        mode: "Project based",
      },
      {
        title: "Motors: Losses, Loads and Operating Costs-SI Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/201/title/Motors:%20Losses,%20Loads%20and%20Operating%20Costs-SI%20Version",
        description:
          "Electric motors, taken together, make up the single largest end use of electricity in many developed countries. In many developed countries, in industrial applications, electric motors account for roughly 60% of electricity consumption; in the process industries, electric motors can account for more than 70% of electricity use. The cost of running a motor can be as much as ten times to the purchasing cost of a motor. Therefore operation of motors represents a huge potential for energy savings. The purpose of this course is to provide an overview of the energy losses and energy efficiency factors in motors. It will also enable you to make cost calculations that allow different scenarios to be compared leading to sound energy efficient decisions.",
        mode: "Project based",
      },
      {
        title: "Motors: Loads, Losses and Operating Costs-US Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/200/title/Motors:%20Loads,%20Losses%20and%20Operating%20Costs-US%20Version",
        description:
          "Electric motors, taken together, make up the single largest end use of electricity in many developed countries. In many developed countries, in industrial applications, electric motors account for roughly 60% of electricity consumption; in the process industries, electric motors can account for more than 70% of electricity use. The cost of running a motor can be as much as ten times to the purchasing cost of a motor. Therefore operation of motors represents a huge potential for energy savings. The purpose of this course is to provide an overview of the energy losses and energy efficiency factors in motors. It will also enable you to make cost calculations that allow different scenarios to be compared leading to sound energy efficient decisions.",
        mode: "Project based",
      },
      {
        title: "Motors: A Performance Opportunity Roadmap",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/199/title/Motors:%20A%20Performance%20Opportunity%20Roadmap",
        description:
          "Electric motors, taken together, make up the single largest end use of electricity in many developed countries. In many developed countries, in industrial applications, electric motors account for roughly 60% of electricity consumption; in the process industries, electric motors can account for more than 70% of electricity use. The cost of running a motor can be as much as ten times to the purchasing cost of a motor. Therefore operation of motors represents a huge potential for energy savings.",
        mode: "Project based",
      },
      {
        title: " Modular Data Center Architecture II",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/100/title/Modular%20Data%20Center%20Architecture%20II",
        description:
          "In this course, we will present a graphical method for describing a modular architecture. The feasibility of standardizing and industrializing modularity will also be examined. We will show how data center modularity can be effectively applied and specified, along with how each approach should vary with the application.",
        mode: "Project based",
      },
      {
        title: "Modular Data Center Architecture I",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/99/title/Modular%20Data%20Center%20Architecture%20I",
        description:
          "There is a growing consensus that conventional legacy data center design will be superseded by modular scalable data center designs. Reduced total cost of ownership, increased flexibility, reduced deployment time and improved efficiency are all claimed benefits of modular scalable designs. Yet the term “modular”, when and where modularity is appropriate, and how to specify modularity are all poorly defined. This course creates a framework for modular data center architecture and describes the various ways that modularity can be implemented for data center power, cooling, and space infrastructure.",
        mode: "Project based",
      },
      {
        title: "Medical Gas and Vacuum Systems Design and Installation",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/745/title/Medical%20Gas%20and%20Vacuum%20Systems%20Design%20and%20Installation",
        description:
          "Health care is in a constant state of change, which forces healthcare facility operators to keep up with new technology to provide innovation approaches to the design of medical gas systems. In designing medical gas and vacuum systems, the goal is to provide a safe and sufficient flow at required pressures to the medical gas outlet or inlet terminals served. In this course, we will discuss the design of medical gas and vacuum systems and identify various installation requirements. We will also address the importance of inspecting and testing the systems, as well as establishing a plan for managing and maintaining medical gas and vacuum systems.",
        mode: "Project based",
      },
      {
        title: "Measuring and Benchmarking Energy Performance",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/198/title/Measuring%20and%20Benchmarking%20Energy%20Performance",
        description:
          "Measurement and benchmarking appears in two key stages in an efficiency improvement cycle. Before starting an improvement program, measurement and benchmarking helps determine where and to what degree energy is wasted. It also provides a baseline for future comparison. Measurement during the monitoring stage helps identify deviations that need to be corrected, in order to sustain savings. In this course, we’ll discuss energy accounting, and examine some of the concepts and methods involved in energy measurement and benchmarking. We’ll also explore the components of a utility bill, and provide benchmarking examples to verify charges.",
        mode: "Project based",
      },
      {
        title: "Measurement and Verification Including IPMVP",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/197/title/Measurement%20and%20Verification%20Including%20IPMVP",
        description:
          "Measurement and verification can be defined as the process of measurement to determine the actual savings created by an energy management program or energy conservation improvements. The purpose of this course is to explore the concept of measurement and verification, including the role of guidelines such as IPMVP.",
        mode: "Project based",
      },
      {
        title: "Managing The Physical Health Care Environment",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/653/title/Managing%20The%20Physical%20Health%20Care%20Environment",
        description:
          "The health care administrator is the person that hospital staff members look to for guidance when it comes to the business side of health care. The health care administrator manages short-term health care goals, keeping in mind long-term strategy; manages patient care through efficient documentation, communication and team building; promotes methods of maximizing value, looks for a competitive advantage and develops policies regarding record keeping, filing procedures and staff organization. This course discusses the role of an effective healthcare leader, addresses the importance of a highly reliable health care environment, and addresses the significance of driving efficient operation in the health care facility. Describe the roles and responsibilities in creating an optimum health care physical environment Describe best practices for achieving high reliability in health care Explain the role of codes and standards in managing the health care physical environment",
        mode: "Project based",
      },
      {
        title: "Making Permanent Savings through Active Energy Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/113/title/Making%20Permanent%20Savings%20through%20Active%20Energy%20Efficiency",
        description:
          " Energy is consumed in a broad variety of ways across all sectors of life, from the provision of vital resources such as water, oil and gas, to the lighting and heating in homes and the power required by industry and commerce. Much of that energy is consumed usefully, but huge amounts are wasted every day. It is the waste or inefficient use of energy that must be addressed. This white paper explores every aspect of the use of electricity and its impact on the environment. With greenhouse gas emissions in sharp focus around the world, the time has come for everyone to take action to economise on energy use by the intelligent application of technology to bring about Active Energy Efficiency.",
        mode: "Project based",
      },
      {
        title: "Maintenance Best Practices for Energy Efficient Facilities",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/196/title/Maintenance%20Best%20Practices%20for%20Energy%20Efficient%20Facilities",
        description:
          "Able to list organizational problems that lead to inadequate maintenance and characteristics of an effective maintenance system. * Able to use tables and charts to make calculations of the energy costs of various types of maintenance failure (eg in compressed air, steam, etc) * Able to list examples of energy efficiency costs caused by insufficient maintenance. * Able to identify simple ways that infrared and vibration analysis can contribute to identifying maintenance needs. Good maintenance saves energy costs! Properly maintained facilities and equipment produce quality products, reduce downtime and have lower energy costs. This adds up to real money! This course will address the importance of maintenance in facilities, discuss the savings proper maintenance can contribute, and identify techniques that can lead to the energy efficient maintenance of facilities.",
        mode: "Project based",
      },
      {
        title: "Waste Heat Recovery",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/216/title/Waste%20Heat%20Recovery",
        description:
          "List the factors that influence the feasibility of waste heat recovery * Identify opportunities to recover waste heat, the temperature ranges of heat recovered and the possible uses * Perform calculations of waste heat recovery * Categorize and explain the general operation of the main equipment used to recover waste heat. Waste heat is present in almost all industries and processes. Opportunities exist to put this waste heat to use economically in order to reduce the energy consumption in the plant. The purpose of this course is to identify opportunities to recover waste heat, and the equipment used to recover waste heat. The process for calculating waste heat recovery will also be addressed, along with the factors that influence the feasibility of waste heat recovery.",
        mode: "Project based",
      },
      {
        title: "Virtualization: The Engine Behind Cloud Computing",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/124/title/Virtualization:%20The%20Engine%20Behind%20Cloud%20Computing",
        description:
          "IT virtualization, the engine behind cloud computing, can have significant consequences on the data center physical infrastructure (DCPI).  Higher power densities that often result can challenge the cooling capabilities of an existing system.  Reduced overall energy consumption that typically results from physical server consolidation may actually worsen the data center’s power usage effectiveness (PUE).  Dynamic loads that vary in time and location may heighten the risk of downtime if rack-level power and cooling health are not understood and considered.  Finally, the fault-tolerant nature of a highly virtualized environment could raise questions about the level of redundancy required in the physical infrastructure.  This course looks at these particular effects of virtualization as well and  possible solutions or methods for dealing with them are offered.",
        mode: "Project based",
      },
      {
        title: "Understanding Preventive Maintenance for Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/599/title/Understanding%20Preventive%20Maintenance%20for%20Data%20Centers",
        description:
          "In the broadening data center cost-saving and energy efficiency discussion, data center physical infrastructure preventive maintenance doesn’t get enough attention as an important driver of TCO and downtime prevention. Preventative maintenance methods for equipment adjustment and mid-lifecycle parts replacement should be re-examined and aligned with strategies supporting cost control and system availability. Developments in Preventative maintenance-related hardware design, software monitoring, and servicing methods can help IT and facilities managers safeguard uptime, increase efficiency, and reduce cost. Discuss preventive maintenance State expected outcomes resulting from a preventive maintenance visit Identify specific areas of data center physical infrastructure that benefit from preventive maintenance Recognize the progression from component-based preventive maintenance to system-based preventive maintenance",
        mode: "Project based",
      },
      {
        title: "Types of Prefabricated Modular Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/602/title/Types%20of%20Prefabricated%20Modular%20Data%20Centers",
        description:
          "Data center systems or subsystems that are preassembled in a factory are often described with terms like prefabricated, containerized, modular, skid-based, pod-based, mobile, portable, self-contained, all-in-one, and more. There are, however, important distinctions between the various types of factory-built building blocks on the market. This course proposes standard terminology for categorizing the types of prefabricated modular data centers, defines and compares their key attributes, and provides a framework for choosing the best approach based on business requirements. Define standard terminology for categorizing the types of prefabricated modular data centers Compare the key attributes of prefabricated modular data centers Describe a framework for choosing the best approach based on business requirements",
        mode: "Project based",
      },
      {
        title: "Types of Electrical Meters in Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/544/title/Types%20of%20Electrical%20Meters%20in%20Data%20Centers",
        description:
          "There are several different types of meters that can be designed into a data center, ranging from high precision power quality meters to embedded meters (like in a UPS or PDU). Each has different core functions and applications. This course provides guidance on the types of meters that might be incorporated into a data center design, explains why they should be used, and discusses the advantages and disadvantages of each. Example data centers are presented to illustrate where the various meters are likely to be deployed.",
        mode: "Project based",
      },
      {
        title: "Three Dimensions of Energy Opportunity that Can Boost Profits and Asset Value",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/115/title/Three%20Dimensions%20of%20Energy%20Opportunity%20that%20Can%20Boost%20Profits%20and%20Asset%20Value",
        description:
          "For many commercial property owners, energy is viewed as a costly and seemingly unmanageable operating expense that has a significant impact on the overall net operating income of a property. This paper describes many of the opportunities that exist to reduce energy billing costs, to share costs and efficiency strategies with tenants, and to measure and maximize efficiency to positively impact profits and increase property values. Simple and effective use of metering technology and intelligent software tools are keys to unlocking simple energy opportunities.",
        mode: "Project based",
      },
      {
        title: "Thermal Energy Storage",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/214/title/Thermal%20Energy%20Storage",
        description:
          "Storing thermal energy can save money in a number of different ways. High-cost peaktime power usage is avoided. Also, with stored cooling capacity, the cooling system doesn’t have to cope with the hottest part of the day in real-time. It may be possible to install a smaller compressor, pumps and pipes. This may help reduce the initial purchase cost and operating and maintenance costs. Some very broad conditions favor thermal energy storage, but it’s not advisable without competent staff to oversee operation. This course offers a description of the various forms thermal energy storage, describes strategies, provides advantages and drawbacks and provides realistic examples and calculations in US Customary and Metric units.",
        mode: "Project based",
      },
      {
        title: "The Internet of Things: Optimizing The Healthcare Field",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/744/title/The%20Internet%20of%20Things:%20Optimizing%20The%20Healthcare%20Field",
        description:
          "As our world becomes more connected, advanced technology is extending beyond patient care and into the hospital infrastructure itself. In particular, the Internet of Things (IoT) is changing the standard of information delivery and decision-making with insight into facility data that can be used to improve operational efficiency, patient satisfaction, and safety for all. This course will explore the trends affecting healthcare IoT adoption, best practices for implementation, benefits, and case studies of hospitals that are leading the charge into the future of modern healthcare",
        mode: "Project based",
      },
      {
        title: "The Future of Medium Voltage Switchgear",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/612/title/The%20Future%20of%20Medium%20Voltage%20Switchgear",
        description:
          "The electricity industry is conservative. Among the reasons for this is the fact that the lifetime of medium voltage and high voltage switchgear is around 30 years. Transmission system operators (TSOs) and distribution network operators (DNOs) need stability. Maintenance and repair of such long-life devices needs to be ensured. And of course, work is easier for service crews if there is no change in technology. However, some drastic evolutions appear about every 20 years… The development of smart grids will result in the inclusion of more intelligence in MV equipment. This course will specifically address medium voltage technologies that exist in the switchgear industry, as well as summarize the evolution of past technologies and outline the future path of the medium voltage sector. Describe the evolution of various switchgear and switchboard technologies • Discuss the evolution of single line diagrams • Explain the developmental path for future switchgear for MV consumer sites and switching substations",
        mode: "Project based",
      },
      {
        title: "The Business Case for Healthcare Retro-Commissioning",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/673/title/The%20Business%20Case%20for%20Healthcare%20Retro-Commissioning",
        description:
          " Retro-commissioning (RCx) is a systematic process that identifies low-cost operational and maintenance improvements in an existing building that has not previously been commissioned. This course will focus specifically on the over-arching need for retro-commissioning in the healthcare field, and discusses how to present the business case for retro-commissioning by illustrating the positive impact that retro-commissioning can have on the energy efficiency of healthcare facilities. List factors that are affecting the healthcare business environment Explain how health care retro-commissioning if properly implemented benefits the strategic mission of the healthcare organization Describe how changing the operational culture of a facility benefits the business side of the organization Develop and present a plan to sell the value of retro-commissioning",
        mode: "Project based",
      },
      {
        title: "Testing Emergency Power In Health Care Facilities",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/627/title/Testing%20Emergency%20Power%20In%20Health%20Care%20Facilities",
        description:
          "The alternate power source for the essential electrical system (EES) in a healthcare facility is often referred to as the emergency power supply, or EPS. The EPS consists of one or more alternate power sources which can supply the healthcare facility with power during an interruption of the main utility-supplied power. Typically, alternate power sources are made up of one or more engine driven generators, sized to carry, at a minimum, the essential electrical system loads. It is essential that these systems are tested periodically to ensure their reliability in the event that the main supply of power is interrupted. This course discusses the importance of testing these systems and explains the various codes and standards that must be adhered to in the world of healthcare. Recognize the importance of testing the emergency power supply systems – especially the generators – in a healthcare facility Identify the codes and standards associated with the testing of the emergency power supply systems in a healthcare facility Describe the advantages of both automated and manual testing",
        mode: "Project based",
      },
      {
        title: "Success Story Series: Wide Bay Water Corporation Australia",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/749/title/Success%20Story%20Series:%20Wide%20Bay%20Water%20Corporation%20Australia",
        description:
          "This module looks at how Wide Bay Water Corporation, in Queensland, Australia, avoided wasted engineering costs at their wastewater plant. Energy consumption at the Wide Bay Water Corporation wastewater treatment plant has been reduced by approximately 12.5% compared to a similarly sized plant. This course describes how WBWC accomplished that goal.",
        mode: "Project based",
      },
      {
        title: "Success Story Series: Vitens, The Netherlands",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/748/title/Success%20Story%20Series:%20Vitens,%20The%20Netherlands",
        description:
          " Vitens, the leading drinking water supplier in the Netherlands, was bogged down by five regions operating under different automation systems. The company installed the EcoStruxure Plant architecture to unify these five systems under a single platform. This digital integration standardized the system’s operations, shortened deployment times, and reduced engineering costs. The digital transformation of Vitens’ automation architecture freed up savings in the project’s commissioning phase. Because fewer staff were needed to install and commission the new equipment, deployment times shrank by 65 percent, while engineering costs dropped by 25 percent.",
        mode: "Project based",
      },
      {
        title: "Success Story Series: Sumner Regional Medical Center Wellington, Kansas, USA",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/747/title/Success%20Story%20Series:%20Sumner%20Regional%20Medical%20Center%20Wellington,%20Kansas,%20USA",
        description:
          "Welcome to Energy University’s Success Story Series! At Sumner Medical Center, hospital decision makers quickly discovered how a performance contract from Schneider Electric could fund a comprehensive facility improvement project — even during a budget crunch. Today we will talk about how Sumner Medical Center carried out a facility improvement project with Schneider Electric’s EcoStruxure™ for Healthcare solution with potential savings of over $1.6 million over a 15-year period",
        mode: "Project based",
      },
      {
        title: "Success Story Series: Schneider Electric Boston One Campus",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/690/title/Success%20Story%20Series:%20Schneider%20Electric%20Boston%20One%20Campus",
        description:
          "Welcome to Energy University’s Success Story Series! Schneider Electric is a French multinational corporation that specializes in energy management, automation solutions, spanning hardware, software, and services. Today, we will look at how Schneider Electric brings microgrid innovation to one of their own commercial buildings at no extra cost. We will focus on Schneider Electric’s Boston One Campus, their North American Research & Development Headquarters, in Andover, Massachusetts USA",
        mode: "Project based",
      },
      {
        title: "Success Story Series: Hilton Garden Inn Dubai Mall of the Emirates",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/775/title/Success%20Story%20Series:%20Hilton%20Garden%20Inn%20%20Dubai%20Mall%20of%20the%20Emirates",
        description:
          "Welcome to Energy University’s Success Story Series! Schneider Electric is a French multinational corporation that specializes in energy management, automation solutions, spanning hardware, software, and services. Today, we will look at how Schneider Electric brings microgrid innovation to one of their own commercial buildings at no extra cost. We will focus on Schneider Electric’s Boston One Campus, their North American Research & Development Headquarters, in Andover, Massachusetts USA.",
        mode: "Project based",
      },
      {
        title: "Success Story Series: Faster Time To Profit Dow Corning",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/693/title/Success%20Story%20Series:%20Faster%20Time%20To%20Profit%20Dow%20Corning",
        description:
          "This module looks at one of Dow Corning’s manufacturing sites in Carrollton, Kentucky, which is used to produce siloxanes (basic silicone materials) which are used extensively by industries such as electronics, personal care, construction and energy. This module investigates how Dow Corning partnered with Schneider Electric to improve their operational efficiency, reliability, safety and profitability!",
        mode: "Project based",
      },
      {
        title: "Success Story Series: F12.net Edmonton, Alberta, Canada",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/746/title/Success%20Story%20Series:%20F12.net%20Edmonton,%20Alberta,%20Canada",
        description:
          "This module looks at how F12.net empowers customer trust by keeping data safe, secure and always available by partnering with Schneider Electric. Schneider Electric Canada delivers powerful solutions including EcoStruxure for Data Centers and a revolutionary Lithium-Ion battery.",
        mode: "Project based",
      },
      {
        title: "Success Story Series: Edwards Air Force Base",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/708/title/Success%20Story%20Series:%20Edwards%20Air%20Force%20Base",
        description:
          "Non",
        mode: "Project based",
      },
      {
        title: "Power Distribution I",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/108/title/Power%20Distribution%20I",
        description:
          "Selecting an appropriate technique for power distribution within the data center is the key to ensuring reliability and uptime. This course will explain and compare the various ways to provide electrical power to data centers and network rooms. Issues addressed include voltage, various types of transformers, service entrance and the different power distribution/configuration models.",
        mode: "Project based",
      },
      {
        title: "Power Distribution II",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/109/title/Power%20Distribution%20II",
        description:
          "Selecting an appropriate technique for power distribution within the data center is the key to ensuring reliability and uptime. This course expands upon the topics explored in Power Distribution Part I. Topics for Part II include: the basic elements involved with power transmission to the data center; determining voltage and power density requirements, as well as differentiating rack powering requirements.",
        mode: "Project based",
      },
      {
        title: " Power Distribution III",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/111/title/Power%20Distribution%20III",
        description:
          "Power distribution is the cornerstone to availability in today’s data center. This course expands upon the topics explored in Power Distribution Part I and Part II. Topics for Part III include: selecting an appropriate power distribution system as well as a distribution selection strategy for high density data centers. Additionally, the ability for the rack power system to adapt to changing requirements is identified and quantified. Please Note: This course is limited to a discussion of North American voltage and connector standards. The appropriate rack power distribution strategy is considerably different for the 230V systems, which predominate in most of the world.",
        mode: "Project based",
      },
      {
        title: " Power Factor and Harmonics",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/202/title/Power%20Factor%20and%20Harmonics",
        description:
          " List examples of power factor and harmonics phenomena, the common causes and the common negative physical and financial impacts * List methods of preventing or mitigating power factor and harmonics problems and describe their suitability for particular situations * Perform power triangle calculations, and size the required power factor correction solution for a given level of correction * List possible locations of mitigation solutions within an electrical network, and identify the pros and cons associated with each location. Low power factor and harmonics are a frustration for electrical installations. They can cause power losses and reduced energy reliability. In the context of increasing concern about energy efficiency and energy management, power factor and harmonics are important issues to consider for the management of electrical installations. This course will explore power factor and harmonics and will explain how power factor correction and harmonic mitigation provide immediate benefit in terms of reduced power losses, reduced electricity bill, and the possibility to use the total system capacity.",
        mode: "Project based",
      },
      {
        title: "Power Over Ethernet's Effect on Wiring Closets",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/112/title/Power%20Over%20Ethernet's%20Effect%20on%20Wiring%20Closets",
        description:
          "Recognize the impact of a Power over Ethernet implementation on power and cooling demand within a wiring closet. Define basic Power over Ethernet terminology. Identify typical applications for Power over Ethernet. Compare a variety of Power over Ethernet deployments. Power-over-Ethernet (PoE) can cut costs by enabling, for The first time, The deployment of a single Ethernet cable for simultaneous access to Both power and data. However, lack of a power and cooling plan to support The PoE implementation can result In unanticipated downtime. this paper illustrates which power and cooling factors to consider when safeguarding a PoE investment.",
        mode: "Project based",
      },
      {
        title: " Lighting I: Lighting Your Way",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/189/title/Lighting%20I:%20Lighting%20Your%20Way",
        description:
          "Lighting is considered a “quick hit” by many building owners and managers looking to save energy and reduce costs. This class is a preliminary introduction to the four principles for efficient lighting, which every energy manager should be aware of. Improving lighting is not just about energy efficient lamps, but also about the right amount of light, the right lamps, controlling lighting, and ensuring systems are commissioned and maintained correctly.",
        mode: "Project based",
      },
      {
        title: "Lighting II: Defining Light",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/190/title/Lighting%20II:%20Defining%20Light",
        description:
          "We all know what light is. Yet most of us would find it difficult to define or describe it. Knowledge of natural and artificial light sources improves our ability to create quality interior environments and control them. In this class, we will learn how to describe and quantify light - terms that are important vocabulary when we interact with lighting professionals as we evaluate and select solutions.",
        mode: "Project based",
      },
      {
        title: "Lighting III: Lamp Families: Incandescent and Low Pressure Discharge",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/191/title/Lighting%20III:%20Lamp%20Families:%20Incandescent%20and%20Low%20Pressure%20Discharge",
        description:
          "Identify the main characteristics of incandescent lamps, including halogen lamps. * Identify the main characteristics of low-pressure discharge lamps, especially fluorescent lamps. * Explain the function of a ballast and the impact of the ballast factor. * Identify the importance of the power factor in lighting systems. At the heart of lighting performance is the lamp or light source. Lamps are the key determinant in the amount, quality, and distribution of light from a luminaire. Additionally, power consumption, maintenance and life cycle are lamp characteristics a facility owner will live with long after the initial purchase is made. In this class, we will learn about the key characteristics of incandescent (including halogen) and low pressure discharge lamps, particularly fluorescent. We'll learn about the advantages and disadvantages, and the appropriate applications of each lamp family. As we look at fluorescent lamps, we'll also examine ballast factor and see how ballasts contribute to energy efficiency. Certain lamps can also contribute to an effect called low power factor. We'll look at this briefly and see how it can impact your energy bill.",
        mode: "Project based",
      },
      {
        title: " Lighting V: Economics",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/193/title/Lighting%20V:%20Economics",
        description:
          "Lighting is frequently a large proportion of the energy consumption in buildings and can be a significant cost in industrial spaces too. Projects to improve the energy efficiency of lighting are among some of the lowest risk, highest payback projects that an energy manager can select. To select and justify those projects, energy managers need to be able to show how the changes will impact the consumption and present the financial benefits. In this class we’ll see a number of ways to make simple evaluations of lighting projects. Before you take this class, you will need a basic understanding of electrical fundamentals such as demand, power and energy. You will also need to understand energy rate structures. Please see our classes on these topics if you need them as pre-requisites.",
        mode: "Project based",
      },
      {
        title: "Lighting VI: Calculating Required Lamps with the Lumen Method-SI",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/194/title/Lighting%20VI:%20Calculating%20Required%20Lamps%20with%20the%20Lumen%20Method-SI",
        description:
          "The lumen method of lighting calculation determines the average illuminance in a given space. The purpose of this course is to provide an overview of the process to calculate lighting requirements.",
        mode: "Project based",
      },
      {
        title: "Living by Principles Business resiliency through increased circularity",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/776/title/Living%20by%20Principles%20Business%20resiliency%20through%20increased%20circularity",
        description:
          " Ensuring resources are deployed efficiently and maintaining systems and components at their highest levels of utility are well worth the time and effort to achieve sustainable growth. It’s estimated that over $1 trillion could be saved globally, each year, by 2025 with the adoption of circular economic practices. Moving to a circular economic model requires a tremendous shift in thinking, away from a sole focus on the financial implications of business to one that considers long-term sustainability. In this course, we’ll explore the circular economic model in more depth, and its ramifications on business design for the future.",
        mode: "Project based",
      },
      {
        title: "Living in a World of Data Digitization as a Sustainability Enabler",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/707/title/Living%20in%20a%20World%20of%20Data%20Digitization%20as%20a%20Sustainability%20Enabler",
        description:
          "Technology opens new gateways for understanding, managing, and improving connectivity, which helps businesses identify and respond to the critical need to be planet- and profitability-compatible. This course will explore how technologies enable companies to respond to four sustainability megatrends changing the modern business landscape. Participants will also learn how technology is giving organizations the license to set ambitious sustainability goals and make informed decisions to drive the highest planetary and profitability impacts",
        mode: "Project based",
      },
      {
        title: "Living with Finite Resources Strategies for Sustainable Resource Utilization",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/709/title/Living%20with%20Finite%20Resources%20Strategies%20for%20Sustainable%20Resource%20Utilization",
        description:
          "The Earth’s resources are finite, making the importance of developing sustainable ways to operate increasingly urgent. Worldwide, industry is the largest consumer of energy, and therefore also the largest polluter. This course explores the concept of corporate carbon accountability. It explains how leading companies are using solutions like utility-scale renewable energy, clean technologies and efficiency to set and meet aggressive carbon reduction targets in line with leading climate science. It also describes how progressive companies are addressing other natural resource constraints, such as water scarcity. Discuss responsible resource management in terms of the impact of environmental footprint and resource availability Explore the business value of sustainability Identify how energy solutions such as renewables and efficiency drive resource reductions.",
        mode: "Project based",
      },
      {
        title: "Living with Integrity Sustainability as an integral part of business risk mitigation",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/736/title/Living%20with%20Integrity%20Sustainability%20as%20an%20integral%20part%20of%20business%20risk%20mitigation",
        description:
          "Achieving corporate sustainability, perhaps the truest measure of a firm’s success, is part and parcel to planning for business continuity and prosperity over the long term. Sustainability has historically been built on the foundation of the so-called triple bottom line of planet, people, and profit. By attending to these three concerns equally, companies can use sustainability as a foundation to build trust with consumers and other stakeholders. In this course, we’ll explore how companies are using responsibility to drive shared value, and how these practices can positively impact a business’s reputation—and bottom line.",
        mode: "Project based",
      },
      {
        title: "Fan Systems I: Introduction to Fan Performance",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/165/title/Fan",
        description:
          "Fans are machines for moving air and air-borne materials,and are widely used in industrial and commercial applications.  Fans use billions of kilowatt-hours of energy each year.  Fan reliability can be critical – for example, in material handling operations fan failure will often force a process stoppage.  The importance of reliability may cause system designers to compensate for uncertainties by adding capacity to fans.  Unfortunately,fans that are oversized for their service requirements do not operate at their best efficiency points.  Paradoxically Oversizing fan systems creates problems that can increase system operating costs while decreasing fan reliability. In this course, we provide a basic introduction to fans to equip an energy manager to understand the principal characteristics of this equipment.",
        mode: "Project based",
      },
      {
        title: "Fan Systems II: Fan Types",
        link: " https://schneider.efrontlearning.com/catalog/view/course/id/166/title/Fan",
        description:
          " Key impacts that determine which fan type is the most appropriate include technical and nontechnical attributes. Understanding the principles of fan selection can be helpful in correcting poor system performance, especially during retrofit or upgrade opportunities. In this course we will look at the different fan types and the appropriate applications for each fan type.",
        mode: "Project based",
      },
      {
        title: "Fan Systems III: Improving System Efficiency",
        link: " https://schneider.efrontlearning.com/catalog/view/course/id/167/title/Fan",
        description:
          "Fan systems are vital to the operation of many industries and buildings. Fans often serve over a wide range of operating conditions because of changes in ambient conditions, occupancy, and production demands. The importance of fans often causes system designers to be concerned about under-performing systems. Designers tend to compensate for uncertainties by adding capacity. However, peak requirements may only occur for a few days or weeks each year, and normal operating conditions could be well below the design conditions. Although your fan may be the right size some of the time, it may be the wrong size most of the time. An oversized fan operates below its most efficient point and creates problems such as high capital costs, high energy costs, decreased reliability, high system pressures and flow noise. In this course we will discuss the ways that airflow is controlled in fan systems and we will define the main opportunities to improve performance in fan systems. We will also explore common fan system problems.",
        mode: "Project based",
      },
      {
        title: "Fan Systems IV: Improving System Efficiency",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/168/title/Fan",
        description:
          " Problems such as unusually high operating and maintenance costs, poor airflow delivery, surges or noise or wear on the electrical components can be caused by oversized fans, poor system design, poor balancing or leakage, or wasteful airflow control practices. Often, users are only concerned with initial cost, accepting the lowest bid for a component, while ignoring system efficiency. To achieve optimum fan system economics, users should select equipment based on life-cycle economics and operate and maintain the equipment for peak performance. This course helps define opportunities to improve fan system performance by identifying common fan problems. We'll also uncover why a highly efficient fan system is not merely a system with an energy-efficient motor.",
        mode: "Project based",
      },
      {
        title: "Financial Analysis of Energy Efficiency Projects I",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/170/title/Financial",
        description:
          "Rising energy prices, dwindling resources and environmental impacts are headline news for today’s business owners. Energy efficiency projects have been shown to be low risk, high return investments. Financial analysis is key to getting your project approved by decision makers. If your project is presented using the language and terms they recognize, you will be off to a good start. Therefore energy managers require a thorough grasp of how economic analysis is used to evaluate return on investment. This enables you to compare and prioritize projects, and gain management approval. This course stresses the use of simple financial terminology when presenting projects for approval. In addition, we will learn to determine simple return on investment and payback period of a project and construct a cash flow table and obtain the discounted payback, net present value and internal rate of return of a project. We will end with an explanation of lifecycle costing and its importance when attempting to gain project approval.",
        mode: "Project based",
      },
      {
        title: "Financial Analysis of Energy Efficiency Projects II",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/169/title/Financial",
        description:
          "Many country and state governments are providing financial incentives for energy efficiency projects in the form of tax credits. Building the value of these credits into your financial analysis can help you to win approval for your projects. However, our financial analysis is only as good as the data that we put in. There are some common pitfalls that we should take care to avoid. This course helps to illustrate why including elements such as marginal cost and blended rates are essential when calculating savings. We will use Excel to construct cash flow, internal rate of return, net present value, and annual return.",
        mode: "Project based",
      },
      {
        title: "Financial Planning for Physical Infrastructure Assets in US Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/82/title/Financial",
        description:
          "Describe the difference between modular, scalable and Legacy physical infrastructure Solutions * Recognize how modular, scalable physical infrastructure systems have created new options for accounting of physical infrastructure components * Identify differences between real property and personal property * 1) Summarize how this new classification impacts corporate income and government inspection fees * Recognize the importance of implementing an asset management strategy for physical infrastructure equipment. Design improvements of physical infrastructure components have made UPS systems, power distribution systems and air conditioning systems scalable and modular. These technological enhancements have also created an entirely new physical infrastructure asset management opportunity with direct and measurable financial benefit. For many organizations, improper booking of high technology physical infrastructure routinely causes substantial problems in terms of asset values, depreciation and decommissioning. Being well-informed of the accounting treatment of physical infrastructure assets can provide significant opportunities to improve the financial performance of an organization. Effective July 10, 2013 BICSI recognizes this training for the following BICSI ITS Continuing Education Credits (CECs): RCDD=1, RITP=1, DCDC=1, NTS=1, ITS Installer 2=1, ITS Installer 2 Copper=1, ITS Installer 2 Fiber=1, ITS Technician=1, Certified Trainer=1, BICSI ITS CECs=1",
        mode: "Project based",
      },
      {
        title: "Financing and Performance Contracting for Energy Efficiency Projects",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/171/title/Financing",
        description:
          "Everywhere, the economy is tight and banks are becoming more and more cautious with regards to lending.  However, this does not mean that there are no alternative business funding options for you. The purpose of this course is to discuss general financing alternatives, the aspects of performance contracting, along with ways to measure and verify energy savings.",
        mode: "Project based",
      },
      {
        title: "Fuels I: Energy Sources and Trends",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/172/title/Fuels",
        description:
          "List the energy sources chiefly used by buildings and industry * Define primary, secondary and end use energy * Describe renewable and non-renewable energy sources * Summarize predicted trends in fuel consumption * Discuss the advantages and implications of alternate fuels * Evaluate the energy value and cost of fuels. Understanding fuels is fundamental to energy management, since trends in production, supply, and demand all affect pricing and availability, with critical effects on business results. Choosing between alternate fuels requires a sound knowledge of energy values and conversion calculations. In this course we will discuss the current energy sources chiefly used, define the different types of energy, discuss renewable and nonrenewable energy sources, and what the predicted trends are for future fuel consumption.",
        mode: "Project based",
      },
      {
        title: "Fuels II: Energy Value Analysis-SI Version",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/483/title/Fuels",
        description:
          " As we discussed in part one of this series, understanding fuels is fundamental to energy management, since trends in production, supply, and demand all affect pricing and availability, with critical effects on business results. In this course we will look at how choosing between alternate fuels requires a sound knowledge of energy values and conversion calculations. We will also learn about evaluating the energy value and cost of the different costs of available fuels.",
        mode: "Project based",
      },
      {
        title: "Fuels II: Energy Value Analysis-US Version",
        link: " https://schneider.efrontlearning.com/catalog/view/course/id/173/title/Fuels",
        description:
          "As we discussed in part one of this series, understanding fuels is fundamental to energy management, since trends in production, supply, and demand all affect pricing and availability, with critical effects on business results. In this course we will look at how choosing between alternate fuels requires a sound knowledge of energy values and conversion calculations. We will also learn about evaluating the energy value and cost of the different costs of available fuels.",
        mode: "Project based",
      },
      {
        title: "Fundamental Principles of Network Security",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/83/title/Fundamental",
        description:
          "Security incidents are rising at an alarming rate every year. As the complexity of threats increase, soSecurity incidents are rising at an alarming rate every year. As the complexity of threats increases, so do the security measures required to protect networks. Data center operators, network administrators, and other data center professionals need to comprehend the basics of security in order to safely deploy and manage the networks of today. This course will address the fundamentals of secure networking systems, including firewalls, network topology and secure protocols. We will also take a look at best practices and will introduce some of the more critical aspects of securing a network. do the security measures required to protect networks. Data center operators, network administrators, and other data center professionals need to comprehend the basics of security in order to safely deploy and manage the networks of today. This course will address the fundamentals of secure networking systems, including firewalls, network topology and secure protocols. We will also take a look at best practices and will introduce some of the more critical aspects of securing a network.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Availability",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/84/title/Fundamentals",
        description:
          "In our rapidly changing business world, highly available systems and processes are of critical importance and are the foundation upon which successful businesses rely. Having a sound understanding of the factors that lead to high availability, threats to availability, and ways to measure availability is imperative regardless of your business sector. The purpose of this course is to provide you with a solid understanding of availability along with the ability to calculate the cost of downtime.",
        mode: "Project based",
      },
      {
        title: "Fundamentals of Cabling Strategies for Data Centers",
        link: "https://schneider.efrontlearning.com/catalog/view/course/id/85/title/Fundamentals",
        description:
          "From a cost perspective, building and operating a data center represents a significant piece of any Information Technology (IT) budget. The key to the success of any data center is the proper design and implementation of core critical infrastructure components. Cabling infrastructure, in particular, is an important area to consider when designing and managing any data center. The cabling infrastructure encompasses all data cables that are part of the data center, as well as all of the power cables necessary to ensure power to all of the loads. It is important to note that cable trays and cable management devices are critical to the support of IT infrastructure as they help to reduce the likelihood of downtime due to human error and overheating. This course will address the basics of cabling infrastructure and will discuss cabling installation practices, cable management strategies and cable maintenance practices. We will take an in-depth look at both data cabling and power cabling.",
        mode: "Project based",
      },
     
    ],
  },
  /* {
    "school":"Oracle",
    "courses":
     [
      "Administration",
      "High Availability",
      "New Features",
      "Development",
      "Data Warehouse",
      "Security",
      "MySQL Database Administration",
      "MySQL Developer",
      "Java EE and Web Services",
      "Java SE",
      "Helidon",
      "Oracle Big Data Appliance",
      "Oracle Exadata",
      "ZFS Storage Appliance",
      "Oracle Private Cloud Appliance",
      "Oracle Database Appliance",
      "Zero Data Loss Recovery Appliance",
      "Oracle ZFS Storage Appliance",
      "Oracle DIVA",
      "Service Order Management",
      "Analytics",
      "Application Framework",
      "Customer Care and Billing",
      "Customer Self Service",
      "Energy Information Platform",
      "Enterprise Asset Management",
      "Meter Data Management",
      "Mobile Workforce Management",
      "Network Management System",
      "Smart Grid Gateway",
      "Work and Asset Management",
      "Customer Cloud Service Training and Certification",
      "Session Delivery Network (Acme Packet)",
      "Billing and Revenue Management",
      "Business Support Systems - Network Charging and ControlNetwork Charging and Control",
      "Application Integration Architecture (AIA) Communications",
      "Design Studio",
      "Inventory Management",
      "MetaSolv Solution",
      "Order and Service Management",
      "Service Activation",
      "Tekelec (Diameter and SIP Signaling)",
      "Tekelec (Policy Management)",
      "Tekelec (SS7 Signaling)",
      "Unified Communications Suite",
      "SD WAN",
      "BI Enterprise Edition (BI EE)",
      "Essbase",
      "BI Publisher",
      "BI Applications",
      "Identity Manager",
      "Access Manager",
      "Directory Servers",
      "Identity Analytics",
      "Adaptive Access Manager",
      "Entitlements Server",
      "Enterprise Gateway",
      "Identity Federation",
      "Data Integrator (ODI)",
      "GoldenGate",
      "Enterprise Data Quality",
      "Application Development Framework (ADF)",
      "Mobile Application Framework",
      "Forms and Reports",
    ],
  },*/
];