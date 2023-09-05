function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const today = new Date();
    const birthDateObj = new Date(birthdate);
    const ageInMillis = today - birthDateObj;
    const ageInYears = Math.floor(ageInMillis / (365 * 24 * 60 * 60 * 1000));

    document.getElementById("result").innerText = `Your age is ${ageInYears} years.`;
}
