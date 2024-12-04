# Todo-Node  

A simple to-do list application built using Node.js, MySQL, and Tailwind CSS. This application allows users to manage their tasks effectively with an intuitive user interface and backend.  

## Features  
- Add, update, and delete tasks.  
- Persistent task storage using MySQL.  
- Responsive design using Tailwind CSS.  
- Backend server implemented with Express.js.  

---

## Installation  

### Prerequisites  
- [Node.js](https://nodejs.org/) installed on your system.  
- [MySQL](https://www.mysql.com/) database installed and configured.  
- [Git](https://git-scm.com/) for version control.  

### Steps to Setup  
Clone the repository and navigate to the project directory:  
   ```  
       git clone https://github.com/Abhishek-Verma1802/Todo-Node.git
```
```
       cd Todo-Node
```
```
       npm install
```
```
       npm run build-css
```
``` 
       npm run dev
```

---

### Key Changes in `package.json`  
- The **`dev`** script uses `concurrently` to run `nodemon server.js` and `npm run watch-css` at the same time, making development easier. 

