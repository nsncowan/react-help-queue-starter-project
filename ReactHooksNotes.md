

# W7 L2
In this course section, we'll be focusing on using a purely functional approach to develop React components instead of class components. To achieve this, we'll utilize special functions called hooks. Hooks are functions that allow us to access React state and lifecycle features from function components, removing the need for class components.

Hooks were introduced in React version 16.8 to address two main issues:
1. How to use React state and lifecycle features in function components without converting them into class components.
2. Is there a simpler way to reuse stateful logic in multiple places?

Hooks provide a solution to these problems. In this section of the course, we will specifically learn about the `useState` hook. In the following section, we'll explore the `useEffect`, `useReducer`, and `useContext` hooks.

Let's start by looking at an example of a simple counter app to understand how to use the `useState` hook. You don't need to code along with this lesson, but you're welcome to do so if you want.

To begin, create a new React app using the command `npx create-react-app intro-to-hooks` in your terminal. Replace the code in the `src/App.js` file with the provided code. This sets up a basic app with a single component called `Counter`. The styling of the app is defined using the `App` class, which centers the content on the page.

Next, create a file named `Counter.js` in the `src` folder and copy the provided code into it. This file contains a function component called `Counter` and imports the `useState` hook from React.

In the `Counter` component, we introduce the `useState` hook by declaring a state variable and its corresponding setter function using array destructuring. The initial value of the state variable is set to 0.

We then use the state variable in the JSX code to display the current value of the counter and create a button that increments the counter when clicked.

By just a few lines of code, we have implemented local state in a function component using the `useState` hook.

To compare the functional component approach with a class component, an example of the same counter app implemented as a class component is provided. It uses the `this.state` object to store the counter value and the `this.setState` method to update it.

It's important to note that the functional component approach with the `useState` hook provides a simpler and more concise way to manage state compared to class components.

In addition to managing a single state variable, you can also manage multiple state variables in a function component using separate instances of `useState`. It is recommended to create separate `useState` instances for each state variable to improve readability and adhere to the principle of separation of concerns.

The lesson concludes by mentioning that the `useState` hook can accept any data type as an initial value, including objects. However, if multiple state variables are used in an object, it is necessary to merge the previous state with the new state when updating it.

The lesson also hints at upcoming topics, such as the `useEffect` hook for running side effects in function components, best practices for using hooks, and updating an application to use hooks.

If you want to explore the `useState` hook further, you can refer to the official React documentation on the `useState` hook for more details.

# W7 L6 - Introduction to BaaS, Firebase, and Firestore
Sure! Here's an ADHD-friendly breakdown of the lesson:

- Firebase is a cloud-based NoSQL database solution offered by Google. It's a popular and well-maintained backend data service provider that works well with React applications.

- Firebase is a realtime, cloud-based storage provider. Cloud-based means it exists online, and realtime means we can see database changes immediately in our online dashboard.

- Firebase is also a Backend-as-a-Service (BaaS), which means it's an online service that manages and provides part of an application's backend, like a database. BaaS providers often offer more than just cloud storage, including features like analytics, authentication, performance monitoring, messaging, hosting, and more.

- Other examples of BaaS solutions include Amazon Web Services (AWS), Auth0, and Backendless. These services offer various features such as authentication, database, analytics, file storage, and hosting.

- Using a BaaS has several benefits:
  - Decreased development time: It saves time and cost by using an existing, tested tool instead of writing and testing the code ourselves.
  - Smaller learning curve: It's easier to learn and use a BaaS compared to building the same features from scratch.
  - Scalability: BaaS providers like Firebase and AWS are designed to handle high traffic, which is beneficial if an application becomes popular.
  - Multiple features in one: BaaS providers often offer multiple services, making it easier to integrate additional features from the same service.

- However, there are some drawbacks to using a BaaS:
  - Lack of control: Customizations are limited to what the service allows, and codebase is vulnerable to changes and bugs in the BaaS.
  - Cost: While some BaaS tools are free for small applications, there may be charges for premium tools, increased traffic, and other services.
  - Stability: There is a risk of losing the backend if a BaaS provider shuts down, as happened with a service called Parse.

- Firebase offers two realtime database solutions: Firebase Realtime Database and Firestore. Firestore is recommended for most users as it provides easier querying of the database compared to the Firebase Realtime Database.

In summary, Firebase is a popular BaaS provider with a cloud-based NoSQL database solution called Firestore, which is recommended for its easier querying capabilities. Using a BaaS like Firebase can decrease development time, have a smaller learning curve, and offer scalability, but it also has drawbacks like limited control, potential costs, and stability concerns. Learning about Firebase and BaaS is valuable for a successful tech career, understanding NoSQL databases, and adding to a developer's resume.

