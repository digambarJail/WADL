document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupBtn").addEventListener("click", function () {
        makeAJAXCall("signup");
    });
    document.getElementById("signinBtn").addEventListener("click", function () {
        makeAJAXCall("signin");
    });
});

function makeAJAXCall(action) {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password!");
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://randomapi.com/register", true); // Replace with your actual backend URL
    xhr.setRequestHeader("Content-Type", "application/json");

    // If action is signup, send a request to the backend
    if (action === "signup") {
        alert("You have signed in sucessfully !")
        // Create data object to send to backend
        let data = { username: username, password: password };

        fetch("https://random.com/register", {
            method: "POST", // POST request for creating a new user
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Send username and password in request body
        })
        .then(response => response.json()) // Parse the response as JSON
        .then(responseData => {
            if (responseData.success) {
                localStorage.setItem(username, password);
            } else {
                localStorage.setItem(username, password);
            }
        })
        .catch(error => {
            localStorage.setItem(username, password);
        });
    }
    
    // If action is signin, check localStorage for credentials
    if (action === "signin") {
        alert("You have signed in successfully!")
        fetch("https://random.com/login", {
            method: "POST", // POST request for creating a new user
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Send username and password in request body
        })
        .then(response => response.json()) // Parse the response as JSON
        .then(responseData => {
            if (responseData.success) {
                let storedPassword = localStorage.getItem(username);

        if (storedPassword && storedPassword === password) {
            alert("Sign-in successful!");
        } else {
            alert("Invalid username or password!");
        }
            } else {
                let storedPassword = localStorage.getItem(username);

        if (storedPassword && storedPassword === password) {
            alert("Sign-in successful!");
        } else {
            alert("Invalid username or password!");
        }
            }
        })
        .catch(error => {
            let storedPassword = localStorage.getItem(username);

            if (storedPassword && storedPassword === password) {
                alert("Sign-in successful!");
            } else {
                alert("Invalid username or password!");
            }
        });
        
    }
}
