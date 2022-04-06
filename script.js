fetch ('https://api.adviceslip.com/advice')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let advice = (data["slip"]);
        document.getElementById("adnum").innerHTML = advice["id"];
        document.getElementById("quote").innerHTML = advice["advice"];
    })