# W7 L7 - Intro to NoSQL
In this lesson, we will explore the differences between SQL and NoSQL databases and the advantages of NoSQL. We'll also look at how NoSQL data is stored.

1. SQL vs. NoSQL Databases:
   - SQL databases are relational and use a structured query language. They have a fixed schema and are suitable for complex queries. They follow the ACID (Atomicity, Consistency, Isolation, Durability) approach.
   - NoSQL databases are non-relational and do not use a structured query language. They have no fixed schema, allowing more flexibility in storing data. They are not designed for complex queries but are easy to distribute. They follow the BASE (Basically Available, Soft State, Eventually Consistent) approach.

2. Flexibility of NoSQL:
   - NoSQL databases allow storing data without defining a schema ahead of time.
   - They can store different types of data with different fields.
   - Example: In a NoSQL database, you can have a field that tracks the number of available seats in a theater, and when all seats are sold, the field can be updated to "out of stock." NoSQL databases provide the flexibility to track different data types within the same field.

3. Examples of Data Structure in NoSQL:
   - NoSQL databases store data in various formats, including key-value pairs, graphs, wide columns, and documents.
   - Key-value pairs: Used in some NoSQL databases.
   - Documents: Firestore, a NoSQL database, structures data into documents and organizes them into collections. Each document has fields that map to values.
   - Example: In Firestore, a collection called "friends" can have documents representing each friend. Each friend's document can have different fields, such as phone, address, dogs, partner, and kids.

4. NoSQL Challenges:
   - NoSQL databases are not suitable for complex queries that involve relationships between records.
   - Establishing relationships between different records is not a strength of NoSQL.
   - NoSQL databases use syntax specific to the provider being used, such as Firestore functions.

5. Distribution and Scalability:
   - NoSQL databases are designed to be distributed across multiple locations, providing scalability and improved availability.
   - SQL databases are usually set up in one location, ensuring high consistency but potentially leading to downtime during failures.

6. How NoSQL Data is Stored:
   - SQL databases store data in tables, while NoSQL databases have different storage formats.
   - Firebase Realtime Database (NoSQL) uses a JSON tree structure with key-value pairs.
   - Firestore Database (NoSQL) structures data into documents organized within collections.
   - Firestore collections can contain subcollections, and documents support various data types.

7. Focus on CAP Theorem:
   - The next lesson will cover the CAP (Consistency, Availability, Partition tolerance) theorem, which addresses the tradeoffs in using distributed NoSQL databases.

By understanding the differences between SQL and NoSQL, the advantages of NoSQL's flexibility, and how NoSQL data is stored, you can gain a better grasp of NoSQL databases and their applicability in various scenarios.

# W7 L8 - the CAP theorem and BASE
Sure! Here's an ADHD-friendly breakdown of the lesson:

- The lesson discusses the CAP theorem, which is a concept developed by computer scientist Eric Brewer. It explains why NoSQL databases are good for big data and how they can scale. NoSQL databases are designed to work across multiple locations, which is called being distributed.
- The CAP theorem says that a database system can have at most two out of three principles: *consistency*, *availability*, and *partition tolerance*.
- Consistency means that all users see the same data at the same time. Availability means that the data is always accessible. Partition tolerance means that the system can work across multiple servers.
- NoSQL databases are good for big data because they can be distributed across many servers around the world. This means that if one server goes down, there are others to take its place. This is called partition tolerance.
- SQL databases, on the other hand, are designed to work on a single server. They scale vertically, while NoSQL databases scale horizontally.
- If a database system has partition tolerance, it can't have both consistency and availability at the same time. There is a compromise between the two.
- An example is given where a company has database servers in Beijing, New York, and London. If a user in Shanghai updates their account, the update needs to be sent to a database. But which database should it be sent to? If it's sent to the server in Beijing, it will be inconsistent with the servers in New York and London. If it waits for the other servers, it will be consistent but not immediately available.
- Most distributed systems prioritize availability, so they compromise on consistency. The goal is eventual consistency, which means that the data will be consistent across all servers eventually.
- Another concept called BASE, also developed by Eric Brewer, describes how NoSQL databases achieve consistency. BASE stands for "basically available, have a soft state, and eventually consistent."
- Basically available means that the data is available most of the time, but there may be downtime and the data may not be immediately available everywhere.
- Soft state means that the database can update even if the data hasn't been written to it directly.
- Eventually consistent means that the data will become consistent across all servers eventually.
- Understanding the CAP theorem and BASE is important for understanding how distributed systems work.
- Eric Brewer, the developer of these concepts, is a vice-president at Google, and these concepts are widely used in large software companies.

I hope this breakdown helps you grasp the main points of the lesson more easily! Let me know if you have any further questions.

