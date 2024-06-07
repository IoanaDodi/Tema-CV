// document.addEventListener("DOMContentLoaded", (event) => {
//     const form = document.getElementById("emailForm");
    
//     form.addEventListener("submit", function(event) {
//         event.preventDefault(); // Previne trimiterea formularului

//         // Colectează valorile din formular
//         const fname = document.getElementById("fname").value;
//         const lname = document.getElementById("lname").value;
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const gender = document.getElementById("gender").value;
//         const country = document.getElementById("country").value;

//         // Printează în consola valorile formularului
//         console.log("First name:", fname);
//         console.log("Last name:", lname);
//         console.log("Email:", email);
//         console.log("Password:", password);
//         console.log("Gender:", gender);
//         console.log("Country:", country);

//         // Afișează mesajul de tip alert
//         alert("Un email la adresa ${email} a fost trimis. Va multumesc");
//     });
// });
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('emailForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne trimiterea formularului

        // Colectează valorile din formular
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;
        const country = document.getElementById('country').value;

        // Printează în consola valorile formularului
        console.log('First name:', fname);
        console.log('Last name:', lname);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Gender:', gender);
        console.log('Country:', country);

        // Afișează mesajul de tip alert cu adresa de email adăugată
        alert(`An email was sent at: ${email} Thank you!` );
    });
});